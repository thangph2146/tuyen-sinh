import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lịch Sử Hình Thành | HUB University",
  description:
    "Lịch sử hình thành và phát triển của Trường Đại học Ngân hàng TP. Hồ Chí Minh từ năm 1976 đến nay",
  keywords: "lịch sử HUB, hình thành, phát triển, sứ mệnh, tầm nhìn",
  openGraph: {
    title: "Lịch Sử Hình Thành - HUB University",
    description: "Lịch sử hình thành và phát triển của HUB University",
    url: "https://hub.edu.vn/lich-su",
    locale: "vi_VN",
  },
};

const historyItems = [
  {
    id: 1,
    year: "1976-1998",
    caption: "Trường Đại Học ngân hàng Tp.HCM",
    description:
      "Ngày 16/12/1976 Tổng giám đốc Ngân hàng Nhà nước Việt Nam đã ký quyết định số: 1229/NH TCCB thành lập Cơ sở II Trường Cao cấp Nghiệp vụ Ngân hàng và Trường Trung học Ngân hàng 3 TW tại TPHCM.",
    image: "/assets/images/lichsu_img2.jpg",
  },
  {
    id: 2,
    year: "1976-1980",
    caption: "Trường Đại Học ngân hàng Tp.HCM",
    description:
      "Ngày 16/12/1976 Tổng giám đốc Ngân hàng Nhà nước Việt Nam đã ký quyết định số: 1229/NH TCCB thành lập Cơ sở II Trường Cao cấp Nghiệp vụ Ngân hàng và Trường Trung học Ngân hàng 3 TW tại TPHCM.",
    image: "/assets/images/lichsu_img3.jpg",
  },
  {
    id: 3,
    year: "1980-1986",
    caption: "Trường Đại Học ngân hàng Tp.HCM",
    description:
      "Thủ tướng Chính phủ ký quyết định số: 149/TTG ngày 8/5/1980, cho phép Cơ sở II Trường Cao cấp Nghiệp vụ Ngân hàng được đào tạo hệ Đại học chính quy chuyên ngành Ngân hàng.",
    image: "/assets/images/lichsu_img4.jpg",
  },
  {
    id: 4,
    year: "1986-1993",
    caption: "Trường Đại Học ngân hàng Tp.HCM",
    description:
      "Ngày 16/12/1976 Tổng giám đốc Ngân hàng Nhà nước Việt Nam đã ký quyết định số: 1229/NH TCCB thành lập Cơ sở II Trường Cao cấp Nghiệp vụ Ngân hàng và Trường Trung học Ngân hàng 3 TW tại TPHCM.",
    image: "/assets/images/lichsu_img9.jpg",
  },
];

export default function LichSuPage() {
  return (
    <main className="history-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--lichsu"
        aria-label="Banner lịch sử"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/lichsu_hero.png"
            alt="Lịch sử HUB University"
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
              <span className="hero-breadcrumb__current">Lịch sử hình thành</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="history-intro">
        <div className="container">
          <p className="history-intro__text">
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình
            bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một
            văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa
            sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn
            bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp
            dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi.
          </p>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="history-large-image">
        <div className="container">
          <Image
            src="/assets/images/lichsu_img1.png"
            alt="HUB University Campus"
            className="history-large-image__img"
            width={1200}
            height={600}
            loading="lazy"
          />
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision__header">
            <h2 className="mission-vision__title">SỨ MỆNH - TẦM NHÌN</h2>
            <p className="mission-vision__subtitle">
              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
              trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như
              một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một
              họa sĩ vô danh ghép
            </p>
          </div>

          <div className="row g-4">
            {/* Mission Card */}
            <div className="col-12 col-lg-6">
              <article className="mission-card">
                <h3 className="mission-card__title">sứ mệnh</h3>
                <p className="mission-card__intro">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                  trình bày và dàn trang phục vụ cho in ấn.
                </p>
                <h4 className="mission-card__subtitle">Với HUB, bạn có thể:</h4>
                <ul className="mission-card__list">
                  <li>Kết nối với cộng đồng thông qua dịch vụ.</li>
                  <li>Tiến bộ thông qua nghiên cứu tiên tiến.</li>
                  <li>Khuyến khích khả năng học tập và thích nghi liên tục.</li>
                  <li>Cung cấp nền giáo dục đầy thử thách.</li>
                  <li>Hỗ trợ tư duy phản biện và khả năng lãnh đạo.</li>
                  <li>Xây dựng một môi trường hòa nhập và công bằng.</li>
                </ul>
              </article>
            </div>

            {/* Vision Card */}
            <div className="col-12 col-lg-6">
              <article className="mission-card mission-card--vision">
                <h3 className="mission-card__title">tầm nhìn</h3>
                <p className="mission-card__intro">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                  trình bày và dàn trang phục vụ cho in ấn.
                </p>
                <h4 className="mission-card__subtitle">HUB phấn đấu trở thành:</h4>
                <ul className="mission-card__list">
                  <li>Tổ chức giáo dục hàng đầu.</li>
                  <li>Nhà lãnh đạo trong nghiên cứu sáng tạo.</li>
                  <li>Trung tâm phát triển nguồn nhân lực chất lượng cao.</li>
                  <li>Đối tác ưu tiên cho doanh nghiệp và cộng đồng.</li>
                  <li>Biểu tượng của sự xuất sắc trong giáo dục.</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* History Gallery Section */}
      <section className="history-gallery">
        <div className="container px-0">
          {/* Desktop/Tablet Title */}
          <h1 className="history-gallery__title d-none d-sm-block">
            LỊCH SỬ HÌNH THÀNH
          </h1>

          {/* Mobile Title Box */}
          <div className="mobile-title-box mobile-title-box--sm mobile-title-box--primary-title d-sm-none container mb-4">
            <div className="mobile-title-box__icon">
              <Image
                src="/assets/images/history_icon.png"
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
              />
            </div>
            <div className="mobile-title-box__content">
              <h2 className="mobile-title-box__title">LỊCH SỬ HÌNH THÀNH</h2>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="history-gallery__grid">
            {historyItems.map((item) => (
              <div key={item.id} className="history-gallery__item">
                <div className="history-gallery__image">
                  <Image src={item.image} alt={item.caption} width={365} height={248} loading="lazy" />
                </div>
                <p className="history-gallery__caption">{item.caption}</p>
                <span className="history-gallery__year">{item.year}</span>
                <div className="history-gallery__divider"></div>
                <p className="history-gallery__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
