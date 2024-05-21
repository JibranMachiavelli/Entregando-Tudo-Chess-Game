import React, { ReactNode } from 'react';

type ButtonProps = {
  size?: "small" | "medium" | "large";
  type?: "fill" | "outline" | "text";
  children: ReactNode;
};

export default function Button({size="medium", type="fill", children}: ButtonProps) {
  return (
    <button
    className={`
      ${{
        small: "w-28 h-10 text-sm",
        medium: "w-36 h-10 text-base",
        large: "w-44 h-10 text-lg"
      }[size]}
      ${{
        fill: "hover:bg-gray-700 text-white bg-gray-900 shadow-sm shadow-gray-700 hover:shadow-gray-900",
        outline: "border bg-transparent border-gray-500 text-gray-600  hover:bg-gray-900 hover:text-white shadow-sm shadow-gray-500 hover:shadow-gray-600",
        text: "bg-transparent hover:bg-gray-50 text-gray-800 "
      }[type]}
      active:scale-98 transition-all rounded-md hover:-translate-y-px
    `}
  >
      {children}
    </button>
  );
}

//Botões
//https://tailwindflex.com/@leon-bachmann/buttons-with-shadow
//https://tailwindflex.com/@leon-bachmann/glowing-backround-button

/* Como posso usar!

import Buttom from './Buttom';

// Em algum lugar no seu código
<Button onClick={handleClick} size="lg" fontWeight={700}>
  Submit
</Button>
*/

