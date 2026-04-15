import BubbleCleanLogo from '@/Components/BubbleCleanLogo';

type PublicFooterProps = {
    contactPhone: string;
    contactPhoneHref: string;
    contactEmail: string;
    locationLabel: string;
    neighborhoods: string[];
};

export default function PublicFooter({
    contactPhone,
    contactPhoneHref,
    contactEmail,
    locationLabel,
    neighborhoods,
}: PublicFooterProps) {
    const socialLinks = [
        {
            label: 'Facebook',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.7-1.6h1.8V4.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7v2H7.8v3.2h2.8V22h2.9Z" />
                </svg>
            ),
        },
        {
            label: 'Instagram',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.4 2h9.2A5.4 5.4 0 0 1 22 7.4v9.2a5.4 5.4 0 0 1-5.4 5.4H7.4A5.4 5.4 0 0 1 2 16.6V7.4A5.4 5.4 0 0 1 7.4 2Zm0 1.9A3.5 3.5 0 0 0 3.9 7.4v9.2a3.5 3.5 0 0 0 3.5 3.5h9.2a3.5 3.5 0 0 0 3.5-3.5V7.4a3.5 3.5 0 0 0-3.5-3.5H7.4Zm9.8 1.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
                </svg>
            ),
        },
        {
            label: 'Nextdoor',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 20V9.6c0-2.6 2.1-4.6 4.7-4.6S17.3 7 17.3 9.6V20H14V9.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V20H8Zm-3.3 0V8.7H8V20H4.7Z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="public-footer">
            <div className="public-container public-footer__top">
                <div className="public-footer__brand">
                    <BubbleCleanLogo
                        className="public-footer__logo"
                        src="/images/logo-dark.png"
                    />
                    <p>{locationLabel}</p>

                    <div className="public-footer__social">
                        {socialLinks.map((socialLink) => (
                            <a
                                key={socialLink.label}
                                href={socialLink.href}
                                aria-label={socialLink.label}
                                className="public-footer__social-link"
                            >
                                {socialLink.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="public-footer__column">
                    <h3>Contact Info</h3>
                    <a href={`tel:${contactPhoneHref}`}>Phone: {contactPhone}</a>
                    <a href={`mailto:${contactEmail}`}>Email: {contactEmail}</a>
                </div>

                <div className="public-footer__column">
                    <h3>Serving Nearby</h3>
                    <p>{neighborhoods.join(' • ')}</p>
                </div>
            </div>

            <div className="public-footer__bottom">
                <div className="public-container public-footer__bottom-row">
                    <p>All rights reserved {new Date().getFullYear()} - Bubble Clean</p>
                    <p>
                        Developed by{' '}
                        <a
                            href="https://evandroripka.dev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Evandro Ripka
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
