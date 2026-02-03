"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const slides = [
  {
    image: '/assets/images/hero_bg.png',
    mobileImage: '/assets/images/dkts_bg.png',
    alt: 'Banner Trường Đại học Ngân hàng TP.HCM',
  },
  {
    image: '/assets/images/tuyensinh_bg.png',
    alt: 'Banner Tuyển sinh',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="Banner chính">
      <div className="hero-section__bg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-section__slide ${index === currentSlide ? 'active' : ''}`}
          >
            <picture>
              {slide.mobileImage && (
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              )}
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-section__image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          </div>
        ))}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevSlide}
          aria-label="Slide trước"
        >
          <Icon icon="mdi:chevron-left" width="32" height="32" color="white" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextSlide}
          aria-label="Slide kế tiếp"
        >
          <Icon icon="mdi:chevron-right" width="32" height="32" color="white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
