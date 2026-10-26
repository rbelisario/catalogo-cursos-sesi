import { Box, Typography } from "@mui/material";

import {
  FooterRoot,
  FooterContainer,
  FooterColumns,
  FooterColumn,
  FooterLogo,
  FooterLink,
  FooterBottom,
  SocialLinks,
  SocialLink,
} from "./Footer.styles";

const navigationLinks = ["Início", "Certificação", "Cursos", "Sobre", "Blog"];

const popularCourses = [
  "Cultura Organizacional",
  "Ferramentas Google para Produtividade",
  "Excel Básico ao Avançado",
  "Trabalho em Equipe e Colaboração",
  "Gestão do Tempo e Produtividade",
  "Comunicação Assertiva",
  "Inteligência Emocional no Trabalho",
];

const supportLinks = [
  "Termos de Uso",
  "Política de Privacidade",
  "Trabalhe Conosco",
  "Fale Conosco",
  "Central de Ajuda",
];

function Footer() {
  return (
    <FooterRoot>
      <FooterContainer>
        <FooterColumns>
          <FooterColumn>
            <FooterLogo
              src="/brand/logo-sesi-industria-white.svg"
              alt="SESI + Indústria"
            />

            <FooterLink href="mailto:contato@sesindustria.com.br">
              contato@sesindustria.com.br
            </FooterLink>

            <Typography>Av. Paulista, 1313</Typography>
          </FooterColumn>

          <FooterColumn>
            <Typography className="footer-heading">Navegação</Typography>

            {navigationLinks.map((link) => (
              <FooterLink key={link} href="#">
                {link}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn>
            <Typography className="footer-heading">Cursos populares</Typography>

            {popularCourses.map((course) => (
              <FooterLink key={course} href="#">
                {course}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn>
            <Typography className="footer-heading">Suporte</Typography>

            {supportLinks.map((link) => (
              <FooterLink key={link} href="#">
                {link}
              </FooterLink>
            ))}
          </FooterColumn>
        </FooterColumns>

        <FooterBottom>
          <Box className="copyright">
            <FooterLogo src="/brand/logo-sesi.svg" alt="SESI" />
            <Typography>Todos os direitos reservados.</Typography>
          </Box>

          <SocialLinks aria-label="Redes sociais">
            <SocialLink href="#" aria-label="LinkedIn" title="LinkedIn">
              <Box
                component="img"
                src="/icons/redes-sociais/icon-linkedIn-24px.svg"
                alt=""
                aria-hidden="true"
              />
            </SocialLink>

            <SocialLink href="#" aria-label="Instagram" title="Instagram">
              <Box
                component="img"
                src="/icons/redes-sociais/icon-instagram-24px.svg"
                alt=""
                aria-hidden="true"
              />
            </SocialLink>

            <SocialLink href="#" aria-label="Facebook" title="Facebook">
              <Box
                component="img"
                src="/icons/redes-sociais/icon-facebook-24px.svg"
                alt=""
                aria-hidden="true"
              />
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterRoot>
  );
}

export default Footer;
