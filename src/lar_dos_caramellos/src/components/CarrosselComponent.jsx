import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarrosselComponent() {
  const slides = [
    {
      src: 'TECNOL - ISO - BICOR2.jpg',
      title: 'First slide label',
      text: 'Some representative placeholder content for the first slide.'
    },
    {
      src: 'TECNOL - ISO - BRANCO2.jpg',
      title: 'Second slide label',
      text: 'Some representative placeholder content for the second slide.'
    },
    {
      src: 'TENCOL - ISO - AZUL2.jpg',
      title: 'Third slide label',
      text: 'Some representative placeholder content for the third slide.'
    }
  ];

  return (
    <Carousel>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} style={{ height: '500px' }}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt={slide.title}
            style={{
              height: '500px',
              objectFit: 'cover',
              filter: 'brightness(70%)', // escurece a imagem
            }}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
