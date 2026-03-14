"use client";

/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Boxes } from "@/components/ui/background-boxes";

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
export interface HeroSectionProps {
    className?: string;
    logo?: {
        url: string;
        alt: string;
        text?: string;
    };
    slogan?: string;
    title: React.ReactNode;
    subtitle: string;
    callToAction: {
        text: string;
        href: string;
    };
    backgroundImage: string;
    contactInfo?: {
        website: string;
        phone: string;
        address: string;
    };
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
    ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo }, ref) => {

        // Animation variants for the container to orchestrate children animations
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
            },
        };

        // Animation variants for individual text/UI elements
        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                    transition: {
                    duration: 0.5,
                    ease: "easeOut",
                },
            },
        };

        return (
            <motion.section
                ref={ref}
                className={cn(
                    "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
                    className
                )}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Background effect */}
                <Boxes />
                <div className="pointer-events-none absolute inset-0 z-[1] h-full w-full bg-background [mask-image:radial-gradient(transparent_30%,white)]" />

                {/* Left Side: Content */}
                <div className="pointer-events-none relative z-10 flex w-full flex-col justify-end p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
                    {/* Main Content â€” vertically centered */}
                    <div className="flex flex-1 flex-col justify-center">
                        {logo && (
                            <motion.header className="mb-12" variants={itemVariants}>
                                <div className="flex items-center">
                                    <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                                    <div>
                                        {logo.text && <p className="text-lg font-bold text-foreground">{logo.text}</p>}
                                        {slogan && <p className="text-xs tracking-wider text-muted-foreground">{slogan}</p>}
                                    </div>
                                </div>
                            </motion.header>
                        )}

                        <motion.main variants={containerVariants}>
                            <motion.h1 className="text-4xl font-bold leading-tight text-[#1a1560] md:text-5xl" variants={itemVariants}>
                                {title}
                            </motion.h1>
                            <motion.div className="my-6 h-1 w-20 bg-[linear-gradient(135deg,#04b488,#7B4FD4)]" variants={itemVariants}></motion.div>
                            <motion.p className="mb-8 max-w-md text-base text-[#4a5568]" variants={itemVariants}>
                                {subtitle}
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                <motion.a href={callToAction.href} className="pointer-events-auto inline-flex w-fit items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#04b488,#18d1b1)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(4,180,136,0.9)] transition-all hover:translate-y-[-1px] hover:shadow-[0_24px_48px_-24px_rgba(4,180,136,0.95)]">
                                    {callToAction.text}
                                </motion.a>

                                <div className="pointer-events-none mt-2 flex items-center gap-5">
                                    <div className="flex -space-x-3">
                                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <div className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                            1M+
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-1 text-amber-400 mb-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-xs font-semibold text-slate-500 font-[family-name:var(--font-sora)]">
                                            from 10k+ reviews
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.main>
                    </div>

                    {/* Bottom Section: Footer Info */}
                    {contactInfo && (
                        <motion.footer className="mt-12 w-full" variants={itemVariants}>
                            <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3">
                                <div className="flex items-center">
                                    <InfoIcon type="website" />
                                    <span>{contactInfo.website}</span>
                                </div>
                                <div className="flex items-center">
                                    <InfoIcon type="phone" />
                                    <span>{contactInfo.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <InfoIcon type="address" />
                                    <span>{contactInfo.address}</span>
                                </div>
                            </div>
                        </motion.footer>
                    )}
                </div>

                {/* Right Side: Image with Clip Path Animation */}
                <motion.div
                    className="pointer-events-none relative z-10 w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                    initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                    animate={{ clipPath: 'polygon(1% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                >
                </motion.div>
            </motion.section>
        );
    }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };

