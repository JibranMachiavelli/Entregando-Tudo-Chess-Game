'use client';

import Link from 'next/link';

export default function Login() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678] h-screen">
        <div className="flex justify-left items-center h-screen ml-96">
          <form className="shadow-lg p-8 bg-white rounded-lg">
            <div className="flex flex-col mb-4 gap-2">
              <label className="font-light">E-mail</label>
              <input
                type="email"
                placeholder=""
                className="border rounded shadow h-8 text-left ps-4 font-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-light">PassWord</label>
              <input
                type="password"
                placeholder="**********"
                className="border rounded shadow h-8 text-left ps-4 font-light"
              />
            </div>
            <div className="text-center my-8">
              <Link href="./home">
                <button className="border rounded w-full h-8 shadow border-b-2 border-b-[#F27405] bg-[#fcebdc] text-[#731702] font-medium">
                  Acessar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
