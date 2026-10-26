import { AppBar, styled } from "@mui/material";

interface HeaderStateProps {
  scrolled: boolean;
}

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<HeaderStateProps>(({ theme, scrolled }) => ({
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar + 1,
  backgroundColor: scrolled ? "#FFFFFF" : "transparent",
  color: scrolled ? theme.palette.text.primary : "#FFFFFF",
  borderBottom: scrolled
    ? `1px solid ${theme.palette.divider}`
    : "1px solid transparent",
  transition: theme.transitions.create(
    ["background-color", "color", "border-color"],
    { duration: 200 },
  ),
}));

export const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  width: "100%",
  minHeight: 80,

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
    minHeight: 76,
  },
}));

export const HeaderLogo = styled("img")({
  display: "block",
  width: 200,
  height: "auto",

  "@media (max-width: 600px)": {
    width: 125,
  },
});

export const HeaderNavigation = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexWrap: "wrap",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
}));

export const HeaderLink = styled("a", {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<HeaderStateProps>(({ theme, scrolled }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 0,
  padding: theme.spacing(1, 1.5),
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: 600,
  lineHeight: 1.75,
  textDecoration: "none",
  whiteSpace: "nowrap",
  color: "inherit",
  borderRadius: theme.shape.borderRadius,

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    fontSize: "0.8rem",
  },

  "&:hover": {
    backgroundColor: scrolled
      ? "rgba(0, 0, 0, 0.04)"
      : "rgba(255, 255, 255, 0.12)",
  },

  "&:focus-visible": {
    outline: `2px solid ${scrolled ? theme.palette.primary.main : "#FFFFFF"}`,
    outlineOffset: 3,
  },
}));

export const StudentAreaLink = styled(HeaderLink, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<HeaderStateProps>(({ scrolled }) => ({
  border: "1px solid",
  borderColor: scrolled ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.35)",

  "&:hover": {
    backgroundColor: scrolled
      ? "rgba(0, 0, 0, 0.04)"
      : "rgba(255, 255, 255, 0.12)",
    borderColor: scrolled ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.7)",
  },
}));
