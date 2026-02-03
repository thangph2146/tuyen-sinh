"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const programTabs = [
  { id: 'group-1', label: 'Đại Học chính quy' },
  { id: 'group-2', label: 'Đại học vừa làm vừa học' },
  { id: 'group-3', label: 'Đào tạo từ xa' },
  { id: 'group-4', label: 'Sau đại học' },
  { id: 'group-5', label: 'Các khóa học ngắn hạn' },
];

const programData = {
  'group-1': [
    { title: 'Đại học chính quy chuẩn', icon: '/assets/images/daotao_book.png', href: '/dai-hoc-nganh-hoc', iconSize: 'sm' },
    { title: 'Đại học chính quy tiếng anh bán phần, đặc biệt', icon: '/assets/images/daotao_totnghiep.png', href: '/tien-si-nganh-hoc', wide: true, iconSize: 'md' },
    { title: 'Đại học văn bằng 2', icon: '/assets/images/daotao_vanbang.png', href: '/thac-si-nganh-hoc', iconSize: 'lg' },
    { title: 'Đại học chính quy quốc tế song bằng', icon: '/assets/images/daotao_quocte.png', href: '/quoc-te', iconSize: 'sm' },
  ],
  'group-2': [
    { title: 'Đại học chính quy chuẩn', icon: '/assets/images/daotao_book.png', href: '/dai-hoc-nganh-hoc', iconSize: 'sm' },
    { title: 'Đại học chính quy tiếng anh bán phần, đặc biệt', icon: '/assets/images/daotao_totnghiep.png', href: '/tien-si-nganh-hoc', wide: true, iconSize: 'md' },
    { title: 'Đại học văn bằng 2', icon: '/assets/images/daotao_vanbang.png', href: '/thac-si-nganh-hoc', iconSize: 'lg' },
    { title: 'Đại học chính quy quốc tế song bằng', icon: '/assets/images/daotao_quocte.png', href: '/quoc-te', iconSize: 'sm' },
  ],
  'group-3': [],
  'group-4': [],
  'group-5': [],
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState('group-1');

  return (
    <section className="programs-section section-spacing" id="programs">
      <div className="container">
        {/* Desktop / tablet title */}
        <h2 className="programs-section__title d-none d-sm-block">
          KHÁM PHÁ CHƯƠNG TRÌNH ĐÀO TẠO
        </h2>

        {/* Mobile header */}
        <div className="mobile-title-box mobile-title-box--sm d-sm-none">
          <div className="mobile-title-box__icon">
            <Image
              src="/assets/svg/course.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </div>
          <div className="mobile-title-box__content">
            <p className="mobile-title-box__overline">KHÁM PHÁ</p>
            <h2 className="mobile-title-box__title">CHƯƠNG TRÌNH ĐÀO TẠO</h2>
          </div>
        </div>

        {/* Tabs Desktop */}
        <nav className="programs-tabs-nav d-none d-sm-block">
          <ul className="programs-tabs" role="tablist">
            {programTabs.map((tab) => (
              <li
                key={tab.id}
                className={`programs-tabs__item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Accordion Mobile */}
        <div
          className="programs-accordion d-sm-none"
          aria-label="Danh mục chương trình đào tạo (mobile)"
        >
          {programTabs.map((tab) => (
            <React.Fragment key={tab.id}>
              <button
                className={`programs-accordion__header ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                aria-expanded={activeTab === tab.id}
              >
                <span>{tab.label}</span>
              </button>
              <div
                className={`programs-accordion__panel ${activeTab === tab.id ? 'active' : ''}`}
                style={{ display: activeTab === tab.id ? 'block' : 'none' }}
              >
                <ul className="programs-accordion__list">
                  {(programData[tab.id as keyof typeof programData] || []).map(
                    (prog, idx) => (
                      <li key={idx} className="programs-accordion__list-item">
                        <Link href={prog.href}>{prog.title}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile decorative icon under accordion */}
        <div className="programs-accordion__global d-sm-none">
          <Image
            src="/assets/svg/global.svg"
            alt="Biểu tượng toàn cầu HUB University"
            width={150}
            height={150}
          />
        </div>

        {/* Program Cards groups (Desktop only) */}
        <div className="programs-groups d-none d-sm-block">
          {programTabs.map((tab) => (
            <div
              key={tab.id}
              className={`programs-group ${activeTab === tab.id ? 'programs-group--active' : ''}`}
              id={tab.id}
            >
              <div className="programs-row mb-3">
                {(programData[tab.id as keyof typeof programData] || []).map(
                  (prog, idx) => (
                    <div
                      key={idx}
                      className={`programs-row__item ${prog.wide ? 'programs-row__item--wide' : ''}`}
                    >
                      <Link href={prog.href} className="program-card">
                        <div className="program-card__icon-wrapper">
                          <Image
                            src="/assets/svg/daotao-icon_wrapper.svg"
                            alt=""
                            className="program-card__icon-bg"
                            width={100}
                            height={100}
                            role="presentation"
                          />
                          <Image
                            src={prog.icon}
                            alt={`Biểu tượng ${prog.title}`}
                            className={`program-card__icon program-card__icon--${prog.iconSize}`}
                            width={60}
                            height={60}
                          />
                        </div>
                        <span className="program-card__title">{prog.title}</span>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Programs; 
