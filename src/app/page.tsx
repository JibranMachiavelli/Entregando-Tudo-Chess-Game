'use client';

import Image from 'next/image';
import Link from 'next/link';
import Text from './components/general/Text';

export default function initialPage() {
  return (
    <>
      <Link href="./home" className="cursor-default">
        <div className="h-screen">
          <div className="flex items-center ">
            <div className="border-b-2 m-4 w-full"></div>
            <div className="w-12 h-12 m-4 relative">
              <Image
                src=""
                alt="Icon Player"
                layout="fill"
                objectFit="cover"
                className="rounded-full bg-red-500"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="text-center m-64">
              <h1 className="text-8xl">Chess</h1>
              <h2 className="text-6xl">Legends</h2>
            </div>
            <p>Tap for continue...</p>
          </div>
        </div>
      </Link>
    </>
  );
}
