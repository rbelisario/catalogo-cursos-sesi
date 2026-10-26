import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  listarCursos,
  listarCategorias,
  listarModalidades,
  listarStatusCursos,
} from "../../api/cursosApi";

import type { Curso, FiltrosCursos, OpcaoFiltro } from "../../types/curso";

import { obterEstiloCategoria } from "../../constants/categoriaStyles";

import {
  PageSection,
  PageContainer,
  PageTitle,
  PageDescription,
  Filters,
  FilterActions,
  ApplyButton,
  ResultsHeader,
  CoursesGrid,
  CourseCard,
  StateContainer,
} from "./CatalogoCursos.styles";

import Footer from "../../components/Footer/Footer";

function CatalogoCursos() {
  const navigate = useNavigate();

  const [cursos, setCursos] = useState<Curso[]>([]);
  const [categorias, setCategorias] = useState<OpcaoFiltro[]>([]);
  const [modalidades, setModalidades] = useState<OpcaoFiltro[]>([]);
  const [statusCursos, setStatusCursos] = useState<OpcaoFiltro[]>([]);

  const [nome, setNome] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [modalidadeId, setModalidadeId] = useState("");
  const [statusId, setStatusId] = useState("");

  const [carregandoOpcoes, setCarregandoOpcoes] = useState(true);
  const [carregandoCursos, setCarregandoCursos] = useState(true);
  const [erro, setErro] = useState(false);

  const [filtrosAplicados, setFiltrosAplicados] = useState<FiltrosCursos>({});

  useEffect(() => {
    let ativo = true;

    async function carregarOpcoes() {
      try {
        const [categoriasApi, modalidadesApi, statusApi] = await Promise.all([
          listarCategorias(),
          listarModalidades(),
          listarStatusCursos(),
        ]);

        if (!ativo) return;

        setCategorias(categoriasApi);
        setModalidades(modalidadesApi);
        setStatusCursos(statusApi);
      } catch {
        if (ativo) setErro(true);
      } finally {
        if (ativo) setCarregandoOpcoes(false);
      }
    }

    void carregarOpcoes();

    return () => {
      ativo = false;
    };
  }, []);

  useEffect(() => {
    let ativo = true;

    async function carregarCursos() {
      setCarregandoCursos(true);
      setErro(false);

      try {
        const resultado = await listarCursos(filtrosAplicados);

        if (ativo) setCursos(resultado);
      } catch {
        if (ativo) setErro(true);
      } finally {
        if (ativo) setCarregandoCursos(false);
      }
    }

    void carregarCursos();

    return () => {
      ativo = false;
    };
  }, [filtrosAplicados]);

  function aplicarFiltros() {
    setFiltrosAplicados({
      nome: nome.trim() || undefined,
      categoriaId: categoriaId ? Number(categoriaId) : undefined,
      modalidadeId: modalidadeId ? Number(modalidadeId) : undefined,
      statusId: statusId ? Number(statusId) : undefined,
    });
  }

  function limparFiltros() {
    setNome("");
    setCategoriaId("");
    setModalidadeId("");
    setStatusId("");
    setFiltrosAplicados({});
  }

  function alterarSelect(
    event: SelectChangeEvent<string>,
    setter: (value: string) => void,
  ) {
    setter(event.target.value);
  }

  return (
    <>
      <PageSection>
        <PageContainer>
          <PageTitle variant="h1">Catálogo de cursos</PageTitle>

          <PageDescription>
            Encontre o curso ideal para desenvolver suas habilidades e
            impulsionar sua carreira na indústria.
          </PageDescription>

          <Box
            component="form"
            onSubmit={(event) => {
              event.preventDefault();
              aplicarFiltros();
            }}
          >
            <Filters>
              <TextField
                placeholder="Buscar curso"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: {
                    "aria-label": "Buscar curso",
                  },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 56,
                  },
                  "& .MuiInputBase-input": {
                    padding: "16.5px 14px",
                  },
                }}
              />

              <FormControl fullWidth>
                <InputLabel id="categoria-label">Categoria</InputLabel>
                <Select
                  labelId="categoria-label"
                  label="Categoria"
                  value={categoriaId}
                  onChange={(event) => alterarSelect(event, setCategoriaId)}
                  disabled={carregandoOpcoes}
                >
                  <MenuItem value="">Todas as categorias</MenuItem>
                  {categorias.map((categoria) => (
                    <MenuItem key={categoria.id} value={String(categoria.id)}>
                      {categoria.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="modalidade-label">Modalidade</InputLabel>
                <Select
                  labelId="modalidade-label"
                  label="Modalidade"
                  value={modalidadeId}
                  onChange={(event) => alterarSelect(event, setModalidadeId)}
                  disabled={carregandoOpcoes}
                >
                  <MenuItem value="">Todas as modalidades</MenuItem>
                  {modalidades.map((modalidade) => (
                    <MenuItem key={modalidade.id} value={String(modalidade.id)}>
                      {modalidade.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  label="Status"
                  value={statusId}
                  onChange={(event) => alterarSelect(event, setStatusId)}
                  disabled={carregandoOpcoes}
                >
                  <MenuItem value="">Todos os status</MenuItem>
                  {statusCursos.map((status) => (
                    <MenuItem key={status.id} value={String(status.id)}>
                      {status.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Filters>

            <FilterActions>
              <ApplyButton type="submit" variant="contained">
                Filtrar cursos
              </ApplyButton>

              <ApplyButton
                type="button"
                variant="text"
                color="inherit"
                onClick={limparFiltros}
              >
                Limpar filtros
              </ApplyButton>
            </FilterActions>
          </Box>

          <ResultsHeader>
            <Typography variant="h6" component="p">
              {carregandoCursos
                ? "Buscando cursos..."
                : `${cursos.length} ${cursos.length === 1 ? "curso encontrado" : "cursos encontrados"}`}
            </Typography>
          </ResultsHeader>

          {erro && (
            <StateContainer role="alert">
              <Typography>
                Não foi possível carregar os cursos. Verifique se a API está
                funcionando e tente novamente.
              </Typography>

              <ApplyButton variant="contained" onClick={aplicarFiltros}>
                Tentar novamente
              </ApplyButton>
            </StateContainer>
          )}

          {carregandoCursos && !erro && (
            <StateContainer role="status" aria-label="Carregando cursos">
              <CircularProgress sx={{ color: "#A40018" }} />
              <Typography color="text.secondary">
                Carregando cursos...
              </Typography>
            </StateContainer>
          )}

          {!carregandoCursos && !erro && cursos.length === 0 && (
            <StateContainer>
              <Typography variant="h6">Nenhum curso encontrado</Typography>
              <Typography color="text.secondary">
                Experimente alterar os filtros da busca.
              </Typography>
            </StateContainer>
          )}

          {!carregandoCursos && !erro && cursos.length > 0 && (
            <CoursesGrid>
              {cursos.map((curso) => {
                const estiloCategoria = obterEstiloCategoria(curso.categoria);

                return (
                  <CourseCard
                    key={curso.id}
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
                    {curso.imagemUrl && (
                      <Box
                        component="img"
                        className="course-image"
                        src={curso.imagemUrl}
                        alt=""
                        aria-hidden="true"
                      />
                    )}

                    <Chip
                      className="course-category"
                      size="small"
                      label={curso.categoria}
                      icon={
                        estiloCategoria.icone ? (
                          <Box
                            component="img"
                            src={`/${estiloCategoria.icone.replace(/^\/+/, "")}`}
                            alt=""
                            aria-hidden="true"
                            sx={{ width: 16, height: 16 }}
                          />
                        ) : undefined
                      }
                      sx={{
                        backgroundColor: estiloCategoria.corFundo,
                        color: estiloCategoria.corTexto,
                      }}
                    />

                    <Box className="course-content">
                      <Typography variant="h5" className="course-title">
                        {curso.nomeBreve || curso.nomeCompleto}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="course-description"
                      >
                        {curso.descricao}
                      </Typography>
                    </Box>
                  </CourseCard>
                );
              })}
            </CoursesGrid>
          )}
        </PageContainer>
      </PageSection>
      <Footer />
    </>
  );
}

export default CatalogoCursos;
