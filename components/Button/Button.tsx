"use client";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  style?: string;
}

const Button = ({ onClick, text, style }: ButtonProps) => {
  return (
    <div onClick={onClick} className={style}>
      {text}
    </div>
  );
};

export default Button;
