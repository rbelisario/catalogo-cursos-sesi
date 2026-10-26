import { Box, Typography } from "@mui/material";

import Carousel from "../Carousel/Carousel";

import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorName,
  AuthorRole,
  Rating,
} from "./Depoimentos.styles";

const depoimentos = [
  {
    texto:
      "A experiência do curso foi incrível! As aulas foram muito bem estruturadas e o cronograma foi cuidadosamente planejado, facilitando muito o aprendizado.",
    nome: "Lucas Pereira",
    cargo: "Analista na Empresa X",
  },
  {
    texto:
      "Concluir o curso foi uma jornada enriquecedora. As aulas eram dinâmicas e o horário foi organizado para maximizar nosso tempo de estudo.",
    nome: "Mariana Costa",
    cargo: "Gestora na Empresa X",
  },
  {
    texto:
      "O curso superou minhas expectativas! As aulas eram bem elaboradas e o planejamento do horário ajudou a manter o foco e a produtividade.",
    nome: "Thiago Almeida",
    cargo: "Técnico na Empresa X",
  },
  {
    texto:
      "Finalizar o curso foi uma experiência motivadora. As aulas foram muito bem preparadas e o cronograma foi ideal para o aprendizado.",
    nome: "Fernanda Silva",
    cargo: "Analista na Empresa X",
  },
  {
    texto:
      "A conclusão do curso foi uma etapa gratificante. O conteúdo foi bem organizado e o horário ajudou a facilitar o aprendizado.",
    nome: "Gabriel Santos",
    cargo: "Analista na Empresa X",
  },
];

function Depoimentos() {
  return (
    <Section aria-labelledby="depoimentos-title">
      <SectionContainer>
        <SectionHeader>
          <Typography className="eyebrow">Depoimentos</Typography>

          <SectionTitle id="depoimentos-title" variant="h2">
            Quem fez recomenda
          </SectionTitle>
        </SectionHeader>

        <Carousel
          ariaLabel="Depoimentos de alunos"
          slideWidth={296}
          spaceBetween={16}
        >
          {depoimentos.map((depoimento) => (
            <TestimonialCard key={depoimento.nome}>
              <TestimonialText>“{depoimento.texto}”</TestimonialText>

              <TestimonialAuthor>
                <AuthorName>{depoimento.nome}</AuthorName>
                <AuthorRole>{depoimento.cargo}</AuthorRole>

                <Rating aria-label="Avaliação: 5 de 5 estrelas">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Box
                      key={index}
                      component="img"
                      src="/icons/navegacao/star.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  ))}
                </Rating>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </Carousel>
      </SectionContainer>
    </Section>
  );
}

export default Depoimentos;
