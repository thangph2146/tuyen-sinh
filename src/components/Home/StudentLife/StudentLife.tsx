import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StudentLife: React.FC = () => {
  return (
    <section className="student-life-section" aria-labelledby="student-life-heading">
      <div className="container">
        <div className="student-life-section__grid">
          {/* Header Row - Full width on all screens */}
          <div className="student-life-section__header">
            <p className="student-life-section__label">Đời sống sinh viên</p>
            <h2 id="student-life-heading" className="student-life-section__title">
              TẠI HUB
            </h2>
            <p className="student-life-section__description d-none d-lg-block">
              Môi trường học tập năng động, cơ sở vật chất hiện đại cùng nhiều
              hoạt động ngoại khóa phong phú giúp sinh viên phát triển toàn
              diện cả về kỹ năng chuyên môn lẫn kỹ năng mềm.
            </p>
          </div>

          {/* Images Grid */}
          <div className="student-life-section__images">
            {/* Column 1: Tall Image */}
            <div className="student-life-section__col student-life-section__col--left">
              <Image
                src="/assets/images/doisong_img1.png"
                alt="Hoạt động sinh viên HUB"
                className="student-life-section__image student-life-section__image--tall"
                width={390}
                height={620}
                loading="lazy"
              />
            </div>

            {/* Column 2: 3 Medium Images */}
            <div className="student-life-section__col student-life-section__col--middle">
              <Image
                src="/assets/images/doisong_img2.jpg"
                alt="Thư viện HUB University"
                className="student-life-section__image"
                width={389}
                height={362}
                loading="lazy"
              />
              <Image
                src="/assets/images/doisong_img3.png"
                alt="Khu vực học tập HUB"
                className="student-life-section__image"
                width={389}
                height={255}
                loading="lazy"
              />
              <Image
                src="/assets/images/doisong_img4.png"
                alt="Câu lạc bộ sinh viên HUB"
                className="student-life-section__image"
                width={389}
                height={255}
                loading="lazy"
              />
            </div>

            {/* Column 3: 2 Images */}
            <div className="student-life-section__col student-life-section__col--right">
              <Image
                src="/assets/images/doisong_img5.jpg"
                alt="Sự kiện sinh viên HUB"
                className="student-life-section__image"
                width={387}
                height={497}
                loading="lazy"
              />
              <Image
                src="/assets/images/doisong_img6.png"
                alt="Hoạt động ngoại khóa HUB"
                className="student-life-section__image"
                width={387}
                height={390}
                loading="lazy"
              />
            </div>
          </div>

          {/* View All Link */}
          <Link href="/doi-song-sinh-vien" className="student-life-section__view-all d-sm-none">
            <span>XEM TẤT CẢ</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
