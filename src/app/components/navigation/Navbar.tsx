// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-50 p-4 z-10">
      <ul className="flex justify-around">
        <li>
          <Link href="./">
            <div className="text-white cursor-pointer ">Credits</div>
          </Link>
        </li>
        <li>
          <Link href="./">
            <div className="text-white cursor-pointer ">Profile</div>
          </Link>
        </li>
        <li>
          <Link href="./login">
            <div className="text-white cursor-pointer ">Exit</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
