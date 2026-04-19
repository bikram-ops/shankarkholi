import ClientPage from "./ClientPage";

export const metadata = {
  title: "Shankar Kohli | Luxury Real Estate Advisor in Gurugram",
  description: "Discover exclusive Lamborghini & premium luxury residences in Gurugram. Private access for HNI investors. Limited inventory available.",
keywords: [
  "Luxury apartments Gurugram",
  "Lamborghini residences Gurgaon",
  "HNI real estate India",
  "premium properties Gurgaon",
],

};


export default function Page() {
  return (
    <>
      {/* SEO CONTENT (Google reads this) */}
     <h1 style={{ position: "absolute", left: "-9999px" }}>
  Luxury Real Estate in Gurugram | Shankar Kohli
</h1>

      <ClientPage />
    </>
  );
}