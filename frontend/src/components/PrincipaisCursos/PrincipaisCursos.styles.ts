import { Box, Card, Typography, CircularProgress, styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(7, 0, 5),
  overflow: "hidden",

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

export const SectionHeader = styled(SectionContainer)(({ theme }) => ({
  marginBottom: theme.spacing(3),

  "& h2": {
    margin: 0,
    fontSize: "clamp(2rem, 3vw, 2.8rem)",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
}));

export const CourseCard = styled(Card)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flex: "0 0 296px",
  flexDirection: "column",
  minHeight: 425,
  overflow: "hidden",
  borderRadius: 8,
  color: "#FFFFFF",
  backgroundColor: "#A40018",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
  cursor: "pointer",
  transition: "transform 220ms ease, box-shadow 220ms ease",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 14px 28px rgba(0, 0, 0, 0.2)",
    },
  },

  "&:focus-visible": {
    outline: "3px solid #A40018",
    outlineOffset: 3,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    background:
      "linear-gradient(180deg, rgba(164, 0, 24, 0.05) 10%, rgba(164, 0, 24, 0.92) 55%, #A40018 100%)",
  },

  "& .course-card__content": {
    position: "relative",
    zIndex: 1,
    marginTop: "auto",
    padding: theme.spacing(2.5),
  },

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },

  [theme.breakpoints.down("sm")]: {
    flexBasis: 270,
    minHeight: 400,
  },
}));

export const CourseImage = styled("div")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const CourseCategory = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  padding: theme.spacing(2.5, 2.5, 0),

  "& .MuiChip-root": {
    fontWeight: 600,
    maxWidth: "100%",
    borderRadius: 4,
  },

  "& .MuiChip-icon": {
    color: "inherit",
    fontSize: "20px",
  },

  "& .MuiChip-label": {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export const CourseTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  color: "#FFFFFF",
  fontSize: "1.55rem",
  fontWeight: 700,
  lineHeight: 1.25,
}));

export const CourseDescription = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "1rem",
  lineHeight: 1.45,
});

export const CarouselContainer = styled(Box)(({ theme }) => ({
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

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  minHeight: 240,
  color: theme.palette.text.secondary,
}));

export const LoadingSpinner = styled(CircularProgress)({
  color: "#A40018",
});
