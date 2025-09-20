"use client";
import Script from "next/script";

type Props = { 
  data: object; 
  id?: string; 
};

export default function StructuredData({ data, id = "ldjson" }: Props) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
