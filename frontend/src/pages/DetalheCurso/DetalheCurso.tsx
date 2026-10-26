import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { obterCurso } from "../../api/cursosApi";
import Footer from "../../components/Footer/Footer";
import type { CursoDetalhe } from "../../types/curso";

import {
  PageSection,
  PageContainer,
  BackButton,
  CourseHero,
  CourseInfo,
  CategoryLabel,
  CourseTitle,
  CourseDescription,
  CourseMetadata,
  PrimaryButton,
  CourseImageContainer,
  CourseImage,
  SectionTitle,
  BenefitsSection,
  BenefitItem,
  CourseDetailsGrid,
  StickyEnrollmentBar,
  TestimonialsSection,
  ContactSection,
} from "./DetalheCurso.styles";

const beneficios = [
  {
    titulo: "Certificação SESI",
    descricao: "Cursos com certificação reconhecida pelo mercado industrial.",
    Icone: WorkspacePremiumOutlinedIcon,
  },
  {
    titulo: "Professores especialistas",
    descricao:
      "Conteúdo desenvolvido para apoiar seu crescimento profissional.",
    Icone: SchoolOutlinedIcon,
  },
  {
    titulo: "Suporte contínuo",
    descricao: "Conteúdo e informações para acompanhar sua aprendizagem.",
    Icone: SupportAgentOutlinedIcon,
  },
  {
    titulo: "Flexibilidade",
    descricao: "Consulte a modalidade e a carga horária deste curso.",
    Icone: AccessTimeOutlinedIcon,
  },
];

function DetalheCurso() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [curso, setCurso] = useState<CursoDetalhe | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [barraVisivel, setBarraVisivel] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function carregarCurso() {
      if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0) {
        setErro("Curso não encontrado.");
        setCarregando(false);
        return;
      }

      try {
        setCarregando(true);
        setErro("");

        const dados = await obterCurso(Number(id));

        if (ativo) {
          setCurso(dados);
        }
      } catch {
        if (ativo) {
          setErro("Não foi possível carregar os dados do curso.");
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregarCurso();

    return () => {
      ativo = false;
    };
  }, [id]);

  if (carregando) {
    return (
      <PageSection>
        <PageContainer>
          <Box
            sx={{
              minHeight: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <CircularProgress sx={{ color: "#A40018" }} />
            <Typography>Carregando curso...</Typography>
          </Box>
        </PageContainer>
      </PageSection>
    );
  }

  if (erro || !curso) {
    return (
      <PageSection>
        <PageContainer>
          <Typography variant="h5" component="h1" gutterBottom>
            {erro || "Curso não encontrado."}
          </Typography>

          <BackButton
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/cursos")}
          >
            Voltar ao catálogo
          </BackButton>
        </PageContainer>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <PageContainer>
        <BackButton
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/cursos")}
        >
          Voltar ao catálogo
        </BackButton>

        {/* Cabeçalho do curso */}
        <CourseHero>
          <CourseInfo>
            <CategoryLabel>{curso.categoria}</CategoryLabel>

            <CourseTitle sx={{ component: "h1" }}>
              {curso.nomeCompleto}
            </CourseTitle>

            <CourseDescription>{curso.descricao}</CourseDescription>

            <CourseMetadata>
              <Chip label={curso.modalidade} variant="outlined" />
              <Chip label={curso.status} variant="outlined" />
              <Chip
                label={`${curso.cargaHorariaHoras} horas`}
                variant="outlined"
              />
            </CourseMetadata>

            <PrimaryButton
              variant="contained"
              onClick={() =>
                document.getElementById("conteudo-curso")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              endIcon={<ArrowForwardIcon />}
            >
              Conhecer o conteúdo
            </PrimaryButton>
          </CourseInfo>

          <CourseImageContainer>
            {curso.imagemUrl ? (
              <CourseImage
                src={curso.imagemUrl}
                alt={`Imagem ilustrativa do curso ${curso.nomeCompleto}`}
              />
            ) : (
              <Box
                sx={{
                  minHeight: "inherit",
                  display: "grid",
                  placeItems: "center",
                  p: 3,
                }}
              >
                <Typography color="text.secondary">
                  Imagem do curso indisponível
                </Typography>
              </Box>
            )}

            <Box
              aria-label="Vídeo do curso não disponível nesta versão"
              sx={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.88)",
                  color: "#111",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 46 }} />
              </Box>
            </Box>
          </CourseImageContainer>
        </CourseHero>

        {/* Benefícios */}
        <BenefitsSection>
          {beneficios.map(({ titulo, descricao, Icone }) => (
            <BenefitItem key={titulo}>
              <Box className="benefit-icon">
                <Icone sx={{ fontSize: 30 }} />
              </Box>

              <Typography className="benefit-title">{titulo}</Typography>

              <Typography className="benefit-description" variant="body2">
                {descricao}
              </Typography>
            </BenefitItem>
          ))}
        </BenefitsSection>

        {/* Sobre o curso e conteúdo */}
        <CourseDetailsGrid id="conteudo-curso">
          <Box>
            <SectionTitle sx={{ component: "h2" }}>Sobre o curso</SectionTitle>

            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.65 }}>
              {curso.descricao}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Chip
                label={`Carga horária: ${curso.cargaHorariaHoras} horas`}
                sx={{ mr: 1, mb: 1 }}
              />
              <Chip label={`Modalidade: ${curso.modalidade}`} sx={{ mb: 1 }} />
            </Box>
          </Box>

          <Box>
            <Accordion
              disableGutters
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid #D8D8D8",
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <SectionTitle
                  sx={{ component: "h3", mb: 0, fontSize: "1.5rem" }}
                >
                  Módulos
                </SectionTitle>
              </AccordionSummary>

              <AccordionDetails>
                {curso.modulos.length === 0 ? (
                  <Typography color="text.secondary">
                    O conteúdo programático ainda não está disponível.
                  </Typography>
                ) : (
                  curso.modulos.map((modulo, index) => (
                    <Accordion
                      key={modulo.id}
                      disableGutters
                      sx={{
                        boxShadow: "none",
                        border: "1px solid #E0E0E0",
                        mb: 1,
                        "&::before": { display: "none" },
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 600 }}>
                          Módulo {index + 1}: {modulo.nome}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        {modulo.descricao && (
                          <Typography sx={{ mb: 2 }}>
                            {modulo.descricao}
                          </Typography>
                        )}

                        {modulo.aulas.map((aula) => (
                          <Box
                            key={aula.id}
                            sx={{
                              py: 1.5,
                              borderBottom: "1px solid #EEEEEE",
                            }}
                          >
                            <Typography sx={{ fontWeight: 600 }}>
                              {aula.ordem}. {aula.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {aula.descricao}
                            </Typography>
                          </Box>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))
                )}
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid #D8D8D8",
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <SectionTitle
                  sx={{ component: "h3", mb: 0, fontSize: "1.5rem" }}
                >
                  Aulas online e avaliações
                </SectionTitle>
              </AccordionSummary>

              <AccordionDetails>
                <Typography color="text.secondary">
                  Consulte os módulos e as aulas disponíveis acima. Informações
                  específicas sobre avaliações ainda não estão disponíveis.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid #D8D8D8",
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <SectionTitle
                  sx={{ component: "h3", mb: 0, fontSize: "1.5rem" }}
                >
                  Dúvidas frequentes
                </SectionTitle>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ mb: 1, fontWeight: 600 }}>
                  Como consulto o conteúdo do curso?
                </Typography>
                <Typography color="text.secondary">
                  Expanda a seção de módulos para visualizar as aulas
                  cadastradas para este curso.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </CourseDetailsGrid>
      </PageContainer>

      {/* Depoimentos demonstrativos */}
      <TestimonialsSection>
        <PageContainer>
          <Typography variant="overline">DEPOIMENTOS</Typography>
          <SectionTitle sx={{ component: "h2", fontSize: "2.5rem", mb: 4 }}>
            Quem fez recomenda
          </SectionTitle>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(4, minmax(0, 1fr))",
              },
              gap: 2,
            }}
          >
            {[
              "Uma experiência de aprendizado que amplia conhecimentos e habilidades.",
              "O conteúdo organizado facilita acompanhar cada etapa do aprendizado.",
              "Os módulos ajudam a estruturar o estudo de maneira clara.",
              "Uma oportunidade de desenvolver conhecimentos para a indústria.",
            ].map((depoimento, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  p: 3,
                  minHeight: 190,
                }}
              >
                <Typography sx={{ lineHeight: 1.6 }}>“{depoimento}”</Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mt: 3 }}
                >
                  Exemplo ilustrativo
                </Typography>
              </Box>
            ))}
          </Box>
        </PageContainer>
      </TestimonialsSection>

      {/* Chamada para contato */}
      <ContactSection>
        <Typography variant="overline">
          PRECISA DE AJUDA PARA DECIDIR?
        </Typography>
        <Typography variant="h2" component="h2">
          Fale com a gente
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          href="mailto:contato@sesindustria.com.br"
          sx={{
            bgcolor: "#FFFFFF",
            color: "#111111",
            textTransform: "none",
            px: 3,
            py: 1.5,
            "&:hover": { bgcolor: "#F2F2F2" },
          }}
        >
          Mandar uma mensagem
        </Button>
      </ContactSection>

      {/* Barra fixa de matrícula — ação indisponível nesta versão */}
      {barraVisivel && (
        <StickyEnrollmentBar>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              fontWeight: 500,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {curso.nomeCompleto}
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setBarraVisivel(false)}
            sx={{
              flexShrink: 0,
              bgcolor: "#FFFFFF",
              color: "#111111",
              textTransform: "none",
              px: { xs: 1.5, sm: 2.5 },
              "&:hover": { bgcolor: "#F0F0F0" },
            }}
          >
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              Matricule-se
            </Box>
            <Box
              component="span"
              sx={{ display: { xs: "inline", sm: "none" } }}
            >
              Matricule-se
            </Box>
          </Button>
        </StickyEnrollmentBar>
      )}

      {/* Rodapé institucional */}
      <Footer />
    </PageSection>
  );
}

export default DetalheCurso;
