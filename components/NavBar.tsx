import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function NavBar() {
  const menuItems = [
    { title: "Homepage", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Blog", href: "/blog" },
    { title: "Contact us", href: "/contact" },
  ];
  return (
    <header className="flex">
      <Link href="/">
        {/* <Image /> */}
        <h1 className="text-2xl font-bold">My Website</h1>
      </Link>
      <div className="flex-1 flex items-center justify-end gap-5 ">
        <nav className="flex items-center justify-center gap-5">
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
        <Button variant="outline">Demo</Button>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
