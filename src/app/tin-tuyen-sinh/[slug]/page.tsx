import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Công thức tính điểm xét tuyển của Đại học Ngân hàng TP HCM | HUB University",
  description:
    "Thông tin chi tiết về công thức tính điểm xét tuyển của Đại học Ngân hàng TP HCM - phương thức xét tuyển, chỉ tiêu và điều kiện",
  keywords:
    "điểm xét tuyển HUB, công thức tính điểm, tuyển sinh 2025, Đại học Ngân hàng TPHCM",
  openGraph: {
    title: "Công thức tính điểm xét tuyển của Đại học Ngân hàng TP HCM",
    description: "Thông tin chi tiết về công thức tính điểm xét tuyển của HUB",
    url: "https://hub.edu.vn/tuyen-sinh-chi-tiet",
    locale: "vi_VN",
  },
};

// Related articles data
const relatedArticles = [
  {
    id: 1,
    title:
      "Thông báo Tuyển sinh Đại học Bằng 2 hệ vừa làm vừa học ngành Ngôn ngữ Anh, Luật kinh tế năm 2025",
    excerpt:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn...",
    image: "/assets/images/tsct_img3.png",
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
    image: "/assets/images/tsct_img5.jpg",
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
    image: "/assets/images/tsct_img5.jpg",
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
];

export default function TinTuyenSinhDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="admissions-detail-page">
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
              <Link href="/tin-tuyen-sinh" className="hero-breadcrumb__link">
                Tin tuyển sinh
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">
                Chi tiết tin tuyển sinh
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <section className="admissions-detail-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="admissions-detail-header__title">
                Công thức tính điểm xét tuyển của Đại học Ngân hàng TP HCM
              </h1>

              <div className="admissions-detail-header__meta">
                <Image
                  src="/assets/svg/calendar.svg"
                  alt="Calendar icon"
                  className="admissions-detail-header__icon"
                  width={14}
                  height={14}
                />
                <span className="admissions-detail-header__date">16/07/2025</span>
              </div>

              <div className="admissions-detail-divider"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="admissions-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="admissions-detail-header__intro">
                Trường Đại học Ngân hàng TP HCM (HUB) ngày 17/6 công bố công
                thức tính điểm xét tuyển theo 3 phương thức.
              </p>

              {/* Image 1 */}
              <figure className="admissions-detail-figure">
                <Image
                  src="/assets/images/tsct_img1.jpg"
                  alt="Chỉ tiêu, tổ hợp xét tuyển"
                  className="admissions-detail-figure__image"
                  width={992}
                  height={660}
                  loading="lazy"
                />
                <figcaption className="admissions-detail-figure__caption">
                  Chỉ tiêu, tổ hợp xét tuyển các ngành của Đại học Ngân hàng TP
                  HCM
                </figcaption>
              </figure>

              {/* Content Block 1 */}
              <div className="admissions-detail-text">
                <p>
                  Trường năm nay tuyển gần 4.600 sinh viên, tăng khoảng 300 so
                  với năm ngoái. Năm phương thức xét tuyển, gồm: Tuyển thẳng
                  theo quy định của Bộ Giáo dục và Đào tạo; Xét kết hợp điểm học
                  bạ và thành tích bậc THPT; Xét điểm thi tốt nghiệp THPT 2025;
                  Kết quả kỳ thi đánh giá năng lực V-SAT; Xét học bạ kết hợp
                  phỏng vấn (chương trình do đối tác quốc tế cấp bằng).
                </p>

                <p>
                  Phương thức xét kết hợp học bạ và thành tích áp dụng với cả
                  thí sinh tốt nghiệp năm 2024 và 2025. Nếu tốt nghiệp năm
                  ngoái, thí sinh phải có điểm trung bình học tập học kỳ 2 lớp
                  11 và lớp 12 đạt 6,5 trở lên. Điều kiện với những em tốt
                  nghiệp năm nay là kết quả học tập tối thiểu loại khá.
                </p>

                <p>
                  <strong>Điểm xét tuyển</strong> (thang 150) = Điểm quy đổi
                  theo tổ hợp môn + Điểm quy đổi theo tiêu chí khác (nếu có) +
                  Điểm ưu tiên quy đổi (nếu có). Trong đó, điểm quy đổi theo tổ
                  hợp môn là tổng điểm trung bình theo tổ hợp của học kỳ 2 lớp
                  11 và lớp 12, đã qua quy đổi.
                </p>

                <p>
                  Điểm quy đổi theo tiêu chí khác là tổng điểm quy đổi các chứng
                  chỉ tiếng Anh quốc tế, giải thưởng học sinh giỏi, trường
                  chuyên năng khiếu.Điểm ưu tiên đối tượng, khu vực được quy đổi
                  theo thang 150.
                </p>

                <p>
                  Điểm quy đổi theo kết quả học bạ THPT, giải thưởng học sinh
                  giỏi, trường chuyên như sau:
                </p>
              </div>

              {/* Image 2 */}
              <figure className="admissions-detail-figure">
                <Image
                  src="/assets/images/tsct_img2.jpg"
                  alt="Chỉ tiêu, tổ hợp xét tuyển"
                  className="admissions-detail-figure__image"
                  width={992}
                  height={660}
                  loading="lazy"
                />
                <figcaption className="admissions-detail-figure__caption">
                  Chỉ tiêu, tổ hợp xét tuyển các ngành của Đại học Ngân hàng TP
                  HCM
                </figcaption>
              </figure>

              {/* Content Block 2 */}
              <div className="admissions-detail-text">
                <p>
                  Nếu xét tuyển bằng kết quả kỳ thi đánh giá năng lực V-SAT hoặc
                  điểm thi tốt nghiệp THPT 2025, công thức tính điểm xét tuyển
                  như sau:
                </p>

                <p>
                  Điểm xét tuyển = Tổng điểm 3 môn thi V-SAT/hoặc điểm thi tốt
                  nghiệp THPT + Điểm ưu tiên. Những ngành có môn chính được nhân
                  hệ số 2 sẽ áp dụng công thức:
                </p>

                <p>
                  Điểm xét tuyển = Tổng điểm 3 môn thi V-SAT/thi tốt nghiệp THPT
                  x 3/4 + Điểm ưu tiên.
                </p>

                <p>
                  Đối với chương trình liên kết do đối tác cấp bằng, hội đồng
                  tuyển sinh sẽ căn cứ trên điểm học bạ học kỳ 2 lớp 11 và lớp
                  12, chứng chỉ ngoại ngữ và các yếu tố khác khi phỏng vấn.
                </p>

                <p>
                  Theo quy định của Bộ Giáo dục và Đào tạo, điểm xét tuyển của
                  thí sinh ở các phương thức trên sẽ tiếp tục được quy đổi tương
                  đương.
                </p>

                <p>
                  Năm ngoái, Đại học Ngân hàng TP HCM tuyển hơn 4.300 sinh viên.
                  Điểm chuẩn theo kết quả thi tốt nghiệp từ 20,45 đến 26,36, cao
                  nhất ở ngành Kinh doanh quốc tế.
                </p>
              </div>

              {/* Source Attribution */}
              <p className="admissions-detail-source">Theo báo Vnexpress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="admissions-detail-related">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="admissions-detail-related__title">
                CÁC BÀI VIẾT LIÊN QUAN
              </h2>

              {/* Related Articles List */}
              <div className="related-articles">
                {relatedArticles.map((article, index) => (
                  <div key={article.id}>
                    <Link
                      href={`/tin-tuyen-sinh/${article.id}`}
                      className="related-article"
                    >
                      <Image
                        src={article.image}
                        alt="Bài viết liên quan"
                        className="related-article__image"
                        width={284}
                        height={148}
                        loading="lazy"
                      />
                      <div className="related-article__content">
                        <h3 className="related-article__title">
                          {article.title}
                          {article.isNew && (
                            <span
                              className="related-article__badge"
                              aria-label="Tin mới"
                            >
                              Mới
                            </span>
                          )}
                        </h3>
                        <p className="related-article__excerpt">
                          {article.excerpt}
                        </p>
                      </div>
                    </Link>
                    {index < relatedArticles.length - 1 && (
                      <div className="related-article-divider"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination - Hidden on mobile */}
              <nav
                className="admissions-detail-pagination d-none d-sm-flex"
                aria-label="Phân trang bài viết liên quan"
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
