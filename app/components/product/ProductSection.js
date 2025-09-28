"use client";

import Image from "next/image";

export default function ProductSection() {
    const bottleCards = [
        {
            alt: "Bottle",
            title: "Vanilla Flavored Milk",
            description:
                "Smooth, creamy, and subtly sweet, our Vanilla Milk delivers the perfect balance of natural milk goodness and vanilla flavor. Ideal for a refreshing drink anytime.",
            image: "/images/home-about/slider_vani.png",
        },
        {
            alt: "Bottle",
            title: "Chocolate Flavored Milk",
            description:
                "Rich, indulgent, and full of chocolaty delight, our Chocolate Milk is a treat for both kids and adults. Made with high-quality ingredients for perfect creaminess.",
            image: "/images/home-about/slider_choco.png",
        },
        {
            alt: "Bottle",
            title: "Strawberry Flavored Milk",
            description:
                "Sweet, fruity, and refreshingly vibrant, our Strawberry Milk combines the freshness of natural milk with real strawberries. Delicious and nourishing for all ages.",
            image: "/images/home-about/slider_stro.png",
        },
    ];

    return (
        <section className="py-16 px-5 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="font-heading text-[40px] xl:text-[60px] mb-4 xl:w-[800px] m-auto leading-[40px] xl:leading-[60px]">
                    Discover Our Range of Fresh Dairy Products
                </h1>
                <p className="font-body text-gray-700 text-[16px] xl:text-[20px] max-w-3xl mx-auto">
                    From wholesome farm-fresh milk to rich flavored delights like
                    chocolate, vanilla, and strawberry, Vills Dairy products are crafted
                    to deliver quality, purity, and great taste in every sip. Experience
                    dairy the way it’s meant to be — natural, creamy, and nourishing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {bottleCards.map((bottle, index) => (
                    <div
                        key={index}
                        className="border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 bg-white"
                    >
                        <div className="relative w-full h-64 xl:h-80">
                            <Image
                                src={bottle.image}
                                alt={bottle.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-5 xl:p-8 text-center">
                            <h2 className="font-heading text-xl xl:text-2xl font-semibold mb-3">
                                {bottle.title}
                            </h2>
                            <p className="font-body text-gray-600 text-sm xl:text-base">
                                {bottle.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
