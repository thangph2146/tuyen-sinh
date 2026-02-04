import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tin Tuyển Sinh | HUB University",
  description:
    "Thông tin tuyển sinh mới nhất tại Trường Đại học Ngân hàng TP. Hồ Chí Minh - chương trình đào tạo, kế hoạch tuyển sinh và các tin tức liên quan",
  keywords:
    "tuyển sinh HUB, tin tuyển sinh, thông tin tuyển sinh, HUB admissions, chương trình đào tạo",
  openGraph: {
    title: "Tin Tuyển Sinh - HUB University",
    description: "Thông tin tuyển sinh mới nhất tại HUB University",
    url: "https://hub.edu.vn/tin-tuyen-sinh",
    locale: "vi_VN",
  },
};

// Sample news data
const newsItems = [
  {
    id: 1,
    title:
      "[HUB] Trường Đại học Ngân hàng TPHCM công bố thông tin tuyển sinh chính thức năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img1.png",
    isNew: false,
  },
  {
    id: 2,
    title:
      "Thông báo Tuyển sinh Đại học Bằng 2 hệ vừa làm vừa học ngành Ngôn ngữ Anh, Luật kinh tế năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img2.png",
    isNew: true,
  },
  {
    id: 3,
    title:
      "TB tổ chức thi tiếng Anh theo Khung NLNN 6 bậc dùng cho VN - Dự kiến thi ngày 11, 12/06/2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img1.png",
    isNew: false,
  },
  {
    id: 4,
    title:
      "Thông báo Cung cấp minh chứng phục vụ các tiêu chí xét tuyển đối với phương thức 2 (Tổng hợp) và phương thức 3 (kỳ thi V-SAT) Đại học chính quy năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img2.png",
    isNew: true,
  },
  {
    id: 5,
    title: "Thông báo về việc đăng ký lớp học Tinh hoa",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img1.png",
    isNew: false,
  },
  {
    id: 6,
    title:
      "Thông báo tổ chức thi và cấp chứng chỉ tin học ứng dụng công nghệ thông tin cơ bản và nâng cao - Dự kiến thi ngày 20//07/2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img2.png",
    isNew: true,
  },
  {
    id: 7,
    title:
      "[HUB] Trường Đại học Ngân hàng TPHCM công bố thông tin tuyển sinh chính thức năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img1.png",
    isNew: false,
  },
  {
    id: 8,
    title:
      "Thông báo tổ chức thi và cấp chứng chỉ tiếng Anh bậc 3-5 theo Khung năng lực Ngoại ngữ 6 bậc dùng cho Việt Nam - Dự kiến thi ngày 17, 18, 19/07/2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img2.png",
    isNew: false,
  },
  {
    id: 9,
    title:
      "[HUB] Trường Đại học Ngân hàng TPHCM công bố thông tin tuyển sinh chính thức năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img1.png",
    isNew: false,
  },
  {
    id: 10,
    title:
      "Thông báo Tuyển sinh Đại học Bằng 2 hệ vừa làm vừa học ngành Ngôn ngữ Anh, Luật kinh tế năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tin_img2.png",
    isNew: true,
  },
];

export default function TinTuyenSinhPage() {
  return (
    <main className="admissions-news-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--tintuyensinh"
        aria-label="Banner tin tuyển sinh"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/tin_hero.png"
            alt="Banner Tin tuyển sinh HUB"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </section>

      {/* Breadcrumb Navigation - Mobile only */}
      <nav className="hero-breadcrumb d-sm-none" aria-label="Breadcrumb">
        <div className="container">
          <ol className="hero-breadcrumb__list">
            <li className="hero-breadcrumb__item">
              <Link href="/" className="hero-breadcrumb__link">
                Trang chủ
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Tin tuyển sinh</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* News List Section */}
      <section className="admissions-news-list">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="admissions-news-list__title">TIN TUYỂN SINH</h1>

              {/* News Items */}
              <div className="news-items">
                {newsItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/tin-tuyen-sinh/${item.id}`}
                    className="news-item"
                  >
                    <Image
                      src={item.image}
                      alt="Tin tuyển sinh"
                      className="news-item__image"
                      width={284}
                      height={148}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    <div className="news-item__content">
                      <h2 className="news-item__title">
                        {item.title}
                        {item.isNew && (
                          <span className="news-item__badge" aria-label="Tin mới">
                            Mới
                          </span>
                        )}
                      </h2>
                      <p className="news-item__excerpt">{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <nav className="pagination d-sm-flex" aria-label="Phân trang tin tuyển sinh">
                <button
                  className="pagination__btn pagination__btn--prev"
                  aria-label="Trang trước"
                >
                  <Image
                    src="/assets/svg/d-arrow-left.svg"
                    alt="Previous"
                    width={11}
                    height={10}
                  />
                </button>
                <Link href="#" className="pagination__item">
                  1
                </Link>
                <Link href="#" className="pagination__item">
                  2
                </Link>
                <Link
                  href="#"
                  className="pagination__item pagination__item--active"
                  aria-current="page"
                >
                  3
                </Link>
                <Link href="#" className="pagination__item">
                  4
                </Link>
                <button
                  className="pagination__btn pagination__btn--next"
                  aria-label="Trang sau"
                >
                  <Image
                    src="/assets/svg/d-arrow-right.svg"
                    alt="Next"
                    width={11}
                    height={10}
                  />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
