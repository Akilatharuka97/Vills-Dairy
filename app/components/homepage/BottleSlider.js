import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export default function BottleSlider() {
    const bottleSlider = [
        {
            alt: "Bottle",
            title: "Vanila Flavoured Milk",
            description: "Smooth, creamy, and subtly sweet, our Vanilla Milk is crafted to deliver the perfect balance of natural milk goodness and vanilla flavor. Ideal for a refreshing drink any time of the day.",
            image: "/images/home-about/slider_vani.png"
        },

        {
            alt: "Bottle",
            title: "Chocolate Flavoured Milk",
            description: "Rich, indulgent, and full of chocolaty delight, our Chocolate Milk is a treat for both kids and adults. Made with high-quality ingredients to ensure every sip is perfectly creamy and flavorful.",
            image: "/images/home-about/slider_choco.png"
        },

        {
            alt: "Bottle",
            title: "Strawberry Flavoured Milk",
            description: "Sweet, fruity, and irresistibly refreshing, our Strawberry Milk combines the freshness of natural milk with the vibrant taste of real strawberries. A delicious way to enjoy your daily dose of dairy.",
            image: "/images/home-about/slider_stro.png"
        },
    ];

    return (

        <div className="w-full mx-auto px-4 mb-[50px] xl:pl-[160px] xl:pr-[160px] xl:pb-[100px] xl:mb-0 bg-white xl:pt-[100px] relative z-50">
            <div>
                <h1 className="font-heading text-[40px] leading-11 text-center pb-[30px] m-0 xl:text-[60px] xl:leading-16 xl:w-[700px] xl:m-auto">
                    Discover Our Range of Fresh Dairy Products
                </h1>
                <div className="font-body text-[16px] text-center pb-[30px] text-[var(--para)] xl:w-[850px] xl:m-auto xl:text-[20px] xl:pb-[50px]">
                    From wholesome farm-fresh milk to rich flavored delights like chocolate, vanilla, and strawberry, Vills Dairy products are crafted to deliver quality, purity, and great taste in every sip. Explore our wide range and experience dairy the way it’s meant to be — natural, creamy, and nourishing.
                </div>
            </div>
            <Carousel opts={{ align: "start", slidesToScroll: 1, loop: false }} className="w-full">
            
                <CarouselContent className="-ml-3 md:-ml-4">
                    {bottleSlider.map((botslider, index) => (
                        <CarouselItem key={index} className="pl-3 md:pl-4 basis-[90%] sm:basis-[75%] md:basis-1/2 lg:basis-1/3">
                            <div className="w-full h-full border rounded-lg">
                                <div className="relative w-full h-64 xl:h-[400px] rounded-lg overflow-hidden shadow-md">
                                    <Image
                                        src={botslider.image}
                                        alt={botslider.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-2 p-5 xl:pt-[40px] xl:pb-[50px]">
                                    <div className="font-heading font-semibold text-[20px] text-center pb-5 xl:text-[30px]">{botslider.title}</div>
                                    <div className="font-body text-sm text-gray-600 text-center text-[16px] xl:text-[20px]">{botslider.description}</div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden sm:flex absolute left-2.5 xl:hidden" />
                <CarouselNext className="hidden sm:flex absolute right-2.5 xl:hidden" />
            </Carousel>
        </div>
    )
}
