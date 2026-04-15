type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    centered?: boolean;
    light?: boolean;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    centered = false,
    light = false,
}: SectionHeadingProps) {
    return (
        <div
            className={[
                'section-heading',
                centered ? 'is-centered' : '',
                light ? 'is-light' : '',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <div className="section-heading__eyebrow">
                <img src="/images/theme/brush.png" alt="" aria-hidden="true" />
                <span>{eyebrow}</span>
            </div>

            <h2 className="section-heading__title">{title}</h2>

            {description ? (
                <p className="section-heading__description">{description}</p>
            ) : null}
        </div>
    );
}
