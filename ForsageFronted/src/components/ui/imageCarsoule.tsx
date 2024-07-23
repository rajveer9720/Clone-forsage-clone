import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick carousel default styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme styles

const ImageCarousel: React.FC = () => {
  // Array of image URLs
  const images: string[] = [
  
    'https://i.ibb.co/3zKT26p/Screenshot-Capture-2024-07-06-15-51-44.png',
    'https://i.ibb.co/t8cVbSF/Whats-App-Image-2024-07-06-at-15-20-06-3fa7a5ae.jpg',
  ];

  // Slider settings configuration
  const settings = {
    dots: true, // Hide dots
    arrows: false, // Hide arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '-35px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="w-3 h-3 bg-gray-300 rounded-full"
        style={{
          width: '10px',
          height: '10px',
        }}
      />
    ),
  };

  return (
    <div className="container mx-auto py-4 rounded-xl">
      {/* Container with height set to 20% of viewport height */}
      <div className="relative w-full h-2/5 rounded-xl">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-full rounded-xl">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
                style={{ maxHeight: '100%' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
