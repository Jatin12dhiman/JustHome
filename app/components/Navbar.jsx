import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
  const nav = [
    { label: "Home", href: "/," },
    { label: "Listings", href: "#" },
    { label: "Members", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-[#FFF8F6] backdrop-blur supports-[backdrop-filter]:bg-[##FFF8F6]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
      {/* Logo image */}
      <Image 
        src="/images/logo-green.png" 
        alt="JustHome Logo" 
        width={148} 
        height={41} 
        className="" // agar circle ya styling chahiye
      />
    </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex font-medium">
            {nav.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-emerald-700"
              >
                {item.label}
                {idx < 5 && (
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.044a1.5 1.5 0 00-1.116-1.45l-3.27-.93a1.5 1.5 0 00-1.596.54l-.53.707a.75.75 0 01-1.064.146A12 12 0 016.02 8.571a.75.75 0 01.146-1.064l.707-.53a1.5 1.5 0 00.54-1.596l-.93-3.27A1.5 1.5 0 004.023 1.5H2.98A2.25 2.25 0 00.75 3.75v3z" />
              </svg>
              <span>+68 685 88666</span>
            </div>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
              </svg>
            </button>
            <button className="rounded-full border border-emerald-700 px-5 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-700 hover:text-white">
              Add Property
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

