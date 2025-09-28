"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bottles = [
    {
        id: 1,
        title: "Vanilla Flavored Milk",
        description:
            "Experience the rich and creamy taste of our vanilla milk, crafted with premium natural ingredients. Perfect for breakfast, smoothies, or a refreshing treat anytime. Enjoy a deliciously smooth vanilla flavor that delights every sip.",
        img: "/images/banner/vanilla-milk.png",
    },
    {
        id: 2,
        title: "Chocolate Flavored Milk",
        description:
            "Indulge in our luscious chocolate milk made from high-quality cocoa and fresh milk. Ideal for kids and adults alike, it’s a perfect blend of sweetness and creaminess. Savor a rich chocolate flavor that satisfies every craving.",
        img: "/images/banner/chocolate.png",
    },
    {
        id: 3,
        title: "Strawberry Flavored Milk",
        description:
            "Enjoy the fresh, fruity taste of our strawberry milk, made with real strawberries and creamy milk. A healthy and delicious drink for breakfast or a midday refreshment. Delight in a sweet and naturally flavorful strawberry experience.",
        img: "/images/banner/strawberry.png",
    },
];

export default function BottleSection() {
    const [selected, setSelected] = useState(null);

    const spring = {
        type: "spring",
        stiffness: 300,
        damping: 30,
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 50, scale: 0.9 },
    };

    const selectedVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <div className="h-screen w-full hidden xl:flex overflow-hidden">
            <AnimatePresence>
                {!selected &&
                    bottles.map((bottle) => (
                        <motion.div
                            key={bottle.id}
                            layoutId={`card-${bottle.id}`}
                            onClick={() => setSelected(bottle)}
                            className="z-[9999] relative w-1/3 h-full cursor-pointer flex flex-col items-center justify-center bg-white border transition-all duration-500 ease-in-out hover:scale-105 [&:nth-child(1):hover]:bg-[#F9F2D5] [&:nth-child(2):hover]:bg-[#B89B81] [&:nth-child(3):hover]:bg-[#FD94A1]"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={spring}
                        >
                            <motion.img
                                layoutId={`img-${bottle.id}`}
                                src={bottle.img}
                                alt={bottle.title}
                                className="w-[200px] h-auto object-cover"
                                transition={spring}
                            />

                            <div className="font-heading text-[40px] leading-11 text-center mt-10">
                                {bottle.title}
                            </div>

                            <button
                                onClick={() => setSelected(bottle)}
                                className="cursor-pointer mt-10 border border-black hover:border-red-500 font-body uppercase rounded-[100px] flex w-fit pt-3 pb-3 pl-9 pr-9 gap-1.5 text-[16px] font-bold hover:bg-[var(--red)] hover:text-white transition-all duration-500 ease-in-out"
                            >
                                View Details
                            </button>
                        </motion.div>
                    ))}
            </AnimatePresence>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        layoutId={`card-${selected.id}`}
                        className="fixed inset-0 flex flex-col items-center justify-center [:nth-child(1)]:bg-[#F9F2D5] [&:nth-child(2)]:bg-[#B89B81] [&:nth-child(3)]:bg-[#FD94A1]"
                        variants={selectedVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={spring}
                    >
                        <motion.img
                            layoutId={`img-${selected.id}`}
                            src={selected.img}
                            alt={selected.title}
                            className="w-[200px] h-auto object-contain"
                            transition={spring}
                        />

                        <motion.div className="absolute font-heading text-[100px] mt-6 -z-10 top-[150px] uppercase text-center">
                            {selected.title}
                        </motion.div>

                        <motion.p className="mt-4 max-w-4xl text-center font-body absolute text-2xl font-medium bottom-[100px]">
                            {selected.description}
                        </motion.p>

                        <button
                            onClick={() => setSelected(null)}
                            className="absolute bottom-20 left-20 border-black cursor-pointer mt-10 border font-body uppercase rounded-[100px] flex w-fit pt-3 pb-3 pl-9 pr-9 gap-1.5 text-[16px] font-bold hover:bg-[var(--red)] hover:text-white hover:border-red-600 transition-all duration-500 ease-in-out"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
