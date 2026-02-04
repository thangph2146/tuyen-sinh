"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DangKyTuVanPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    program: "",
    major: "",
    newsletter: false,
    consultation: false,
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showSnackbar = (message: string, type: "success" | "error") => {
    setSnackbar({ message, type });
    setTimeout(() => setSnackbar(null), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      showSnackbar("Vui lòng nhập họ tên", "error");
      return;
    }
    if (!formData.phone.trim()) {
      showSnackbar("Vui lòng nhập số điện thoại", "error");
      return;
    }
    if (!formData.email.trim()) {
      showSnackbar("Vui lòng nhập email", "error");
      return;
    }
    if (!formData.program) {
      showSnackbar("Vui lòng chọn chương trình", "error");
      return;
    }
    if (!formData.major) {
      showSnackbar("Vui lòng chọn ngành học", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      showSnackbar("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.", "success");
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        program: "",
        major: "",
        newsletter: false,
        consultation: false,
        content: "",
      });
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <main className="registration-page">
      {snackbar && (
        <div
          className={`snackbar snackbar--${snackbar.type} snackbar--show`}
          role="alert"
        >
          <span className="snackbar__icon">
            {snackbar.type === "success" ? "✓" : "✕"}
          </span>
          <span className="snackbar__message">{snackbar.message}</span>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--dangkytuvantuyensinh"
        aria-label="Banner đăng ký tư vấn"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/dktv_hero.png"
            alt="Banner Đăng ký tư vấn tuyển sinh HUB"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="hero-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="hero-breadcrumb__list">
            <li className="hero-breadcrumb__item">
              <Link href="/" className="hero-breadcrumb__link">
                Trang chủ
              </Link>
            </li>
            <li className="hero-breadcrumb__item hero-breadcrumb__item--active">
              <span className="hero-breadcrumb__current">Đăng ký tư vấn</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Registration Form Section */}
      <section className="registration-form-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="registration-page-wrapper">
                {/* Left Image */}
                <div className="registration-image">
                  <Image
                    src="/assets/images/dktv_img1.png"
                    alt="Tư vấn tuyển sinh"
                    className="registration-image__img"
                    width={746}
                    height={415}
                    loading="lazy"
                  />
                </div>

                {/* Right Form Card */}
                <div className="registration-card">
                  <p className="registration-card__subtitle">
                    TRƯỜNG ĐẠI HỌC NGÂN HÀNG HUB
                  </p>
                  <h2 className="registration-card__title">ĐĂNG KÝ TƯ VẤN</h2>

                  <form
                    className="registration-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Row 1: Họ tên & Số điện thoại */}
                    <div className="registration-form__row">
                      <div className="registration-form__group">
                        <input
                          type="text"
                          className="registration-form__input"
                          id="fullName"
                          placeholder="Họ tên"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="registration-form__group">
                        <input
                          type="tel"
                          className="registration-form__input"
                          id="phone"
                          placeholder="Số điện thoại"
                          value={formData.phone}
                          onChange={handleInputChange}
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="registration-form__group">
                        <input
                          type="text"
                          className="registration-form__input"
                          id="address"
                          placeholder="Địa chỉ"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Dropdown: Chọn chương trình */}
                    <div className="registration-form__group registration-form__group--full">
                      <select
                        className="registration-form__select"
                        id="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Chọn chương trình quan tâm</option>
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
                        value={formData.major}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Chọn ngành học quan tâm</option>
                        <option value="ngan-hang">Ngân hàng</option>
                        <option value="tai-chinh">Tài chính</option>
                        <option value="ke-toan">Kế toán</option>
                        <option value="quan-tri-kinh-doanh">
                          Quản trị kinh doanh
                        </option>
                      </select>
                    </div>

                    {/* Checkboxes */}
                    <div className="registration-form__checkboxes">
                      <div className="registration-form__checkbox">
                        <input
                          type="checkbox"
                          className="registration-form__checkbox-input"
                          id="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
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
                          checked={formData.consultation}
                          onChange={handleInputChange}
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
                        value={formData.content}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`registration-form__submit ${
                        isSubmitting ? "registration-form__submit--loading" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "ĐANG GỬI..." : "ĐĂNG KÝ NGAY"}
                    </button>
                  </form>
                </div>

                {/* Background Text */}
                <div className="registration-text-effect">Get In Touch</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
