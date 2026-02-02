import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section
      className="about-section section-spacing"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="row align-items-center about-section__row">
          {/* Image Column - Shows on all screens, order changes */}
          <div
            className="col-12 col-lg-6 order-2 order-lg-1 about-section__image-col"
          >
            <div className="about-section__image-wrapper">
              <Image
                src="/assets/images/hero_decorator_1.png"
                alt=""
                className="about-section__deco d-none d-lg-block"
                width={895}
                height={600}
                role="presentation"
                aria-hidden="true"
              />
              <Image
                src="/assets/images/about_bg.png"
                alt="Khuôn viên Trường Đại học Ngân hàng TP.HCM - HUB University"
                className="about-section__main-image"
                width={618}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
          {/* Content Column - Shows on all screens, order changes */}
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 about-section__content-col"
          >
            <div className="about-section__content">
              <p className="about-section__subtitle d-none d-sm-block">
                Đôi nét về
              </p>
              <h2 id="about-heading" className="about-section__title">
                HUB University
              </h2>
              <p className="about-section__description">
                Trường Đại học Ngân hàng TP.HCM (HUB University) là cơ sở đào
                tạo hàng đầu trong lĩnh vực tài chính - ngân hàng tại Việt
                Nam. Với hơn 30 năm kinh nghiệm, HUB đã đào tạo hàng nghìn cử
                nhân, thạc sĩ và tiến sĩ chất lượng cao, đáp ứng nhu cầu nhân
                lực cho ngành ngân hàng và tài chính trong nước cũng như khu
                vực.
              </p>
              <Link href="/gioi-thieu/" className="about-section__btn">Xem thêm</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
