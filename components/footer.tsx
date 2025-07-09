import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center mb-8">
          <div className="space-y-4 flex items-center justify-center flex-col">
            <Image
              src="/logo.png"
              width={140}
              height={50}
              alt="logo"
              className="max-w-full h-auto"
            />
            <p className="text-slate-400 text-sm text-center max-w-2xl w-full mx-auto">
              At <strong>WP Methods Service</strong>, we specialize in creating
              custom websites, digital experiences, and development solutions
              that help businesses grow online. Based on years of experience in
              WordPress, Mobile App reskin, and full-stack development, we
              deliver high-quality, performance-driven results for clients
              around the globe.
            </p>
            <div>
              <p className="text-slate-400 text-sm text-center mb-3">
                Trade License: 4377917134{" "}
              </p>
              <img
                src="/payment-gateways.webp"
                className="w-[260px] h-auto"
                alt="payment gateways"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} WP Methods. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-xs hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/refund"
              className="text-xs hover:text-primary transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
