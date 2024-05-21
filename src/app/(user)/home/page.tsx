'use client';

import Link from 'next/link';
import Button from '../../components/general/Button';
import Input from '../../components/data-entry/Input';

export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="bg-red-600">Hello word home</h1>
        <div className="bg-blue-600 text-2xl">
          <Link
            className="border"
            href="./"
          >
            Initial Page
          </Link>
        </div>
        <Button
        size="medium"
        type="outline"
        >dfs</Button>
      

      <div className="">
      <Input
        size="medium"
        type="text"
        label="Nome:"
        labelPlaceholder="Digite seu nome"
      />
    </div>
    </div>
    </>
  );
}
