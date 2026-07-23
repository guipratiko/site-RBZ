import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { getInstagramPosts } from "@/lib/instagram";
import { siteConfig } from "@/lib/data/site-config";

async function InstagramFeed() {
  const posts = await getInstagramPosts();

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Instagram"
            title="Acompanhe a RBZ"
            description="Posts recentes do nosso perfil."
          />
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-accent underline underline-offset-4"
          >
            Ver no Instagram
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-muted-background"
            >
              <Image
                src={post.mediaUrl}
                alt={post.caption?.slice(0, 120) || "Post do Instagram da RBZ"}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/15" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { InstagramFeed };
