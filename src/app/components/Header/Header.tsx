"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Modal from "../Modal/Modal";

export default function Header() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.header_logo} href="/">
          <Image
            src={"/logo.svg"}
            width={100}
            height={43}
            alt="website logo"
          ></Image>
        </Link>
        <ul className={styles.header_list}>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <Link className={styles.header_modal_link} href={"/houses"}>
              our houses
            </Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <Link href="">Problem & solution</Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <Link href="">our advantages</Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <Link href="">how it works?</Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <span>team</span>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <Link className={styles.header_modal_link} href="/">
              glampings
            </Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_item}
          >
            <span>contact</span>
          </li>
        </ul>
        <Menu
          className={styles.header_burger}
          size={30}
          onClick={() => setBurgerIsOpen(true)}
        />

        <div className={styles.header_stick}></div>
      </header>
      <Modal isOpen={burgerIsOpen} className={styles.header_modal}>
        <button
          className={styles.header_modal_button}
          onClick={() => setBurgerIsOpen(false)}
        >
          <X size={30} />
        </button>
        <ul className={styles.header_modal_list}>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <Link className={styles.header_modal_link} href={"/houses"}>
              our houses
            </Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <Link href="">Problem & solution</Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <Link href="">our advantages</Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <Link href="">how it works?</Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <span>team</span>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <Link className={styles.header_modal_link} href="/">
              glampings
            </Link>
          </li>
          <li
            onClick={() => setBurgerIsOpen(false)}
            className={styles.header_modal_item}
          >
            <span>contact</span>
          </li>
        </ul>
      </Modal>
    </>
  );
}
