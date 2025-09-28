"use client";

import Link from "next/link";

export default function AboutSection() {
    return (
        <div className="pt-[50px] pb-[50px] pl-5 pr-5 bg-[#F7F7F7] mb-[50px] xl:pt-[100px] xl:pb-[100px] xl:mb-0 xl:pl-[23.44vw] xl:pr-[23.44vw] relative z-50">
            <div>
                <h1 className="font-heading text-[40px] leading-11 text-center pb-[30px] m-0 xl:text-[60px] xl:leading-16 xl:w-[700px] xl:m-auto">
                    Fresh, Creamy & Delicious Milk Drinks
                </h1>
                <div className="font-body text-[16px] text-center pb-[30px] text-[var(--para)] xl:w-[850px] xl:m-auto xl:text-[20px] xl:pb-[50px]">
                    At Vills Dairy, we are passionate about delivering the freshest milk drinks straight to your glass. From rich chocolate to smooth vanilla and sweet strawberry, every sip is crafted with care and quality ingredients. Our commitment to purity, taste, and innovation makes Vills Dairy the perfect choice for families and milk lovers alike. Experience the creamy goodness that keeps our customers coming back for more.
                </div>
                <div className="border w-fit m-auto mb-[30px] xl:mb-[70px] xl:hover:border-red-500 rounded-[100px]">
                    <Link href="/about" className="font-body uppercase rounded-[100px] flex w-fit pt-3 pb-3 pl-9 pr-9 center gap-1.5 xl:text-[16px] font-bold xl:hover:bg-[var(--red)] transition-all duration-500 ease-in-out xl:hover:text-white">
                        Explore More
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m7 18c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z" />
                            <path d="m17 17c-.6 0-1-.4-1-1v-8h-8c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1z" />
                        </svg>
                    </Link>
                </div>
                <div className="reveal relative overflow-hidden rounded-lg">
                    <picture>
                        <source media="(min-width: 991px)" srcSet="/images/home-about/1600x800.jpg" />
                        <source media="(min-width: 767px)" srcSet="/images/home-about/1200x500.jpg" />
                        <img src="/images/home-about/800x800.jpg" alt="Home about Image" className="w-full h-full object-cover" />
                    </picture>
                </div>
            </div>
        </div>
    );
}
