"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const visionMission = [
    {
        id: 1,
        title: "Our Vision",
        description:
            "To be the leading dairy farm delivering fresh, organic, and high-quality milk products to every household while promoting sustainable farming practices.",
        icon: "/images/about-page/vision.gif",
    },
    {
        id: 2,
        title: "Our Mission",
        description:
            "To ensure the health and satisfaction of our customers by providing pure and nutritious dairy products directly from our farm using ethical and innovative farming methods.",
        icon: "/images/about-page/mission.gif",
    },
];

export default function AboutVisionMision() {
    return (
        <div className="py-16 px-5 md:px-20 bg-[#F7F7F7] xl:pl-[160px] xl:pr-[160px] xl:mb-[100px]">
            <h2 className="text-[30px] font-medium font-heading text-center mb-5 xl:text-[60px] xl:mb-[50px]">
                Vision & Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {visionMission.map((item) => (
                    <motion.div
                        key={item.id}
                        className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start xl:pl-[100px] xl:pr-[100px] xl:pb-[100px]"
                        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {item.icon && (
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="mb-4 m-auto"
                            />
                        )}
                        <h2 className="text-2xl font-semibold font-heading text-center mb-4 m-auto xl:text-[40px]">{item.title}</h2>
                        <p className="text-gray-600 leading-relaxed font-body text-center xl:text-[18px]">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
