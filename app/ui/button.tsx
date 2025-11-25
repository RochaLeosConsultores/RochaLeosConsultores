import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-[#1F3A5F] text-white hover:bg-[#2d5280] shadow-lg hover:shadow-xl",
    secondary:
      "bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1F3A5F]",
  };

  const buttonClasses = `${baseStyles} ${className} ${variants[variant]}`;

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

