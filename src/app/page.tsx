'use client';

import Image from 'next/image';
import Link from 'next/link';
import Text from './components/general/Text';

export default function initialPage() {
  return (
    <>
      <div className="bg-red-600 text-2xl">
        <Text size="lg">
          blabla
          <Link href="../../home">Home</Link>
        </Text>
      </div>
      <div className="bg-red-600 text-2xl">
        <Link href="../../game">Game</Link>
      </div>
      <div className="bg-red-600 text-2xl">
        <Link href="../../login">login</Link>
      </div>
    </>
  );
}
