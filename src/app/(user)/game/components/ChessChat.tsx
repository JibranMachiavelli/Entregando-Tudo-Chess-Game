'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import iconHorsePixel from '../../../public/assets/icon-horse-pixel-01.png';
import { v4 as uuid } from 'uuid';
import { StaticImageData } from 'next/image';
import Message from '../../../components/general/Message';
import useSocket from '../../../../hooks/useSocket';

interface IMessage {
  id: string;
  name: string;
  text: string;
  image: StaticImageData;
  isOwner?: boolean;
}

export default function ChessChat() {
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
    <div className="hidden md:block md:w-1/3 w-full lg:w-1/5 bg-white">
      <div className="flex flex-col h-full shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
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
            className="flex-grow border border-gray-300 p-2 rounded-l-md md:w-1/6 lg:w-1/5"
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
            className="bg-blue-500 text-center text-white p-2 rounded-r-md transition-transform transform active:scale-95"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
