import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi tiết Sự Kiện | HUB University",
  description: "Thông tin chi tiết về sự kiện tại Trường Đại học Ngân hàng TP. Hồ Chí Minh",
  keywords: "sự kiện HUB, chi tiết sự kiện, hoạt động sinh viên",
  openGraph: {
    title: "Chi tiết Sự Kiện - HUB University",
    description: "Thông tin chi tiết về sự kiện tại HUB University",
    url: "https://hub.edu.vn/su-kien",
    locale: "vi_VN",
  },
};

// Related events
const relatedEvents = [
  {
    id: 1,
    title: "Thông báo tuyển sinh – Kế hoạch xét tuyển 2025",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/sukien_img9.png",
  },
  {
    id: 2,
    title: "Các chương trình học mới – chương trình chất lượng cao",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/sukien_img9.png",
  },
  {
    id: 3,
    title: "Hội thảo khởi nghiệp và đổi mới sáng tạo",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/sukien_img9.png",
  },
];

export default function SuKienDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="event-detail-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--sukienchitiet"
        aria-label="Banner sự kiện"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/dktv_hero.png"
            alt="Banner Chi tiết sự kiện HUB"
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
              <Link href="/su-kien" className="hero-breadcrumb__link">
                Sự kiện
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Chi tiết sự kiện</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Featured Image */}
      <section className="event-detail-featured">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Image
                src="/assets/images/skct_img1.png"
                alt="Hình ảnh sự kiện"
                className="event-detail-featured__image"
                width={1200}
                height={438}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview & Content */}
      <section className="event-detail-overview">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="event-detail-overview__title">Tổng quan sự kiện:</h1>
              <p className="event-detail-overview__text">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ,
                mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề
                bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán
                những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được
                sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
              </p>

              <div className="event-detail-divider"></div>

              <p className="event-detail-overview__text">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.
              </p>

              {/* Event Info List */}
              <ul className="event-detail-info">
                <li className="event-detail-info__item">
                  <Image
                    src="/assets/svg/check_primary.svg"
                    alt=""
                    className="event-detail-info__icon"
                    width={16}
                    height={16}
                  />
                  <span>
                    Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                    trình bày và dàn trang phục vụ cho in ấn.
                  </span>
                </li>
                <li className="event-detail-info__item">
                  <Image
                    src="/assets/svg/check_primary.svg"
                    alt=""
                    className="event-detail-info__icon"
                    width={16}
                    height={16}
                  />
                  <span>
                    Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                    trình bày và dàn trang phục vụ cho in ấn.
                  </span>
                </li>
              </ul>

              <p className="event-detail-overview__text">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ,
                mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề
                bị thay đổi.
              </p>

              <p className="event-detail-overview__text">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ,
                mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề
                bị thay đổi.
              </p>

              <p className="event-detail-overview__text">
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
        </div>
      </section>

      {/* Related Events */}
      <section className="announcements-highlighted">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="announcements-highlighted__title">SỰ KIỆN LIÊN QUAN</h2>
            </div>
          </div>

          {/* News Grid */}
          <div className="row">
            <div className="col-12">
              <div className="announcements-highlighted__wrapper">
                <div className="announcements-highlighted__track">
                  {relatedEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/su-kien/${event.id}`}
                      className="event-card event-card--list"
                    >
                      <Image
                        src={event.image}
                        alt="Sự kiện liên quan"
                        className="event-card__thumbnail"
                        width={186}
                        height={169}
                        loading="lazy"
                      />
                      <div className="event-card__content">
                        <h3 className="event-card__title">{event.title}</h3>
                        <p className="event-card__excerpt">{event.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <nav className="news-pagination" aria-label="Phân trang sự kiện liên quan">
                <button
                  className="news-pagination__btn news-pagination__btn--prev"
                  aria-label="Trang trước"
                >
                  <Image
                    src="/assets/svg/d-arrow-left.svg"
                    alt=""
                    width={11}
                    height={10}
                  />
                </button>
                <button
                  className="news-pagination__btn news-pagination__btn--next"
                  aria-label="Trang sau"
                >
                  <Image
                    src="/assets/svg/d-arrow-right.svg"
                    alt=""
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
