import Image from "next/image";

interface DormCardProps {
  room: {
    id: number;
    title: string;
    image: string;
    specs: {
      icon: string;
      label: string;
    }[];
  };
}

export default function DormCard({ room }: DormCardProps) {
  return (
    <article className="dorm-card">
      <Image
        src={room.image}
        alt={room.title}
        className="dorm-card__image"
        width={400}
        height={250}
        loading="lazy"
      />
      <h3 className="dorm-card__title">{room.title}</h3>
      <div className="dorm-card__specs">
        {room.specs.map((spec, index) => (
          <div key={index} className="dorm-spec">
            <Image src={spec.icon} alt="" width={15} height={15} />
            <span title={spec.label}>{spec.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
