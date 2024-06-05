import Image, { StaticImageData } from 'next/image';

interface MessageProps {
  image: StaticImageData;
  name: string;
  message: string;
  isOwner?: boolean;
}

const Message: React.FC<MessageProps> = ({ image, name, message, isOwner }) => {
  return (
    <div className={`p-2 rounded-md ${isOwner ? 'bg-blue-100' : 'bg-gray-100'}`}>
      <div className="flex items-center space-x-2">
        <div className="relative w-8 h-8">
          <Image
            src={image}
            alt="User Icon"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
