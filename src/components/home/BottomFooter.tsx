import Link from "next/link";
import React from "react";
const footerLinks = [
    {
        name: "A propos",
        href: "/about",
      },
];
const BottomFooter = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center text-center w-full mb-6">
      {footerLinks.map((item) => {
        if (item.href === "") {
          return (
            <span key={item.name} className="mx-2">
              {item.name}
            </span>
          );
        }
        return (
          <Link href={item.href} key={item.name} className="mx-2">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomFooter;
