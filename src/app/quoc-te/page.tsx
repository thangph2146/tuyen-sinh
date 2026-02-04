import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Viện Đào Tạo Quốc Tế | HUB University",
  description:
    "Viện Đào tạo Quốc tế tại Trường Đại học Ngân hàng TP. Hồ Chí Minh - Chương trình đào tạo quốc tế với các đối tác hàng đầu thế giới",
  keywords:
    "đào tạo quốc tế, chương trình quốc tế, liên kết quốc tế, HUB International",
  openGraph: {
    title: "Viện Đào Tạo Quốc Tế - HUB University",
    description: "Chương trình đào tạo quốc tế tại HUB University",
    url: "https://hub.edu.vn/quoc-te",
    locale: "vi_VN",
  },
};

const programs = {
  bachelor: [
    {
      id: 1,
      number: "01",
      title: "Cử Nhân Quốc Tế",
      description:
        "Chương trình liên kết đào tạo quốc tế tại Đại học ngân hàng theo chuẩn quốc tế đáp ứng nhu cầu thị trường.",
    },
    {
      id: 2,
      number: "02",
      title: "ĐH Chính Quy Quốc Tế Cấp Bằng Riêng",
      description:
        "Chương trình đào tạo với các dự án quốc tế, sinh viên được trao bằng quốc tế công nhận toàn cầu.",
    },
    {
      id: 3,
      number: "03",
      title: "Cử Nhân Quốc Tế Pathway",
      description:
        "Chương trình liên kết các trường đại học hàng đầu tại Úc, Anh, Mỹ và châu Âu với điều kiện tuyển sinh linh hoạt.",
    },
  ],
};

export default function QuocTePage() {
  return (
    <main className="international-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--quocte"
        aria-label="Banner viện quốc tế"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/quocte_hero.jpg"
            alt="Banner Viện Đào tạo Quốc tế HUB"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="hero-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="hero-breadcrumb__list">
            <li className="hero-breadcrumb__item">
              <Link href="/" className="hero-breadcrumb__link">
                Trang chủ
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Quốc tế</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* About International Institute */}
      <section className="intl-about">
        {/* Decoration Image */}
        <Image
          src="/assets/images/quocte_decoration.jpg"
          alt=""
          className="intl-about__decoration"
          width={500}
          height={500}
          role="presentation"
          loading="lazy"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="intl-about__image-wrapper">
                <Image
                  src="/assets/images/quocte_img1.png"
                  alt="Sinh viên quốc tế HUB"
                  className="intl-about__image"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="intl-about__content">
                <p className="intl-about__subtitle">Viện đào tạo quốc tế</p>
                <h1 className="intl-about__title">Trường ĐH Ngân Hàng Tp.HCM</h1>
                <p className="intl-about__description">
                  Viện Đào tạo Quốc tế (IIE) được thành lập vào năm 2010. Viện Đào tạo
                  Quốc tế chịu trách nhiệm quản lý các hoạt động hợp tác quốc tế về đào
                  tạo, nghiên cứu khoa học, tư vấn chính sách và tổ chức các hoạt động
                  giao lưu, trao đổi học thuật với các trường đại học, các tổ chức quốc
                  tế trên khắp thế giới.
                </p>
                <div className="intl-about__stats">
                  <div className="intl-about__stat">
                    <span className="intl-about__stat-number">50K</span>
                    <span className="intl-about__stat-label">Cử Nhân, Thạc Sĩ, Tiến Sĩ</span>
                  </div>
                  <div className="intl-about__stat">
                    <span className="intl-about__stat-number">98%</span>
                    <span className="intl-about__stat-label">Có Việc Làm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="intl-why">
        <div className="container">
          <Image
            src="/assets/images/quocte_daotao.jpg"
            alt="Lý do chọn hệ đào tạo quốc tế tại HUB"
            className="intl-why__image"
            width={1200}
            height={600}
            role="presentation"
            loading="lazy"
          />
          <div className="intl-why__content">
            <div className="intl-why__header">
              <p className="intl-why__subtitle">Tại sao chọn</p>
              <h2 className="intl-why__title">VIỆN ĐÀO TẠO QUỐC TẾ HUB</h2>
              <p className="intl-why__tagline">
                &quot; Học tại Việt Nam - Bằng cấp quốc tế - Tương lai rộng mở! &quot;
              </p>
            </div>
            <div className="intl-why__buttons">
              <button type="button" className="intl-why__btn intl-why__btn--active">
                Chương Trình Quốc Tế
              </button>
              <button type="button" className="intl-why__btn">
                Cơ Sở Vật Chất
              </button>
              <button type="button" className="intl-why__btn">
                Ưu điểm
              </button>
              <button type="button" className="intl-why__btn">
                Học bổng Hỗ trợ
              </button>
              <button type="button" className="intl-why__btn">
                Cơ Hội Nghề Nghiệp
              </button>
            </div>
            <p className="intl-why__description">
              Chương trình đào tạo quốc tế với các đối tác hàng đầu từ Úc, Anh, Mỹ và
              châu Âu. Sinh viên được học tập theo chuẩn quốc tế, nhận bằng cấp công
              nhận toàn cầu.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="intl-programs">
        <div className="container">
          <h2 className="intl-programs__title">CHƯƠNG TRÌNH ĐÀO TẠO</h2>

          {/* Programs Tabs */}
          <nav aria-label="Danh mục chương trình quốc tế">
            <ul className="intl-programs__tabs" role="tablist">
              <li
                className="intl-programs__tab intl-programs__tab--active"
                role="tab"
                aria-selected="true"
              >
                Chương Trình Cử Nhân
              </li>
              <li className="intl-programs__tab" role="tab" aria-selected="false">
                Chương Trình Thạc Sĩ
              </li>
              <li className="intl-programs__tab" role="tab" aria-selected="false">
                Chương Trình Tiến Sĩ
              </li>
            </ul>
          </nav>

          {/* Tab Content */}
          <div className="intl-programs__content">
            <div className="intl-programs__panel intl-programs__panel--active">
              <div className="row g-4">
                {programs.bachelor.map((program) => (
                  <div key={program.id} className="col-md-4">
                    <Link href={`/quoc-te/${program.id}`} className="intl-program-card">
                      <div className="intl-program-card__number">{program.number}</div>
                      <h3 className="intl-program-card__title">{program.title}</h3>
                      <p className="intl-program-card__description">
                        {program.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
