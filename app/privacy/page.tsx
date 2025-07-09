import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy & Policy",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow link following
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 text-gray-800 p-6 sm:p-10 font-sans">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="mb-6">
          <strong>Last Updated:</strong> 9/07/2025
        </p>

        <div className="mb-10">
          <p className="italic text-gray-600">
            Scroll down for Bangla version (বাংলা ভার্সন নিচে দেওয়া হয়েছে)
          </p>
        </div>

        {/* English Version */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            English Version
          </h2>

          {[
            {
              title: "1. Introduction",
              content: (
                <p>
                  At <strong>WP Methods Service</strong> (
                  <a
                    href="https://service.wepmethods.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://service.wepmethods.com
                  </a>
                  ), your privacy is important to us. This Privacy Policy
                  explains how we collect, use, and protect your personal
                  information.
                </p>
              ),
            },
            {
              title: "2. Information We Collect",
              content: (
                <ul className="list-disc pl-5">
                  <li>Name, email, and contact details</li>
                  <li>Website/project details you provide</li>
                  <li>
                    Technical data like IP address, browser type, device info
                  </li>
                  <li>Cookies and usage data</li>
                </ul>
              ),
            },
            {
              title: "3. How We Use Your Information",
              content: (
                <ul className="list-disc pl-5">
                  <li>To provide and manage services</li>
                  <li>To communicate with you about your project</li>
                  <li>To improve our services and website</li>
                  <li>To comply with legal obligations</li>
                </ul>
              ),
            },
            {
              title: "4. How We Protect Your Information",
              content: (
                <p>
                  We implement appropriate security measures such as SSL
                  encryption, secure storage, and access control to keep your
                  information safe.
                </p>
              ),
            },
            {
              title: "5. Cookies",
              content: (
                <p>
                  We may use cookies to enhance user experience, analyze
                  traffic, and improve our services. You can control cookie
                  preferences through your browser settings.
                </p>
              ),
            },
            {
              title: "6. Third-Party Services",
              content: (
                <p>
                  We may use trusted third-party services (e.g., payment
                  gateways, analytics tools). They have their own privacy
                  policies, and we recommend reviewing them before use.
                </p>
              ),
            },
            {
              title: "7. Data Retention",
              content: (
                <p>
                  We retain your personal data only as long as necessary for
                  business or legal reasons, after which it is securely deleted.
                </p>
              ),
            },
            {
              title: "8. Your Rights",
              content: (
                <p>
                  You have the right to request access, correction, or deletion
                  of your personal data by contacting us at{" "}
                  <a
                    href="mailto:contact@wpmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@wpmethods.com
                  </a>
                  .
                </p>
              ),
            },
            {
              title: "9. Changes to This Policy",
              content: (
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with the updated date.
                </p>
              ),
            },
            {
              title: "10. Contact Us",
              content: (
                <p>
                  If you have any questions about this Privacy Policy:
                  <br />
                  📧 Email:{" "}
                  <a
                    href="mailto:contact@wpmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@wpmethods.com
                  </a>
                  <br />
                  🌐 Website:{" "}
                  <a
                    href="https://service.wepmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    service.wepmethods.com
                  </a>
                </p>
              ),
            },
          ].map(({ title, content }) => (
            <details
              key={title}
              className="bg-white p-5 rounded-lg shadow mb-4"
              open={title === "1. Introduction"}
            >
              <summary className="font-semibold text-lg cursor-pointer">
                {title}
              </summary>
              <div className="mt-2 text-sm sm:text-base">{content}</div>
            </details>
          ))}
        </div>

        {/* Bangla Version */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            বাংলা ভার্সন
          </h2>

          {[
            {
              title: "১. ভূমিকা",
              content:
                "<strong>WP Methods Service</strong> (https://service.wepmethods.com) আপনার ব্যক্তিগত গোপনীয়তাকে গুরুত্ব দেয়। এই নীতিমালায় বলা হয়েছে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষিত করি।",
            },
            {
              title: "২. আমরা যেসব তথ্য সংগ্রহ করি",
              content: (
                <ul className="list-disc pl-5">
                  <li>নাম, ইমেইল, এবং যোগাযোগের তথ্য</li>
                  <li>আপনার দেওয়া ওয়েবসাইট বা প্রজেক্ট সংক্রান্ত তথ্য</li>
                  <li>আপনার IP, ব্রাউজার, ডিভাইস সম্পর্কিত তথ্য</li>
                  <li>কুকিজ এবং ব্যবহার সংক্রান্ত তথ্য</li>
                </ul>
              ),
            },
            {
              title: "৩. আমরা কীভাবে এই তথ্য ব্যবহার করি",
              content: (
                <ul className="list-disc pl-5">
                  <li>সেবা প্রদান এবং পরিচালনার জন্য</li>
                  <li>আপনার প্রজেক্ট নিয়ে যোগাযোগ করতে</li>
                  <li>আমাদের সাইট ও সেবার মান উন্নয়নে</li>
                  <li>আইনি বাধ্যবাধকতা পূরণের জন্য</li>
                </ul>
              ),
            },
            {
              title: "৪. তথ্য সুরক্ষা",
              content:
                "আমরা SSL এনক্রিপশন, নিরাপদ স্টোরেজ এবং সীমিত অ্যাক্সেস সহ নানা ধরনের নিরাপত্তা ব্যবস্থা গ্রহণ করি।",
            },
            {
              title: "৫. কুকিজ",
              content:
                "আমরা কুকিজ ব্যবহার করতে পারি যাতে ব্যবহারকারীর অভিজ্ঞতা উন্নত করা যায়। আপনি চাইলে ব্রাউজারের মাধ্যমে কুকিজ নিয়ন্ত্রণ করতে পারেন।",
            },
            {
              title: "৬. থার্ড-পার্টি সার্ভিস",
              content:
                "আমরা বিশ্বাসযোগ্য থার্ড-পার্টি সার্ভিস যেমন পেমেন্ট গেটওয়ে বা অ্যানালিটিক্স টুল ব্যবহার করতে পারি। তাদের নিজস্ব প্রাইভেসি নীতিমালা রয়েছে।",
            },
            {
              title: "৭. তথ্য সংরক্ষণ",
              content:
                "আপনার তথ্য যতদিন প্রয়োজন ততদিন সংরক্ষণ করি এবং পরবর্তীতে তা নিরাপদে মুছে ফেলা হয়।",
            },
            {
              title: "৮. আপনার অধিকার",
              content: (
                <p>
                  আপনার তথ্য দেখতে, সংশোধন বা মুছে ফেলার অনুরোধ করতে পারেন
                  আমাদের ইমেইলে:{" "}
                  <a
                    href="mailto:contact@wpmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@wpmethods.com
                  </a>
                </p>
              ),
            },
            {
              title: "৯. নীতিমালায় পরিবর্তন",
              content:
                "আমরা সময় সময় এই নীতিমালা আপডেট করতে পারি। পরিবর্তন এই পাতায় প্রকাশ করা হবে।",
            },
            {
              title: "১০. যোগাযোগ",
              content: (
                <p>
                  যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন:
                  <br />
                  📧 ইমেইল:{" "}
                  <a
                    href="mailto:contact@wpmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@wpmethods.com
                  </a>
                  <br />
                  🌐 ওয়েবসাইট:{" "}
                  <a
                    href="https://service.wepmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    service.wepmethods.com
                  </a>
                </p>
              ),
            },
          ].map(({ title, content }) => (
            <details
              key={title}
              className="bg-white p-5 rounded-lg shadow mb-4"
            >
              <summary className="font-semibold text-lg cursor-pointer">
                {title}
              </summary>
              <div className="mt-2 whitespace-pre-wrap text-sm sm:text-base">
                {typeof content === "string" ? content : content}
              </div>
            </details>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
