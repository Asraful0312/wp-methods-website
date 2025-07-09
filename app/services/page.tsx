import React from "react";
import ServicesContent from "./service-content";

export const metadata = {
  title: "Service",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow link following
  },
};

const ServicePage = () => {
  return <ServicesContent />;
};

export default ServicePage;
