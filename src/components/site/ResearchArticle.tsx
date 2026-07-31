import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { BRAND, SITE } from "@/lib/site";
import { CALENDLY_URL } from "@/lib/config/calendly";

type Breadcrumb = { name: string; href: string };

type Props = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  breadcrumbs: Breadcrumb[];
  children: ReactNode;
};

export function researchArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${SITE.baseUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: BRAND.author.name,
      url: BRAND.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.baseUrl}/og/wiserbond-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: {
      "@type": "SoftwareApplication",
      name: "Akashic Record",
      description: BRAND.product,
    },
  };
}

export function breadcrumbJsonLd(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.baseUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export default function ResearchArticle({
  title,
  description,
  path,
  datePublished,
  dateModified,
  breadcrumbs,
  children,
}: Props) {
  const articleLd = researchArticleJsonLd({
    title,
    description,
    path,
    datePublished,
    dateModified,
  });
  const crumbLd = breadcrumbJsonLd(breadcrumbs);

  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-[var(--text-muted)] mb-8 flex flex-wrap gap-1.5"
        >
          {breadcrumbs.map((item, i) => (
            <span key={item.href} className="inline-flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link href={item.href} className="hover:text-[var(--brand)]">
                  {item.name}
                </Link>
              ) : (
                <span className="text-[var(--text-secondary)]">{item.name}</span>
              )}
            </span>
          ))}
        </nav>

        <header className="mb-10 space-y-4">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
            Research
          </p>
          <h1 className="font-serif text-3xl md:text-[2.5rem] font-medium tracking-tight text-[var(--brand)] leading-[1.15]">
            {title}
          </h1>
          <p className="text-sm text-[var(--text-muted)]">
            By {BRAND.author.name} · Updated{" "}
            <time dateTime={dateModified}>{dateModified}</time>
          </p>
        </header>

        <article className="research-prose space-y-8 text-[17px] leading-relaxed text-[var(--text-secondary)]">
          {children}
        </article>

        <aside className="mt-14 pt-8 border-t border-[var(--border-soft)] space-y-4">
          <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
            {BRAND.product} {BRAND.doesNot}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 px-6 items-center justify-center rounded-md text-[15px] font-semibold text-white hover:bg-[var(--brand-hover)] transition-colors"
            style={{ background: "var(--brand)" }}
          >
            Request a 15-min Interview
          </a>
        </aside>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
      />
    </>
  );
}
