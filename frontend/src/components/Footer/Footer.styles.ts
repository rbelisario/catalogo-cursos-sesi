import { Box, Link, styled } from "@mui/material";

export const FooterRoot = styled("footer")(({ theme }) => ({
  width: "100%",
  backgroundColor: "#200600",
  color: "#FFFFFF",
  padding: theme.spacing(6, 0, 3),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 0, 3),
  },
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
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

export const FooterColumns = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr 1fr 1fr",
  gap: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
  },
}));

export const FooterColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1.5),
  minWidth: 0,

  "& p": {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },

  "& .footer-heading": {
    marginBottom: theme.spacing(0.5),
    color: "#FFFFFF",
    fontSize: "0.75rem",
    textTransform: "uppercase",
  },
}));

export const FooterLogo = styled("img")({
  display: "block",
  width: "fit-content",
  maxWidth: "100%",
  maxHeight: 32,
  objectFit: "contain",
  objectPosition: "left center",
  marginBottom: 4,
});

export const FooterLink = styled(Link)(({ theme }) => ({
  color: "#A99A96",
  fontSize: "0.95rem",
  lineHeight: 1.5,
  textDecoration: "none",
  transition: "color 160ms ease",

  "&:hover": {
    color: "#FFFFFF",
    textDecoration: "underline",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.common.white}`,
    outlineOffset: 3,
    borderRadius: 2,
  },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  marginTop: theme.spacing(6),

  "& .copyright": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    minWidth: 0,
  },

  "& .copyright img": {
    width: 64,
    maxHeight: 24,
    marginBottom: 0,
  },

  "& .copyright p": {
    color: "#A99A96",
    fontSize: "0.9rem",
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: theme.spacing(5),
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const SocialLink = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textDecoration: "none",
  transition: "opacity 160ms ease",

  "& img": {
    display: "block",
    width: 20,
    height: 20,
    objectFit: "contain",
  },

  "&:hover": {
    opacity: 0.7,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.common.white}`,
    outlineOffset: 3,
    borderRadius: 2,
  },
}));
