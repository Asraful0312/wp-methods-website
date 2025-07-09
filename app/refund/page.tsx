import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export const metadata = {
  title: "Refund Policy",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow link following
  },
};

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 text-gray-800 p-6 sm:p-10 font-sans">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h1>
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
              title: "1. Overview",
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
                  ), we strive to deliver high-quality services. Due to the
                  nature of digital services and custom work, all sales are
                  generally final. However, certain conditions may qualify for a
                  refund as outlined below.
                </p>
              ),
            },
            {
              title: "2. Eligibility for Refunds",
              content: (
                <ul className="list-disc pl-5">
                  <li>
                    If work has not started yet and cancellation is requested
                    within 48 hours of payment.
                  </li>
                  <li>
                    If we are unable to deliver the agreed-upon service due to
                    internal issues.
                  </li>
                  <li>
                    If there are major delays (beyond 30 working days) caused
                    solely by WP Methods Service.
                  </li>
                </ul>
              ),
            },
            {
              title: "3. Non-Refundable Conditions",
              content: (
                <ul className="list-disc pl-5">
                  <li>Once a custom design or code work has been delivered.</li>
                  <li>
                    If delays are caused by lack of client communication,
                    content, or feedback.
                  </li>
                  <li>
                    Any digital product (e.g. downloadable template, plugin, or
                    file).
                  </li>
                  <li>Domain, hosting, or third-party service fees.</li>
                </ul>
              ),
            },
            {
              title: "4. Requesting a Refund",
              content: (
                <p>
                  To request a refund, email us at{" "}
                  <a
                    href="mailto:contact@wpmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@wpmethods.com
                  </a>{" "}
                  with your order details and reason. We will review your
                  request within 5–7 business days.
                </p>
              ),
            },
            {
              title: "5. Dispute Resolution",
              content: (
                <p>
                  We encourage you to contact us first to resolve any concerns.
                  If a mutual resolution cannot be reached, disputes may be
                  escalated to a relevant third-party platform or legal process
                  if required.
                </p>
              ),
            },
            {
              title: "6. Changes to This Policy",
              content: (
                <p>
                  We may update this Refund Policy at any time. Changes will be
                  posted on this page with the latest date.
                </p>
              ),
            },
            {
              title: "7. Contact Us",
              content: (
                <p>
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
              open={title === "1. Overview"}
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
              title: "১. সারসংক্ষেপ",
              content:
                "<strong>WP Methods Service</strong> (https://service.wepmethods.com) সর্বোচ্চ মানের ডিজিটাল পরিষেবা দেওয়ার চেষ্টা করে। যেহেতু আমরা কাস্টম এবং ডিজিটাল পরিষেবা দিয়ে থাকি, তাই বেশিরভাগ ক্ষেত্রে পেমেন্ট ফেরতযোগ্য নয়। তবে কিছু বিশেষ শর্তে রিফান্ড দেওয়া হতে পারে।",
            },
            {
              title: "২. রিফান্ড পাওয়ার যোগ্যতা",
              content: (
                <ul className="list-disc pl-5">
                  <li>
                    যদি কাজ এখনো শুরু না হয়ে থাকে এবং পেমেন্টের ৪৮ ঘণ্টার মধ্যে
                    বাতিল চাওয়া হয়।
                  </li>
                  <li>
                    আমাদের অভ্যন্তরীণ কারণে চুক্তিভিত্তিক সেবা সরবরাহ করতে
                    ব্যর্থ হলে।
                  </li>
                  <li>
                    WP Methods Service-এর কারণে ৩০ কর্মদিবসের বেশি বিলম্ব হলে।
                  </li>
                </ul>
              ),
            },
            {
              title: "৩. রিফান্ড দেওয়া হবে না যদি:",
              content: (
                <ul className="list-disc pl-5">
                  <li>
                    ডিজাইন বা কোড একবার ক্লায়েন্টকে ডেলিভারি দেওয়া হয়ে যায়।
                  </li>
                  <li>
                    ক্লায়েন্টের দিক থেকে যোগাযোগ বা কনটেন্টের অভাবে বিলম্ব হয়।
                  </li>
                  <li>
                    যেকোনো ডিজিটাল পণ্য (যেমন টেমপ্লেট, প্লাগইন, ডাউনলোডযোগ্য
                    ফাইল)।
                  </li>
                  <li>ডোমেইন, হোস্টিং বা থার্ড-পার্টি সার্ভিসের খরচ।</li>
                </ul>
              ),
            },
            {
              title: "৪. রিফান্ডের অনুরোধ করার প্রক্রিয়া",
              content: (
                <p>
                  আপনি যদি রিফান্ড পেতে চান, অনুগ্রহ করে আপনার অর্ডার বিবরণ ও
                  কারণ উল্লেখ করে আমাদের{" "}
                  <a
                    href="mailto:contact@wpmethods.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@wpmethods.com
                  </a>{" "}
                  এ ইমেইল করুন। আমরা ৫–৭ কর্মদিবসের মধ্যে আপনার অনুরোধ
                  পর্যালোচনা করব।
                </p>
              ),
            },
            {
              title: "৫. বিরোধ নিষ্পত্তি",
              content:
                "কোনো সমস্যা হলে প্রথমে আমাদের সাথে যোগাযোগ করার অনুরোধ করছি। আলোচনার মাধ্যমে সমাধান না হলে এটি থার্ড-পার্টি মাধ্যম বা আইনি প্রক্রিয়ায় নেওয়া হতে পারে।",
            },
            {
              title: "৬. নীতিমালায় পরিবর্তন",
              content:
                "আমরা যেকোনো সময় এই রিফান্ড নীতিমালা আপডেট করতে পারি। যেকোনো পরিবর্তন এই পাতায় প্রকাশ করা হবে।",
            },
            {
              title: "৭. যোগাযোগ",
              content: (
                <p>
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

export default RefundPolicy;
