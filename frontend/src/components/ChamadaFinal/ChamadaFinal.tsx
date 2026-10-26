
import { Box } from "@mui/material";
import { ArrowRight, Play } from "lucide-react";

import {
  Section,
  Container,
  Content,
  Title,
  Description,
  CtaButton,
  VideoPreview,
  PlayButton,
} from "./ChamadaFinal.styles";

function ChamadaFinal() {
  return (
    <Section aria-labelledby="chamada-final-title">
      <Container>
        <Content>
          <Title id="chamada-final-title" variant="h2">
            Pronto para transformar sua carreira?
          </Title>

          <Description>
            Junte-se a milhares de profissionais que já estão transformando
            a indústria através dos nossos cursos. Invista no seu futuro hoje
            mesmo!
          </Description>

          <CtaButton
            href="/cursos"
            endIcon={<ArrowRight size={20} />}
          >
            Matricule-se
          </CtaButton>
        </Content>

        <VideoPreview>
          <Box
            component="img"
            src="/images/institucional/video-thumb.png"
            alt="Profissionais da indústria trabalhando em ambiente industrial"
          />

          <PlayButton
            aria-label="Reproduzir vídeo de apresentação"
            onClick={() => {
              // Integraremos a reprodução quando houver uma fonte de vídeo.
            }}
          >
            <Play size={30} fill="currentColor" />
          </PlayButton>
        </VideoPreview>
      </Container>
    </Section>
  );
}

export default ChamadaFinal;
