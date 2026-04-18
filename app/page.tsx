import ClientPage from "./ClientPage";

export const metadata = {
  title: "Shankar Kohli | Luxury Real Estate Advisor in Gurugram",
  description: "Exclusive luxury property deals for HNI investors.",
};

export default function Page() {
  return (
    <>
      {/* SEO CONTENT (Google reads this) */}
      <h1 className="hidden">
        Luxury Real Estate in Gurugram | Shankar Kohli
      </h1>

      <ClientPage />
    </>
  );
}