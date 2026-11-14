import React, { type HTMLAttributes } from "react";

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-white py-3 uppercase w-full rounded-sm relative active:translate-y-1.5 active:-translate-x-1.5 shadow-[-6px_6px_0_0_#CF6454] active:shadow-none transition-all duration-150 ease-in-out font-semibold tracking-wider font-mono"
    >
      {children}
    </button>
  );
};

export default Button;
