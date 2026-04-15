import AreaCoverageSlider from '@/Components/Public/AreaCoverageSlider';
import SectionHeading from '@/Components/Public/SectionHeading';
import ServiceCard from '@/Components/Public/ServiceCard';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    footerLocation,
    homeAddOns,
    homeCoverage,
    homeCoverageSlides,
    homeFeatures,
    homeFinalCta,
    homeHero,
    homeNeighborhoods,
    homePricing,
    homeServices,
    homeTrust,
    publicNavItems,
    serviceLocation,
} from '@/data/public/homeContent';

type PublicHomeProps = {
    pageTitle: string;
    shareTitle: string;
    shareDescription: string;
    pageUrl: string;
    shareImageUrl: string;
    contactPhone: string;
    contactEmail: string;
};

export default function Home({
    pageTitle,
    shareTitle,
    shareDescription,
    pageUrl,
    shareImageUrl,
    contactPhone,
    contactEmail,
}: PublicHomeProps) {
    const contactPhoneHref = contactPhone.replace(/[^\d+]/g, '');
    // Route quote CTAs to a direct SMS conversation until the lead system is introduced.
    const quoteMessage = encodeURIComponent(
        'Hi Bubble Clean, I would like more information about your cleaning services and a free quote.',
    );
    const quoteHref = `sms:${contactPhoneHref}?body=${quoteMessage}`;

    return (
        <PublicLayout
            pageTitle={pageTitle}
            shareTitle={shareTitle}
            shareDescription={shareDescription}
            pageUrl={pageUrl}
            shareImageUrl={shareImageUrl}
            contactPhone={contactPhone}
            contactPhoneHref={contactPhoneHref}
            contactEmail={contactEmail}
            headerLocationLabel={serviceLocation}
            footerLocationLabel={footerLocation}
            quoteHref={quoteHref}
            navItems={publicNavItems}
            neighborhoods={homeNeighborhoods}
        >
            <section className="hero-section" id="home">
                <div className="hero-section__decor hero-section__decor--large">
                    <img src="/images/theme/banner-circle-lg.png" alt="" aria-hidden="true" />
                </div>
                <div className="hero-section__decor hero-section__decor--small">
                    <img src="/images/theme/banner-circle-sm.png" alt="" aria-hidden="true" />
                </div>

                <div className="public-container hero-section__grid">
                    <div className="hero-section__content">
                        <span className="hero-section__eyebrow">
                            {homeHero.eyebrow}
                        </span>

                        <h1 className="hero-section__title">
                            {homeHero.title}
                            <span>{homeHero.accent}</span>
                        </h1>

                        <p className="hero-section__description">
                            {homeHero.description}
                        </p>

                        <p className="hero-section__supporting">
                            {homeHero.supportingCopy}
                        </p>

                        <div className="hero-section__actions">
                            <a className="clenia-button" href={quoteHref}>
                                {homeHero.primaryCtaLabel}
                            </a>
                            <a
                                className="clenia-button is-secondary"
                                href={`tel:${contactPhoneHref}`}
                            >
                                Call {contactPhone}
                            </a>
                        </div>
                    </div>

                    <div className="hero-section__media">
                        <div className="hero-section__image-frame">
                            <img src={homeHero.image} alt="Bubble Clean team at work" />
                        </div>

                        <div className="hero-badge hero-badge--price">
                            <span>{homeHero.highlights[0].label}</span>
                            <strong>{homeHero.highlights[0].value}</strong>
                        </div>

                        <div className="hero-badge hero-badge--location">
                            <span>{homeHero.highlights[1].label}</span>
                            <strong>{homeHero.highlights[1].value}</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="public-section public-section--trust">
                <div className="public-container trust-section">
                    <div className="trust-section__media">
                        <img
                            src={homeTrust.image}
                            alt="Freshly cleaned Bubble Clean interior"
                        />
                    </div>

                    <div className="trust-section__content">
                        <SectionHeading
                            eyebrow={homeTrust.eyebrow}
                            title={homeTrust.title}
                            description={homeTrust.description}
                        />

                        <div className="feature-grid">
                            {homeFeatures.map((feature) => (
                                <article className="feature-card" key={feature.title}>
                                    <div className="feature-card__icon">
                                        <img
                                            src={feature.icon}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="public-section public-section--services" id="services">
                <div className="public-container">
                    <SectionHeading
                        eyebrow="What we do"
                        title="Our most requested cleaning services."
                        description="We kept this one-page version focused on the two offers that matter most for the current launch, while leaving the structure ready to expand into the broader service catalog later."
                        centered={true}
                    />

                    <div className="services-grid">
                        {homeServices.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="public-section public-section--pricing" id="pricing">
                <div className="public-container pricing-grid">
                    <div className="pricing-panel pricing-panel--highlight">
                        <SectionHeading
                            eyebrow={homePricing.eyebrow}
                            title={homePricing.title}
                            description={homePricing.description}
                        />

                        <div className="pricing-panel__amount">$140</div>
                        <p className="pricing-panel__caption">
                            Starting point for standard cleaning.
                        </p>

                        <a className="clenia-button" href={quoteHref}>
                            Get a Free Quote
                        </a>
                    </div>

                    <div className="pricing-panel">
                        <SectionHeading
                            eyebrow="Optional add-ons"
                            title="Add-ons available upon request."
                            description="If you need extra detail work, we can add it to the quote without forcing a bloated base package."
                        />

                        <div className="add-on-list">
                            {homeAddOns.map((item) => (
                                <span className="add-on-pill" key={item}>
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="pricing-note">
                            Final price depends on bedrooms, bathrooms, home
                            condition, and requested add-ons.
                        </div>
                    </div>
                </div>
            </section>

            <section className="public-section public-section--coverage" id="areas">
                <div className="public-container coverage-grid">
                    <div className="coverage-content">
                        <SectionHeading
                            eyebrow={homeCoverage.eyebrow}
                            title={homeCoverage.title}
                            description={homeCoverage.description}
                        />

                        <div className="coverage-pills">
                            {homeNeighborhoods.map((area) => (
                                <span className="coverage-pill" key={area}>
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="coverage-media">
                        <AreaCoverageSlider slides={homeCoverageSlides} />
                    </div>
                </div>
            </section>

            <section className="public-section public-section--cta" id="contact">
                <div className="public-container">
                    <div className="cta-banner">
                        <div className="cta-banner__content">
                            <span className="cta-banner__eyebrow">
                                {homeFinalCta.eyebrow}
                            </span>
                            <h2>{homeFinalCta.title}</h2>
                            <p>{homeFinalCta.description}</p>
                        </div>

                        <div className="cta-banner__actions">
                            <a className="clenia-button" href={quoteHref}>
                                {homeFinalCta.primaryLabel}
                            </a>
                            <a
                                className="clenia-button is-secondary is-inverse"
                                href={`tel:${contactPhoneHref}`}
                            >
                                Call {contactPhone}
                            </a>
                            <a className="cta-banner__email" href={`mailto:${contactEmail}`}>
                                {contactEmail}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
