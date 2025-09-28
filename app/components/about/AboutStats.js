"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function AboutStats() {
    const stats = [
        { id: 1, label: "Years of Excellence", value: 8, suffix: "+" },
        { id: 2, label: "Premium Products", value: 12, suffix: "+" },
        { id: 3, label: "Happy Clients", value: 400000, suffix: "+" },
    ];

    return (
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
            <h2 className="text-4xl font-heading text-3xl text-center font-medium xl:text-6xl mb-12">Our Achievements</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {stats.map((stat) => (
                <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stat.id * 0.2 }}
                className="p-8 rounded-2xl bg-white/10 shadow-lg backdrop-blur-md border border-white/20"
                >
                <h3 className="text-5xl font-extrabold text-indigo-400 mb-3">
                    <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
                </h3>
                <p className="text-lg font-medium">{stat.label}</p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
