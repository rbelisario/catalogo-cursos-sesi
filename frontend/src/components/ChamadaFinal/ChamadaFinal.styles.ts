
import { Box, Button, IconButton, Typography, styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: "#920000",
  color: "#FFFFFF",
  padding: theme.spacing(5, 0, 7),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0, 5),
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.8fr)",
  alignItems: "center",
  gap: theme.spacing(6),
  width: "100%",
  maxWidth: 1440,
  marginInline: "auto",
  paddingInline: theme.spacing(6),
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1.5fr",
    gap: theme.spacing(4),
    paddingInline: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
    paddingInline: theme.spacing(3),
  },
}));

export const Content = styled(Box)({
  minWidth: 0,
});

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: "#FFFFFF",
  fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
  fontWeight: 700,
  lineHeight: 1.2,
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: "#FFFFFF",
  fontSize: "1.125rem",
  lineHeight: 1.55,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const CtaButton = styled(Button)(({ theme }) => ({
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
    outline: "3px solid #FFFFFF",
    outlineOffset: 3,
  },
}));

export const VideoPreview = styled(Box)({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  overflow: "hidden",
  borderRadius: 8,
  backgroundColor: "#5C2525",

  "& > img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const PlayButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 86,
  height: 86,
  backgroundColor: "rgba(255, 255, 255, 0.82)",
  color: "#111111",

  "&:hover": {
    backgroundColor: "#FFFFFF",
    transform: "translate(-50%, -50%) scale(1.06)",
  },

  "&.Mui-focusVisible": {
    outline: "3px solid #FFFFFF",
    outlineOffset: 4,
  },

  "@media (max-width: 600px)": {
    width: 64,
    height: 64,
  },
});
