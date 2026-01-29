"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dev", href: "/services/dev" },
    { name: "Marketing", href: "/services/marketing" },
    { name: "Automation", href: "/services/automation" },
];

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-8 pointer-events-none">
            <div className="flex items-center gap-8 px-8 py-3 bg-[#0A0A0A]/40 backdrop-blur-md border border-[#E5E4E2]/10 rounded-full pointer-events-auto">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href} className="relative group">
                            <span className={`text-[10px] uppercase tracking-[0.2em] font-mono transition-colors duration-300 ${isActive ? 'text-[#D4AF37]' : 'text-[#E5E4E2]/60 group-hover:text-[#E5E4E2]'}`}>
                                {link.name}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
