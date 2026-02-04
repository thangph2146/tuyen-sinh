import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Quyết định v/v công nhận đạt trình độ tiếng Anh chuẩn đầu ra | HUB University",
  description:
    "Thông tin chi tiết về quyết định công nhận đạt trình độ tiếng Anh chuẩn đầu ra đối với sinh viên đại học",
  keywords: "thông báo HUB, quyết định, tiếng Anh, sinh viên",
  openGraph: {
    title: "Chi tiết Thông Báo - HUB University",
    description: "Thông tin chi tiết về thông báo từ HUB University",
    url: "https://hub.edu.vn/danh-muc-thong-bao",
    locale: "vi_VN",
  },
};

// Related announcements
const relatedAnnouncements = [
  {
    id: 1,
    title: "Thông Báo Về Kết Quả Lấy Phiếu Tín Nhiệm Đối Với...",
    day: "11",
    month: "Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 2,
    title: "Quyết Định V/V Công Nhận Đạt Trình Độ Tiếng Anh...",
    day: "11",
    month: "Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 3,
    title: "Quyết Định V/V Công Nhận Đạt Chuẩn Công Nghệ...",
    day: "11",
    month: "Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 4,
    title: "Thông báo Kết Quả Xét Tuyển Đại Học Văn Bằng 2...",
    day: "11",
    month: "Th7",
    year: "2025",
    time: "09:30",
  },
];

export default function ThongBaoDetailPage() {
  return (
    <main className="announcement-detail-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--danhmucthongbao"
        aria-label="Banner thông báo"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/dmtb_hero.png"
            alt="Banner Thông báo HUB"
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
            <li className="hero-breadcrumb__item">
              <Link href="/danh-muc-thong-bao" className="hero-breadcrumb__link">
                Thông báo
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Chi tiết</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <section className="announcement-detail-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="announcement-detail-header__title">
                Quyết định v/v công nhận đạt trình độ tiếng Anh chuẩn đầu ra đối với
                sinh viên đại học hệ vừa làm vừa học đợt tháng 11 năm 2025
              </h1>

              <div className="announcement-detail-divider"></div>

              <div className="announcement-detail-header__meta">
                <div className="announcement-detail-header__meta-item">
                  <Image
                    src="/assets/svg/calendar-brand-color.svg"
                    alt="Calendar icon"
                    className="announcement-detail-header__icon"
                    width={14}
                    height={14}
                  />
                  <span className="announcement-detail-header__text">
                    14 tháng 6, 2025
                  </span>
                </div>
                <div className="announcement-detail-header__meta-item">
                  <span className="announcement-detail-header__icon">👁</span>
                  <span className="announcement-detail-header__text">100 view</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="announcement-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="announcement-detail-header__intro">
                Trong bối cảnh toàn cầu hóa và kinh tế số phát triển mạnh mẽ, nhu cầu
                đảm bảo minh bạch tài chính, kiểm soát rủi ro và nâng cao hiệu quả
                quản trị đang trở thành yêu cầu thiết yếu trong mọi tổ chức, doanh
                nghiệp. Ngành Kiểm toán vì thế không chỉ giữ vai trò kiểm soát, mà còn
                là công cụ chiến lược hỗ trợ ra quyết định trong quản trị doanh nghiệp,
                hoạch định chính sách và nâng cao niềm tin thị trường. Đây là một trong
                những ngành học mang tính ứng dụng cao, luôn cần đến đội ngũ nhân lực
                chất lượng cao, có đạo đức nghề nghiệp, tư duy phản biện và năng lực
                công nghệ hiện đại.
              </p>

              {/* Image: Decision Document */}
              <figure className="announcement-detail-figure">
                <Image
                  src="/assets/images/dmtb_qdtb.png"
                  alt="Quyết định công nhận đạt trình độ tiếng Anh"
                  className="announcement-detail-figure__image"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </figure>

              {/* Content Block */}
              <div className="announcement-detail-text">
                <p>
                  Ngành Kiểm toán (mã ngành: 7340302) được HUB xây dựng hướng đến mục
                  tiêu cung cấp cho sinh viên kiến thức chuyên sâu về kế toán - kiểm
                  toán, kỹ năng nghề nghiệp và đạo đức nghề kiểm toán viên. Sinh viên
                  tốt nghiệp có khả năng kiểm toán báo cáo tài chính, đánh giá hệ thống
                  kiểm soát nội bộ, kiểm toán tuân thủ, kiểm toán hoạt động và tư vấn
                  rủi ro tài chính cho các doanh nghiệp, ngân hàng và tổ chức công.
                </p>

                <p>
                  Chương trình học được xây dựng khoa học, cập nhật các xu hướng mới
                  của ngành như kiểm toán công nghệ thông tin, dữ liệu lớn, phân tích
                  tài chính số, chuẩn mực quốc tế (ISA, IFRS), đồng thời lồng ghép nội
                  dung liên ngành với các lĩnh vực tài chính, ngân hàng, quản trị và
                  công nghệ thông tin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Announcements */}
      <section className="announcement-detail-related">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="announcement-detail-related__title">
                Các Thông Báo Liên Quan
              </h2>

              {/* Related Articles List */}
              <div className="related-articles">
                {relatedAnnouncements.map((announcement) => (
                  <Link
                    key={announcement.id}
                    href={`/danh-muc-thong-bao/${announcement.id}`}
                    className="related-article"
                  >
                    <div className="related-article__date-box">
                      <span className="related-article__date-day">
                        {announcement.day}
                      </span>
                      <span className="related-article__date-month">
                        {announcement.month}
                      </span>
                      <span className="related-article__date-year">
                        {announcement.year}
                      </span>
                    </div>
                    <div className="related-article__content">
                      <h3 className="related-article__title">{announcement.title}</h3>
                      <span className="related-article__date-inline">
                        {announcement.day} {announcement.month}, {announcement.year} ·{" "}
                        {announcement.time}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination - Hidden on mobile */}
              <nav
                className="announcement-detail-pagination d-none d-sm-flex"
                aria-label="Phân trang thông báo liên quan"
              >
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
