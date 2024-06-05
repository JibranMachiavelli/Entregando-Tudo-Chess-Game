'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import iconHorsePixel from '../../public/assets/icon-horse-pixel-01.png';
import { v4 as uuid } from 'uuid';
import { StaticImageData } from 'next/image';
import Message from '../../components/general/Message';
import useSocket from '../../../hooks/useSocket';
interface IMessage {
  id: string;
  name: string;
  text: string;
  image: StaticImageData;
  isOwner?: boolean;
}

export default function Game() {
  const { socketInstance, isConnect } = useSocket();
  const searchParams = useSearchParams();
  const username = searchParams.get('name') as string;

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    socketInstance.on('message', (mensagem) => {
      setMessages((prev) => [...prev, mensagem]);
    });

    return () => {
      socketInstance.off('message');
    };
  }, [socketInstance]);

  function handleSubmit(data: string) {
    const newMessage = {
      text: data,
      name: username,
      image: iconHorsePixel,
      id: uuid(),
    };
    socketInstance.emit('message', newMessage);
    setMessages((prev) => [
      ...prev,
      { ...newMessage, image: iconHorsePixel, isOwner: true },
    ]);
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678]">
      <div className="fixed h-full w-80 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
        <div className="flex flex-col h-[85vh]">
          <div className="flex-grow overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <Message
                key={message.id}
                image={message.image}
                name={message.name}
                message={message.text}
                isOwner={message.isOwner}
              />
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow border border-gray-300 p-2 rounded-l-md"
              placeholder="Digite sua mensagem..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const input = (e.target as HTMLButtonElement)
                  .previousElementSibling as HTMLInputElement;
                if (input && input.value.trim() !== '') {
                  handleSubmit(input.value);
                  input.value = '';
                }
              }}
              className="bg-blue-500 text-white p-2 rounded-r-md transition-all active:scale-98"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      {}

      <div className="relative flex flex-col justify-center items-center h-screen">
        <div className="space-y-3 w-full flex flex-col items-center">
          <div className="w-[85vh] bg-blue-500 rounded-md">a</div>
          <div className="h-[85vh] w-[85vh] bg-red-500 rounded-md">tabuleiro</div>
          <div className="w-[85vh] bg-blue-500 rounded-md">a</div>
        </div>
      </div>

    </div>
  );
}
