"use client";

import { useState, FormEvent, useRef } from "react";

export default function TraCuuTuyenSinhPage() {
  const [cccd, setCccd] = useState("");
  const [soBaoDanh, setSoBaoDanh] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [num1] = useState(() => Math.floor(Math.random() * 10));
  const [num2] = useState(() => Math.floor(Math.random() * 10));
  const captchaInputRef = useRef<HTMLInputElement>(null);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const correctAnswer = num1 + num2;

  const showSnackbar = (message: string, type: "success" | "error") => {
    setSnackbar({ message, type });
    setTimeout(() => setSnackbar(null), 4000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate: must have at least one field
    if (!cccd.trim() && !soBaoDanh.trim()) {
      showSnackbar("Vui lòng nhập số CCCD hoặc số báo danh", "error");
      return;
    }

    // Validate captcha
    if (!captchaInputRef.current || !captchaInputRef.current.value.trim()) {
      showSnackbar("Vui lòng nhập mã xác nhận", "error");
      return;
    }

    // Check captcha answer
    const userAnswer = parseInt(captchaInputRef.current.value);
    
    if (userAnswer !== correctAnswer) {
      showSnackbar("Mã xác nhận không đúng. Vui lòng thử lại.", "error");
      captchaInputRef.current.value = "";
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // TODO: Make actual API call
      // For now, just redirect with query params
      const params = new URLSearchParams();
      if (cccd) params.append("cccd", cccd);
      if (soBaoDanh) params.append("sbd", soBaoDanh);
      window.location.href = `/tra-cuu-tuyen-sinh/ket-qua/?${params.toString()}`;
    }, 1500);
  };


  return (
    <main className="lookup-page">
      {/* Snackbar */}
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

      {/* Lookup Form Section */}
      <section className="lookup-form-section">
        <div className="container">
          <div className="lookup-form-card">
            <h2 className="lookup-form-card__title">TRA CỨU KẾT QUẢ TRÚNG TUYỂN</h2>
            <p className="lookup-form-card__subtitle">
              (Thí sinh nhập số CCCD và số báo danh để tra cứu)
            </p>

            <form id="lookupForm" className="lookup-form" onSubmit={handleSubmit}>
              <div className="lookup-form__group">
                <label htmlFor="cccd" className="lookup-form__label">
                  Số CCCD
                </label>
                <input
                  type="text"
                  id="cccd"
                  name="cccd"
                  className="lookup-form__input"
                  placeholder="Nhập số CCCD"
                  value={cccd}
                  onChange={(e) => setCccd(e.target.value)}
                />
              </div>

              <div className="lookup-form__group">
                <label htmlFor="soBaoDanh" className="lookup-form__label">
                  Số báo danh
                </label>
                <input
                  type="text"
                  id="soBaoDanh"
                  name="soBaoDanh"
                  className="lookup-form__input"
                  placeholder="Nhập số báo danh"
                  value={soBaoDanh}
                  onChange={(e) => setSoBaoDanh(e.target.value)}
                />
              </div>

              <div className="lookup-form__group">
                <label htmlFor="captcha" className="lookup-form__label">
                  Mã xác nhận
                </label>
                <div className="lookup-form__captcha-wrapper">
                  <div className="jCaptchaCanvas">
                    {num1} + {num2} = ?
                  </div>
                  <input
                    ref={captchaInputRef}
                    type="text"
                    id="captcha"
                    name="captcha"
                    className="lookup-form__input lookup-form__input--captcha"
                    placeholder="Nhập kết quả phép tính"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="lookup-form__captcha-refresh"
                    aria-label="Làm mới mã xác nhận"
                    onClick={() => window.location.reload()}
                  >
                    <span style={{ fontSize: "24px" }}>↻</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`lookup-form__submit ${
                  isLoading ? "lookup-form__submit--loading" : ""
                }`}
                disabled={isLoading}
              >
                TRA CỨU
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
