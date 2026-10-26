import {
  Section,
  SectionContainer,
  Intro,
  SectionTitle,
  SectionDescription,
  Content,
  Metrics,
  MetricRow,
  MetricValue,
  MetricLabel,
  Benefits,
  Benefit,
  BenefitTitle,
  BenefitDescription,
} from "./ImpactoTransformador.styles";

const indicadores = [
  { valor: "25.000+", descricao: "Profissionais Capacitados" },
  { valor: "500+", descricao: "Empresas parceiras" },
  { valor: "4.8/5", descricao: "Avaliação média" },
  { valor: "2.5M+", descricao: "Horas de capacitação" },
];

const beneficios = [
  {
    titulo: "Certificação SESI",
    descricao:
      "Cursos com a melhor certificação do mercado industrial reconhecidos pelo SESI.",
    icone: "/icons/beneficios/01-certificacao-red.svg",
  },
  {
    titulo: "Professores especialistas",
    descricao:
      "Contamos com professores reconhecidos por sua excelência no mercado.",
    icone: "/icons/beneficios/02-professores-red.svg",
  },
  {
    titulo: "Suporte contínuo",
    descricao:
      "Você não está sozinho! Acompanhamento online durante todo o curso.",
    icone: "/icons/beneficios/03-suporte-red.svg",
  },
];

function ImpactoTransformador() {
  return (
    <Section aria-labelledby="impacto-transformador-title">
      <SectionContainer>
        <Intro>
          <SectionTitle id="impacto-transformador-title" variant="h2">
            Impacto transformador
          </SectionTitle>

          <SectionDescription>
            Resultados que demonstram o sucesso da nossa metodologia de
            capacitação contínua para a indústria
          </SectionDescription>
        </Intro>

        <Content>
          <Metrics>
            {indicadores.map((indicador) => (
              <MetricRow key={indicador.descricao}>
                <MetricValue>{indicador.valor}</MetricValue>
                <MetricLabel>{indicador.descricao}</MetricLabel>
              </MetricRow>
            ))}
          </Metrics>

          <Benefits>
            {beneficios.map((beneficio) => (
              <Benefit key={beneficio.titulo}>
                <img src={beneficio.icone} alt="" aria-hidden="true" />

                <BenefitTitle>{beneficio.titulo}</BenefitTitle>

                <BenefitDescription>{beneficio.descricao}</BenefitDescription>
              </Benefit>
            ))}
          </Benefits>
        </Content>
      </SectionContainer>
    </Section>
  );
}

export default ImpactoTransformador;
