import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chương Trình Đào Tạo Thạc Sĩ | HUB University",
  description:
    "Chương trình đào tạo Thạc sĩ tại HUB University - Nâng cao trình độ chuyên môn với các ngành đào tạo chất lượng cao",
  keywords:
    "thạc sĩ, sau đại học, đào tạo thạc sĩ, HUB University, tuyển sinh thạc sĩ",
  openGraph: {
    title: "Chương Trình Đào Tạo Thạc Sĩ - HUB University",
    description: "Chương trình đào tạo Thạc sĩ với chất lượng cao tại HUB University",
    url: "https://hub.edu.vn/thac-si",
    locale: "vi_VN",
  },
};

// Sample programs data
const programs = [
  {
    id: 1,
    title: "tài chính ngân hàng",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img3.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 2,
    title: "quản trị kinh doanh",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img4.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 3,
    title: "ngành kinh tế quốc tế",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img5.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 4,
    title: "ngành marketing",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img6.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 5,
    title: "ngành công nghệ tài chính",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img7.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 6,
    title: "ngành kinh doanh quốc tế",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img8.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 7,
    title: "ngành luật kinh tế",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/thacsi_img9.png",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 8,
    title: "ngành ngôn ngữ anh",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/tsnh_img2.jpg",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
  {
    id: 9,
    title: "ngành khoa học dữ liệu",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/tsnh_img3.jpg",
    badge: "Financial",
    lessons: "10 Lessons",
    seats: "100 Chỗ ngồi",
    duration: "4 năm",
  },
];

const accordionItems = [
  {
    id: 1,
    title: "Phương thức xét tuyển",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn.",
  },
  {
    id: 2,
    title: "Đối tượng và điều kiện dự tuyển",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 3,
    title: "Hồ sơ dự tuyển",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 4,
    title: "Các quy định về thời gian và lệ phí dự tuyển",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 5,
    title: "Hướng dẫn đóng lệ phí",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
];

export default function ThacSiPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--thacsi"
        aria-label="Banner Thạc sĩ"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/hero_bg.png"
            alt="Chương trình đào tạo Thạc sĩ HUB University"
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
              <span className="hero-breadcrumb__current">Thạc sĩ</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Program Introduction Section */}
      <section className="program-intro" aria-label="Giới thiệu chương trình Thạc sĩ">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <div className="program-intro__image-wrapper">
                <Image
                  src="/assets/images/thacsi_img1.png"
                  alt="Sinh viên Thạc sĩ HUB University"
                  className="program-intro__image"
                  width={553}
                  height={366}
                  loading="lazy"
                />
                <div className="program-intro__decoration" aria-hidden="true"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="program-intro__content">
                <h1 className="program-intro__title">
                  <span className="program-intro__title-sub">SAU ĐẠI HỌC</span>
                  <span className="program-intro__title-main">
                    CHƯƠNG TRÌNH ĐÀO TẠO THẠC SĨ
                  </span>
                </h1>
                <p className="program-intro__description">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                  trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
                  như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                  khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                  một bản mẫu văn bản.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Hidden on mobile */}
      <section
        className="stats-section-wrapper d-none d-sm-block"
        aria-label="Thống kê HUB University"
      >
        <div className="container">
          <div className="stats-section stats-section--thacsi">
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-item__number">16k</div>
                  <div className="stat-item__label">sinh viên</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-item__number">500</div>
                  <div className="stat-item__label">Cán bộ, giảng viên</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-item__number">238</div>
                  <div className="stat-item__label">Thạc sĩ</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-item__number">197</div>
                  <div className="stat-item__label">tiến sĩ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className="program-cards-section" aria-label="Các ngành đào tạo Thạc sĩ">
        <div className="container">
          {/* Desktop & Tablet: Section Header */}
          <div className="section-header text-center d-none d-sm-block">
            <p className="section-header__subtitle">chương trình đào tạo</p>
            <h2 className="section-header__title">
              CÁC NGÀNH ĐÀO TẠO THẠC SĨ TẠI HUB
            </h2>
          </div>

          {/* Mobile: Title box with icon */}
          <div className="mobile-title-box mobile-title-box--sm d-sm-none mb-4">
            <div className="mobile-title-box__icon">
              <Image
                src="/assets/svg/book.svg"
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
              />
            </div>
            <div className="mobile-title-box__content">
              <p className="mobile-title-box__overline">chương trình đào tạo</p>
              <h2 className="mobile-title-box__title">
                CÁC NGÀNH ĐÀO TẠO THẠC SĨ TẠI HUB
              </h2>
            </div>
          </div>

          <div className="program-cards-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card-item">
                <Link href={`/thac-si/${program.id}`} className="program-card">
                  <div className="program-card__image-wrapper">
                    <Image
                      src={program.image}
                      alt={program.title}
                      className="program-card__image"
                      width={400}
                      height={250}
                      loading="lazy"
                    />
                    <div className="program-card__badge">
                      <Image
                        src="/assets/images/bookmark.png"
                        alt=""
                        className="program-card__badge-icon"
                        width={24}
                        height={24}
                      />
                      <span className="program-card__badge-text">{program.badge}</span>
                    </div>
                  </div>
                  <div className="program-card__content">
                    <div className="program-card__meta">
                      <Image
                        src="/assets/images/lesson.png"
                        alt=""
                        className="program-card__meta-icon"
                        width={16}
                        height={16}
                      />
                      <span className="program-card__meta-text">{program.lessons}</span>
                    </div>
                    <h3 className="program-card__title">{program.title}</h3>
                    <p className="program-card__description">{program.description}</p>
                    <div className="program-card__footer">
                      <div className="program-card__info">
                        <Image
                          src="/assets/images/group.png"
                          alt=""
                          className="program-card__info-icon"
                          width={16}
                          height={16}
                        />
                        <span className="program-card__info-text">{program.seats}</span>
                      </div>
                      <div className="program-card__info">
                        <Image
                          src="/assets/images/clock_primary.png"
                          alt=""
                          className="program-card__info-icon"
                          width={16}
                          height={16}
                        />
                        <span className="program-card__info-text">{program.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Slider Navigation */}
          <nav
            className="program-slider-nav d-sm-none"
            aria-label="Điều hướng slider"
          >
            <button
              className="program-slider-nav__btn program-slider-nav__btn--prev"
              type="button"
              aria-label="Slide trước"
            >
              <Image
                src="/assets/svg/d-arrow-left.svg"
                alt=""
                width={11}
                height={10}
                loading="lazy"
              />
            </button>
            <button
              className="program-slider-nav__btn program-slider-nav__btn--next"
              type="button"
              aria-label="Slide sau"
            >
              <Image
                src="/assets/svg/d-arrow-right.svg"
                alt=""
                width={11}
                height={10}
                loading="lazy"
              />
            </button>
          </nav>

          {/* Pagination - Desktop/Tablet only */}
          <nav
            className="program-pagination d-none d-md-flex"
            aria-label="Phân trang ngành đào tạo"
          >
            <button
              className="program-pagination__btn program-pagination__btn--prev"
              aria-label="Trang trước"
            >
              <Image src="/assets/svg/d-arrow-left.svg" alt="" width={11} height={10} />
            </button>
            <button
              className="program-pagination__btn program-pagination__btn--next"
              aria-label="Trang kế tiếp"
            >
              <Image src="/assets/svg/d-arrow-right.svg" alt="" width={11} height={10} />
            </button>
          </nav>
        </div>
      </section>

      {/* Tuition Table Section */}
      <section className="tuition-section" aria-label="Học phí">
        <div className="container">
          <h2 className="tuition-section__title">Học phí</h2>
          <p className="tuition-section__description">
            Học phí tính theo số tín chỉ thực nghi, áp dụng theo 3 mức tương ứng từng
            năm học
          </p>

          <div className="tuition-table-wrapper">
            <table className="tuition-table">
              <thead>
                <tr>
                  <th>học kỳ</th>
                  <th>thời gian</th>
                  <th>học phí (đồng)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1.000.000 VND/tín chỉ, tổng chương trình 60 tín chỉ</td>
                  <td className="tuition-table__price">60.000.000 VNĐ</td>
                </tr>
                <tr className="tuition-table__row--alt">
                  <td>2</td>
                  <td>
                    Khi nhập học, bạn đóng trước 30 tín chỉ, cộng các khoản phí khác
                    theo quy định
                  </td>
                  <td className="tuition-table__price">30.000.000 VNĐ</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lệ phí xét tuyển (nộp hồ sơ)</td>
                  <td className="tuition-table__price">700.000 VNĐ</td>
                </tr>
              </tbody>
            </table>
            <p className="tuition-table__note">
              (Mức học phí trên chưa áp dụng các chính sách học bổng liên quan)
            </p>
          </div>
        </div>
      </section>

      {/* Training Orientation Section */}
      <section className="training-orientation" aria-label="Định hướng đào tạo">
        <div className="container">
          {/* Mobile Title Box - Mobile only */}
          <div className="mobile-title-box mobile-title-box--filled d-sm-none">
            <div className="mobile-title-box__icon">
              <Image
                src="/assets/svg/training.svg"
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <div className="mobile-title-box__content">
              <span className="mobile-title-box__overline">
                Trường Đại học Ngân Hàng HUB
              </span>
              <h2 className="mobile-title-box__title">Định Hướng Đào Tạo</h2>
            </div>
          </div>

          <div className="row align-items-start">
            <div className="col-lg-6">
              <div className="training-orientation__content">
                <h2 className="training-orientation__title d-none d-sm-block">
                  ĐỊNH HƯỚNG ĐÀO TẠO
                </h2>

                <div className="training-orientation__section">
                  <h3 className="training-orientation__subtitle">mô tả</h3>
                  <p className="training-orientation__text">
                    Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                    trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử
                    dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm
                    1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo
                    thành một.
                  </p>
                </div>

                <ol className="training-orientation__list training-orientation__list--ordered">
                  <li className="training-orientation__item">
                    <h3 className="training-orientation__subtitle">Mục tiêu đào tạo</h3>
                    <ul className="training-orientation__sublist">
                      <li>
                        Trang bị kiến thức chuyên sâu, hệ thống và hiện đại về lĩnh vực
                        chuyên ngành.
                      </li>
                      <li>
                        Phát triển kỹ năng nghiên cứu, phân tích, đánh giá và ra quyết
                        định.
                      </li>
                      <li>
                        Bồi dưỡng năng lực quản lý, lãnh đạo, giải quyết vấn đề.
                      </li>
                      <li>
                        Hình thành tư duy đổi mới sáng tạo, khả năng ứng dụng kiến thức
                        vào thực tiễn.
                      </li>
                    </ul>
                  </li>

                  <li className="training-orientation__item">
                    <h3 className="training-orientation__subtitle">
                      Định hướng chương trình
                    </h3>
                    <ul className="training-orientation__sublist">
                      <li>
                        <strong>Định hướng nghiên cứu:</strong> phục vụ cho những học
                        viên mong muốn tiếp tục học lên Tiến sĩ hoặc làm công tác nghiên
                        cứu, giảng dạy.
                      </li>
                      <li>
                        <strong>Định hướng ứng dụng:</strong> dành cho học viên muốn nâng
                        cao kỹ năng quản lý, phân tích và triển khai công việc tại doanh
                        nghiệp, tổ chức.
                      </li>
                    </ul>
                  </li>

                  <li className="training-orientation__item">
                    <h3 className="training-orientation__subtitle">Phương pháp đào tạo</h3>
                    <ul className="training-orientation__sublist">
                      <li>
                        Kết hợp lý thuyết & thực tiễn thông qua case study, dự án nhóm,
                        hội thảo chuyên đề.
                      </li>
                      <li>
                        Tăng cường trải nghiệm thực tế qua báo cáo thực tập, tham quan
                        doanh nghiệp, tọa đàm với chuyên gia.
                      </li>
                    </ul>
                  </li>

                  <li className="training-orientation__item">
                    <h3 className="training-orientation__subtitle">Chuẩn đầu ra</h3>
                    <ul className="training-orientation__sublist">
                      <li>Kiến thức chuyên môn vững vàng, tư duy phân tích logic.</li>
                      <li>Kỹ năng ngoại ngữ</li>
                      <li>Năng lực nghiên cứu độc lập và làm việc nhóm hiệu quả.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="training-orientation__image-wrapper">
                <Image
                  src="/assets/images/thacsi_img12.png"
                  alt="Sinh viên sau đại học HUB"
                  className="training-orientation__image"
                  width={600}
                  height={800}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Criteria Section */}
      <section className="admission-criteria" aria-label="Tiêu chí xét tuyển">
        <div className="container">
          {/* Mobile Title Box - Mobile only */}
          <div className="mobile-title-box d-sm-none">
            <div className="mobile-title-box__icon">
              <Image
                src="/assets/svg/question.svg"
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <div className="mobile-title-box__content">
              <span className="mobile-title-box__overline">
                Trường Đại học Ngân Hàng HUB
              </span>
              <h2 className="mobile-title-box__title">Tiêu Chí Xét Tuyển</h2>
            </div>
          </div>

          {/* Desktop & Tablet title */}
          <h2 className="admission-criteria__title d-none d-sm-block">
            tiêu chí xét tuyển
          </h2>

          <div className="row">
            {/* Image - Hidden on mobile */}
            <div className="col-lg-6 d-none d-sm-block">
              <div className="admission-criteria__image-wrapper">
                <Image
                  src="/assets/images/thacsi_img13.png"
                  alt="Tuyển sinh Thạc sĩ"
                  className="admission-criteria__image"
                  width={600}
                  height={800}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="admission-accordion"
                role="tablist"
                aria-label="Các tiêu chí xét tuyển"
              >
                {accordionItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`admission-accordion__item ${
                      index === 0 ? "admission-accordion__item--active" : ""
                    }`}
                  >
                    <button
                      className="admission-accordion__header"
                      id={`accordion-${item.id}-header`}
                      aria-expanded={index === 0}
                      aria-controls={`accordion-${item.id}-content`}
                    >
                      {item.title}
                    </button>
                    <div
                      className="admission-accordion__content"
                      id={`accordion-${item.id}-content`}
                      role="region"
                      aria-labelledby={`accordion-${item.id}-header`}
                      {...(index !== 0 && { hidden: true })}
                    >
                      <p>{item.content}</p>
                    </div>
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
