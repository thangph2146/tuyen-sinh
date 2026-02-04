import Image from "next/image";
import Link from "next/link";

interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    description: string;
    image: string;
    badge: string;
    badgeType: "primary" | "secondary";
    icon: string;
  };
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link
      href={`/doi-song-sinh-vien/${activity.id}`}
      className="activity-card activity-card--featured"
    >
      <div className="activity-card__image">
        <Image
          src={activity.image}
          alt={activity.title}
          width={342}
          height={192}
          loading="lazy"
        />
        <span
          className={`activity-card__badge activity-card__badge--${activity.badgeType}`}
        >
          {activity.badge}
        </span>
      </div>
      <div className="activity-card__content">
        <h3 className="activity-card__title">{activity.title}</h3>
        <p className="activity-card__description">{activity.description}</p>
        <span className="activity-card__link">
          <Image
            src={activity.icon}
            alt="Arrow icon"
            width={40}
            height={40}
          />
        </span>
      </div>
    </Link>
  );
}
