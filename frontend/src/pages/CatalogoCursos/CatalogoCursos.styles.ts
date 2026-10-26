import { Box, Button, Card, Typography, styled } from "@mui/material";

export const PageSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(6, 0, 10),
  minHeight: "60vh",
  backgroundColor: "#FFFFFF",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0, 6),
  },
}));

export const PageContainer = styled(Box)(({ theme }) => ({
  paddingTop: "80px",
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

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(2rem, 3vw, 2.8rem)",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const PageDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

export const Filters = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(220px, 2fr) repeat(3, minmax(150px, 1fr))",
  gap: theme.spacing(2),
  alignItems: "stretch",
  marginBottom: theme.spacing(2),

  // Padroniza a altura da busca e dos selects do MUI
  "& .MuiFormControl-root": {
    width: "100%",
  },

  "& .MuiInputBase-root": {
    height: 56,
    boxSizing: "border-box",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const FilterActions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    "& > button": {
      flex: 1,
    },
  },
}));

export const ApplyButton = styled(Button)({
  minHeight: 44,
  paddingInline: 24,
  backgroundColor: "#A40018",
  color: "#FFFFFF",
  fontWeight: 600,

  "&:hover": {
    backgroundColor: "#850014",
  },
});

export const ResultsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
}));

export const CoursesGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CourseCard = styled(Card)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  minHeight: 390,
  overflow: "hidden",
  borderRadius: 8,
  color: "#FFFFFF",
  backgroundColor: "#A40018",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
  cursor: "pointer",
  transition: "transform 180ms ease, box-shadow 180ms ease",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 14px 28px rgba(0, 0, 0, 0.18)",
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
      "linear-gradient(180deg, rgba(164, 0, 24, 0.02) 10%, rgba(164, 0, 24, 0.82) 55%, #A40018 100%)",
  },

  "& .course-image": {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "& .course-category": {
    position: "relative",
    zIndex: 1,
    alignSelf: "flex-start",
    maxWidth: "calc(100% - 32px)",
    margin: theme.spacing(2),
  },

  "& .course-content": {
    position: "relative",
    zIndex: 1,
    marginTop: "auto",
    padding: theme.spacing(2.5),
  },

  "& .course-title": {
    color: "#FFFFFF",
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: theme.spacing(1.5),
  },

  "& .course-description": {
    color: "#FFFFFF",
    lineHeight: 1.45,
  },

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",

    "&:hover": {
      transform: "none",
    },
  },
}));

export const StateContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: 220,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  textAlign: "center",
}));
