import { useState } from 'react';

type BubbleCleanLogoProps = {
    className?: string;
    src?: string;
};

export default function BubbleCleanLogo({
    className = '',
    src = '/images/logo.png',
}: BubbleCleanLogoProps) {
    const [imageUnavailable, setImageUnavailable] = useState(false);

    if (!imageUnavailable) {
        return (
            <img
                src={src}
                alt="Bubble Clean"
                className={className}
                onError={() => setImageUnavailable(true)}
            />
        );
    }

    return (
        <div
            className={`font-display text-3xl font-bold uppercase tracking-[0.14em] text-white sm:text-4xl ${className}`}
        >
            Bubble Clean
        </div>
    );
}
