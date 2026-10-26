
import { Box, Button, Container, Typography, styled } from "@mui/material";

const vermelho = "#A40018";

export const PageSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  minHeight: "100vh",
  paddingTop: 112,
//   paddingBottom: theme.spacing(8),

  [theme.breakpoints.down("sm")]: {
    paddingTop: 96,
    paddingBottom: theme.spacing(6),
  },
}));

export const PageContainer = styled(Container)({
  maxWidth: "1200px !important",
});

export const BackButton = styled(Button)({
  color: vermelho,
  marginBottom: 24,
  textTransform: "none",
  fontWeight: 600,
});

export const CourseHero = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: theme.spacing(6),
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
  },
}));

export const CourseInfo = styled(Box)({
  minWidth: 0,
});

export const CategoryLabel = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#F9DCE1",
  color: vermelho,
  padding: "6px 12px",
  borderRadius: 20,
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 16,
});

export const CourseTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(2rem, 3vw, 3rem)",
  lineHeight: 1.15,
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  overflowWrap: "anywhere",
}));

export const CourseDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  marginBottom: theme.spacing(3),
}));

export const CourseMetadata = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

export const PrimaryButton = styled(Button)({
  backgroundColor: vermelho,
  color: "#FFFFFF",
  padding: "12px 24px",
  fontWeight: 600,
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#850014",
  },
});

export const CourseImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: 360,
  borderRadius: 12,
  overflow: "hidden",
  backgroundColor: "#F5F5F5",

  [theme.breakpoints.down("md")]: {
    minHeight: 280,
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: 220,
  },
}));

export const CourseImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const ContentSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(9),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(6),
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

export const ModuleAccordion = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  border: "1px solid #E0E0E0",
  borderRadius: "8px !important",
  overflow: "hidden",
}));


export const BenefitsSection = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: theme.spacing(4),
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

export const BenefitItem = styled(Box)({
  minWidth: 0,

  "& .benefit-icon": {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#FFD39C",
    display: "grid",
    placeItems: "center",
    marginBottom: 16,
  },

  "& .benefit-title": {
    fontWeight: 700,
    marginBottom: 4,
  },

  "& .benefit-description": {
    color: "#666666",
    lineHeight: 1.6,
  },
});

export const CourseDetailsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.7fr) minmax(0, 1.3fr)",
  gap: theme.spacing(8),
  marginBottom: theme.spacing(10),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
  },
}));

export const StickyEnrollmentBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  zIndex: theme.zIndex.appBar - 1,
  left: "max(24px, calc((100% - 1200px) / 2))",
  right: "max(24px, calc((100% - 1200px) / 2))",
  bottom: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  padding: theme.spacing(2, 3),
  borderRadius: 16,
  backgroundColor: "#101010",
  color: "#FFFFFF",
  boxShadow: "0 8px 28px rgba(0, 0, 0, 0.18)",

  [theme.breakpoints.down("sm")]: {
    left: 12,
    right: 12,
    bottom: 12,
    padding: theme.spacing(1.5),
    gap: theme.spacing(1),
  },
}));

export const TestimonialsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFD39C",
  padding: theme.spacing(7, 0, 10),
  marginTop: theme.spacing(8),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 0, 8),
  },
}));

export const ContactSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#A40000",
  color: "#FFFFFF",
  textAlign: "center",
  padding: theme.spacing(8, 2),

  "& h2": {
    fontWeight: 700,
    marginBottom: theme.spacing(3),
  },
}));

