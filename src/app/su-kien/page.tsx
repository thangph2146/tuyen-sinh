import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sự Kiện | HUB University",
  description:
    "Sự kiện và hoạt động tại Trường Đại học Ngân hàng TP. Hồ Chí Minh - Hội thảo, workshop, seminar và các hoạt động sinh viên",
  keywords: "sự kiện HUB, hoạt động sinh viên, hội thảo, workshop, seminar",
  openGraph: {
    title: "Sự Kiện - HUB University",
    description: "Sự kiện và hoạt động tại HUB University",
    url: "https://hub.edu.vn/su-kien",
    locale: "vi_VN",
  },
};

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Hội thảo khởi nghiệp và đổi mới sáng tạo",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ...",
    image: "/assets/images/tiensi_img1.jpg",
    category: "Hội thảo",
    date: "14 tháng 6, 2025",
  },
  {
    id: 2,
    title: "Workshop kỹ năng mềm cho sinh viên",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ...",
    image: "/assets/images/sukien_img7.png",
    category: "Hội thảo",
    date: "14 tháng 6, 2025",
  },
  {
    id: 3,
    title: "Ngày hội việc làm HUB Career Fair 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ...",
    image: "/assets/images/sukien_img8.png",
    category: "Hội thảo",
    date: "14 tháng 6, 2025",
  },
  {
    id: 4,
    title: "Chương trình giao lưu văn hóa quốc tế",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ...",
    image: "/assets/images/sukien_img9.png",
    category: "Hội thảo",
    date: "14 tháng 6, 2025",
  },
  {
    id: 5,
    title: "Cuộc thi Olympic Kinh tế HUB 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ...",
    image: "/assets/images/sukien_img10.png",
    category: "Hội thảo",
    date: "14 tháng 6, 2025",
  },
  {
    id: 6,
    title: "Seminar chuyên đề Tài chính ngân hàng",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ...",
    image: "/assets/images/sukien_img11.jpg",
    category: "Hội thảo",
    date: "14 tháng 6, 2025",
  },
];

export default function SuKienPage() {
  return (
    <main className="events-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--sukien"
        aria-label="Banner sự kiện"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/dktv_hero.png"
            alt="Banner Sự kiện HUB"
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
              <span className="hero-breadcrumb__current">Sự kiện</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Events Content */}
      <section className="events-content">
        <div className="container">
          <div className="row">
            {/* Featured Event Card */}
            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
              <article className="featured-event">
                <span className="featured-event__category d-lg-none">
                  Trường Đại học Ngân hàng HUB
                </span>
                <h2 className="featured-event__title d-lg-none">Sự Kiện Sắp Tới</h2>
                <Image
                  src="/assets/images/sukien_img5.png"
                  alt="Sự kiện kế tiếp"
                  className="featured-event__image"
                  width={477}
                  height={369}
                  loading="lazy"
                />
                <h2 className="featured-event__title featured-event__title--desktop d-none d-lg-block">
                  Sự Kiện Sắp Tới
                </h2>
                <p className="featured-event__subtitle">
                  &quot;Sẵn sàng bứt phá – Cùng HUB đón chờ sự kiện lớn nhất
                  năm!&quot;
                </p>

                {/* Countdown Timer */}
                <div
                  className="featured-event__countdown event-countdown"
                  aria-label="Thời gian còn lại đến sự kiện"
                >
                  <div className="countdown-item event-countdown__item">
                    <span className="countdown-item__value event-countdown__value">
                      541
                    </span>
                    <span className="countdown-item__label event-countdown__label">
                      Days
                    </span>
                  </div>
                  <div className="countdown-item event-countdown__item">
                    <span className="countdown-item__value event-countdown__value">
                      01
                    </span>
                    <span className="countdown-item__label event-countdown__label">
                      Hrs
                    </span>
                  </div>
                  <div className="countdown-item event-countdown__item">
                    <span className="countdown-item__value event-countdown__value">
                      47
                    </span>
                    <span className="countdown-item__label event-countdown__label">
                      Min
                    </span>
                  </div>
                  <div className="countdown-item event-countdown__item">
                    <span className="countdown-item__value event-countdown__value">
                      54
                    </span>
                    <span className="countdown-item__label event-countdown__label">
                      Sec
                    </span>
                  </div>
                </div>

                <Link href="/su-kien/1" className="featured-event__link">
                  Xem chi tiết
                </Link>
              </article>
            </div>

            {/* Upcoming Events List */}
            <div className="col-12 col-lg-7">
              <div className="upcoming-events">
                <span className="upcoming-events__category">Events</span>
                <h1 className="upcoming-events__title">SỰ KIỆN SẮP TỚI</h1>

                <div className="events-list">
                  {upcomingEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/su-kien/${event.id}`}
                      className="event-card"
                    >
                      <Image
                        src={event.image}
                        alt={event.category}
                        className="event-card__image"
                        width={186}
                        height={169}
                        loading="lazy"
                      />
                      <div className="event-card__content">
                        <span className="event-card__category">{event.category}</span>
                        <h3 className="event-card__title">{event.title}</h3>
                        <p className="event-card__excerpt">{event.excerpt}</p>
                        <div className="event-card__date">
                          <Image
                            src="/assets/images/calendar_primary.png"
                            alt="Calendar"
                            className="event-card__icon"
                            width={15}
                            height={15}
                          />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
