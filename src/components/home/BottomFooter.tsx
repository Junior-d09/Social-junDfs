import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    name: "A propos",
    href: "/about",
  },
  {
    name: "Confidentialité",
    href: "/confidentialité",
  },
  {
    name: "Politique",
    href: "/politique",
  },
  {
    name: "CGUS",
    href: "/cgus",
  },
];

const BottomFooter = () => {
  return (
    <div className="w-full py-4 flex items-center justify-center text-center">
      {footerLinks.map((item) => {
        if (item.href === "") {
          return (
            <span key={item.name} className="mx-2 text-gray-600 text-sm">
              {item.name}
            </span>
          );
        }
        return (
          <Link href={item.href} key={item.name} className="mx-2 text-gray-600 text-sm hover:text-gray-900">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomFooter;