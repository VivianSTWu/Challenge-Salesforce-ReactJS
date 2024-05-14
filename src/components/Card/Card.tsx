import { CardElement } from "./Card.style";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <CardElement>{children}</CardElement>;
};