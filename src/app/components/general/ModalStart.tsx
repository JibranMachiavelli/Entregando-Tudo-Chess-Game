'use client';

import { IoMdClose } from 'react-icons/io';

export default function ModalStart({
  setIsModalOpen,
}: {
  setIsModalOpen: any;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[60vh] h-[70vh]">
        <div className="relative flex flex-col items-center justify-center m-4 h-full">
          <select>
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </select>
          <select>
            <option>e</option>
            <option>f</option>
            <option>g</option>
          </select>
          <select>
            <option>h</option>
            <option>i</option>
            <option>j</option>
          </select>
          <select>
            <option>k</option>
            <option>l</option>
            <option>m</option>
          </select>
          <div className="absolute top-2 right-2 cursor-pointer transition-all focus:scale-95 text-2xl">
            <IoMdClose onClick={() => setIsModalOpen(false)} />
          </div>
          <button
            className="absolute bottom-12 right-12 px-24 py-6 text-2xl bg-gray-900 text-white rounded-lg transition-all focus:scale-95 shadow-md shadow-gray-500 hover:shadow-gray-900"
            onClick={() => setIsModalOpen(false)}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
