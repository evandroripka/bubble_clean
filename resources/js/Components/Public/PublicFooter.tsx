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
    return (
        <footer className="public-footer">
            <div className="public-container public-footer__top">
                <div className="public-footer__brand">
                    <BubbleCleanLogo className="public-footer__logo" />
                    <p>{locationLabel}</p>
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
