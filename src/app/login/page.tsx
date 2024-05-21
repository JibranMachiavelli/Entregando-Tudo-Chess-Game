'use client';

import Image from 'next/image';
import Link from 'next/link';
import loginLogo from '../public/assets/login-logo-01.png';
import Button from '../components/general/Button';
import Input from '../components/data-entry/Input';

export default function Login() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-8 w-80 h-80 bg-[#02735E] mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob z-10"></div>
      <div className="absolute top-0 left-20 w-80 h-80 bg-[#03A678] mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-2000 z-10"></div>
      <div className="absolute bottom-8 left-22 w-80 h-80 bg-[#3abd2e] mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-4000 z-10"></div>
      <div className="bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678] h-screen">
        <div className="flex justify-between justify-left items-center h-screen w-full">
          <form className="shadow-lg p-8 bg-white rounded-lg m-auto z-20 py-14 ">
            <div className="flex flex-col mb-4 gap-8">
              <div className="">
                <Input
                  size="medium"
                  type="email"
                  label="Nome:"
                  labelPlaceholder="Digite seu e-mail"
                />
              </div>
              <div className="">
                <Input
                  size="medium"
                  type="password"
                  label="Nome:"
                  labelPlaceholder="Digite sua senha"
                />
              </div>
              <div className="text-center">
                <Link href="./home">
                  <Button>Acessar</Button>
                </Link>
              </div>
              <div className="underline text-blue-400  cursor-pointer select-none">
                Esqueci minha senha
              </div>
            </div>
          </form>
          <div className="w-[46.67vh] m-auto z-20">
            <Image
              src={loginLogo}
              alt="Login Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
