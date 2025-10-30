import React, { useState } from 'react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "عالم المتعة يبدأ من هنا",
      description: "اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!"
    },
    {
      title: "عالم المتعة يبدأ من هنا",
      description: "اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!"
    },
    {
      title: "عالم المتعة يبدأ من هنا",
      description: "اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="slider_section">
      {/* <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <div className="btn-box">
                        <a href="" className="btn1">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="container">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li 
                key={index}
                className={index === activeSlide ? 'active' : ''}
                onClick={() => goToSlide(index)}
              ></li>
            ))}
          </ol>
        </div>

        <button className="carousel-control-prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" onClick={nextSlide}>
          <span className="carousel-control-next-icon"></span>
        </button>
      </div> */}
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      عالم المتعة يبدأ من هنا
                    </h1>
                    <p>
                      اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!
                      في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم الألعاب.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      عالم المتعة يبدأ من هنا
                    </h1>
                    <p>
                      اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!
                      في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم المرح والمغامرة.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      عالم المتعة يبدأ من هنا
                    </h1>
                    <p>
                      اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!
                      في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم المرح والمغامرة.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <ol class="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;