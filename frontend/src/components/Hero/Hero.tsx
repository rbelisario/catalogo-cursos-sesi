import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButton,
} from './Hero.styles'

function Hero() {
  return (
    <HeroSection aria-labelledby="hero-title">
      <HeroContent>
        <HeroTitle id="hero-title" variant="h1">
          Impulsione sua carreira na indústria
        </HeroTitle>

        <HeroDescription>
          Amplie seus conhecimentos com excelência na melhor
          plataforma de estudos da indústria brasileira
        </HeroDescription>

        <HeroButton
          href="/cursos"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Conhecer cursos
        </HeroButton>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
