"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert("Form submitted successfully!");
    };

    return (
        <section className="w-full py-16 bg-[#F7F7F7]">
            <div className="max-w-4xl mx-auto px-5">
                <h2 className="font-heading text-3xl text-center font-medium xl:text-6xl text-gray-800 mb-6">
                    Get in Touch
                </h2>
                <p className="text-center text-gray-700 mb-12">
                    Have questions or want to know more about our products? Fill out the form below and we’ll get back to you promptly.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D97706] focus:outline-none"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D97706] focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D97706] focus:outline-none"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D97706] focus:outline-none"
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="border border-gray-300 rounded-lg p-3 w-full md:col-span-2 focus:ring-2 focus:ring-[#D97706] focus:outline-none"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        className="border border-gray-300 rounded-lg p-3 w-full md:col-span-2 focus:ring-2 focus:ring-[#D97706] focus:outline-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="md:col-span-2 bg-[#D97706] text-white font-bold py-3 rounded-lg hover:bg-[#b96504] transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
