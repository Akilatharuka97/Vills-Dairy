"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const navItem = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Products", href: "/products" },
        { name: "Contact us", href: "/contact" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full top-2.5 pl-2.5 pr-2.5 z-[999] xl:pl-40 xl:pr-40 xl:pt-5">
            <div className="flex bg-[#F7F7F7] rounded-[100px] items-center justify-between flex-wrap shadow-md xl:relative xl:h-[100px]">
                {/* Logo */}
                <div className="pl-5 w-fit pt-2.5 pb-2.5 xl:p-0 xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
                    <Link href={"/"}>
                        <Image src="/images/logo.png" alt="YourBrand Logo" width={100} height={40} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="pr-5">
                    <button
                        onClick={() => setOpen(!open)}
                        className="xl:hidden flex text-black"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex gap-7 absolute left-20 top-1/2 -translate-y-1/2">
                    {navItem.map((item) => (
                        <Link key={item.href} href={item.href} className="font-heading text-black font-medium hover:text-[var(--red)] transition-all duration-500 ease-in-out">
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Slide-in Menu */}
                <div className={`fixed top-0 left-0 h-full w-full bg-[var(--red)] shadow-lg transform transition-transform duration-500 ease-in-out -z-10 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="pt-[150px] flex flex-col space-y-4 pl-[25px] pr-[25px] pb-[100px]">
                        {navItem.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-white text-2xl duration-500 ease-in-out font-heading uppercase"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Cta btn */}
                <div className="hidden transition-all duration-500 ease-in-out xl:flex absolute right-20 top-1/2 -translate-y-1/2 border rounded-[100px] hover:bg-[var(--red)] hover:text-white">
                    <Link href="/contact" className="pt-3 pb-3 pl-9 pr-9 font-body font-medium uppercase flex w-fit center gap-1.5">
                        Enquiry Now
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m7 18c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z" />
                            <path d="m17 17c-.6 0-1-.4-1-1v-8h-8c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
