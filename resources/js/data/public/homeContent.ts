export type PublicNavItem = {
    href: string;
    label: string;
};

export type HomeFeature = {
    title: string;
    description: string;
    icon: string;
};

export type HomeService = {
    badge?: string;
    title: string;
    description: string;
    image: string;
    icon: string;
    points: string[];
    featured?: boolean;
};

export const publicNavItems: PublicNavItem[] = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#areas', label: 'Areas' },
    { href: '#contact', label: 'Contact' },
];

export const homeHero = {
    eyebrow: 'Best Cleaning Services',
    title: 'Staten Island House Cleaning',
    accent: 'That Feels Effortless',
    description:
        'Reliable, detail-focused cleaning for apartments and homes. Starting from $140.',
    supportingCopy: 'Get a fast quote in minutes.',
    highlights: [
        { label: 'Starting From', value: '$140' },
        { label: 'Serving', value: 'Staten Island, NY' },
    ],
    primaryCtaLabel: 'Get a Free Quote',
    secondaryCtaLabel: 'Call 718-603-1260',
    image: '/images/home/hero-team.webp',
};

export const homeTrust = {
    eyebrow: 'Local team',
    title: 'Local team. Clear communication. Consistent results.',
    description:
        'Bubble Clean was built for busy Staten Island routines: dependable arrivals, careful work inside the home, and simple recurring scheduling when you want to stop thinking about cleaning.',
    image: '/images/home/hero-cover.webp',
};

export const homeFeatures: HomeFeature[] = [
    {
        title: 'Punctual arrival windows',
        description:
            'You get clear scheduling and realistic arrival windows instead of vague all-day promises.',
        icon: '/images/theme/reliable-icon.png',
    },
    {
        title: 'Respectful, careful cleaning',
        description:
            'We focus on detail, protect your space, and leave the home reset instead of rushed.',
        icon: '/images/theme/care-icon.png',
    },
    {
        title: 'Easy recurring schedules',
        description:
            'Weekly and biweekly options keep your home in shape without extra back-and-forth.',
        icon: '/images/theme/schedule-icon.png',
    },
];

export const homeServices: HomeService[] = [
    {
        badge: 'Most Popular',
        title: 'Standard Cleaning',
        description:
            'Maintenance cleaning for kitchens, bathrooms, floors, dusting and reset.',
        image: '/images/home/detail-clean.webp',
        icon: '/images/theme/standard-cleaning-icon.png',
        points: [
            'Kitchen and bathroom refresh',
            'Floor cleaning and dusting',
            'Ideal for recurring upkeep',
        ],
        featured: true,
    },
    {
        title: 'Small Office Cleaning',
        description:
            'Light workspace cleaning for local offices and small businesses.',
        image: '/images/home/window-clean.webp',
        icon: '/images/theme/small-office-icon.png',
        points: [
            'Desks, common areas and touchpoints',
            'Restroom and surface reset',
            'Flexible scheduling for small teams',
        ],
    },
];

export const homeAddOns = [
    'Oven interior',
    'Fridge interior',
    'Baseboards',
    'Inside cabinets',
];

export const homePricing = {
    eyebrow: 'Simple pricing',
    title: 'Straightforward pricing for local homes and small spaces.',
    description:
        'Standard cleaning starts from $140. Final price depends on bedrooms, bathrooms, home condition, and requested add-ons.',
};

export const homeCoverage = {
    eyebrow: 'Serving Staten Island, NY',
    title: 'Nearby neighborhoods we commonly serve.',
    description:
        'We work across Staten Island with a local-first approach, fast communication, and recurring scheduling designed around nearby homes and small offices.',
    image: '/images/home/before-after-results.webp',
};

export const homeNeighborhoods = [
    'St. George',
    'South Beach',
    'Dongan Hills',
    'Grant City',
    'New Dorp',
];

export const homeFinalCta = {
    eyebrow: 'Want your home cleaned this week?',
    title: 'Text or call now for availability and a fast quote.',
    description:
        'We keep the process simple: tell us the space, the condition, and any add-ons you want. We will reply with next-step availability as quickly as possible.',
    primaryLabel: 'Get a Free Quote',
    secondaryLabel: 'Call 718-603-1260',
};

export const serviceLocation = 'Staten Island, NY';
export const footerLocation = 'Bubble Clean • Staten Island, NY';
