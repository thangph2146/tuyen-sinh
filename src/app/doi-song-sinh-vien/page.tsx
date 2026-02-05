import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ActivityCard from "@/components/DoiSongSinhVien/ActivityCard/ActivityCard";
import DormCard from "@/components/DoiSongSinhVien/DormCard/DormCard";

export const metadata: Metadata = {
  title: "Đời Sống Sinh Viên | HUB University",
  description:
    "Khám phá đời sống sinh viên tại HUB University - hoạt động học tập, rèn luyện, ký túc xá, thư viện và nhiều tiện ích hỗ trợ sinh viên",
  keywords:
    "đời sống sinh viên HUB, ký túc xá, thư viện, hoạt động ngoại khóa, thể thao, văn nghệ",
  openGraph: {
    title: "Đời Sống Sinh Viên - HUB University",
    description: "Khám phá đời sống sinh viên tại HUB University",
    url: "https://hub.edu.vn/doi-song-sinh-vien",
    locale: "vi_VN",
  },
};

// Data hoạt động sinh viên
const activities = [
  {
    id: 1,
    slug: "mon-the-thao-1",
    title: "Tên môn thể thao",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/dssv_img1.png",
    badge: "Thể thao",
    badgeType: "primary" as const,
    icon: "/assets/images/sport.png",
  },
  {
    id: 2,
    slug: "mon-the-thao-2",
    title: "Tên môn thể thao",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/dssv_img2.png",
    badge: "Văn nghệ",
    badgeType: "primary" as const,
    icon: "/assets/images/sing.png",
  },
  {
    id: 3,
    slug: "mon-the-thao-3",
    title: "Tên môn thể thao",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/dssv_img3.png",
    badge: "ANQP",
    badgeType: "primary" as const,
    icon: "/assets/images/national_security.png",
  },
  {
    id: 4,
    slug: "mon-the-thao-4",
    title: "Tên môn thể thao",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục...",
    image: "/assets/images/dssv_img4.png",
    badge: "Thể thao",
    badgeType: "secondary" as const,
    icon: "/assets/images/sport.png",
  },
  {
    id: 5,
    slug: "hoat-dong-khac-1",
    title: "Hoạt động khác",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả...",
    image: "/assets/images/dssv_img1.png",
    badge: "Thể thao",
    badgeType: "primary" as const,
    icon: "/assets/images/sport.png",
  },
  {
    id: 6,
    slug: "hoat-dong-khac-2",
    title: "Hoạt động khác 2",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả...",
    image: "/assets/images/dssv_img2.png",
    badge: "Văn nghệ",
    badgeType: "primary" as const,
    icon: "/assets/images/sing.png",
  },
  {
    id: 7,
    slug: "hoat-dong-khac-3",
    title: "Hoạt động khác 3",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả...",
    image: "/assets/images/dssv_img3.png",
    badge: "ANQP",
    badgeType: "primary" as const,
    icon: "/assets/images/national_security.png",
  },
  {
    id: 8,
    slug: "hoat-dong-khac-4",
    title: "Hoạt động khác 4",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả...",
    image: "/assets/images/dssv_img4.png",
    badge: "Thể thao",
    badgeType: "secondary" as const,
    icon: "/assets/images/sport.png",
  },
];

// Data phòng ký túc xá
const dormRooms = [
  {
    id: 1,
    title: "Phòng chuẩn",
    image: "/assets/images/dssv_img5.png",
    specs: [
      { icon: "/assets/images/person.png", label: "8 người" },
      { icon: "/assets/images/gender.png", label: "WC dùng chung" },
      { icon: "/assets/images/bed.png", label: "4 giường tầng" },
      { icon: "/assets/images/cost.png", label: "2tr/ người" },
      { icon: "/assets/images/cabinet.png", label: "Cá nhân" },
    ],
  },
  {
    id: 2,
    title: "Phòng dịch vụ 4",
    image: "/assets/images/dssv_img6.png",
    specs: [
      { icon: "/assets/images/person.png", label: "4 người" },
      { icon: "/assets/images/gender.png", label: "WC riêng" },
      { icon: "/assets/images/bed.png", label: "Giường đơn" },
      { icon: "/assets/images/cost.png", label: "5.250tr/ người" },
      { icon: "/assets/images/cabinet.png", label: "Tủ lạnh, lò vi sống" },
    ],
  },
  {
    id: 3,
    title: "Phòng dịch vụ 5",
    image: "/assets/images/dssv_img7.png",
    specs: [
      { icon: "/assets/images/person.png", label: "5 người" },
      { icon: "/assets/images/gender.png", label: "WC riêng" },
      { icon: "/assets/images/bed.png", label: "Giường đơn" },
      { icon: "/assets/images/cost.png", label: "4.250tr/ người" },
      { icon: "/assets/images/cabinet.png", label: "Bàn học cá nhân" },
    ],
  },
];

export default function DoiSongSinhVienPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--doisongsinhvien"
        aria-label="Banner đời sống sinh viên"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/dktv_hero.png"
            alt="Banner Đời sống sinh viên HUB"
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
              <span className="hero-breadcrumb__current">Đời sống sinh viên</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION: Activities Carousel */}
      <section className="activities-carousel">
        <div className="container">
          {/* Header */}
          <div className="student-life-header__content">
            <div className="student-life-header__text">
              <span className="student-life-header__category">HOẠT ĐỘNG</span>
              <h1 className="student-life-header__title">Học Tập & Rèn Luyện</h1>
            </div>
            <div className="student-life-header__controls">
              <button
                className="carousel-nav carousel-nav--prev"
                type="button"
                aria-label="Previous slide"
              >
                <Image
                  src="/assets/svg/arrow-left.svg"
                  alt="Previous"
                  width={25}
                  height={25}
                />
              </button>
              <button
                className="carousel-nav carousel-nav--next"
                type="button"
                aria-label="Next slide"
              >
                <Image
                  src="/assets/svg/arrow-right.svg"
                  alt="Next"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>

          <div className="activities-carousel__track">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          {/* Mobile Slider Navigation */}
          <nav
            className="activities-slider-nav d-sm-none"
            aria-label="Điều hướng slider"
          >
            <button
              className="activities-slider-nav__btn activities-slider-nav__btn--prev"
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
              className="activities-slider-nav__btn activities-slider-nav__btn--next"
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
        </div>
      </section>

      {/* SECTION: Dormitory Info */}
      <section className="dormitory-info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="dormitory-info__title">THÔNG TIN KÝ TÚC XÁ</h2>
              <p className="dormitory-info__intro">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row g-4 row--no-margin-x">
                {dormRooms.map((room) => (
                  <div key={room.id} className="col-12 col-md-6 col-lg-4">
                    <DormCard room={room} />
                  </div>
                ))}
              </div>

              {/* Mobile Slider Navigation Dots */}
              <nav
                className="dorm-slider-nav d-sm-none"
                aria-label="Điều hướng slider ký túc xá"
              >
                <span
                  className="dorm-slider-nav__dot dorm-slider-nav__dot--active"
                  data-index="0"
                ></span>
                <span className="dorm-slider-nav__dot" data-index="1"></span>
                <span className="dorm-slider-nav__dot" data-index="2"></span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Library */}
      <section className="library-section">
        <div className="container">
          {/* Library Info */}
          <div className="library-info">
            <div className="library-section-header">
              <Image
                src="/assets/images/dssv_img8.png"
                alt=""
                className="library-section-header__icon"
                width={30}
                height={30}
              />
              <h2 className="library-section-header__title">
                Thông tin về thư viện
              </h2>
            </div>

            <p className="library-info__intro">
              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được
              sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những
              năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau
              để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã
              tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội
              dung của nó vẫn không hề bị thay đổi.
            </p>

            <ul className="library-info__list">
              <li>
                Thư viện có diện tích lên đến 6.666 m², nằm tại cơ sở Thủ Đức
                (56 Hoàng Diệu II)
              </li>
              <li>
                Kết cấu gồm bốn tầng, kiến trúc hiện đại, là một trong những thư
                viện đẹp và tiện nghi hàng đầu tại TP.HCM .
              </li>
            </ul>
          </div>

          {/* Library Collections */}
          <div className="library-collections">
            <div className="library-section-header">
              <Image
                src="/assets/images/dssv_img9.png"
                alt=""
                className="library-section-header__icon"
                width={30}
                height={30}
              />
              <h2 className="library-section-header__title">
                Bộ sưu tập & thiết bị
              </h2>
            </div>

            <ul className="library-collections__list">
              <li>
                Gần 47.000 đầu sách, với khoảng 359.000 bản tiếng Việt và ngoại
                văn
              </li>
              <li>
                Khoảng 20 máy tính truy cập internet tốc độ cao, dùng để tra cứu
                và truy cập cơ sở dữ liệu
              </li>
              <li>Thư viện phục vụ cùng lúc cho tối đa 600 người đọc</li>
            </ul>
          </div>

          {/* Library Image */}
          <div className="library-image">
            <Image
              src="/assets/images/dssv_img10.png"
              alt="Thư viện HUB University"
              className="library-image__photo"
              width={1200}
              height={610}
              loading="lazy"
            />
          </div>

          {/* Library Database */}
          <div className="library-database">
            <div className="library-section-header">
              <Image
                src="/assets/images/dssv_img11.png"
                alt=""
                className="library-section-header__icon"
                width={30}
                height={30}
              />
              <h2 className="library-section-header__title">
                Truy cập cơ sở dữ liệu
              </h2>
            </div>

            <ul className="library-database__list">
              <li>
                CSDL trong nước như NASATI, các tạp chí điện tử trong nước.
              </li>
              <li>
                CSDL quốc tế: World Bank, ProQuest Central, ScienceDirect, SAGE,
                Emerald e‑Journals, iG Publishing…
              </li>
            </ul>
          </div>

          {/* Library Facilities */}
          <div className="library-facilities">
            <div className="library-section-header">
              <Image
                src="/assets/images/dssv_img12.png"
                alt=""
                className="library-section-header__icon"
                width={30}
                height={30}
              />
              <h2 className="library-section-header__title">
                Cơ sở vật chất & dịch vụ hỗ trợ học tập
              </h2>
            </div>

            <ul className="library-facilities__list">
              <li>
                Không gian yên tĩnh, hiện đại, thoáng mát, phù hợp học tập cá
                nhân và nhóm.
              </li>
              <li>
                Hỗ trợ mượn – trả sách linh hoạt, gia hạn tài liệu tiện lợi .
              </li>
              <li>
                Tổ chức các talkshow, sự kiện chuyên đề – ví dụ &quot;Hành trang lập
                nghiệp qua những trang sách&quot; với sự tham gia của gần 600 sinh
                viên
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
