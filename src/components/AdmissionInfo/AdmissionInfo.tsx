import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AdmissionInfo = () => {
  const latestNews = [
    {
      title: 'Thông báo tuyển sinh đại học chính quy năm 2025',
      date: '15/01/2025',
      href: '/tuyen-sinh-chi-tiet',
    },
    {
      title: 'Học bổng toàn phần cho sinh viên xuất sắc',
      date: '10/01/2025',
      href: '/tuyen-sinh-chi-tiet',
    },
    {
      title: 'Chương trình liên kết quốc tế với các trường đại học hàng đầu',
      date: '05/01/2025',
      href: '/tuyen-sinh-chi-tiet',
    },
  ];

  const admissionNews = [
    {
      title: 'Tuyển sinh sau đại học (Thạc sĩ, Tiến sĩ) năm 2025',
      date: '20/12/2024',
      href: '/tuyen-sinh-chi-tiet',
    },
    {
      title: 'Tuyển sinh văn bằng 2 - Hệ vừa làm vừa học',
      date: '15/12/2024',
      href: '/tuyen-sinh-chi-tiet',
    },
    {
      title: 'Tuyển sinh các chương trình đào tạo từ xa và ngắn hạn',
      date: '10/12/2024',
      href: '/tuyen-sinh-chi-tiet',
    },
  ];

  return (
    <section
      className="admission-info-section"
      aria-labelledby="admission-heading"
    >
      <div className="container-fluid px-0">
        <div className="admission-info-section__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <article className="admission-info-card">
                  <h2
                    id="admission-heading"
                    className="admission-info-card__title"
                  >
                    THÔNG TIN TUYỂN SINH
                  </h2>

                  <h3 className="admission-info-card__section-title">
                    Thông báo mới nhất
                  </h3>
                  <hr className="admission-info-card__divider" />

                  <ul className="admission-info-card__list">
                    {latestNews.map((news, index) => (
                      <li key={index}>
                        <Link href={news.href}>
                          <span className="admission-info-card__text">
                            {news.title}
                          </span>
                          <span className="admission-info-card__date">
                            <Image
                              src="/assets/svg/calendar.svg"
                              alt=""
                              className="admission-info-card__date-icon"
                              width={16}
                              height={16}
                            />
                            <time dateTime={news.date.split('/').reverse().join('-')}>{news.date}</time>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <h3 className="admission-info-card__section-title">
                    Thông báo tuyển sinh
                  </h3>
                  <hr className="admission-info-card__divider" />

                  <ul className="admission-info-card__list">
                    {admissionNews.map((news, index) => (
                      <li key={index}>
                        <Link href={news.href}>
                          <span className="admission-info-card__text">
                            {news.title}
                          </span>
                          <span className="admission-info-card__date">
                            <Image
                              src="/assets/svg/calendar.svg"
                              alt=""
                              className="admission-info-card__date-icon"
                              width={16}
                              height={16}
                            />
                            <time dateTime={news.date.split('/').reverse().join('-')}>{news.date}</time>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="admission-info-card__actions">
                    <Link
                      href="#registration"
                      className="btn admission-info-card__btn d-none d-sm-inline-flex"
                    >
                      <span>Liên Hệ Phòng Tuyển Sinh</span>
                      <span
                        className="admission-info-card__btn-icon"
                        aria-hidden="true"
                      ></span>
                    </Link>
                    <Link
                      href="#registration"
                      className="btn admission-info-card__btn admission-info-card__btn--mobile d-sm-none"
                    >
                      <span>Liên Hệ Phòng Tuyển Sinh</span>
                      <span
                        className="admission-info-card__btn-icon"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </div>
                </article>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
