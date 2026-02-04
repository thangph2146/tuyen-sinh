import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cơ Sở Vật Chất | HUB University",
  description:
    "Cơ sở vật chất hiện đại tại Trường Đại học Ngân hàng TP. Hồ Chí Minh - Phòng học thông minh, thư viện, khu thể thao và nhiều tiện ích khác",
  keywords:
    "cơ sở vật chất HUB, phòng học, thư viện, khu thể thao, tiện ích sinh viên",
  openGraph: {
    title: "Cơ Sở Vật Chất - HUB University",
    description: "Cơ sở vật chất hiện đại tại HUB University",
    url: "https://hub.edu.vn/co-so-vat-chat",
    locale: "vi_VN",
  },
};

const facilityFeatures = [
  "Phòng học thông minh (Smart classroom)",
  "Thư viện điện tử – thư viện truyền thống",
  "Phòng thực hành mô phỏng ngân hàng – tài chính",
  "Khu thể thao – sinh hoạt ngoại khóa",
  "Cơ sở đỗ xe",
  "Khu vực căn tin",
];

const facilityImages = [
  {
    id: 1,
    src: "/assets/images/dssv_img1.png",
    alt: "Phòng học thông minh",
  },
  {
    id: 2,
    src: "/assets/images/csvc_img3.jpg",
    alt: "Thư viện trường",
  },
  {
    id: 3,
    src: "/assets/images/csvc_img4.png",
    alt: "Khu thể thao",
  },
];

const facilityDetails = [
  "Trang bị màn hình tương tác, hệ thống trình chiếu, âm thanh và thiết bị hỗ trợ học tập từ xa.",
  "Hơn 100.000 đầu sách, tài liệu, giáo trình.",
  "Truy cập thư viện số, cơ sở dữ liệu tài chính, kinh tế học quốc tế.",
  "Mô phỏng hoạt động ngân hàng, giao dịch tài chính.",
  "Hỗ trợ sinh viên ngành tài chính, ngân hàng, kế toán thực hành nghiệp vụ.",
  "Sân bóng đá, bóng rổ, bóng chuyền.",
  "Phòng sinh hoạt câu lạc bộ, không gian học nhóm mở.",
];

export default function CoSoVatChatPage() {
  return (
    <main className="facilities-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--cosovatchat"
        aria-label="Banner cơ sở vật chất"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/csvc_hero.png"
            alt="Banner Cơ sở vật chất HUB"
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
              <span className="hero-breadcrumb__current">Cơ sở vật chất</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* About Facilities */}
      <section className="facilities-about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="facilities-about__title">Về cơ sở vật chất của HUB</h1>
              <div className="facilities-about__content">
                <p>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                  trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                  như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                  khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                  một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế
                  kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn
                  không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ
                  việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây
                  hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
                </p>
                <p>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                  trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                  như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                  khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                  một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế
                  kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn
                  không hề bị thay đổi.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Image
                src="/assets/images/csvc_img1.jpg"
                alt="Cơ sở vật chất toàn cảnh"
                className="facilities-about__image"
                width={1200}
                height={546}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility List */}
      <section className="facilities-list">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="facilities-list__title">Cơ sở vật chất trường</h2>
              <p className="facilities-list__intro">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ,
                mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề
                bị thay đổi.
              </p>
            </div>
          </div>

          {/* Facility Features Grid */}
          <div className="row">
            <div className="col-12 col-lg-6">
              <ul className="facilities-list__items" role="list">
                {facilityFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="facilities-list__items" role="list">
                {facilityFeatures.slice(3).map((feature, index) => (
                  <li key={index + 3}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Facility Images Grid */}
          <div className="row g-4">
            {facilityImages.map((image) => (
              <div key={image.id} className="col-12 col-md-4">
                <article className="facilities-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="facilities-card__image"
                    width={400}
                    height={260}
                    loading="lazy"
                  />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="facilities-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="facilities-details__title">Thông tin khác</h2>
              <p className="facilities-details__intro">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ,
                mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề
                bị thay đổi.
              </p>
            </div>
          </div>

          {/* Details List */}
          <div className="row">
            <div className="col-12">
              <ul className="facilities-details__list" role="list">
                {facilityDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
