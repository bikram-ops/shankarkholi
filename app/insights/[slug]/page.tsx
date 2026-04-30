import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

/* ✅ DYNAMIC SEO METADATA */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter } = getPostBySlug(params.slug);

    return {
      title: frontmatter.title || "Insight",
      description: frontmatter.excerpt || "Market insights and strategic perspectives.",
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        images: frontmatter.image ? [frontmatter.image] : [],
      },
    };
  } catch {
    return {
      title: "Insight",
      description: "Content not found",
    };
  }
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  try {
    const { content, frontmatter } = getPostBySlug(params.slug);

    /* ✅ MDX IMAGE SYSTEM */
    const mdxComponents = {
      img: (props: any) => (
        <div className="my-10 md:my-14">
          <div className="max-w-2xl mx-auto">
            <Image
              src={props.src}
              alt={props.alt || ""}
              width={900}
              height={520}
              className="rounded-sm"
            />
          </div>
        </div>
      ),
    };

    return (
      <main className="bg-[#0A0A0A] text-[#E8E2D9]">

        <Header />

        {/* ═════════ HEADER ═════════ */}
        <section className="pt-24 md:pt-32 pb-10 md:pb-14 px-5">
          <div className="max-w-2xl mx-auto">

            <p className="text-[#777] text-[10px] tracking-[0.25em] mb-4">
              {frontmatter.readTime || "3 MIN READ"}
            </p>

            <h1 className="text-[22px] md:text-[38px] leading-[1.35] mb-6 font-light">
              {frontmatter.title}
            </h1>

            <div className="w-8 h-[1px] bg-[#C8A45A]/50" />

          </div>
        </section>

        {/* ═════════ FEATURE IMAGE (TOP — SINGLE) ═════════ */}
        {frontmatter.image && (
          <div className="px-5 -mt-2 mb-6 md:mb-8">
            <div className="max-w-2xl mx-auto">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={900}
                height={520}
                className="rounded-sm"
              />
            </div>
          </div>
        )}

        {/* ═════════ CONTENT ═════════ */}
        <section className="pb-24 md:pb-32 px-5">

          <div className="max-w-2xl mx-auto">

            <div
              className="
              prose prose-invert max-w-none

              [&>p]:text-[#D0D0D0]
              [&>p]:text-[15.5px] md:[&>p]:text-[17px]
              [&>p]:leading-[1.8] md:[&>p]:leading-[1.95]
              [&>p]:mb-6 md:[&>p]:mb-8

              [&>h2]:text-white
              [&>h2]:text-[20px] md:[&>h2]:text-[24px]
              [&>h2]:mt-12 md:[&>h2]:mt-16
              [&>h2]:mb-5 md:[&>h2]:mb-6
              [&>h2]:tracking-tight

              [&>h3]:text-white
              [&>h3]:text-[18px]
              [&>h3]:mt-10 md:[&>h3]:mt-12
              [&>h3]:mb-4

              [&>strong]:text-white

              [&>ul]:mt-4
              [&>ul]:mb-6 md:[&>ul]:mb-8
              [&>ul>li]:mb-2 md:[&>ul>li]:mb-3
              [&>ul>li]:text-[#D0D0D0]
              [&>ul>li]:leading-[1.7] md:[&>ul>li]:leading-[1.85]

              [&>blockquote]:border-l-2
              [&>blockquote]:border-[#C8A45A]
              [&>blockquote]:pl-4
              [&>blockquote]:text-[#aaa]
              [&>blockquote]:italic
              [&>blockquote]:my-8 md:[&>blockquote]:my-12
            "
            >
              <MDXRemote source={content} components={mdxComponents} />
            </div>

          </div>

        </section>

        {/* ═════════ CTA ═════════ */}
        <section className="py-20 md:py-24 px-5 border-t border-[#1a1a1a]">

          <div className="max-w-md mx-auto text-center">

            <p className="text-[#8A8A8A] text-sm mb-6">
              Looking to access similar opportunities?
            </p>

            <Link href="/#final-cta">
              <button className="px-8 py-3 border border-[#C8A45A]/40 text-[#C8A45A] text-[12px] tracking-[0.18em]
                                 hover:bg-[#C8A45A] hover:text-black transition">
                REQUEST PRIVATE ACCESS →
              </button>
            </Link>

          </div>

        </section>

        <Footer />

      </main>
    );

  } catch {
    return notFound();
  }
}