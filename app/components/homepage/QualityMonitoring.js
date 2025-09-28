"use client";

import Image from "next/image";

export default function QualityMonitoring() {
    const qitem = [
        {
            image: "/images/home-about/temparature.png",
            text: "Reliable Pasteurization",
        },
        {
            image: "/images/home-about/microscope.png",
            text: "Laboratory Testing",
        },
        {
            image: "/images/home-about/experiment.png",
            text: "Pure Cultures of Bacteria",
        },
    ];

    return (
        <div className="h-full bg-[var(--red)] xl:pl-[160px] xl:relative">
            <div className="flex justify-between xl:items-center">
                <div className="p-5 pt-[50px] pb-[50px] xl:p-0 xl:flex xl:flex-col xl:pr-[100px]">
                    <h2 className="text-white font-heading text-[40px] leading-11 text-center pb-5 xl:text-left xl:text-[60px] xl:leading-16 xl:w-[700px]">
                        Regular Control Quality Monitoring
                    </h2>
                    <div className="text-white font-body text-[16px] text-center xl:text-left xl:w-[600px]">
                        Maecenas eu massa varius, ornare urna vitae, sagittis
                        odio. Etiam vel mollis elit. Phasellus vitae libero
                        dictum, dictum augue nec, varius massa.
                    </div>

                    <div className="quality-card-wrapper flex flex-col items-center gap-5 w-4/5 m-auto mt-5 md:flex-row lg:justify-center xl:justify-start xl:m-0 xl:mt-[60px]">
                        {qitem.map((quality, item) => (
                            <div
                                key={item}
                                className="quality-card bg-white rounded-2xl p-5 w-full md:w-1/3 shadow-2xl lg:w-[200px]"
                            >
                                <div className="w-[50px] h-[50px] m-auto mb-5">
                                    <Image src={quality.image} alt="" width={50} height={50} />
                                </div>
                                <div className="text-center font-body uppercase">
                                    {quality.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden xl:flex relative w-[50%] h-screen overflow-hidden reveal-scientist">
                    <Image src="/images/home-about/scienstist.jpg" alt="Scientist" fill className="object-cover" />
                </div>
            </div>
        </div>
    );
}
