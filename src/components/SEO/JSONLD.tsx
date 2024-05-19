import Script from "next/script";

export const JSONLD = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
