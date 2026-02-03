import Link from 'next/link';

const News = () => {
  const newsList = [
    {
      id: 1,
      title: 'Chương trình liên kết quốc tế tại HUB',
      excerpt: 'Cơ hội học tập và nhận bằng kép từ các trường đại học hàng đầu thế giới...',
      image: '/assets/images/doisong_img3.png',
      date: '07/05/2024',
      datetime: '2024-05-07',
      href: '/tuyen-sinh-chi-tiet',
    },
    {
      id: 2,
      title: 'Học bổng toàn phần cho sinh viên xuất sắc',
      excerpt: 'HUB University trao học bổng toàn phần cho thí sinh đạt điểm cao trong kỳ thi tốt nghiệp...',
      image: '/assets/images/tuyensinh_img3.png',
      date: '07/05/2024',
      datetime: '2024-05-07',
      href: '/tuyen-sinh-chi-tiet',
    },
    {
      id: 3,
      title: 'Cơ hội thực tập tại các ngân hàng lớn',
      excerpt: 'Sinh viên HUB được ưu tiên thực tập và làm việc tại các ngân hàng hàng đầu...',
      image: '/assets/images/tuyensinh_img4.png',
      date: '07/05/2024',
      datetime: '2024-05-07',
      href: '/tuyen-sinh-chi-tiet',
    },
  ];

  return (
    <section
      className="news-section section-spacing"
      id="news"
      aria-labelledby="news-heading"
    >
      <div className="container-fluid px-0">
        <div className="news-section__wrapper">
          <div className="container">
            <h2 id="news-heading" className="section-title text-white mb-5">
              TIN TUYỂN SINH
            </h2>
            <div className="row g-4">
              {/* Featured News */}
              <div className="col-lg-6">
                <Link href="/tuyen-sinh-chi-tiet" className="news-card news-card--featured">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/tuyensinh_img1.png"
                    alt="Thông tin tuyển sinh HUB University 2025"
                    className="news-card__image"
                    width="591"
                    height="286"
                    loading="lazy"
                  />
                  <div className="news-card__content">
                    <h3 className="news-card__title">
                      Thông tin tuyển sinh của trường đại học ngân hàng Tp.Hồ Chí Minh HUB
                    </h3>
                    <hr className="news-card__divider d-sm-none" />
                    <p className="news-card__excerpt">
                      Trường Đại học Ngân hàng TP.HCM thông báo tuyển sinh các hệ đào tạo năm 2025.
                      Nhiều chương trình học bổng hấp dẫn dành cho thí sinh có thành tích cao.
                    </p>
                    <div className="news-card__meta d-sm-none">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/svg/calendar.svg"
                        alt="Ngày đăng"
                        className="news-card__meta-icon"
                        width="16"
                        height="16"
                      />
                      <time dateTime="2024-05-07" className="news-card__meta-date">07/05/2024</time>
                    </div>
                  </div>
                </Link>
              </div>

              {/* News List */}
              <div className="col-lg-6">
                <div className="news-list">
                  {newsList.map((news) => (
                    <Link key={news.id} href={news.href} className="news-card news-card--horizontal">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={news.image}
                        alt={news.title}
                        className="news-card__thumbnail"
                        width="218"
                        height="155"
                        loading="lazy"
                      />
                      <div className="news-card__content">
                        <h4 className="news-card__title">{news.title}</h4>
                        <hr className="news-card__divider d-none d-sm-block" />
                        <p className="news-card__excerpt d-none d-sm-block">{news.excerpt}</p>
                        <div className="news-card__meta">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/assets/svg/calendar.svg"
                            alt="Ngày đăng"
                            className="news-card__meta-icon"
                            width="16"
                            height="16"
                          />
                          <time dateTime={news.datetime} className="news-card__meta-date">{news.date}</time>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
