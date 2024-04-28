import { formatDate, getPosts, getPost } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPosts().find((post) => post.id === params.slug);

  if (!post) {
    return;
  }

  const { title, date, image, description } = post;
  const ogImage = image
    ? image
    : `https://www.gwnplus.be/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: String(date),
      url: `https://www.gwnplus.be/blog/${post.id}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: String(post.date),
            dateModified: String(post.date),
            // description: post.metadata.summary,
            image: post.image
              ? `https://www.gwnplus.be/${post.image}`
              : `/og?title=${encodeURIComponent(post.title)}`,
            url: `https://www.gwnplus.be/blog/${post.id}`,
            author: {
              "@type": "Person",
              name: "Gwen Jansen",
            },
          }),
        }}
      />
      <div className="max-w-4xl px-8 mx-auto mb-24">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug">
          {post.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-base text-slate-600">
            {formatDate(String(post.date))}
          </p>
        </div>
        <article
          className="post_content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </section>
  );
}
