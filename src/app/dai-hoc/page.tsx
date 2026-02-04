import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/DaiHoc/FeatureCard/FeatureCard";
import ProgramCard from "@/components/DaiHoc/ProgramCard/ProgramCard";
import RecruitmentSteps from "@/components/DaiHoc/RecruitmentSteps/RecruitmentSteps";
import FAQSection from "@/components/DaiHoc/FAQSection/FAQSection";

export const metadata: Metadata = {
  title: "Đại Học Chính Quy - Trường Đại Học Ngân Hàng TP.HCM | HUB University",
  description:
    "Chương trình đại học chính quy tại HUB - Học bổng hấp dẫn, giảng viên chất lượng cao, cơ sở vật chất hiện đại, học phí phải chăng. Đăng ký tư vấn ngay!",
  keywords:
    "đại học chính quy HUB, tuyển sinh đại học, học bổng đại học, chương trình đại học ngân hàng, học phí đại học",
  openGraph: {
    title: "Đại Học Chính Quy - HUB University",
    description:
      "Chương trình đại học chính quy với học bổng hấp dẫn, giảng viên giàu kinh nghiệm và cơ sở vật chất hiện đại",
    url: "https://hub.edu.vn/dai-hoc",
    locale: "vi_VN",
  },
};

// Data tiêu chí
const featureCards = [
  {
    id: 1,
    number: "01",
    title: "Cơ sở học bổng",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả.",
    icon: "/assets/images/hocbong.png",
  },
  {
    id: 2,
    number: "02",
    title: "Giảng viên tay nghề cao",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả.",
    icon: "/assets/svg/giangvien.svg",
  },
  {
    id: 3,
    number: "03",
    title: "Cơ sở Thư viện",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả.",
    icon: "/assets/images/thuvien.png",
  },
  {
    id: 4,
    number: "04",
    title: "Giá cả phải chăng",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả.",
    icon: "/assets/svg/hocphi.svg",
  },
];

// Data filter buttons
const filterButtons = [
  { id: "chinh-quy-chuan", label: "đại học chính quy chuẩn" },
  { id: "tieng-anh-ban-phan", label: "đại học chính quy tiếng anh bán phần, đặc biệt" },
  { id: "quoc-te-song-bang", label: "đại học chính quy quốc tế cấp song bằng" },
  { id: "quoc-te-doi-tac", label: "đại học chính quy quốc tế do đối tác cấp bằng" },
  { id: "vua-hoc-vua-lam", label: "đại học hệ vừa học vừa làm" },
  { id: "van-bang-2", label: "đại học văn bằng 2" },
];

// Data chương trình đào tạo
const programs = [
  {
    id: 1,
    title: "tài chính ngân hàng",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img1.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 2,
    title: "quản trị kinh doanh",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img2.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 3,
    title: "ngành kinh tế quốc tế",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img3.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 4,
    title: "ngành marketing",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img4.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 5,
    title: "ngành công nghệ tài chính",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img5.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 6,
    title: "ngành kinh doanh quốc tế",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img6.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 7,
    title: "ngành luật kinh tế",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img7.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 8,
    title: "ngành ngôn ngữ anh",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img8.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
  {
    id: 9,
    title: "ngành khoa học dữ liệu",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
    image: "/assets/images/nganh_img9.png",
    badge: "Financial",
    lessons: 10,
    seats: 100,
    duration: "4 năm",
    category: "chinh-quy-chuan",
  },
];

export default function DaiHocPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--daihoc"
        aria-label="Banner Đại Học Chính Quy"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/hero_bg.png"
            alt="Banner Đại Học Chính Quy HUB"
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
              <span className="hero-breadcrumb__current">Đại học</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION: Hero Content (Welcome Section) */}
      <section
        className="hero-content-section"
        id="hero-content"
        aria-labelledby="hero-content-title"
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-1 order-lg-1 hero-content__right">
              <div className="hero-content__text">
                <p className="hero-content__subtitle">
                  Chào mừng đến với Tuyển sinh
                </p>
                <h1 id="hero-content-title" className="hero-content__title">
                  ĐẠI HỌC CHÍNH QUY CHUẨN
                </h1>
                <p className="hero-content__description">
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
            <div className="col-lg-6 order-2 order-lg-2">
              <div className="hero-content__image-wrapper">
                <div className="hero-content__image-bg"></div>
                <Image
                  src="/assets/images/daihoc_bg.png"
                  alt="Đại học chính quy"
                  className="hero-content__image"
                  width={582}
                  height={388}
                  loading="lazy"
                />
                <Image
                  src="/assets/images/daihoc_decorator.png"
                  alt=""
                  className="hero-content__decoration"
                  width={152}
                  height={152}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Feature Cards - Tiêu chí */}
      <section
        className="feature-cards-section"
        id="tieu-chi"
        aria-labelledby="feature-cards-title"
      >
        <div className="container">
          {/* Desktop & Tablet: Section Title */}
          <div className="text-center mb-5">
            <h2 id="feature-cards-title" className="feature-cards-section__title d-none d-sm-block">
              TIÊU CHÍ
            </h2>
          </div>

          {/* Mobile only: Title box with icon */}
          <div className="feature-cards-section__header d-sm-none mb-4">
            <div className="feature-cards-section__icon-wrapper">
              <Image
                src="/assets/svg/reason.svg"
                alt=""
                width={24}
                height={24}
                className="feature-cards-section__icon"
              />
            </div>
            <div className="feature-cards-section__title-wrapper">
              <h2 className="feature-cards-section__title-mobile">TIÊU CHÍ</h2>
            </div>
          </div>

          <div className="feature-cards-wrapper">
            {featureCards.map((card) => (
              <div key={card.id} className="col-lg-3 col-md-6">
                <FeatureCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Programs Title & Filters */}
      <section
        className="programs-section"
        id="programs"
        aria-labelledby="programs-title"
      >
        <div className="container">
          {/* Desktop & Tablet: Section Title */}
          <div className="programs-section__header text-center mb-4 d-none d-sm-block">
            <p className="programs-section__subtitle">chương trình đào tạo</p>
            <h2 id="programs-title" className="programs-section__title">
              CÁC NGÀNH ĐÀO TẠO
            </h2>
          </div>

          {/* Mobile only: Title box with icon */}
          <div className="programs-section__header d-sm-none mb-4">
            <div className="programs-section__icon-wrapper">
              <Image
                src="/assets/svg/book.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="programs-section__icon"
              />
            </div>
            <div className="programs-section__title-wrapper">
              <p className="programs-section__subtitle">chương trình đào tạo</p>
              <h2 className="programs-section__title">CÁC NGÀNH ĐÀO TẠO</h2>
            </div>
          </div>

          {/* Filter Buttons - Horizontal scroll on mobile */}
          <div
            className="filter-buttons mb-4"
            role="group"
            aria-label="Lọc chương trình đào tạo"
          >
            {filterButtons.map((btn, index) => (
              <button
                key={btn.id}
                className={`filter-button ${index === 0 ? "filter-button--active" : ""}`}
                type="button"
                data-filter={btn.id}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Program Cards Grid */}
          <div className="row g-4 mb-4" data-program-grid>
            {programs.map((program) => (
              <div
                key={program.id}
                className="col-lg-4 col-md-6"
                data-category={program.category}
              >
                <ProgramCard program={program} />
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

          {/* Pagination - Hidden on mobile, dynamically generated */}
          <nav
            className="pagination d-none d-sm-flex"
            aria-label="Phân trang chương trình đào tạo"
          >
            <button
              className="pagination__button pagination__button--prev"
              type="button"
              aria-label="Trang trước"
            >
              <Image
                src="/assets/svg/d-arrow-left.svg"
                alt=""
                width={11}
                height={10}
                loading="lazy"
              />
            </button>
            {/* Page buttons will be dynamically generated by JS */}
            <button
              className="pagination__button pagination__button--next"
              type="button"
              aria-label="Trang sau"
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
        </div>
      </section>

      {/* SECTION: Recruitment Process */}
      <RecruitmentSteps />

      {/* SECTION: FAQ */}
      <FAQSection />
    </>
  );
}
