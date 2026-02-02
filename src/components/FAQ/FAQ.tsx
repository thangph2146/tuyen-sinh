'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Về Tuyển sinh – Đại học, Thạc sĩ, Tiến sĩ?',
      answer: 'HUB University tuyển sinh các hệ đại học chính quy, vừa làm vừa học, liên kết quốc tế cùng các chương trình sau đại học (Thạc sĩ, Tiến sĩ). Thí sinh có thể đăng ký xét tuyển qua điểm thi tốt nghiệp THPT, học bạ hoặc kết quả thi riêng của trường.'
    },
    {
      id: 2,
      question: 'Về Chương trình đào tạo?',
      answer: 'HUB University cung cấp các chương trình đào tạo đa dạng trong lĩnh vực Ngân hàng, Tài chính, Kế toán và Quản trị Kinh doanh. Chương trình học được thiết kế theo chuẩn quốc tế, kết hợp lý thuyết và thực hành, với đội ngũ giảng viên giàu kinh nghiệm và cơ sở vật chất hiện đại.'
    },
    {
      id: 3,
      question: 'Học phí – Học bổng?',
      answer: 'Học phí tại HUB University dao động từ 18-25 triệu đồng/năm tùy theo ngành học và hệ đào tạo. Trường có nhiều chương trình học bổng hấp dẫn: học bổng khuyến khích học tập (từ 30-100% học phí), học bổng tài năng cho sinh viên xuất sắc, và các chương trình hỗ trợ tài chính cho sinh viên có hoàn cảnh khó khăn.'
    },
    {
      id: 4,
      question: 'Cơ hội việc làm – Thực tập?',
      answer: 'HUB University có mạng lưới đối tác rộng khắp với hơn 200 ngân hàng, công ty tài chính và doanh nghiệp hàng đầu. Sinh viên được tham gia các chương trình thực tập tại các ngân hàng lớn như Vietcombank, BIDV, MB Bank, Techcombank. Tỷ lệ sinh viên có việc làm sau tốt nghiệp đạt trên 95%.'
    },
    {
      id: 5,
      question: 'Cơ sở vật chất – Sinh hoạt sinh viên?',
      answer: 'Trường có 3 cơ sở tại TP.HCM với hệ thống phòng học hiện đại, phòng thí nghiệm ngân hàng mô phỏng, thư viện điện tử với hơn 50,000 đầu sách. Ký túc xá sinh viên đầy đủ tiện nghi, nhiều câu lạc bộ và hoạt động ngoại khóa phong phú giúp sinh viên phát triển toàn diện.'
    },
    {
      id: 6,
      question: 'Học chuyển tiếp – Quốc tế hóa?',
      answer: 'HUB University có chương trình liên kết với nhiều trường đại học danh tiếng tại Úc, Mỹ, Anh, Singapore. Sinh viên có thể chuyển tiếp sang các trường đối tác để lấy bằng quốc tế. Ngoài ra, trường còn có chương trình trao đổi sinh viên, học bổng du học và nhiều cơ hội tham gia các hội nghị, hội thảo quốc tế.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      className="faq-section section-spacing" 
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="faq-section__image-wrapper d-none d-sm-block">
              <Image
                src="/assets/images/cauhoi_img1.png"
                alt="Sinh viên HUB University"
                fill
                sizes="(max-width: 992px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
                className="faq-section__image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <h2 
              id="faq-heading"
              className="section-title faq-section__heading-main d-none d-sm-block"
            >
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <p className="faq-section__subtitle faq-section__subtitle--line d-none d-sm-block">
              HUB - Nơi hội tụ tinh hoa tài chính
            </p>
            <p className="faq-section__subtitle faq-section__subtitle--line d-none d-sm-block">
              Dẫn đầu giáo dục tài chính - Ngân hàng
            </p>

            {/* Mobile-only FAQ header */}
            <div
              className="mobile-title-box mobile-title-box--lg d-sm-none"
              aria-hidden="true"
            >
              <div className="mobile-title-box__icon">
                <Image
                  src="/assets/svg/question.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </div>
              <div className="mobile-title-box__content">
                <p className="mobile-title-box__overline">
                  TRƯỜNG ĐẠI HỌC NGÂN HÀNG HUB
                </p>
                <h2 className="mobile-title-box__title">CÂU HỎI THƯỜNG GẶP</h2>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`faq-item ${activeIndex === index ? 'faq-item--active' : ''}`}
                >
                  <button
                    className="faq-item__header"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-content-${faq.id}`}
                  >
                    <h3 className="faq-item__question">{faq.question}</h3>
                    <span className="faq-item__icon" aria-hidden="true"></span>
                  </button>
                  <div
                    id={`faq-content-${faq.id}`}
                    className="faq-item__content"
                    role="region"
                  >
                    <p className="faq-item__answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/faq/" className="faq-section__view-all">
              <span>Xem thêm câu hỏi</span>
              <span
                className="iconify faq-section__view-all-icon"
                data-icon="mdi:arrow-right"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;