"use client";

import Button from "../Button/Button";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  desc: string;
  stack: StackItem[];
  demoBtn: () => void;
  viewBtn: () => void;
}

interface StackItem {
  name: string;
  symbol: string;
  // If symbol isnt showing up, it might be an issue of
  // how it is defined here - try symbol: React.ReactNode;
}

const Card = ({ title, desc, stack, demoBtn, viewBtn }: CardProps) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.projectTitle}>{title}</div>
        <div className={styles.projectDesc}>{desc}</div>

        <div className={styles.stackContainer}>
          {stack.map((option, index) => (
            <div className={styles.stackItem} key={index}>
              <Image src={option.symbol} alt={option.name} />
              <div>{option.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.buttonsContainer}>
          <Button text={"Live demo"} onClick={demoBtn} style={"btn btn-3"} />
          <Button text={"View code"} onClick={viewBtn} style={"btn-4"} />
        </div>
      </div>
    </>
  );
};

export default Card;
