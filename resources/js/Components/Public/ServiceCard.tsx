import type { HomeService } from '@/data/public/homeContent';

type ServiceCardProps = {
    service: HomeService;
};

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <article
            className={[
                'service-card',
                service.featured ? 'is-featured' : '',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <div className="service-card__media">
                <img src={service.image} alt={service.title} />

                {service.badge ? (
                    <span className="service-card__badge">{service.badge}</span>
                ) : null}
            </div>

            <div className="service-card__content">
                <div className="service-card__icon">
                    <img src={service.icon} alt="" aria-hidden="true" />
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>

                <ul className="service-card__points">
                    {service.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
