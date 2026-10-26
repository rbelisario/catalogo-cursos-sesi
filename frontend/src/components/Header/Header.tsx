import { useEffect, useState } from "react";
import { Container, Toolbar } from "@mui/material";
import { useNavigate, useLocation, Link } from "react-router-dom";

import {
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
  HeaderNavigation,
  StudentAreaLink,
  StyledAppBar,
} from "./Header.styles";

const links = [
  { label: "Início", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Sobre", href: "/sobre" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const headerScrolled = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logo = headerScrolled
    ? "/brand/logo-sesi-industria-primary.svg"
    : "/brand/logo-sesi-industria-white.svg";

  return (
    <StyledAppBar position="fixed" elevation={0} scrolled={headerScrolled}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderContainer>
            <Link to="/" aria-label="SESI — página inicial">
              <HeaderLogo src={logo} alt="SESI + Indústria" />
            </Link>

            <HeaderNavigation aria-label="Navegação principal">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.href);

                return (
                  <HeaderLink
                    key={link.href}
                    href={link.href}
                    scrolled={headerScrolled}
                    aria-current={active ? "page" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(link.href);
                    }}
                  >
                    {link.label}
                  </HeaderLink>
                );
              })}

              <StudentAreaLink
                href="/area-do-aluno"
                scrolled={headerScrolled}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/area-do-aluno");
                }}
              >
                Área do aluno
              </StudentAreaLink>
            </HeaderNavigation>
          </HeaderContainer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
