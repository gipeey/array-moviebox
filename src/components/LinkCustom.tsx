import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { LinkProps } from "next/link";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface CustomLinkProps extends LinkProps {
  text: string;
  className?: {
    /**
     * for container className
     */
    base?: string;
    /**
     * for text (span) className
     */
    text?: string;
    /**
     * for icon (ChevronRightIcon) className
     */
    icon?: string;
  };
}

const LinkCustom = ({ text, className, ...props }: CustomLinkProps) => {
  return (
    <Link
      {...props}
      href={props.href}
      className={twMerge("flex items-center gap-2", className?.base)}
      scroll={false}
    >
      <span
        className={twMerge("text-rose-700 text-lg leading-6", className?.text)}
      >
        {text}
      </span>
      <ChevronRightIcon
        className={twMerge("h-5 w-5 text-rose-700", className?.icon)}
      />
    </Link>
  );
};

export default LinkCustom;
