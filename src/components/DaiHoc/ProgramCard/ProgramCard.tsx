import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    description: string;
    image: string;
    badge: string;
    lessons: number;
    seats: number;
    duration: string;
    category: string;
  };
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Link href="/dai-hoc-nganh-hoc/" className="program-card">
      <div className="program-card__image-wrapper">
        <Image
          src={program.image}
          alt={program.title}
          className="program-card__image"
          width={344}
          height={229}
          loading="lazy"
        />
        <span className="program-card__badge">
          <Image
            src="/assets/images/bookmark.png"
            alt=""
            className="program-card__badge-icon"
            width={17}
            height={17}
          />
          {program.badge}
        </span>
      </div>
      <div className="program-card__content">
        <div className="program-card__lessons">
          <Image
            src="/assets/images/lesson.png"
            alt=""
            className="program-card__lessons-icon"
            width={18}
            height={18}
          />
          <span>{program.lessons} Lessons</span>
        </div>
        <h3 className="program-card__title">{program.title}</h3>
        <p className="program-card__description">{program.description}</p>
        <div className="program-card__divider"></div>
        <div className="program-card__meta">
          <div className="program-card__meta-item">
            <Image
              src="/assets/images/group.png"
              alt=""
              className="program-card__meta-icon"
              width={20}
              height={20}
            />
            <span>{program.seats} Chỗ ngồi</span>
          </div>
          <div className="program-card__meta-item">
            <Image
              src="/assets/images/clock_primary.png"
              alt=""
              className="program-card__meta-icon"
              width={15}
              height={15}
            />
            <span>{program.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
