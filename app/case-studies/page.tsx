"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

type CaseStudy = {
  name: string;
  image: string;
  link?: string;
  launchPrice?: string;
  currentPrice?: string;
  appreciation?: string;
  gain?: string;
  entryYear?: string;
  currentYear?: string;
  tag: string;
  isAccessDeal?: boolean;
};

const caseStudies: CaseStudy[] = [
  // 💰 STRONG CASES

  {
    name: "DLF The Arbour",
    image: "/images/arbour.webp",
    launchPrice: "₹6.5–7 Cr",
    currentPrice: "₹10–11 Cr+",
    appreciation: "50%–70%",
    gain: "₹3–4 Cr+",
    entryYear: "2023",
    currentYear: "2026",
    tag: "HIGH DEMAND",
  },
  {
    name: "Krisumi Waterfall Residences",
    image: "/images/krisumi.jpg",
    launchPrice: "₹2.3–3.3 Cr",
    currentPrice: "₹3.5–7 Cr+",
    appreciation: "60%–120%",
    gain: "₹1.5–3 Cr+",
    entryYear: "2020",
    currentYear: "2026",
    tag: "LONG TERM",
  },
  {
    name: "Elan The Presidential",
    image: "/images/elan.jpg",
    launchPrice: "₹3.8–6 Cr",
    currentPrice: "₹5–8.5 Cr+",
    appreciation: "25%–60%",
    gain: "₹1–2.5 Cr+",
    entryYear: "2023",
    currentYear: "2026",
    tag: "VALUE UNLOCK",
  },
  {
    name: "Trevoc Royal Residences",
    image: "/images/trevoc.jpg",
    launchPrice: "₹6–6.5 Cr",
    currentPrice: "₹6.7–7.5 Cr",
    appreciation: "10%–20%",
    gain: "₹0.5–1 Cr",
    entryYear: "2024",
    currentYear: "2026",
    tag: "EARLY STAGE",
  },
  {
    name: "Tulip Monsella",
    image: "/images/tulip.webp",
    launchPrice: "₹18,000 / sq ft",
    currentPrice: "₹32,000 / sq ft",
    appreciation: "~75%+",
    gain: "₹14,000 / sq ft",
    entryYear: "2022",
    currentYear: "2026",
    tag: "MARKET GROWTH",
  },

  // 🎯 LIVE OPPORTUNITY

  {
    name: "Westin Residences",
    image: "/images/westin-residences.png",
    link: "/westinresidences",
    launchPrice: "₹6.5 Cr",
    currentPrice: "₹7.2 Cr+",
    appreciation: "~30%+",
    gain: "₹1 Cr+",
    entryYear: "2024",
    currentYear: "2026",
    tag: "LIVE OPPORTUNITY",
  },

  // 🔒 ACCESS DEAL

  {
    name: "Elie Saab Residences",
    image: "/images/elie-saab.webp",
    tag: "PRIVATE ACCESS",
    isAccessDeal: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#E8E2D9]">

      <Header />

      {/* HERO */}
      <section className="py-28 md:py-36 px-5 text-center">
        <p className="text-[#C8A45A] text-[10px] tracking-[0.4em] mb-6">
          CASE STUDIES
        </p>

        <h1 className="text-3xl md:text-5xl mb-6 leading-tight">
          Proven Investment Outcomes.
          <span className="block italic text-[#C8A45A] mt-2">
            Built on Strategy, Timing & Access
          </span>
        </h1>

        <p className="text-[#8A8A8A] max-w-2xl mx-auto text-sm md:text-base">
          A structured portfolio of investments demonstrating how early entry and strategic positioning create measurable wealth.
        </p>
      </section>

      {/* GRID */}
      <section className="px-5 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {caseStudies.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-[#111] border border-[#1a1a1a] hover:border-[#C8A45A]/40 transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 text-[10px] text-[#C8A45A] tracking-[0.2em]">
                  {item.tag}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-lg mb-3">{item.name}</h3>

                {/* 💰 HERO */}
                {item.appreciation && (
                  <p className="text-3xl md:text-4xl text-[#C8A45A] font-light leading-none">
                    {item.appreciation}
                  </p>
                )}

                {item.gain && (
                  <p className="text-xs text-[#888] mt-1 mb-4">
                    {item.gain} growth
                  </p>
                )}

                <div className="h-px bg-[#1a1a1a] my-4" />

                {/* PRICE */}
                {item.launchPrice && item.currentPrice && (
                  <div className="text-sm mb-4">
                    <div className="flex justify-between text-[#aaa]">
                      <span>Entry</span>
                      <span>{item.launchPrice}</span>
                    </div>
                    <div className="flex justify-between text-white mt-1">
                      <span>Current</span>
                      <span>{item.currentPrice}</span>
                    </div>
                  </div>
                )}

                {/* TIME */}
                {item.entryYear && item.currentYear && (
                  <p className="text-[11px] text-[#666] mb-5">
                    {item.entryYear} → {item.currentYear}
                  </p>
                )}

                {/* ACCESS */}
                {item.isAccessDeal && (
                  <p className="text-sm text-[#C8A45A] mb-5">
                    Private pre-launch allocation secured before public release
                  </p>
                )}

                {/* CTA */}
                <div className="flex items-center justify-between mt-6">

                  {item.link ? (
                    <>
                      <span className="text-xs text-[#666]">
                        CURRENT OPPORTUNITY
                      </span>
                      <Link href={item.link}>
                        <span className="text-[#C8A45A] text-sm hover:translate-x-1 transition cursor-pointer">
                          EXPLORE PROJECT →
                        </span>
                      </Link>
                    </>
                  ) : item.isAccessDeal ? (
                    <>
                      <span className="text-xs text-[#666]">
                        PRIVATE DEAL
                      </span>
                      <span className="text-[#666] text-sm">
                        REQUEST ACCESS
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-[#666]">
                        CASE ANALYSIS
                      </span>
                      <span className="text-[#666] text-sm">
                        ON REQUEST
                      </span>
                    </>
                  )}

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>
      {/* ═════════ INVESTMENT PATTERN (ELITE FINAL) ═════════ */}
<section className="relative py-32 px-5 bg-gradient-to-b from-[#0e0e0e] to-[#111] overflow-hidden">

  {/* SOFT GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,90,0.06),transparent_60%)]" />

  <div className="relative max-w-4xl mx-auto text-center">

    {/* TOP LINE (LUXURY ANCHOR) */}
    <div className="w-16 h-px bg-[#C8A45A]/40 mx-auto mb-8" />

    <p className="text-[#C8A45A] text-[10px] tracking-[0.4em] mb-6">
      INVESTMENT FRAMEWORK
    </p>

    <h2 className="text-2xl md:text-4xl text-[#E8E2D9] mb-14 leading-snug">
      Consistent Drivers Behind
      <span className="block italic text-[#C8A45A] mt-2">
        High-Performance Investments
      </span>
    </h2>

    {/* FRAMEWORK CARD */}
    <div
      className="bg-[#121212] border border-[#1f1f1f] 
                 p-8 md:p-12 space-y-8 
                 shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
    >

      {/* ITEM 1 */}
      <div className="flex items-start gap-5 text-left">
        <span className="text-[#C8A45A] text-lg font-light">01</span>
        <p className="text-[#aaa] text-sm leading-relaxed">
          Early-stage entry before mass awareness unlocks pricing inefficiency.
        </p>
      </div>

      <div className="h-px bg-[#1a1a1a]" />

      {/* ITEM 2 */}
      <div className="flex items-start gap-5 text-left">
        <span className="text-[#C8A45A] text-lg font-light">02</span>
        <p className="text-[#aaa] text-sm leading-relaxed">
          Access-driven allocation ensures positioning in high-demand inventory.
        </p>
      </div>

      <div className="h-px bg-[#1a1a1a]" />

      {/* ITEM 3 */}
      <div className="flex items-start gap-5 text-left">
        <span className="text-[#C8A45A] text-lg font-light">03</span>
        <p className="text-[#aaa] text-sm leading-relaxed">
          Strategic holding aligned with market cycles maximises value realisation.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ═════════ FINAL CTA (ELITE) ═════════ */}
<section className="relative py-32 px-5 bg-[#0a0a0a] overflow-hidden">

  {/* SOFT GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,90,0.1),transparent_60%)]" />

  <div className="relative max-w-2xl mx-auto text-center">

    {/* TOP LINE (VISUAL ANCHOR) */}
    <div className="w-16 h-px bg-[#C8A45A]/40 mx-auto mb-8" />

    <p className="text-[#C8A45A] text-[10px] tracking-[0.4em] mb-6">
      PRIVATE ACCESS
    </p>

    <h2 className="text-2xl md:text-4xl text-[#E8E2D9] mb-6 leading-snug">
      Access Opportunities Before
      <span className="block italic text-[#C8A45A] mt-2">
        They Reach the Market
      </span>
    </h2>

    {/* IMPACT LINE */}
    <p className="text-[#aaa] text-sm mb-4 italic">
      Limited access. Structured opportunities. Measurable outcomes.
    </p>

    <p className="text-[#8A8A8A] text-sm mb-12 leading-relaxed">
      Gain entry into high-potential investments through early allocation and strategic positioning.
    </p>

    {/* PREMIUM BUTTON */}
    <Link href="/#final-cta">
      <button
        className="group relative inline-flex items-center gap-3 px-12 py-4 
                   border border-[#C8A45A]/40
                   text-[#C8A45A] text-sm tracking-[0.2em]
                   overflow-hidden transition duration-500"
      >

        {/* HOVER FILL */}
        <span className="absolute inset-0 bg-[#C8A45A] scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />

        {/* TEXT */}
        <span className="relative group-hover:text-black transition">
          REQUEST PRIVATE ACCESS
        </span>

        {/* ARROW */}
        <span className="relative group-hover:text-black group-hover:translate-x-1 transition">
          →
        </span>

      </button>
    </Link>

  </div>
</section>
      <Footer />

    </main>
  );
}