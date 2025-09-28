"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="w-full bg-gradient-to-r from-red-500 via-red-400 to-pink-500 py-16 px-6 md:py-24 md:px-12 flex justify-center relative z-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center"
            >
                {/* Large Heading */}
                <h2 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Ready to Experience the Difference?
                </h2>

                {/* Subtext */}
                <p className="mt-4 font-body text-white/90 text-lg md:text-xl">
                    Take the next step and see how our solutions can transform your workflow.
                </p>

                {/* CTA Button */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="mt-8 inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-full text-lg md:text-xl shadow-lg transition-all duration-300"
                >
                    Get Started
                </motion.a>
            </motion.div>
        </section>
    );
}
