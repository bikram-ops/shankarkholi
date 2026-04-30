import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#0a0a0a",
          color: "#eaeaea",
          minHeight: "100vh",
          padding: "clamp(100px, 12vw, 140px) 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h1 style={h1}>Privacy Policy</h1>

          <p style={date}>
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <p style={text}>
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>

          <h2 style={h2}>Information We Collect</h2>
          <p style={text}>
            We collect details such as your name, phone number, and email when you submit forms.
          </p>

          <h2 style={h2}>How We Use Your Information</h2>
          <p style={text}>
            Your information is used to respond to inquiries and share relevant property details.
          </p>

          <h2 style={h2}>Data Protection</h2>
          <p style={text}>
            We take appropriate measures to protect your personal data.
          </p>

          <h2 style={h2}>Third-Party Sharing</h2>
          <p style={text}>
            Your data may be shared with trusted partners only to fulfill your request.
          </p>

          <h2 style={h2}>Cookies</h2>
          <p style={text}>
            We may use cookies to improve user experience and track website performance.
          </p>

          <h2 style={h2}>Your Rights</h2>
          <p style={text}>
            You may request access, correction, or deletion of your data at any time.
          </p>

          <h2 style={h2}>Contact</h2>
          <p style={text}>
            Email: <span style={{ color: "#f5f3ef" }}>info@markrealesstate.com</span><br />
            Phone: <span style={{ color: "#f5f3ef" }}>+91 98114 22554</span>
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}

/* STYLES */
const h1 = {
  fontSize: "clamp(28px, 3.5vw, 40px)",
  fontWeight: 300,
  marginBottom: "10px",
};

const date = {
  fontSize: "12px",
  color: "#777",
  marginBottom: "30px",
};

const h2 = {
  fontSize: "16px",
  marginTop: "24px",
  marginBottom: "6px",
  color: "#f5f3ef",
  fontWeight: 500,
};

const text = {
  fontSize: "13px",
  lineHeight: 1.6,
  color: "#9a9488",
};