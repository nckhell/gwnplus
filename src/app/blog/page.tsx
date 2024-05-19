import { Metadata } from "next";
import { getPosts, formatDate } from "../../lib/posts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GWN+ | Loopbaancoaching Blog",
  description:
    "Lees de nieuwste artikelen en inzichten over loopbaancoaching op de GWN+ blog.",
  alternates: {
    canonical: "https://www.gwnplus.be/blog",
  },
};

export default function Blog() {
  const posts = getPosts();

  return (
    <div className="container-gwen mb-24">
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug">
              Blog
            </h2>
            <p className="text-lg text-slate-600 mt-2 max-w-[580px] mx-auto">
              {metadata.description}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.image}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={String(post.date)} className="mr-8">
                    {formatDate(String(post.date))}
                  </time>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
