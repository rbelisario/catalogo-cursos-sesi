import { Box, Typography, styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(7, 0, 8),
  backgroundColor: "#FFFFFF",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 0, 6),
  },
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(260px, 0.8fr) minmax(0, 2fr)",
  gap: theme.spacing(8),
  width: "100%",
  maxWidth: 1440,
  marginInline: "auto",
  paddingInline: theme.spacing(6),
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(5),
    paddingInline: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
    paddingInline: theme.spacing(3),
  },
}));

export const Intro = styled(Box)({
  maxWidth: 360,
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: "clamp(2rem, 3vw, 2.8rem)",
  fontWeight: 700,
  lineHeight: 1.12,
  color: theme.palette.text.primary,
}));

export const SectionDescription = styled(Typography)({
  fontSize: "1.125rem",
  lineHeight: 1.55,
  color: "#222222",
});

export const Content = styled(Box)({
  minWidth: 0,
});

export const Metrics = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const MetricRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  padding: theme.spacing(1.25, 0),
  borderBottom: "1px solid #D9D9D9",

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

export const MetricValue = styled(Typography)({
  fontSize: "clamp(2.5rem, 4.5vw, 4.25rem)",
  fontWeight: 500,
  lineHeight: 1.15,
  letterSpacing: "-0.035em",
  color: "#111111",
  whiteSpace: "nowrap",
});

export const MetricLabel = styled(Typography)({
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: 1.4,
  color: "#111111",
  textAlign: "right",
});

export const Benefits = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
  },
}));

export const Benefit = styled(Box)({
  minWidth: 0,
});

export const BenefitTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0.5),
  fontSize: "1rem",
  fontWeight: 700,
  lineHeight: 1.4,
  color: "#111111",
}));

export const BenefitDescription = styled(Typography)({
  fontSize: "0.9375rem",
  lineHeight: 1.55,
  color: "#6B6B6B",
});
