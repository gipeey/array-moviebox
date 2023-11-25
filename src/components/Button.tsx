import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
  iconPosition?: "start" | "end";
}

const Button = ({
  icon,
  text,
  iconPosition = "start",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        `px-4 py-1.5 bg-rose-700 w-fit rounded-md flex items-center gap-2 ${
          iconPosition === "end" && "flex-row-reverse"
        }`,
        props.className
      )}
    >
      {icon && icon}
      <span className="text-sm leading-6 font-bold uppercase">{text}</span>
    </button>
  );
};

export default Button;
