
import { Box, Typography, styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(7, 0, 6),
  overflow: "hidden",
  backgroundColor: "#920000",
  color: "#FFFFFF",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 0, 4),
  },
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  marginInline: "auto",
  paddingInline: theme.spacing(6),
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    paddingInline: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    paddingInline: theme.spacing(3),
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),

  "& .eyebrow": {
    marginBottom: theme.spacing(0.5),
    fontSize: "0.75rem",
    fontWeight: 500,
    textTransform: "uppercase",
  },
}));

export const SectionTitle = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "clamp(2rem, 3vw, 2.8rem)",
  fontWeight: 700,
  lineHeight: 1.15,
});

export const TestimonialCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minHeight: 425,
  boxSizing: "border-box",
  padding: theme.spacing(3),
  borderRadius: 8,
  backgroundColor: "#C51F32",
  color: "#FFFFFF",

  [theme.breakpoints.down("sm")]: {
    minHeight: 390,
    padding: theme.spacing(2.5),
  },
}));

export const TestimonialText = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  lineHeight: 1.5,
  fontWeight: 400,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));

export const TestimonialAuthor = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  paddingTop: theme.spacing(3),
}));

export const AuthorName = styled(Typography)({
  fontSize: "0.95rem",
  fontWeight: 700,
  lineHeight: 1.5,
});

export const AuthorRole = styled(Typography)({
  fontSize: "0.95rem",
  lineHeight: 1.5,
  color: "rgba(255, 255, 255, 0.75)",
});

export const Rating = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1.5),
  color: "#FFFFFF",
  fontSize: "1.2rem",
  lineHeight: 1,
}));
