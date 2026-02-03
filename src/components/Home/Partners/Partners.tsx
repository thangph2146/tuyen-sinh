import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'UTM', logo: '/assets/images/partner_utm.png' },
  { name: 'Swinburne', logo: '/assets/images/partner_swinburne.png' },
  { name: 'Sanbeda', logo: '/assets/images/partner_sanbeda.png' },
  { name: 'UNE', logo: '/assets/images/partner_une.png' },
  { name: 'UNF', logo: '/assets/images/partner_unf.png' },
  { name: 'Lincoln University', logo: '/assets/images/partner_lincoln.png' },
];

const Partners: React.FC = () => {
  return (
    <section className="partners-section" aria-label="Đối tác chiến lược">
      <div className="container">
        <h2 className="partners-section__title d-none d-sm-block">
          ĐỐI TÁC CHIẾN LƯỢC
        </h2>

        {/* Mobile header */}
        <div className="mobile-title-box mobile-title-box--sm d-sm-none mb-4">
          <div className="mobile-title-box__icon">
            <Image
              src="/assets/svg/partner.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </div>
          <div className="mobile-title-box__content">
            <p className="mobile-title-box__overline">HUB UNIVERSITY</p>
            <h2 className="mobile-title-box__title">ĐỐI TÁC CHIẾN LƯỢC</h2>
          </div>
        </div>

        <div className="partners-section__logos">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 align-items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="col">
                <div className="partners-section__logo-wrapper">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="partners-section__logo"
                    width={150}
                    height={50}
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
