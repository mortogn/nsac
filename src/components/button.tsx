import React, { type ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={`relative min-h-12 w-full rounded-md border border-[#dcb8ab] bg-[#fffaf3] px-5 py-3 text-center font-mono text-sm font-semibold uppercase tracking-[0.12em] text-[#493832] shadow-[-3px_3px_0_0_#CF6454] transition-[transform,box-shadow,background-color] duration-150 active:-translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CF6454] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
