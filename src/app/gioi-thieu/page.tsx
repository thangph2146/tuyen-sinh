import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamCard from "@/components/GioiThieu/TeamCard/TeamCard";

export const metadata: Metadata = {
  title: "Giới Thiệu - Trường Đại Học Ngân Hàng TP.HCM | HUB University",
  description:
    "Tìm hiểu về Trường Đại Học Ngân Hàng TP.HCM - HUB University. Đội ngũ lãnh đạo, giảng viên tâm huyết, cơ sở vật chất hiện đại, môi trường đào tạo chuyên nghiệp.",
  keywords:
    "giới thiệu HUB, đội ngũ lãnh đạo, giảng viên HUB, trường đại học ngân hàng, giới thiệu trường",
  openGraph: {
    title: "Giới Thiệu - HUB University",
    description:
      "Tìm hiểu về đội ngũ lãnh đạo và giảng viên tâm huyết của Trường Đại Học Ngân Hàng TP.HCM",
    url: "https://hub.edu.vn/gioi-thieu",
    locale: "vi_VN",
  },
};

// Data đội ngũ giảng viên
const teamMembers = [
  {
    id: 1,
    name: "NGƯT.PGS.TS. ĐOÀN THANH HÀ",
    position: "Bí Thư Đảng Ủy\nChủ Tịch Hội Đồng Trường",
    image: "/assets/images/giangvien1.png",
    email: "informail@gmail.com",
    phone: "+1234567890",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "PGS.TS. NGUYỄN ĐỨC TRUNG",
    position: "Phó Bí Thư Đảng Ủy\nPhó Chủ Tịch Hội Đồng Trường\nHiệu Trưởng",
    image: "/assets/images/giangvien2.png",
    email: "informail@gmail.com",
    phone: "+1234567890",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "PGS.TS. HẠ THỊ THIỀU DAO",
    position: "Phó Hiệu Trưởng",
    image: "/assets/images/giangvien3.png",
    email: "informail@gmail.com",
    phone: "+1234567890",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "TS. NGUYỄN TRẦN PHÚC",
    position: "Phó Hiệu Trưởng",
    image: "/assets/images/giangvien4.png",
    email: "informail@gmail.com",
    phone: "+1234567890",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function GioiThieuPage() {
  return (
    <>
      {/* SECTION: Hero Banner */}
      <section
        className="hero-section hero-section--banner hero-section--about"
        aria-label="Banner Giới Thiệu"
      >
        {/* Background image */}
        <div className="hero-section__bg">
          <Image
            src="/assets/images/hero_bg.png"
            alt="Banner Giới thiệu HUB University"
            width={1920}
            height={600}
            priority
            className="w-100 h-auto"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-section__overlay">
          <div className="container h-100">
            <div className="hero-section__content">
              <h1 id="hero-title" className="hero-section__title visually-hidden">
                Giới Thiệu Về HUB University
              </h1>
            </div>
          </div>
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
              <span className="hero-breadcrumb__current">Về chúng tôi</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION: About Us */}
      <section className="about-intro" id="about-us" aria-labelledby="about-title">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Column: Text Content */}
            <div className="col-lg-6 order-1 order-lg-1">
              <p className="about-intro__subtitle text-uppercase mb-2">About Us</p>
              <h1 id="about-title" className="about-intro__title mb-4">
                Trường Đại Học Ngân Hàng
                <br />
                Thành phố Hồ Chí Minh
              </h1>
              <div className="about-intro__description">
                <p>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                  việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                  được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn
                  từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                  bản với nhau để tạo thành một bản mẫu văn bản.
                </p>
                <p>
                  Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được
                  áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị
                  thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc
                  bán...
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6 order-2 order-lg-2">
              <div className="about-intro__image-wrapper">
                <Image
                  src="/assets/images/about_bg1.jpg"
                  alt="Khuôn viên Trường Đại Học Ngân Hàng TP.HCM"
                  className="about-intro__image img-fluid"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Team & Faculty */}
      <section className="team-section" id="team" aria-labelledby="team-title">
        <div className="container">
          {/* Desktop Section Header */}
          <div className="team-section__header text-center mb-5 d-none d-sm-block">
            <h2 id="team-title" className="team-section__title">
              ĐỘI NGŨ GIẢNG VIÊN
            </h2>
            <p className="team-section__description mx-auto">
              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được
              sử dụng như một văn bản chuẩn
            </p>
          </div>

          {/* Mobile Section Header */}
          <div className="mobile-title-box d-sm-none mb-4">
            <div className="mobile-title-box__icon">
              <Image
                src="/assets/svg/people.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </div>
            <div className="mobile-title-box__content">
              <p className="mobile-title-box__overline">KHÁM PHÁ</p>
              <h2 className="mobile-title-box__title">ĐỘI NGŨ GIẢNG VIÊN</h2>
            </div>
          </div>

          {/* Team Cards Grid */}
          <div className="row g-4 mb-4">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.id} className="col-sm-6 col-lg-6">
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          {/* Team Cards Grid - Row 2 */}
          <div className="row g-4">
            {teamMembers.slice(2, 4).map((member) => (
              <div key={member.id} className="col-sm-6 col-lg-6">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
