import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__main">
          {/* Column 1: Logo */}
          <div className="footer__col footer__col--logo">
            <div className="footer__logo-wrapper">
              <Image
                src="/assets/svg/logo.svg"
                alt="Logo HUB University"
                className="footer__logo-img"
                width={60}
                height={86}
              />
              <div className="footer__logo-text">
                <span className="footer__logo-line1">TRƯỜNG ĐẠI HỌC NGÂN HÀNG</span>
                <span className="footer__logo-line2">THÀNH PHỐ HỒ CHÍ MINH</span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__heading">LIÊN HỆ</h4>
            <ul className="footer__list">
              <li className="footer__list-item">
                <span className="iconify" data-icon="mdi:map-marker"></span>
                <span>
                  <strong>Trụ sở chính</strong><br />
                  36 Tôn Thất Đạm, Phường Sài Gòn, TP.Hồ Chí Minh
                </span>
              </li>
              <li className="footer__list-item">
                <span className="iconify" data-icon="mdi:map-marker"></span>
                <span>
                  <strong>Cơ sở Hàm Nghi</strong><br />
                  39 Hàm Nghi, Phường Sài Gòn, Tp.Hồ Chí Minh
                </span>
              </li>
              <li className="footer__list-item">
                <span className="iconify" data-icon="mdi:map-marker"></span>
                <span>
                  <strong>Cơ sở Hoàng Diệu</strong><br />
                  56 Hoàng Diệu 2, Phường Thủ Đức, Tp.Hồ Chí Minh
                </span>
              </li>
              <li className="footer__list-item">
                <span className="iconify" data-icon="mdi:phone"></span>
                <span>0888 353 488</span>
              </li>
              <li className="footer__list-item">
                <span className="iconify" data-icon="mdi:email"></span>
                <span>dhnhtphcm@hub.edu.vn</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div className="footer__col footer__col--admissions">
            <h4 className="footer__heading">TUYỂN SINH</h4>
            <nav aria-label="Menu tuyển sinh">
              <ul className="footer__links">
                <li><Link href="/dai-hoc" className="footer__link">Đại học chính quy</Link></li>
                <li><Link href="/dai-hoc" className="footer__link">Đại học chính quy chuẩn</Link></li>
                <li><Link href="/thac-si" className="footer__link">Thạc sĩ</Link></li>
                <li><Link href="/tien-si" className="footer__link">Tiến sĩ</Link></li>
                <li><Link href="/quoc-te" className="footer__link">Hệ đào tạo quốc tế</Link></li>
                <li><Link href="/thac-si" className="footer__link">Liên hệ khoa sau đại học</Link></li>
                <li><Link href="/dai-hoc" className="footer__link">Đại học bằng 2 VLHL</Link></li>
                <li><Link href="/quoc-te" className="footer__link">Đại học chính quy quốc tế cấp song bằng</Link></li>
              </ul>
            </nav>
          </div>

          {/* Column 4: Student Life */}
          <div className="footer__col footer__col--student">
            <h4 className="footer__heading">ĐỜI SỐNG SINH VIÊN</h4>
            <nav aria-label="Menu đời sống sinh viên">
              <ul className="footer__links">
                <li><Link href="/doi-song-sinh-vien" className="footer__link">Học bổng cho sinh viên</Link></li>
                <li><Link href="/doi-song-sinh-vien" className="footer__link">Câu lạc bộ sinh viên</Link></li>
                <li><Link href="/doi-song-sinh-vien" className="footer__link">Thư viện học tập</Link></li>
                <li><Link href="/doi-song-sinh-vien" className="footer__link">Ký túc xá</Link></li>
              </ul>
            </nav>
          </div>

          {/* Column 5: About HUB */}
          <div className="footer__col footer__col--about">
            <h4 className="footer__heading">VỀ HUB</h4>
            <nav aria-label="Menu giới thiệu">
              <ul className="footer__links">
                <li><Link href="/gioi-thieu" className="footer__link">Lý do chọn HUB</Link></li>
                <li><Link href="/lich-su" className="footer__link">Lịch sử hình thành</Link></li>
                <li><Link href="/co-so-vat-chat" className="footer__link">Cơ sở vật chất</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section: Connect Bar (full width) */}
      <div className="footer__bottom">
        <div className="footer__connect-bar">
          <span className="footer__connect-text">Kết nối với chúng tôi</span>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <Icon icon="mdi:facebook" />
            </a>
            <a href="#" className="footer__social-link" aria-label="YouTube">
              <Icon icon="mdi:youtube" />
            </a>
            <a href="#" className="footer__social-link" aria-label="TikTok">
              <Icon icon="ic:baseline-tiktok" />
            </a>
            <a href="#" className="footer__social-link" aria-label="Email">
              <Icon icon="mdi:email" />
            </a>
            <a href="#" className="footer__social-link" aria-label="Zalo">
              <Icon icon="simple-icons:zalo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
