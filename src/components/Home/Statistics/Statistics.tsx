import React from 'react';

const stats = [
  { number: '16k', label: 'sinh viên' },
  { number: '500', label: 'Cán bộ, giảng viên' },
  { number: '238', label: 'Thạc sĩ' },
  { number: '197', label: 'tiến sĩ' },
];

const Statistics = () => {
  return (
    <section
      className="stats-section-wrapper"
      aria-label="Thống kê HUB University"
    >
      <div className="container">
        <div className="stats-section stats-section--thacsi">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-item__number">{stat.number}</div>
                  <div className="stat-item__label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
