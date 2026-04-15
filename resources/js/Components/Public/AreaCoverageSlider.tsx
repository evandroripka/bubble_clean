import type { HomeCoverageSlide } from '@/data/public/homeContent';
import { useEffect, useState } from 'react';

type AreaCoverageSliderProps = {
    slides: HomeCoverageSlide[];
};

export default function AreaCoverageSlider({
    slides,
}: AreaCoverageSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (slides.length < 2) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, 2000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [slides.length]);

    return (
        <div className="coverage-slider">
            <div className="coverage-slider__viewport">
                {slides.map((slide, index) => (
                    <article
                        key={slide.area}
                        className={[
                            'coverage-slide',
                            index === activeIndex ? 'is-active' : '',
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        aria-hidden={index === activeIndex ? 'false' : 'true'}
                    >
                        <img src={slide.image} alt={slide.alt} />

                        <div className="coverage-slide__overlay" />

                        <div className="coverage-slide__content">
                            <span className="coverage-slide__eyebrow">
                                Now showing
                            </span>
                            <h3>{slide.area}</h3>
                            <p>{slide.note}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="coverage-slider__dots" aria-label="Coverage areas">
                {slides.map((slide, index) => (
                    <button
                        key={slide.area}
                        type="button"
                        className={[
                            'coverage-slider__dot',
                            index === activeIndex ? 'is-active' : '',
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        aria-label={`Show ${slide.area}`}
                        aria-pressed={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
