// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-50 p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            <p className="text-white">Credits</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="text-white">Profile</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-white">Exit</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
