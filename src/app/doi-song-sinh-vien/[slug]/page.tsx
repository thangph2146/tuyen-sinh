import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đời Sống Sinh Viên | HUB University",
  description:
    "Khám phá đời sống sinh viên tại Trường Đại học Ngân hàng TP. Hồ Chí Minh - hoạt động ngoại khóa, văn nghệ, thể thao, và nhiều trải nghiệm phong phú",
  keywords:
    "đời sống sinh viên HUB, hoạt động sinh viên, câu lạc bộ, văn nghệ thể thao, student life HUB",
  openGraph: {
    title: "Đời Sống Sinh Viên - HUB University",
    description: "Khám phá đời sống sinh viên tại HUB University",
    url: "https://hub.edu.vn/doi-song-sinh-vien-chi-tiet",
    locale: "vi_VN",
  },
};

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "/assets/images/dssv_ct_img2.png",
    alt: "Hoạt động sinh viên 1",
  },
  {
    id: 2,
    src: "/assets/images/dssv_ct_img3.png",
    alt: "Hoạt động sinh viên 2",
  },
  {
    id: 3,
    src: "/assets/images/dssv_ct_img4.png",
    alt: "Hoạt động sinh viên 3",
  },
];

export default function DoiSongSinhVienDetailPage() {
  return (
    <main className="student-life-detail-page">
      {/* SECTION: Hero */}
      <section
        className="student-life-detail-hero"
        aria-label="Banner đời sống sinh viên"
      >
        <Image
          src="/assets/images/dktv_hero.png"
          alt="Đời sống sinh viên tại HUB"
          className="student-life-detail-hero__image"
          width={1920}
          height={600}
          priority
        />
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
            <li className="hero-breadcrumb__item">
              <Link href="/doi-song-sinh-vien" className="hero-breadcrumb__link">
                Đời sống sinh viên
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Chi tiết</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION: Page Header */}
      <section className="student-life-detail-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="student-life-detail-header__title">
                ĐỜI SỐNG SINH VIÊN TẠI HUB
              </h1>
              <p className="student-life-detail-header__intro">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Article Body */}
      <section className="student-life-detail-body">
        <div className="container">
          {/* Featured Image */}
          <div className="student-life-detail-featured">
            <Image
              src="/assets/images/dssv_ct_img1.png"
              alt="Đời sống sinh viên HUB"
              className="student-life-detail-featured__image"
              width={1200}
              height={508}
              loading="lazy"
            />
          </div>

          {/* Main Content */}
          <div className="student-life-detail-content">
            <div className="student-life-detail-content__text">
              <p>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn
                từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này
                không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin
                học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã
                được phổ biến trong những năm 1960 nhờ việc bán những bản giấy
                Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng
                trong các ứng dụng dàn trang, như Aldus PageMaker.
              </p>
              <p>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn
                từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này
                không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin
                học văn phòng, nội dung của nó vẫn không hề bị thay đổi.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="student-life-detail-gallery">
            <div className="row g-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="col-12 col-md-4">
                  <article className="gallery-card">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="gallery-card__image"
                      width={400}
                      height={240}
                      loading="lazy"
                    />
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content */}
          <div className="student-life-detail-additional">
            <div className="student-life-detail-additional__text">
              <p>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn
                từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này
                không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin
                học văn phòng, nội dung của nó vẫn không hề bị thay đổi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
