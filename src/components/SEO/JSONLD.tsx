import Script from "next/script";

export const JSONLD = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <Script
      id="schema-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
