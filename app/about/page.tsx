import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export const metadata = {
  title: "About",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow link following
  },
};

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 text-gray-800 px-6 py-10 sm:px-10 sm:py-16 font-sans">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          🧩 About Us – WP Methods Service
        </h1>

        <p className="mb-6 text-base sm:text-lg leading-relaxed ">
          At <strong>WP Methods Service</strong>, we specialize in creating
          custom websites, digital experiences, and development solutions that
          help businesses grow online. Based on years of experience in
          WordPress, Mobile App reskin, and full-stack development, we deliver
          high-quality, performance-driven results for clients around the globe.
        </p>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          Our mission is simple: to provide creative, functional, and
          future-ready web solutions tailored to your unique needs. Whether
          you're launching a startup, refreshing an existing brand, or
          developing a complex web application — we’re here to make it happen
          smoothly and efficiently.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          What sets us apart:
        </h2>
        <ul className="pl-2 space-y-2 mb-8 text-base sm:text-lg">
          <li>✦ Clean, responsive, and SEO-optimized design</li>
          <li>✦ Custom WordPress development and plugin integration</li>
          <li>✦ Ongoing support, updates, and performance tuning</li>
          <li>✦ A client-first mindset with clear communication</li>
        </ul>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          We believe in long-term partnerships, not just one-time projects. When
          you work with
          <strong> WP Methods Service</strong>, you're not just hiring a team —
          you're gaining a digital partner invested in your success.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Let’s build something great together.
        </p>

        <div className="mt-8 text-base sm:text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:contact@wpmethods.com"
              className="text-blue-600 hover:underline"
            >
              contact@wpmethods.com
            </a>
          </p>
          <p>
            🌐 Website:{" "}
            <a
              href="https://service.wepmethods.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              service.wepmethods.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
