"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-50 inset-0 mx-auto bg-black/50"
      onClick={handleClick}
    >
      <section
        ref={wrapper}
        className="relative top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 max-w-5xl w-full bg-white rounded-xl shadow-xl"
      >
        <button
          className="absolute end-4 top-[30px] -translate-y-1/2 w-[30px] h-[30px] hover:bg-gray-300 rounded-full flex items-center justify-center"
          type="button"
          onClick={() => router.back()}
        >
          <XMarkIcon className="w-6 h-6 text-gray-400" />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
