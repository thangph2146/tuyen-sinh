"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Lý do chọn HUB', href: '/gioi-thieu/' },
    { name: 'Chương trình đào tạo', href: '/dai-hoc/' },
    { name: 'Đời sống sinh viên', href: '/doi-song-sinh-vien/' },
    { name: 'Tin tức tuyển sinh', href: '/tin-tuyen-sinh/' },
    { name: 'Thông báo', href: '/danh-muc-thong-bao/' },
    { name: 'Sự kiện', href: '/su-kien/' },
  ];

  const mobileNavLinks = [
    { name: 'Trang chủ', href: '/', icon: '/assets/svg/home.svg' },
    { name: 'Lý do chọn HUB', href: '/gioi-thieu/', icon: '/assets/svg/reason.svg' },
    { name: 'Chương trình đào tạo', href: '/dai-hoc/', icon: '/assets/svg/buildings.svg' },
    { name: 'Đời sống sinh viên', href: '/doi-song-sinh-vien/', icon: '/assets/svg/document.svg' },
    { name: 'Tin tức tuyển sinh', href: '/tin-tuyen-sinh/', icon: '/assets/svg/phone.svg' },
    { name: 'Thông báo', href: '/danh-muc-thong-bao/', icon: '/assets/svg/notify.svg' },
    { name: 'Sự kiện', href: '/su-kien/', icon: '/assets/svg/map.svg' },
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`} data-header>
      <div className="topbar">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="topbar__contact">
              <span className="topbar__contact-icon">
                <img
                  src="/assets/images/phone.png"
                  alt="Biểu tượng điện thoại"
                  width="20"
                  height="20"
                />
              </span>
              <span className="topbar__contact-text topbar__contact-text--hotline">
                Hotline: (028) 38 212 430 - (028) 38 211 704 - 0888 353 488
              </span>
              <span className="topbar__contact-text topbar__contact-text--school">
                TRƯỜNG ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HỒ CHÍ MINH
              </span>
            </div>
            <div className="topbar__actions">
              <span className="topbar__contact-icon">
                <img
                  src="/assets/images/email.png"
                  alt="Biểu tượng email"
                  width="23"
                  height="23"
                />
              </span>
              <span className="topbar__contact-text">
                Email: phongtvts@hub.edu.vn
              </span>
              <div className="topbar__search">
                <input
                  type="search"
                  placeholder="Tìm kiếm..."
                  className="topbar__search-input"
                  aria-label="Tìm kiếm"
                />
                <img
                  src="/assets/images/search.png"
                  alt=""
                  width="16"
                  height="16"
                />
              </div>
              <Link
                href="/#registration"
                className="topbar__register-btn"
                aria-label="Đăng ký tuyển sinh"
              >
                ĐĂNG KÝ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg" role="navigation" aria-label="Menu chính">
        <div className="container">
          <Link href="/" className="navbar-brand" aria-label="Trang chủ HUB University">
            <img 
              src="/assets/svg/logo.svg" 
              alt="Logo Trường Đại học Ngân hàng TP.HCM - HUB University" 
              className="navbar__logo"
              width="50" 
              height="72" 
            />
            <span className="navbar-brand__text">
              TRƯỜNG ĐẠI HỌC NGÂN HÀNG
              <br />
              THÀNH PHỐ HỒ CHÍ MINH
            </span>
          </Link>

          {/* Mobile Search Dialog */}
          <div className={`mobile-search ${isMobileSearchOpen ? 'is-open' : ''}`} aria-hidden={!isMobileSearchOpen}>
            <button
              className="mobile-search__close"
              type="button"
              aria-label="Đóng tìm kiếm"
              onClick={() => setIsMobileSearchOpen(false)}
            >
              <span>&times;</span>
            </button>
            <div className="mobile-search__container">
              <input
                type="search"
                placeholder="Tìm kiếm..."
                className="mobile-search__input"
                aria-label="Tìm kiếm"
              />
              <button
                className="mobile-search__submit"
                type="button"
                aria-label="Tìm kiếm"
              >
                <img
                  src="/assets/images/search.png"
                  alt=""
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>

          <div className="navbar-actions">
            <button
              className="navbar-search-btn d-inline-flex"
              type="button"
              aria-label="Tìm kiếm"
              onClick={() => setIsMobileSearchOpen(true)}
            >
              <span
                className="iconify"
                data-icon="iconoir:search"
                data-width="20"
                data-height="20"
              ></span>
            </button>
            <button 
              className="navbar-toggle" 
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Mở menu điều hướng"
            >
              <img
                src="/assets/svg/harmbuger.svg"
                alt="Mở menu điều hướng"
                width="24"
                height="24"
              />
            </button>
          </div>

          <div className="navbar-nav-wrapper d-none d-lg-block">
            <ul id="main-navbar" className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <Link href={link.href} className="nav-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <aside className={`mobile-nav ${isMobileNavOpen ? 'is-open' : ''}`} aria-hidden={!isMobileNavOpen}>
        <div className="mobile-nav__overlay" onClick={() => setIsMobileNavOpen(false)}></div>
        <div className="mobile-nav__panel">
          <div className="mobile-nav__header">
            <button 
              className="mobile-nav__close" 
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Đóng menu"
            >
              <span>&times;</span>
            </button>
          </div>
          <nav className="mobile-nav__body" aria-label="Menu chính (mobile)">
            <ul className="mobile-nav__list">
              {mobileNavLinks.map((link) => (
                <li key={link.href} className="mobile-nav__item">
                  <Link 
                    href={link.href} 
                    className="mobile-nav__link" 
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="mobile-nav__icon"
                      width="24"
                      height="24"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-nav__footer">
            <p className="mobile-nav__footer-title">Kết nối với chúng tôi</p>
            <div className="mobile-nav__socials">
              <a href="#" aria-label="Facebook" className="mobile-nav__social mobile-nav__social--facebook">
                <span className="iconify" data-icon="mdi:facebook" data-width="20" data-height="20"></span>
              </a>
              <a href="#" aria-label="YouTube" className="mobile-nav__social mobile-nav__social--youtube">
                <span className="iconify" data-icon="mdi:youtube" data-width="20" data-height="20"></span>
              </a>
              <a href="#" aria-label="TikTok" className="mobile-nav__social mobile-nav__social--tiktok">
                <span className="iconify" data-icon="ic:baseline-tiktok" data-width="20" data-height="20"></span>
              </a>
              <a href="#" aria-label="Email" className="mobile-nav__social mobile-nav__social--email">
                <span className="iconify" data-icon="mdi:email" data-width="20" data-height="20"></span>
              </a>
              <a href="#" aria-label="Zalo" className="mobile-nav__social mobile-nav__social--zalo">
                <span className="iconify" data-icon="simple-icons:zalo" data-width="20" data-height="20"></span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
