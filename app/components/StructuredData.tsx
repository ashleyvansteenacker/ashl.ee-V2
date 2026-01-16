export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashley Van Steenacker",
          jobTitle: "Creative Technologist",
          url: "https://ashl.ee",
          sameAs: [
            "https://instagram.com/ashleyslab"
          ],
        }),
      }}
    />
  );
}
