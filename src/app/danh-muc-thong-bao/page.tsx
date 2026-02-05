import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thông Báo | HUB University",
  description:
    "Thông báo mới nhất từ Trường Đại học Ngân hàng TP. Hồ Chí Minh - Cập nhật tin tức, quyết định và thông tin quan trọng",
  keywords: "thông báo HUB, tin tức, quyết định, thông tin sinh viên",
  openGraph: {
    title: "Thông Báo - HUB University",
    description: "Thông báo mới nhất từ HUB University",
    url: "https://hub.edu.vn/danh-muc-thong-bao",
    locale: "vi_VN",
  },
};

// Sample announcements data
const announcements = [
  {
    id: 1,
    slug: "thong-bao-ket-qua-xet-tuyen-vb2-vlvh-ngon-ngu",
    title:
      "Thông báo Kết quả xét tuyển, tuyển sinh đại học văn bằng 2 hệ vừa làm vừa học ngành Ngôn...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 2,
    slug: "thong-bao-dong-hoc-phi-he-dttx-he-dot-3-2024-2025",
    title:
      "Thông báo v/v đóng học phí của sinh viên hệ ĐTTX Học kỳ Hè – Đợt 3, năm học 2024-2025",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 3,
    slug: "thong-bao-to-chuc-thi-cap-chung-chi-tieng-anh-bac-3-5",
    title:
      "Thông báo Về việc tổ chức thi và cấp chứng chỉ tiếng Anh bậc 3-5 theo Khung năng...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 4,
    slug: "quyet-dinh-cong-nhan-tot-nghiep-dhcq-dot-6-2025",
    title: "Quyết định v/v công nhận tốt nghiệp đ/v hệ đại học chính quy đợt tháng 6/2025",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 5,
    slug: "quyet-dinh-cong-nhan-tot-nghiep-dh-vb2-vlvh",
    title:
      "Quyết định v/v công nhận tốt nghiệp đại học, đại học văn bằng 2 hệ vừa làm vừa học đợt...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 6,
    slug: "quyet-dinh-du-dieu-kien-hoc-anh-van-chuyen-nganh",
    title:
      "Quyết định v/v công nhận đủ điều kiện học Anh văn chuyên ngành đối với sinh viên...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 7,
    slug: "thong-bao-thi-cap-chung-chi-tin-hoc-co-ban",
    title:
      "Thông báo v/v tổ chức thi và cấp chứng chỉ tin học ứng dụng công nghệ thông tin cơ bản ...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 8,
    slug: "thong-bao-dang-ky-lop-hoc-phan-dhcq-vlvh",
    title:
      "Thông báo v/v đăng ký lớp học phần dành cho hệ ĐHCQ chuẩn và hệ ĐH VLVH Học ký...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 9,
    slug: "thong-bao-thuc-tap-cuoi-khoa-dot-4-2024-2025",
    title:
      "Thông báo về việc tổ chức thực hiện học phần thực tập cuối khóa đợt 4 năm học 2024 - 2025",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 10,
    slug: "thong-bao-gia-han-cung-cap-minh-chung-xet-tuyen",
    title:
      "Thông báo v/v gia hạn cung cấp minh chứng phục vụ các tiêu chí xét tuyển đối với phương...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 11,
    slug: "quyet-dinh-du-dieu-kien-hoc-anh-van-chuyen-nganh-2",
    title:
      "Quyết định v/v công nhận đủ điều kiện học Anh văn chuyên ngành đối với sinh viên...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 12,
    slug: "thong-bao-thi-cap-chung-chi-tin-hoc-co-ban-2",
    title:
      "Thông báo v/v tổ chức thi và cấp chứng chỉ tin học ứng dụng công nghệ thông tin cơ bản ...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 13,
    slug: "thong-bao-dang-ky-lop-hoc-phan-dhcq-vlvh-2",
    title:
      "Thông báo v/v đăng ký lớp học phần dành cho hệ ĐHCQ chuẩn và hệ ĐH VLVH Học ký...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 14,
    slug: "thong-bao-thuc-tap-cuoi-khoa-dot-4-2024-2025-2",
    title:
      "Thông báo về việc tổ chức thực hiện học phần thực tập cuối khóa đợt 4 năm học 2024 - 2025",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
  {
    id: 15,
    slug: "thong-bao-gia-han-cung-cap-minh-chung-xet-tuyen-2",
    title:
      "Thông báo v/v gia hạn cung cấp minh chứng phục vụ các tiêu chí xét tuyển đối với phương...",
    date: "11 Th7",
    year: "2025",
    time: "09:30",
  },
];

export default function DanhMucThongBaoPage() {
  return (
    <main className="announcements-page">
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
              <span className="hero-breadcrumb__current">Thông báo</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Featured Announcements Section */}
      <section className="announcements-featured">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="announcements-featured__title">thông báo nổi bật</h1>
            </div>
          </div>

          {/* Announcement Grid */}
          <div className="row g-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="col-12 col-lg-6">
                <Link
                  href={`/danh-muc-thong-bao/${announcement.slug}`}
                  className="announcement-card"
                >
                  <div className="announcement-card__date">
                    <span className="announcement-card__date-text">
                      {announcement.date}
                    </span>
                    <span className="announcement-card__date-year">
                      {announcement.year}
                    </span>
                  </div>
                  <div className="announcement-card__content">
                    <h2 className="announcement-card__title">{announcement.title}</h2>
                    <span className="announcement-card__date-inline">
                      {announcement.date}, {announcement.year} · {announcement.time}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <nav className="pagination" aria-label="Phân trang thông báo">
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
