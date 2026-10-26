import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Chip, Typography } from "@mui/material";

import {
  Section,
  SectionHeader,
  CourseCard,
  CourseImage,
  CourseCategory,
  CourseTitle,
  CourseDescription,
  CarouselContainer,
  LoadingContainer,
  LoadingSpinner,
} from "./PrincipaisCursos.styles";
import Carousel from "../Carousel/Carousel";
import type { Curso } from "../../types/curso";
import { listarCursos } from "../../api/cursosApi";
import { obterEstiloCategoria } from "../../constants/categoriaStyles";

function PrincipaisCursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let ativo = true;

    async function carregarCursos() {
      try {
        const resultado = await listarCursos();
        if (ativo) setCursos(resultado);
      } catch {
        if (ativo) setErro(true);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    void carregarCursos();

    return () => {
      ativo = false;
    };
  }, []);

  return (
    <Section aria-labelledby="principais-cursos-title">
      <SectionHeader>
        <Typography id="principais-cursos-title" variant="h2">
          Principais cursos
        </Typography>
      </SectionHeader>

      {carregando && (
        <LoadingContainer role="status" aria-label="Carregando cursos">
          <LoadingSpinner size={36} thickness={4} />
          <Typography variant="body2">Carregando cursos...</Typography>
        </LoadingContainer>
      )}

      {erro && (
        <Typography role="alert">
          Não foi possível carregar os cursos. Tente novamente mais tarde.
        </Typography>
      )}

      {!carregando && !erro && cursos.length === 0 && (
        <Typography>Nenhum curso disponível no momento.</Typography>
      )}

      {!carregando && !erro && cursos.length > 0 && (
        <CarouselContainer>
          <Carousel
            ariaLabel="Principais cursos"
            slideWidth={296}
            spaceBetween={16}
            footerLeft={
              <Button
                component="a"
                href="/cursos"
                variant="outlined"
                color="inherit"
              >
                Ver todos os cursos
              </Button>
            }
          >
            {cursos.map((curso) => {
              const estiloCategoria = obterEstiloCategoria(curso.categoria);

              return (
                <CourseCard
                  key={curso.id}
                  data-carousel-item
                  role="link"
                  tabIndex={0}
                  aria-label={`Ver detalhes do curso ${curso.nomeCompleto}`}
                  onClick={() => navigate(`/cursos/${curso.id}`)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      navigate(`/cursos/${curso.id}`);
                    }
                  }}
                >
                  <CourseImage
                    role="img"
                    aria-label={`Imagem do curso ${curso.nomeCompleto}`}
                    style={{
                      backgroundImage: curso.imagemUrl
                        ? `url("${curso.imagemUrl}")`
                        : "none",
                    }}
                  />

                  <CourseCategory>
                    <Chip
                      icon={
                        estiloCategoria.icone ? (
                          <img
                            src={estiloCategoria.icone}
                            alt=""
                            aria-hidden="true"
                            width={16}
                            height={16}
                          />
                        ) : undefined
                      }
                      label={curso.categoria}
                      size="small"
                      sx={{
                        backgroundColor: estiloCategoria.corFundo,
                        color: estiloCategoria.corTexto,
                      }}
                    />
                  </CourseCategory>

                  <Box className="course-card__content">
                    <CourseTitle variant="h3">
                      {curso.nomeBreve || curso.nomeCompleto}
                    </CourseTitle>

                    <CourseDescription>{curso.descricao}</CourseDescription>
                  </Box>
                </CourseCard>
              );
            })}
          </Carousel>
        </CarouselContainer>
      )}
    </Section>
  );
}

export default PrincipaisCursos;
