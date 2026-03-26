import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";
import PageWrapper from "@/components/PageWrapper";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const colorMap: Record<string, string> = {
  coral: "bg-coral/8 text-coral",
  blue: "bg-blue/8 text-blue",
  sunshine: "bg-sunshine/12 text-sunshine-dark",
  mint: "bg-mint/8 text-mint-dark",
  violet: "bg-violet/8 text-violet",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.body.split("\n\n");

  return (
    <PageWrapper>
      <article className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue hover:text-blue/80 transition-colors mb-10"
          >
            <Icon name="arrow-left" size={16} />
            Back to Blog
          </Link>

          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${colorMap[post.color] || colorMap.coral}`}
            >
              {post.category}
            </span>
            <span className="text-[13px] text-text-muted">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] md:text-[40px] font-extrabold text-navy leading-tight mb-10">
            {post.title}
          </h1>

          {/* Hero image placeholder */}
          <div className="h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-[var(--radius-lg)] flex items-center justify-center mb-10">
            <span className="opacity-20">
              <Icon name="pen-line" size={64} />
            </span>
          </div>

          {/* Body content */}
          <div className="prose-camp">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-[16px] md:text-[17px] text-text-body leading-[1.8] mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* CTA */}
          <div className="bg-cream rounded-[var(--radius-lg)] p-8 md:p-10 text-center">
            <h2 className="text-[22px] md:text-[26px] font-extrabold text-navy mb-3">
              Ready to Give Your Child an Unforgettable Summer?
            </h2>
            <p className="text-[15px] text-text-body mb-6 max-w-[520px] mx-auto">
              Spots fill up fast. Register today or get in touch with our team
              to learn more about Laurus programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="coral" href={`/${locale}/register`} pill>
                Register Now
              </Button>
              <Button variant="outline" href={`/${locale}/contact`} pill>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
