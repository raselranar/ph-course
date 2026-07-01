"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import NavLogo from "@/assets/Wanderlast.png";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/destination">Destination</Link>
      </li>
      <li>
        <Link href="/my-bookings">My Bookings</Link>
      </li>
    </>
  );

  // logout
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        {/* show on large devices */}
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            <span className="sr-only">Menu</span>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          {/* logo */}
          <div className="flex items-center gap-3">
            <Image
              src={NavLogo}
              className="w-full"
              alt="logo"
              width={300}
              height={300}
            />
            <p className="font-bold">ACME</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          {session ? (
            <Button onClick={handleLogout} variant="danger">
              Logout
            </Button>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link className="no-underline" href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
