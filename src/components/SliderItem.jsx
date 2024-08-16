import React from 'react';
import showdown from 'showdown';

// Importa las imágenes locales
import image1Large from '../assets/img/header1.jpeg';
import image1Medium from '../assets/img/header2.jpg';
import image1Small from '../assets/img/header3.jpg';
import header4 from '../assets/img/header4.jpg';


const SliderItem = ({ description, image }) => {
  const converter = new showdown.Converter();
  return (
    <div className="w-screen slideContainer relative aspect-[1920/768]">
      <picture>
        <source srcSet={image1Medium} media="(max-width: 993px)" />
        <source srcSet={image1Large} media="(max-width: 768px)" />
        <source srcSet={image1Small} media="(max-width: 640px)" />
        <img src={image} alt={description} className="object-cover w-screen aspect-[430/453] sm:aspect-[1920/768]" />
      </picture>
    </div>
  );
};

export default SliderItem;
