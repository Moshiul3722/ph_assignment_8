import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLinks = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`px-4 py-2 font-semibold ${pathname === href ? "bg-[#244D3F] text-white rounded-md" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavbarLinks;
