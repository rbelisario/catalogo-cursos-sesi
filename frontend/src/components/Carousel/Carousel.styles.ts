import { Box, styled } from "@mui/material";

export const CarouselRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  minWidth: 0,

  "& .swiper": {
    width: "100%",
    overflow: "visible",
    paddingBottom: theme.spacing(2),
  },

  "& .swiper-slide": {
    boxSizing: "border-box",
  },

  "& .swiper-wrapper": {
    alignItems: "stretch",
  },

  "& .MuiIconButton-root": {
    transition: "opacity 180ms ease, background-color 180ms ease",

    "&:hover:not(.Mui-disabled)": {
      backgroundColor: "rgba(0, 0, 0, 0.06)",
    },

    "&.Mui-disabled img": {
      opacity: 0.3,
    },
  },
}));

export const CarouselFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const CarouselArrows = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});
