import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi Tiết Ngành Học | HUB University",
  description: "Thông tin chi tiết về ngành đào tạo tại HUB University",
};

const careers = [
  "Chuyên viên Tài chính doanh nghiệp.",
  "Nhân viên ngân hàng, tín dụng, đầu tư.",
  "Kế toán – Kiểm toán (CFO).",
  "Chuyên viên kinh doanh – bán hàng – chăm sóc khách hàng.",
  "Marketing – Truyền thông – Thương hiệu.",
  "Giảng viên, nghiên cứu sinh.",
];

export default function DaiHocDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="program-detail">
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
              <Link href="/dai-hoc" className="hero-breadcrumb__link">
                Chương trình đào tạo
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Chi tiết ngành học</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Program Header */}
      <section className="program-header">
        <div className="container">
          <h1 className="program-header__title">Tài Chính Và Quản Trị Doanh Nghiệp</h1>
          <div className="program-header__meta">
            <span className="program-header__icon">📅</span>
            <span className="program-header__date">14/7/2025</span>
          </div>
          <div className="program-header__divider"></div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="program-hero">
        <div className="container">
          <Image
            src="/assets/images/tsnh-hero.png"
            alt="Ngành Tài Chính Và Quản Trị Doanh Nghiệp"
            className="program-hero__image"
            width={1200}
            height={600}
            loading="lazy"
          />
        </div>
      </section>

      {/* Program Description */}
      <section className="program-description">
        <div className="container">
          <h2 className="program-description__title">
            Tài Chính Và Quản Trị Doanh Nghiệp Là Gì?
          </h2>
          <div className="program-description__content">
            <p>
              Trong bối cảnh kinh tế toàn cầu, ngành tài chính/quản trị doanh nghiệp
              không chỉ khẳng định vị thế quan trọng trong sự vận hành của thị trường,
              mà còn sẵn sàng lực dốc nhân vụ trình độ cao cấp cho thị trường lao động.
              Nổi trội hoạt định các lĩnh vực nghề nghiệp hấp dẫn và đa dạng nhất trong
              ngành tài chính – ngân hàng. Chương trình Tài chính và Quản trị kinh
              doanh của Trường Đại học Ngân hàng TP. HCM nhằm đào tạo cử nhân tài chính
              có đủ năng lực làm việc tại các công ty, tổ chức tài chính tại Việt Nam
              và quốc tế. Chương trình giúp sinh viên vững về lý thuyết, giỏi về thực
              hành và có khả năng ứng dụng kiến thức vào công việc thực tiễn thực tế.
            </p>
            <p>
              Đây không chỉ là nơi trang bị kiến thức tài chính, quản trị mà còn giúp
              sinh viên rèn luyện kỹ năng giao tiếp, quản lý dự án, làm việc nhóm, giải
              quyết vấn đề – những kỹ năng cần thiết cho sự nghiệp lâu dài trong ngành
              tài chính doanh nghiệp.
            </p>
            <p className="program-description__video-intro">
              <Image
                src="/assets/images/menu.png"
                alt=""
                className="icon-menu"
                width={16}
                height={16}
              />
              Để hiểu thêm về ngành học này, mời các bạn xem video sau!
            </p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="program-qualities">
        <div className="container">
          <h2 className="program-qualities__title">
            Học Tài Chính Và Quản Trị Kinh Doanh Ra Trường Làm Gì?
          </h2>
          <p className="program-qualities__intro">
            Học ngành Tài chính và Quản trị kinh doanh trang bị cho bạn kiến thức về
            tài chính doanh nghiệp và kỹ năng quản trị, mở ra cơ hội làm việc tại các
            công ty tài chính, ngân hàng. Khi tốt nghiệp, bạn có thể đảm nhận các vai
            trò sau tại các công ty, ngân hàng hoặc tổ chức tài chính, như các vị trí:
          </p>
          <ul className="program-qualities__list">
            {careers.map((career, index) => (
              <li key={index}>
                <Image
                  src="/assets/images/menu.png"
                  alt=""
                  className="icon-menu"
                  width={16}
                  height={16}
                />
                <span>{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Career Images */}
      <section className="program-careers-images">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="/assets/images/career_img1.png"
                alt="Machine Learning & Blockchain"
                className="program-careers-images__img"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="col-12 col-md-6">
              <Image
                src="/assets/images/career_img2.png"
                alt="Fintech & AI"
                className="program-careers-images__img"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
