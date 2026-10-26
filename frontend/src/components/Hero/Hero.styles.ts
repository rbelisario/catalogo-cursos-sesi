import { Box, Button, Typography, styled } from "@mui/material";

export const HeroSection = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: 646,
  overflow: "hidden",
  backgroundImage: `
    linear-gradient(
      90deg,
      rgba(166, 0, 18, 0.88) 0%,
      rgba(166, 0, 18, 0.78) 55%,
      rgba(166, 0, 18, 0.82) 100%
    ),
    url('/images/hero/hero-image.png')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  [theme.breakpoints.down("md")]: {
    minHeight: 580,
    backgroundPosition: "60% center",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: 560,
    alignItems: "flex-end",
    backgroundPosition: "58% center",
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",
  padding: theme.spacing(15, 6, 12),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(14, 4, 10),
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(12, 3, 8),
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  maxWidth: 500,
  marginBottom: theme.spacing(2.5),
  color: "#FFFFFF",
  fontSize: "clamp(2.8rem, 5.4vw, 5rem)",
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "-0.025em",

  [theme.breakpoints.down("sm")]: {
    fontSize: "clamp(2.5rem, 10vw, 3.5rem)",
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 540,
  marginBottom: theme.spacing(4),
  color: "#FFFFFF",
  fontSize: "1.2rem",
  lineHeight: 1.5,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  minHeight: 44,
  padding: theme.spacing(1.2, 2.2),
  borderRadius: 8,
  backgroundColor: "#FFFFFF",
  color: "#222222",
  fontSize: "1rem",
  fontWeight: 600,

  "&:hover": {
    backgroundColor: "#F2F2F2",
  },

  "&.Mui-focusVisible": {
    outline: `3px solid ${theme.palette.primary.light}`,
    outlineOffset: 3,
  },
}));
