"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function HeaderBanner() {
    const banners = [
        {
            alt: "Banner 1",
            title: "Sip the Joy of Chocolate Bliss",
            subtitle: "Indulge in rich, creamy chocolate milk made to refresh your every moment.",
            btnText: "Explore Products",
            link: "/products",
            images: {
                mobile: "/images/banner/800x1420-1.jpg",
                tablet: "/images/banner/1024x1370-1.jpg",
                desktop: "/images/banner/1920x1000-1.jpg",
            },
        },
        {
            alt: "Banner 2",
            title: "Freshness in Every Drop You Love",
            subtitle: "Discover the sweet harmony of strawberry and vanilla in every sip.",
            btnText: "Taste the Goodness",
            link: "/contact",
            images: {
                mobile: "/images/banner/800x1420-2.jpg",
                tablet: "/images/banner/1024x1370-2.jpg",
                desktop: "/images/banner/1920x1000-2.jpg",
            },
        },
    ];

    return (
        <div className="w-full h-screen relative xl:hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 5000 }}
                effect="fade"
                loop
                className="h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* Banner Image */}
                        <picture>
                            <source media="(min-width: 991px)" srcSet={banner.images.desktop} />
                            <source media="(min-width: 767px)" srcSet={banner.images.tablet} />
                            <img src={banner.images.mobile} alt={banner.alt} className="w-full h-screen object-cover" />
                        </picture>

                        {/* Banner Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg font-heading xl:w-[650px]">
                                {banner.title}
                            </h1>
                            <p className="mt-4 text-lg md:text-2xl drop-shadow-md font-body">
                                {banner.subtitle}
                            </p>
                            <div className="border w-fit mt-[20px] mb-[30px] xl:mb-[70px] xl:hover:border-red-500 rounded-[100px]">
                                <Link href={banner.link} className="font-body uppercase rounded-[100px] flex w-fit pt-3 pb-3 pl-9 pr-9 center gap-1.5 xl:text-[16px] font-bold xl:hover:bg-[var(--red)] transition-all duration-500 ease-in-out xl:hover:text-white">
                                    {banner.btnText}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="m7 18c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z" />
                                        <path d="m17 17c-.6 0-1-.4-1-1v-8h-8c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
