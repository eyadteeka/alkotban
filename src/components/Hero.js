import React, { useState } from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "عالم المتعة يبدأ من هنا",
      description:
        "اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!",
    },
    {
      title: "عالم المتعة يبدأ من هنا",
      description:
        "اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!",
    },
    {
      title: "عالم المتعة يبدأ من هنا",
      description:
        "اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح أطفالك لحظات مليئة بالمرح والمغامرة!",
    },
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
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>عالم المتعة يبدأ من هنا</h1>
                    <p>
                      اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح
                      أطفالك لحظات مليئة بالمرح والمغامرة! في الميسون، نؤمن أن
                      الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا
                      وتقديم كل جديد في عالم الألعاب.
                    </p>
                    <div class="user_option">
                      <button className="order_online">طلب الأن</button>
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
                    <h1>عالم المتعة يبدأ من هنا</h1>
                    <p>
                      اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح
                      أطفالك لحظات مليئة بالمرح والمغامرة! في الميسون، نؤمن أن
                      الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا
                      وتقديم كل جديد في عالم المرح والمغامرة.
                    </p>
                    <div class="user_option">
                      <button className="order_online">طلب الأن</button>
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
                    <h1>عالم المتعة يبدأ من هنا</h1>
                    <p>
                      اكتشف تشكيلتنا المتنوعة من الألعاب المصممة خصيصا لتمنح
                      أطفالك لحظات مليئة بالمرح والمغامرة! في الميسون، نؤمن أن
                      الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا
                      وتقديم كل جديد في عالم المرح والمغامرة.
                    </p>
                    <div class="user_option">
                      <button className="order_online">طلب الأن</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <ol class="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
