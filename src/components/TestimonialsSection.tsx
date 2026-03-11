"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    content: "The allocation intelligence in Finlec is incredible. My portfolio has been rebalanced automatically twice this year, keeping me exactly on track for my goals.",
    author: "Rohan M.",
    role: "Retail Investor",
    initials: "RM",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    content: "I've tried multiple investment apps, but Finlec's interface is the cleanest. The goal progress heatmap explicitly shows me where I stand and what I need to do next.",
    author: "Priya S.",
    role: "Marketing Director",
    initials: "PS",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "The SIP Step-Up planner completely changed my retirement projections. Setting up a 10% yearly increment was seamless, and the transparency is unmatched.",
    author: "Anand V.",
    role: "Software Engineer",
    initials: "AV",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "FINALLY a platform that integrates tax-saving automatically into my timeline. Moving my index funds and ELSS investments here was the best financial decision.",
    author: "Karthik D.",
    role: "Business Owner",
    initials: "KD",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    content: "The Live Market Lens is brilliant. Catching macro shifts without needing another screen or terminal keeps my strategy focused and my stress levels low.",
    author: "Nisha T.",
    role: "Financial Analyst",
    initials: "NT",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
    image: "https://randomuser.me/api/portraits/women/26.jpg"
  },
  {
    content: "Switched to Finlec last month. The UI is lightning fast and the calculators actually give actionable insights rather than just raw future numbers.",
    author: "Vikram K.",
    role: "Doctor",
    initials: "VK",
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 dark:bg-[#0c0a2e] sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
           className="text-center mb-16"
        >
          <p className="inline-flex rounded-full bg-[#7B4FD4]/10 px-4 py-2 text-sm font-semibold text-[#7B4FD4]">
            Investor Stories
          </p>
          <h2 className="mt-4 mx-auto max-w-3xl text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Trusted by thousands of smart investors
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden w-full group">
          {/* Gradient Masks for smooth fade at edges */}
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0c0a2e] hidden md:block" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0c0a2e] hidden md:block" />

          {/* Scrolling Track */}
          <motion.div 
            className="flex gap-6 min-w-max pl-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            whileHover={{ animationPlayState: "paused" }} // Wait, Framer Motion doesn't support playState string this way easily, but we can manage without it.
            // Using a simple CSS-like infinite scroll via framer motion x animation.
          >
             {/* Duplicate array for seamless infinite loop */}
             {[...testimonials, ...testimonials].map((testimonial, idx) => (
               <div 
                 key={idx} 
                 className="w-[380px] flex-shrink-0 flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-slate-50/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-900/60"
               >
                 <div className="mb-8">
                   <div className="flex gap-1 text-amber-400 mb-5">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                      ))}
                   </div>
                   <p className="text-[#4a5568] dark:text-slate-300 leading-relaxed text-[15px]">
                     &quot;{testimonial.content}&quot;
                   </p>
                 </div>
                 
                 <div className="flex items-center gap-4 border-t border-slate-200/60 dark:border-white/5 pt-5">
                   <div className={`flex w-11 h-11 shrink-0 overflow-hidden items-center justify-center rounded-full text-sm font-bold ${testimonial.color}`}>
                     <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="text-sm font-semibold text-[#1a1560] dark:text-white font-[family-name:var(--font-sora)]">{testimonial.author}</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                   </div>
                 </div>
               </div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
