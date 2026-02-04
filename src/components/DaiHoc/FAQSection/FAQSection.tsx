"use client";

import { useState } from "react";
import Image from "next/image";

const faqItems = [
  {
    id: 1,
    title: "Về Tuyển sinh – Đại học, Thạc sĩ, Tiến sĩ?",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500",
  },
  {
    id: 2,
    title: "Về Chương trình đào tạo?",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 3,
    title: "Học phí – Học bổng?",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 4,
    title: "Cơ hội việc làm – Thực tập?",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 5,
    title: "Cơ sở vật chất – Sinh hoạt sinh viên?",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    id: 6,
    title: "Học chuyển tiếp – Quốc tế hóa?",
    description:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {/* Desktop: Title + Subtitles */}
            <h2 id="faq-title" className="faq-section__title d-none d-sm-block">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <p className="faq-section__subtitle d-none d-sm-block">
              HUB – Nơi hội tụ tinh hoa tài chính
            </p>
            <p className="faq-section__subtitle d-none d-sm-block">
              Dẫn đầu giáo dục tài chính – Ngân hàng
            </p>

            {/* Mobile: Title box with icon */}
            <div className="mobile-title-box mobile-title-box--lg d-sm-none mb-4">
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
              {faqItems.map((item) => (
                <article
                  key={item.id}
                  className={`faq-item ${activeId === item.id ? "faq-item--active" : ""}`}
                >
                  <button
                    className="faq-item__header"
                    type="button"
                    aria-expanded={activeId === item.id}
                    onClick={() => toggleFAQ(item.id)}
                  >
                    <h3 className="faq-item__question">{item.title}</h3>
                    <span className="faq-item__icon" aria-hidden="true"></span>
                  </button>
                  <div className="faq-item__content">
                    <p className="faq-item__answer">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <Image
              src="/assets/images/faq_img.jpg"
              alt="FAQ illustration"
              className="faq-section__image"
              width={452}
              height={520}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
