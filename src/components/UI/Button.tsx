import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-semibold tracking-wide transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden group";

  const variantStyles = {
    primary:
      "bg-neonBlue text-black border border-neonBlue hover:bg-transparent hover:text-neonBlue shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)]",

    secondary:
      "bg-transparent border border-white/20 text-white hover:border-neonBlue hover:text-neonBlue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",

    glass:
      "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:border-neonPink hover:text-neonPink hover:shadow-[0_0_20px_rgba(255,0,170,0.4)]",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base md:text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
      <span className="relative z-20 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
