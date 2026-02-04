"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeTab, setActiveTab] = useState("web");

  // Sample search results
  const mockResults = [
    {
      id: 1,
      title: "Thông tin tuyển sinh Đại học HUB 2025",
      url: "/tin-tuyen-sinh/1",
      description:
        "Trường Đại học Ngân hàng TP.HCM công bố thông tin tuyển sinh chính thức năm 2025 với nhiều phương thức xét tuyển linh hoạt...",
    },
    {
      id: 2,
      title: "Chương trình đào tạo Đại học tại HUB",
      url: "/dai-hoc",
      description:
        "HUB cung cấp các chương trình đào tạo đa dạng với chất lượng cao, đáp ứng nhu cầu thị trường lao động...",
    },
    {
      id: 3,
      title: "Đời sống sinh viên tại HUB University",
      url: "/doi-song-sinh-vien",
      description:
        "Khám phá đời sống sinh viên phong phú với nhiều hoạt động ngoại khóa, câu lạc bộ và cơ sở vật chất hiện đại...",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/ket-qua-tim-kiem?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <main className="search-results-page">
      {/* Hero Section */}
      <section
        className="hero-section hero-section--banner hero-section--ketquatimkiem"
        aria-label="Banner tìm kiếm"
      >
        <div className="hero-section__bg">
          <Image
            src="/assets/images/timkiem_hero.png"
            alt="Kết quả tìm kiếm HUB University"
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
              <span className="hero-breadcrumb__current">Kết quả tìm kiếm</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Search Box & Results */}
      <section className="search-filter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Custom Search Box */}
              <div className="custom-search-box">
                <form className="custom-search-wrapper" onSubmit={handleSearch}>
                  <input
                    type="text"
                    className="custom-search-input"
                    placeholder="Tìm kiếm..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                  />
                  {query && (
                    <button
                      type="button"
                      className="custom-clear-btn"
                      onClick={() => setQuery("")}
                      aria-label="Xóa"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                  <button type="submit" className="custom-search-btn" aria-label="Tìm kiếm">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </form>
              </div>

              {/* Search Meta Bar */}
              <div className="search-meta-bar">
                {/* Search Tabs */}
                <div className="search-tabs">
                  <button
                    className={`search-tab ${activeTab === "web" ? "active" : ""}`}
                    onClick={() => setActiveTab("web")}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    Web
                  </button>
                  <button
                    className={`search-tab ${activeTab === "images" ? "active" : ""}`}
                    onClick={() => setActiveTab("images")}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                    Hình ảnh
                  </button>
                  <button
                    className={`search-tab ${activeTab === "videos" ? "active" : ""}`}
                    onClick={() => setActiveTab("videos")}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                    </svg>
                    Video
                  </button>
                </div>

                {/* Search Info */}
                <div className="search-result-info">
                  <span>Khoảng {mockResults.length} kết quả</span>
                  <span>(0.20 giây)</span>
                </div>
              </div>

              {/* Search Results */}
              <div className="search-filter__results">
                <div className="search-results-list">
                  {mockResults.map((result) => (
                    <div key={result.id} className="search-result-item">
                      <Link href={result.url} className="search-result-item__link">
                        <h3 className="search-result-item__title">{result.title}</h3>
                      </Link>
                      <div className="search-result-item__url">{result.url}</div>
                      <p className="search-result-item__description">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <nav className="pagination d-sm-flex" aria-label="Phân trang kết quả tìm kiếm">
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
                <Link href="#" className="pagination__item pagination__item--active">
                  1
                </Link>
                <Link href="#" className="pagination__item">
                  2
                </Link>
                <Link href="#" className="pagination__item">
                  3
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

export default function KetQuaTimKiemPage() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <SearchResults />
    </Suspense>
  );
}
