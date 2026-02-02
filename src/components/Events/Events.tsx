'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface EventItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  datetime: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Events: React.FC = () => {
  const eventsData: EventItem[] = [
    {
      id: 1,
      title: 'Ngày hội tuyển sinh HUB 2025',
      excerpt: 'Tham gia ngày hội để tìm hiểu về các chương trình đào tạo, cơ hội học bổng và gặp gỡ giảng viên...',
      date: '14 tháng 6, 2025',
      datetime: '2025-06-14',
      image: '/assets/images/sukien_img1.png',
    },
    {
      id: 2,
      title: 'Hội thảo định hướng nghề nghiệp',
      excerpt: 'Chuyên gia từ các ngân hàng lớn chia sẻ kinh nghiệm và định hướng nghề nghiệp cho sinh viên...',
      date: '14 tháng 6, 2025',
      datetime: '2025-06-14',
      image: '/assets/images/sukien_img2.png',
    },
    {
      id: 3,
      title: 'Workshop kỹ năng mềm',
      excerpt: 'Trang bị kỹ năng giao tiếp, làm việc nhóm và thuyết trình cho sinh viên...',
      date: '14 tháng 6, 2025',
      datetime: '2025-06-14',
      image: '/assets/images/sukien_img3.png',
    },
  ];

  const targetDate = '2026-10-01T00:00:00';

  const calculateTimeLeft = (target: string): TimeLeft => {
    const difference = +new Date(target) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="events-section section-spacing" id="events" aria-labelledby="events-heading">
      <div className="container">
        <h2 id="events-heading" className="section-title events-section__title">
          SỰ KIỆN SẮP TỚI
        </h2>

        <div className="row g-4">
          {/* Event List Cards (Left Column) */}
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="events-section__list">
              {eventsData.map((event) => (
                <Link key={event.id} href="/su-kien-chi-tiet/" className="event-card event-card--list">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="event-card__thumbnail"
                    width={186}
                    height={169}
                    loading="lazy"
                  />
                  <div className="event-card__content">
                    <h3 className="event-card__title">
                      {event.title}
                    </h3>
                    <p className="event-card__excerpt d-none d-sm-block">
                      {event.excerpt}
                    </p>
                    <div className="event-card__meta">
                      <Image
                        src="/assets/images/calendar_primary.png"
                        alt=""
                        className="event-card__icon"
                        width={15}
                        height={15}
                      />
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Event Card (Right Column) */}
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <Link href="/su-kien-chi-tiet/" className="event-card event-card--featured">
              <Image
                src="/assets/images/sukien_img4.png"
                alt="Sự kiện đặc biệt HUB University"
                className="event-card__featured-image"
                width={477}
                height={369}
                loading="lazy"
              />
              <div className="event-card__featured-content">
                <h3 className="event-card__featured-title">Sự Kiện Kế Tiếp</h3>
                <p className="event-card__featured-subtitle">
                  Lễ khai giảng năm học mới 2025-2026
                </p>

                <div
                  className="event-countdown"
                  aria-label="Thời gian còn lại đến sự kiện"
                >
                  <div className="event-countdown__item">
                    <span className="event-countdown__value">{formatNumber(timeLeft.days)}</span>
                    <span className="event-countdown__label">Days</span>
                  </div>
                  <div className="event-countdown__item">
                    <span className="event-countdown__value">{formatNumber(timeLeft.hours)}</span>
                    <span className="event-countdown__label">Hrs</span>
                  </div>
                  <div className="event-countdown__item">
                    <span className="event-countdown__value">{formatNumber(timeLeft.minutes)}</span>
                    <span className="event-countdown__label">Min</span>
                  </div>
                  <div className="event-countdown__item">
                    <span className="event-countdown__value">{formatNumber(timeLeft.seconds)}</span>
                    <span className="event-countdown__label">Sec</span>
                  </div>
                </div>

                <span className="event-card__link">Xem chi tiết</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
