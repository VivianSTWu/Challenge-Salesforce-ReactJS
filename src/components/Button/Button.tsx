import { ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  inverse?: boolean;
  size?: "large" | "small" | undefined;
  variant?: "info" | "danger" | undefined;
  onClick: () => void;
}

export const Button = ({
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonElement onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

