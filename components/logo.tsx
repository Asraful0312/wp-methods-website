import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="">
      <Image
        src="/logo.png"
        width={140}
        height={50}
        alt="logo"
        className="max-w-full h-auto"
      />
    </Link>
  );
};

export default Logo;
