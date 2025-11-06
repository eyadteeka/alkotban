import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  // Easily editable slides array with images, titles, and descriptions
  const slides = [
    {
      image: "GreenFieldImages/field.jpeg",
      title: "حقل المزرعة",
      description: "حقل المزرعة الذي يحتوي على مزرعة كبيرة ومتنوعة من المحاصيل والحيوانات.",
    },
    {
      image: "GreenFieldImages/farmer.jpeg", // Replace with your second image
      title: "المزرعة",
      description: "اكتشف المزرعة الذي يحتوي على مزرعة كبيرة ومتنوعة من المحاصيل والحيوانات.",
    },
    {
      image: "GreenFieldImages/green-space.jpeg", // Replace with your third image
      title: "المساحة الخضراء",
      description: "اكتشف المساحة الخضراء الذي يحتوي على مساحة كبيرة ومتنوعة من النباتات والأشجار.",
    },
  ];

  const AUTO_PLAY_INTERVAL = 5000; // 5 seconds
  const PAUSE_DURATION = 8000; // Resume auto-play after 8 seconds

  // Auto-rotation function
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, AUTO_PLAY_INTERVAL);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [slides.length]);

  // Handle transition animation
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // Match CSS transition duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Pause auto-rotation temporarily
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume auto-play after delay
    pauseTimeoutRef.current = setTimeout(() => {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, AUTO_PLAY_INTERVAL);
    }, PAUSE_DURATION);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    pauseAutoPlay();
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    pauseAutoPlay();
  };

  // Touch handlers for swipe support
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="slider_section hero-carousel">
      <div className="hero-carousel-container">
        {/* Background Images Carousel */}
        <div className="hero-bg-carousel">
          {slides.map((slide, index) => {
            let slideClass = "hero-bg-slide";
            if (index === activeIndex) {
              slideClass += " active";
            } else if (
              index === activeIndex - 1 ||
              (activeIndex === 0 && index === slides.length - 1)
            ) {
              slideClass += " prev";
            } else {
              slideClass += " next";
            }
            return (
              <div
                key={index}
                className={slideClass}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            );
          })}
        </div>

        {/* Semi-transparent overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div
          className="hero-content-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-6">
                <div className={`detail-box ${isTransitioning ? "transitioning" : ""}`}>
                  <h1 className="hero-title">
                    {slides[activeIndex].title}
                  </h1>
                  <p className="hero-description">
                    {slides[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Navigation Controls */}
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span>‹</span>
        </button>
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span>›</span>
        </button>

        {/* Carousel Indicators */}
        <div className="container">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => goToSlide(index)}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
