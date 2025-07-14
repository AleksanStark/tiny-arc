"use client";
import clsx from "clsx";
import styles from "./Buttons.module.css";
import React, { SetStateAction } from "react";

type ButtonsProps = {
  onSelect: number | null;
  onChoose: (
    index: number,
    setSelected: (value: SetStateAction<number | null>) => void,
    setOpen: (value: SetStateAction<boolean>) => void
  ) => void;
  setSelected: (value: SetStateAction<number | null>) => void;
  setOpen: (value: SetStateAction<boolean>) => void;
  content: string[];
  length: number;
};

export default function Buttons({
  onSelect,
  onChoose,
  setSelected,
  setOpen,
  content,
  length,
}: ButtonsProps) {
  return (
    <>
      {/* // <div className={styles.booking_wrapper}> */}
      {Array.from({ length: length }, (_, i) => i + 1).map((num) => {
        return (
          <button
            onClick={() => onChoose(num, setSelected, setOpen)}
            key={num}
            className={clsx(
              styles.booking_button,
              onSelect === num && styles.booking_button_close
            )}
          >
            ({content[num - 1]} #{num})
          </button>
        );
      })}
      {/* // </div> */}
    </>
  );
}
