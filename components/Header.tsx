import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={220}
              height={48}
              priority
            />
          </Link>

          {/* right side: theme + language toggle + socials */}
          <div className="flex items-center gap-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;