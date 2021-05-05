import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Menu from "./Menu";
export default function NavBar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((state) => {
      return !state;
    });
  };
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <button>
            <Logo />
          </button>
        </Link>

        <div className="relative dark:text-gray-200">
          <button
            className="flex items-center focus:outline-none"
            onClick={handleMenu}
          >
            <img
              className="rounded-lg"
              src="https://picsum.photos/30"
              alt="avatar"
            />
            <span className="ml-2 mr-1">{user}</span>
            {isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </button>
          {isMenuOpen && <Menu />}
        </div>
      </nav>
    </header>
  );
}
