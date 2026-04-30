import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InsightsPage() {
  const posts = getAllPosts();

  const sortedPosts = posts.sort((a, b) =>
    new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
  );

  return (
    <>
      <Header />

      <main className="bg-[#0A0A0A] text-[#E8E2D9] py-28 px-5 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">

          {/* HEADER */}
          <div className="w-16 h-px bg-[#C8A45A]/40 mx-auto mb-8" />

          <p className="text-[#C8A45A] text-[10px] tracking-[0.4em] mb-6">
            MARKET INSIGHTS
          </p>

          <h1 className="text-3xl md:text-5xl mb-16 leading-tight">
            Strategic Thinking.
            <span className="block italic text-[#C8A45A] mt-2">
              Backed by Market Reality
            </span>
          </h1>

          {/* EMPTY STATE */}
          {sortedPosts.length === 0 && (
            <p className="text-[#666] text-sm">
              Insights coming soon.
            </p>
          )}

          {/* GRID */}
          <div
            className={`grid gap-10 ${
              sortedPosts.length === 1
                ? "md:grid-cols-1 max-w-2xl mx-auto"
                : "md:grid-cols-3"
            }`}
          >
            {sortedPosts.map((post) => {

              // ✅ FINAL IMAGE LOGIC
              const imageSrc =
                post.image || "/images/default-insight.jpg";

              return (
                <Link key={post.slug} href={`/insights/${post.slug}`}>

                  <div className="group bg-[#111] border border-[#1a1a1a] 
                                  hover:border-[#C8A45A]/40 
                                  hover:shadow-[0_0_40px_rgba(200,164,90,0.08)]
                                  transition duration-500 text-left cursor-pointer overflow-hidden">

                    {/* IMAGE */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={post.title || "Insight"}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <p className="text-[10px] text-[#666] mb-2 tracking-[0.15em]">
                        {post.readTime || "3 MIN READ"}
                      </p>

                      <h2 className="text-lg mb-3 group-hover:text-white transition">
                        {post.title}
                      </h2>

                      <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6">
                        {post.excerpt || "Strategic insight coming soon..."}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#C8A45A] tracking-[0.15em]">
                          VIEW INSIGHT
                        </span>
                        <span className="text-[#C8A45A] group-hover:translate-x-1 transition">
                          →
                        </span>
                      </div>

                    </div>

                  </div>

                </Link>
              );
            })}
          </div>

        </div>
      </main>

      {/* CTA */}
      <section className="relative py-28 px-5 bg-[#0a0a0a] text-center">

        <div className="w-16 h-px bg-[#C8A45A]/40 mx-auto mb-8" />

        <p className="text-[#C8A45A] text-[10px] tracking-[0.4em] mb-6">
          PRIVATE ACCESS
        </p>

        <h2 className="text-2xl md:text-4xl mb-6">
          Access Opportunities Before
          <span className="block italic text-[#C8A45A] mt-2">
            They Reach the Market
          </span>
        </h2>

        <p className="text-[#8A8A8A] text-sm mb-10 max-w-xl mx-auto">
          Gain early access to high-potential luxury investments through strategic positioning and exclusive allocation.
        </p>

        <Link href="/#final-cta">
          <button className="group relative inline-flex items-center gap-3 px-10 py-4 
                            border border-[#C8A45A]/40
                            text-[#C8A45A] text-sm tracking-[0.2em]
                            overflow-hidden transition duration-500">

            <span className="absolute inset-0 bg-[#C8A45A] scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />

            <span className="relative group-hover:text-black transition">
              REQUEST PRIVATE ACCESS
            </span>

            <span className="relative group-hover:text-black group-hover:translate-x-1 transition">
              →
            </span>

          </button>
        </Link>

      </section>

      <Footer />
    </>
  );
}