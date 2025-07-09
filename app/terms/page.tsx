import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms & Conditions",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow link following
  },
};

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 text-gray-800 p-6 sm:p-10 font-sans">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms and Conditions
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
                  Welcome to <strong>WP Methods Service</strong> (
                  <a
                    href="https://service.wepmethods.com"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://service.wepmethods.com
                  </a>
                  ). By using our services, you agree to these Terms. If you do
                  not agree, please do not use our website or services.
                </p>
              ),
            },
            {
              title: "2. Company Information",
              content: (
                <p>
                  <strong>Business Name:</strong> WP Methods Service
                  <br />
                  <strong>Website:</strong> https://service.wepmethods.com
                  <br />
                  <strong>Email:</strong> contact@wpmethods.com
                </p>
              ),
            },
            {
              title: "3. Services We Provide",
              content: (
                <ul className="list-disc pl-5">
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>WordPress Customization</li>
                  <li>Maintenance & Bug Fixing</li>
                  <li>UI/UX Design</li>
                  <li>Plugin & Theme Development</li>
                </ul>
              ),
            },
            {
              title: "4. User Responsibilities",
              content: (
                <ul className="list-disc pl-5">
                  <li>Provide accurate information</li>
                  <li>Do not use our services for illegal purposes</li>
                  <li>Maintain the security of your account and credentials</li>
                </ul>
              ),
            },
            {
              title: "5. Payments & Refunds",
              content: (
                <p>
                  Payment terms are defined before each project. Advance payment
                  may be required. Refunds are only applicable in specific
                  agreed scenarios. Services may be suspended for late or
                  non-payment.
                </p>
              ),
            },
            {
              title: "6. Project Delivery & Timelines",
              content: (
                <p>
                  Project timelines depend on scope and client communication.
                  Delays in content or feedback may extend delivery dates. We
                  are not responsible for third-party delays.
                </p>
              ),
            },
            {
              title: "7. Revisions & Support",
              content: (
                <p>
                  Revisions are limited as per the agreed scope. Additional
                  edits may incur extra fees. Ongoing support is only included
                  if agreed upon in advance.
                </p>
              ),
            },
            {
              title: "8. Intellectual Property",
              content: (
                <p>
                  You own the content you provide. Final deliverables are yours
                  after full payment. We may display your project in our
                  portfolio unless you request otherwise.
                </p>
              ),
            },
            {
              title: "9. Limitation of Liability",
              content: (
                <p>
                  We are not responsible for indirect damages, data loss,
                  third-party service issues, or downtime.
                </p>
              ),
            },
            {
              title: "10. Termination",
              content: (
                <p>
                  We may suspend or terminate services for violations. Clients
                  may cancel anytime but must clear any pending payments.
                </p>
              ),
            },
            {
              title: "11. Privacy",
              content: (
                <p>
                  For more information, please see our{" "}
                  <a
                    href="https://service.wepmethods.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              ),
            },
            {
              title: "12. Contact",
              content: (
                <p>
                  If you have any questions:
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
                "স্বাগতম WP Methods Service-এ (https://service.wepmethods.com)। আমাদের ওয়েবসাইট বা পরিষেবা ব্যবহারের মাধ্যমে আপনি আমাদের শর্তাবলী মানতে সম্মত হচ্ছেন।",
            },
            {
              title: "২. প্রতিষ্ঠানের তথ্য",
              content:
                "নাম: WP Methods Service\nওয়েবসাইট: https://service.wepmethods.com\nইমেইল: contact@wpmethods.com",
            },
            {
              title: "৩. আমরা যেসব পরিষেবা দিই",
              content: (
                <ul className="list-disc pl-5">
                  <li>ওয়েব ডিজাইন</li>
                  <li>ওয়েব ডেভেলপমেন্ট</li>
                  <li>ওয়ার্ডপ্রেস কাস্টমাইজেশন</li>
                  <li>মেইনটেন্যান্স ও বাগ ফিক্সিং</li>
                  <li>UI/UX ডিজাইন</li>
                  <li>থিম ও প্লাগইন ডেভেলপমেন্ট</li>
                </ul>
              ),
            },
            {
              title: "৪. ব্যবহারকারীর দায়িত্ব",
              content: (
                <ul className="list-disc pl-5">
                  <li>সঠিক তথ্য প্রদান করবেন</li>
                  <li>অবৈধ কোনো কাজে সাইট ব্যবহার করবেন না</li>
                  <li>নিজের অ্যাকাউন্টের নিরাপত্তা বজায় রাখবেন</li>
                </ul>
              ),
            },
            {
              title: "৫. পেমেন্ট ও রিফান্ড",
              content:
                "প্রতিটি প্রজেক্টে নির্ধারিত পেমেন্ট শর্ত থাকে। কিছু ক্ষেত্রে অগ্রিম প্রদান আবশ্যক। নির্দিষ্ট শর্তে রিফান্ড প্রযোজ্য। বিলম্বিত পেমেন্টে সেবা স্থগিত হতে পারে।",
            },
            {
              title: "৬. প্রজেক্ট ডেলিভারি",
              content:
                "প্রজেক্ট ডেলিভারির সময় আগেই আলোচনা করা হয়। ক্লায়েন্ট দেরি করলে সময় পেছাতে পারে। বাহ্যিক কারণের জন্য আমরা দায়ী থাকবো না।",
            },
            {
              title: "৭. সংশোধন ও সাপোর্ট",
              content:
                "নির্ধারিত সংশোধন প্রজেক্টের অংশ। অতিরিক্ত পরিবর্তন অতিরিক্ত চার্জের আওতায় পড়বে। সাপোর্ট প্যাকেজ অনুযায়ী প্রদান করা হয়।",
            },
            {
              title: "৮. মেধাস্বত্ব",
              content:
                "আপনার দেওয়া কনটেন্ট আপনার মালিকানাধীন থাকবে। সম্পূর্ণ পেমেন্টের পর আপনি ডিজাইনের মালিক হবেন। আমাদের পোর্টফোলিওতে প্রদর্শনের অধিকার থাকবে (আপত্তি জানালে বাদ দেওয়া হবে)।",
            },
            {
              title: "৯. দায়বদ্ধতার সীমা",
              content: "আমরা ডাটা হারানো, থার্ড পার্টি সমস্যার জন্য দায়ী নই।",
            },
            {
              title: "১০. সেবা বাতিল",
              content:
                "শর্ত ভঙ্গ করলে আমরা সেবা বন্ধ করতে পারি। ক্লায়েন্ট চাইলে বাতিল করতে পারেন, তবে বকেয়া পরিশোধ করতে হবে।",
            },
            {
              title: "১১. গোপনীয়তা",
              content: (
                <p>
                  আপনার তথ্য ব্যবহারের বিস্তারিত জানতে দেখুন আমাদের{" "}
                  <a
                    href="https://service.wepmethods.com/privacy-policy"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    প্রাইভেসি পলিসি
                  </a>
                  ।
                </p>
              ),
            },
            {
              title: "১২. যোগাযোগ",
              content: (
                <p>
                  যেকোনো প্রশ্নের জন্য:
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

export default TermsAndConditions;
