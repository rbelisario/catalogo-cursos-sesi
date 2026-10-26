import { useState } from "react";
import { A11y } from "swiper/modules";
import { IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";

import {
  CarouselRoot,
  CarouselFooter,
  CarouselArrows,
} from "./Carousel.styles";

interface CarouselProps {
  children: React.ReactNode;
  ariaLabel: string;
  footerLeft?: React.ReactNode;
  slideWidth?: number;
  spaceBetween?: number;
}

export default function Carousel({
  children,
  ariaLabel,
  footerLeft,
  slideWidth = 296,
  spaceBetween = 16,
}: CarouselProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);

  const updateNavigation = (instance: SwiperInstance) => {
    setCanGoPrev(!instance.isBeginning);
    setCanGoNext(!instance.isEnd);
  };

  const slides = Array.isArray(children) ? children : [children];

  return (
    <CarouselRoot>
      <Swiper
        modules={[A11y]}
        slidesPerView="auto"
        spaceBetween={spaceBetween}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        watchOverflow
        grabCursor
        aria-label={ariaLabel}
        a11y={{
          prevSlideMessage: "Slide anterior",
          nextSlideMessage: "Próximo slide",
        }}
        onSwiper={(instance) => {
          setSwiper(instance);
          updateNavigation(instance);
        }}
        onSlideChange={updateNavigation}
        onResize={updateNavigation}
        onReachBeginning={updateNavigation}
        onReachEnd={updateNavigation}
        onFromEdge={updateNavigation}
      >
        {slides.map((child, index) => (
          <SwiperSlide
            key={(child as React.ReactElement)?.key ?? index}
            style={{
              width: `${slideWidth}px`,
              height: "auto",
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {(footerLeft || slides.length > 1) && (
        <CarouselFooter>
          <div>{footerLeft}</div>

          {slides.length > 1 && (
            <CarouselArrows>
              <IconButton
                aria-label="Cursos anteriores"
                onClick={() => swiper?.slidePrev()}
                disabled={!canGoPrev}
                size="large"
              >
                <img
                  src="/icons/navegacao/arrow-navigation.svg"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                />
              </IconButton>

              <IconButton
                aria-label="Próximos cursos"
                onClick={() => swiper?.slideNext()}
                disabled={!canGoNext}
                size="large"
              >
                <img
                  src="/icons/navegacao/arrow-navigation-1.svg"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                />
              </IconButton>
            </CarouselArrows>
          )}
        </CarouselFooter>
      )}
    </CarouselRoot>
  );
}
