import Image from "next/image";

interface FeatureCardProps {
  card: {
    id: number;
    number: string;
    title: string;
    description: string;
    icon: string;
  };
}

export default function FeatureCard({ card }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon-wrapper">
        <div className="feature-card__icon-bg"></div>
        <Image
          src={card.icon}
          alt={`Icon ${card.title}`}
          className="feature-card__icon"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
      <span className="feature-card__number" aria-hidden="true">
        {card.number}
      </span>
      <h3 className="feature-card__title">{card.title}</h3>
      <p className="feature-card__description">{card.description}</p>
    </article>
  );
}
