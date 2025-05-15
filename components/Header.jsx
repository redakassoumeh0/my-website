"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background text-foreground shadow-sm backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Reda's Logo"
            width={200}
            height={200}
            className="w-10 h-10"
          />
          <h1 className=" text-2xl font-bold text-primary">Reda</h1>
        </Link>
      </div>
    </header>
  );
}
