import BubbleCleanLogo from '@/Components/BubbleCleanLogo';
import type { PublicNavItem } from '@/data/public/homeContent';
import { useEffect, useState } from 'react';

type PublicHeaderProps = {
    navItems: PublicNavItem[];
    contactPhone: string;
    contactPhoneHref: string;
    contactEmail: string;
    locationLabel: string;
    quoteHref: string;
};

export default function PublicHeader({
    navItems,
    contactPhone,
    contactPhoneHref,
    contactEmail,
    locationLabel,
    quoteHref,
}: PublicHeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('mobile-menu-open', mobileOpen);

        return () => {
            document.body.classList.remove('mobile-menu-open');
        };
    }, [mobileOpen]);

    return (
        <>
            <div className="public-topbar">
                <div className="public-container public-topbar__row">
                    <div className="public-topbar__contact">
                        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                        <a href={`tel:${contactPhoneHref}`}>{contactPhone}</a>
                    </div>

                    <div className="public-topbar__meta">
                        <span>{locationLabel}</span>
                        <a className="public-topbar__quote" href={quoteHref}>
                            Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>

            <header className="public-site-header">
                <div className="public-container public-site-header__row">
                    <a href="#home" className="public-site-header__brand">
                        <BubbleCleanLogo className="public-site-header__logo" />
                    </a>

                    <nav className="public-site-header__nav" aria-label="Main">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="public-site-header__actions">
                        <a className="clenia-button is-compact" href={quoteHref}>
                            Get a Free Quote
                        </a>

                        <button
                            type="button"
                            className="public-menu-toggle"
                            aria-expanded={mobileOpen}
                            aria-controls="public-mobile-menu"
                            onClick={() => setMobileOpen((open) => !open)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={[
                    'public-mobile-menu',
                    mobileOpen ? 'is-open' : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
                id="public-mobile-menu"
            >
                <div className="public-mobile-menu__panel">
                    <div className="public-mobile-menu__top">
                        <BubbleCleanLogo className="public-mobile-menu__logo" />

                        <button
                            type="button"
                            className="public-mobile-menu__close"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Close menu"
                        >
                            <span />
                            <span />
                        </button>
                    </div>

                    <nav aria-label="Mobile">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="public-mobile-menu__contact">
                        <a href={`tel:${contactPhoneHref}`}>{contactPhone}</a>
                        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    </div>
                </div>
            </div>
        </>
    );
}
