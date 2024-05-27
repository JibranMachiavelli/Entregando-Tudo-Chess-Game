'use client';

import Image from 'next/image';
import loginLogo from '../public/assets/login-logo-01.png';
import Button from '../components/general/Button';
import Input from '../components/data-entry/Input';
import { login } from '../../api/login';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [loginTentativa, setLoginTentativa] = useState('');
  const [senhaTentativa, setSenhaTentativa] = useState('');

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      const userData = await login(loginTentativa, senhaTentativa);
      if (userData) {
        console.log('Login bem-sucedido:', userData);
        router.push('./home');
      } else {
        console.error('Credenciais de login incorretas');
      }
    } catch (error) {
      console.error('Falha no login:', error);
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678] h-screen z-0">
        <div className="flex justify-between justify-left items-center h-screen w-full">
          <form className="shadow-lg p-8 bg-white rounded-lg m-auto z-20 py-14 ">
            <div className="flex flex-col mb-4 gap-8 ">
              <div className="">
                <Input
                  size="medium"
                  type="email"
                  label="Nome:"
                  labelPlaceholder="Digite seu e-mail"
                  onChange={(e) => setLoginTentativa(e.target.value)}
                />
              </div>
              <div className="">
                <Input
                  size="medium"
                  type="password"
                  label="Nome:"
                  labelPlaceholder="Digite sua senha"
                  onChange={(e) => setSenhaTentativa(e.target.value)}
                />
              </div>
              <div className="text-center">
                <Button onClick={handleSubmit}>Acessar</Button>
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
