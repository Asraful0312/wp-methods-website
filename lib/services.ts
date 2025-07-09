import { Boxes, CodeXml, Rocket, Server } from "lucide-react";
import { FaAndroid } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export const services = [
  {
    icon: CodeXml,
    title: "Development & Customization",
    description:
      "We can create any website with wordpress and laravel framework. and install, set up any PHP script on your web host.",
    delay: 200,
  },
  {
    icon: FaAndroid,
    title: "ReSkin Android Source Code",
    description:
      "If you need any Android apps, you can buy code from Codecanyon and reskin with us. And we’ll upload it to the Google Play Store.",
    delay: 400,
  },
  {
    icon: FaTools,
    title: "Fixing WordPress Issues",
    description:
      "If something is broken or not working properly I can fix it. Quickly and efficiently. Troubleshooting for all technical issues and errors.",
    delay: 600,
  },
  {
    icon: Boxes,
    title: "Custom Development",
    description:
      "Design and Develop custom wordpress themes, plugins, laravel projects, psd/figma to wordpress/laravel",
    delay: 800,
  },
  {
    icon: Rocket,
    title: "Speed Optimization",
    description:
      "WordPress speed optimization service can improve SEO & bring more people to your site. Fast loading time better usability, more leads, more business for your company.",
    delay: 1000,
  },
  {
    icon: Server,
    title: "Setup VPS Server",
    description:
      "Setup high-performance secure VPS server on the top of AWS, Oracle Cloud, Contabo, DigitalOcean or any other cloud providers.",
    delay: 1200,
  },
];

export const primaryServices = [
  {
    label: "Create WordPress Website",
    price: 100,
  },
  {
    label: "Install & Setup PHP Script",
    price: 30,
  },
  {
    label: "ReSkin/Customize Android Source Code",
    price: 70,
  },
  {
    label: "Custom Development",
    price: 50,
  },
  {
    label: "VPS Server Setup",
    price: 50,
  },
];

// if selected Create WordPress Website
export const wordpressWebsiteServices = [
  {
    label: "Company profile/business website (Up to 5 pages)",
    price: 150,
  },
  {
    label: "ECommerce website (Up to 5 pages)",
    price: 180,
  },
  {
    label: "Blog website (Up to 5 pages)",
    price: 130,
  },
  {
    label: "Portfolio website (Up to 5 pages)",
    price: 120,
  },
  {
    label: "Non-profit website (Up to 5 pages)",
    price: 100,
  },
];

// if selected Install & Setup PHP Script
export const installAndSetupScript = [
  {
    label:
      "We will install a PHP script on your web hosting, change the logo, texts, images, etc., and configure the admin panel.",
  },
];

// if selected ReSkin/Customize Android Source Code
export const reSkinServices = [
  {
    label: "Flutter Source Code (Make APK)",
    price: 100,
  },
  {
    label: "Android Kotlin/Java Source Code",
    price: 150,
  },
  {
    label: "Others",
  },
];

// if selected Custom Development
export const customDevelopmentServices = [
  {
    label: "WordPress Theme Development",
    price: 200,
  },
  {
    label: "WordPress Plugin Development",
    price: 100,
  },
  {
    label: "Laravel Project/Website Development",
    price: 250,
  },
];

// if selected VPS Server Setup
export const vpsServerSetupService = [
  {
    label:
      "We can install a control panel on your VPS hosting server, setup SMTP for email, and migrate your old website to new VPS server. ",
  },
];
