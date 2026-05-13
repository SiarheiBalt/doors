'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const getImages = ({imageCount}: {imageCount: number}, {caseSlug}: {caseSlug: string}) => {
    return Array.from({ length: imageCount }).map((_, index) => ({
        src: `/images/portfolio/${caseSlug}/image-${index + 1}.webp`,
        alt: `Case study carousel image ${index + 1}`,
    }))
}


export default function CaseCarousel({caseSlug, imageCount}: {caseSlug: string, imageCount: number}) {
    const images = getImages({imageCount}, {caseSlug})
    const [isSwiperReady, setSwiperReady] = useState(false)
    const carouselClass = `case-carousel${isSwiperReady ? ' is-ready' : ' before-ready'}`

    const handleSwiperReady = () => {
        if (!isSwiperReady) {
            setSwiperReady(true)
        }
    }

    return (
        <section aria-label="Case images carousel">
            <div className={carouselClass}>
                <div className="mx-auto max-w-6xl">
                    <div className="relative h-[55vh] max-h-[55vh] md:h-[72vh] md:max-h-[72vh] lg:h-[80vh] lg:max-h-[80vh]">
                        {!isSwiperReady && (
                            <div className="case-carousel__placeholder absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-white/70 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 shadow-lg shadow-slate-900/20">
                                <span className="h-2 w-16 animate-pulse" />
                                ЗАГРУЗКА
                            </div>
                        )}
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView="auto"
                            centeredSlides
                            centeredSlidesBounds
                            loop
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 10000, disableOnInteraction: false }}
                            onSwiper={handleSwiperReady}
                            className="h-full max-h-full"
                        >
                            {images.map((image) => (
                                <SwiperSlide
                                    key={image.src}
                                    className="flex justify-center"
                                    style={{ width: '62%' }}
                                >
                                    <div className="relative h-full w-full overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(min-width: 1024px) 900px, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <span className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-slate-200/60 md:block" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .case-carousel.before-ready :global(.swiper-wrapper) {
                    visibility: hidden;
                }

                .case-carousel__placeholder {
                    opacity: 1;
                    transition: opacity 200ms ease;
                }

                .case-carousel :global(.swiper-slide) {
                    transition: transform 200ms ease, filter 200ms ease;
                }

                .case-carousel :global(.swiper-slide-prev),
                .case-carousel :global(.swiper-slide-next) {
                    transform: scale(0.92);
                    filter: brightness(0.35);
                }

                .case-carousel :global(.swiper-slide-active) {
                    transform: scale(1);
                    filter: brightness(1);
                }

                .case-carousel :global(.swiper-slide-prev) .relative::after,
                .case-carousel :global(.swiper-slide-next) .relative::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.65));
                    mix-blend-mode: multiply;
                    pointer-events: none;
                }

                .case-carousel.is-ready .case-carousel__placeholder {
                    opacity: 0;
                    pointer-events: none;
                }
            `}</style>
        </section>
    )
}
