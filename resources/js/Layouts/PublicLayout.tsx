import PublicFooter from '@/Components/Public/PublicFooter';
import PublicHeader from '@/Components/Public/PublicHeader';
import type { PublicNavItem } from '@/data/public/homeContent';
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

type PublicLayoutProps = PropsWithChildren<{
    pageTitle: string;
    shareTitle: string;
    shareDescription: string;
    pageUrl: string;
    shareImageUrl: string;
    contactPhone: string;
    contactPhoneHref: string;
    contactEmail: string;
    headerLocationLabel: string;
    footerLocationLabel: string;
    quoteHref: string;
    navItems: PublicNavItem[];
    neighborhoods: string[];
}>;

export default function PublicLayout({
    pageTitle,
    shareTitle,
    shareDescription,
    pageUrl,
    shareImageUrl,
    contactPhone,
    contactPhoneHref,
    contactEmail,
    headerLocationLabel,
    footerLocationLabel,
    quoteHref,
    navItems,
    neighborhoods,
    children,
}: PublicLayoutProps) {
    return (
        <>
            <Head title={pageTitle}>
                <meta name="description" content={shareDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={shareTitle} />
                <meta property="og:description" content={shareDescription} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={shareImageUrl} />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:alt" content={shareTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={shareTitle} />
                <meta name="twitter:description" content={shareDescription} />
                <meta name="twitter:image" content={shareImageUrl} />
                <link rel="canonical" href={pageUrl} />
            </Head>

            <div className="public-home">
                <PublicHeader
                    navItems={navItems}
                    contactPhone={contactPhone}
                    contactPhoneHref={contactPhoneHref}
                    contactEmail={contactEmail}
                    locationLabel={headerLocationLabel}
                    quoteHref={quoteHref}
                />

                <main>{children}</main>

                <PublicFooter
                    contactPhone={contactPhone}
                    contactPhoneHref={contactPhoneHref}
                    contactEmail={contactEmail}
                    locationLabel={footerLocationLabel}
                    neighborhoods={neighborhoods}
                />
            </div>
        </>
    );
}
