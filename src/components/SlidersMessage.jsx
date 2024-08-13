import React from "react";
import ContentLoader from "react-content-loader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./SliderItem";

const SlidersMessage = ({ list, isLoading, hasError, deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      id="Inicio"
      className="relative w-full aspect-[430/453] sm:aspect-[1920/768] bg-secondary overflow-hidden"
  
    >
      {isLoading ? (
        <ContentLoader
          width={"100%"}
          height={"100%"}
          speed={2}
          viewBox="0 0 1920 768"
          backgroundColor="#F5F5FA"
          foregroundColor="#F1EAFF"
          className="overflow-hidden bg-primary-100 sm:bg-none"
        >
          <rect
            x="0"
            y="0"
            width={300}
            className="aspect-[430/453] lg:aspect-auto w-full"
          />
        </ContentLoader>
      ) : (
        <Carousel
          draggable={false}
          arrows={deviceType !== "mobile"}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          showDots={deviceType !== "mobile"}
          transitionDuration={500}
        >
          {/* Mapea las imágenes locales */}
          {["image1"].map((imageKey) => (
            <SliderItem
              key={imageKey}
              imageKey={imageKey}
              description="Descripción de la imagen"
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default SlidersMessage;
