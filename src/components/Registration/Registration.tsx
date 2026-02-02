'use client';

import React from 'react';

const Registration: React.FC = () => {
  return (
    <section
      className="registration-section section-spacing"
      id="registration"
      aria-labelledby="registration-heading"
    >
      <div className="container">
        <div className="registration-section__wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/dkts_bg.png"
            alt="Banner đăng ký tư vấn tuyển sinh"
            className="registration-section__bg"
            loading="lazy"
          />
          <div className="registration-card">
            <p className="registration-card__subtitle">
              TRƯỜNG ĐẠI HỌC NGÂN HÀNG HUB
            </p>
            <h2 className="registration-card__title" id="registration-heading">
              ĐĂNG KÝ TƯ VẤN
            </h2>

            <form className="registration-form" id="registrationForm" noValidate>
              {/* Row 1: Họ tên & Số điện thoại */}
              <div className="registration-form__row">
                <div className="registration-form__group">
                  <input
                    type="text"
                    className="registration-form__input"
                    id="fullName"
                    placeholder="Họ tên"
                    required
                  />
                </div>
                <div className="registration-form__group">
                  <input
                    type="tel"
                    className="registration-form__input"
                    id="phone"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Email & Địa chỉ */}
              <div className="registration-form__row">
                <div className="registration-form__group">
                  <input
                    type="email"
                    className="registration-form__input"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="registration-form__group">
                  <input
                    type="text"
                    className="registration-form__input"
                    id="address"
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>

              {/* Dropdown: Chọn chương trình */}
              <div className="registration-form__group registration-form__group--full">
                <select
                  className="registration-form__select"
                  id="program"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn chương trình quan tâm
                  </option>
                  <option value="dai-hoc-chinh-quy">Đại học chính quy</option>
                  <option value="lien-thong">Liên thông</option>
                  <option value="chat-luong-cao">Chất lượng cao</option>
                </select>
              </div>

              {/* Dropdown: Chọn ngành học */}
              <div className="registration-form__group registration-form__group--full">
                <select
                  className="registration-form__select"
                  id="major"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn ngành học quan tâm
                  </option>
                  <option value="ngan-hang">Ngân hàng</option>
                  <option value="tai-chinh">Tài chính</option>
                  <option value="ke-toan">Kế toán</option>
                  <option value="quan-tri-kinh-doanh">Quản trị kinh doanh</option>
                </select>
              </div>

              {/* Checkboxes */}
              <div className="registration-form__checkboxes">
                <div className="registration-form__checkbox">
                  <input
                    type="checkbox"
                    className="registration-form__checkbox-input"
                    id="newsletter"
                  />
                  <label
                    className="registration-form__checkbox-label"
                    htmlFor="newsletter"
                  >
                    Đăng ký nhận thông tin tuyển sinh
                  </label>
                </div>
                <div className="registration-form__checkbox">
                  <input
                    type="checkbox"
                    className="registration-form__checkbox-input"
                    id="consultation"
                  />
                  <label
                    className="registration-form__checkbox-label"
                    htmlFor="consultation"
                  >
                    Đăng ký tư vấn
                  </label>
                </div>
              </div>

              {/* Textarea: Nội dung */}
              <div className="registration-form__group registration-form__group--full">
                <textarea
                  className="registration-form__textarea"
                  id="content"
                  placeholder="Nội dung"
                  rows={4}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="registration-form__submit">
                ĐĂNG KÝ NGAY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
