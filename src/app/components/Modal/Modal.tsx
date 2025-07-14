"use client";
import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
};

const Modal = ({ children, className, isOpen }: ModalProps) => {
  return (
    <div className={clsx(className, !isOpen && styles.modal_hidden)}>
      {children}
    </div>
  );
};

export default Modal;
