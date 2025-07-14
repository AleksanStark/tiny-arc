import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({
  title,
  text,
  button_text,
  image_path,
  image_alt,
}: {
  title: string;
  button_text: string;
  text: string;
  image_path: string;
  image_alt: string;
}) {
  return (
    <li className={styles.card}>
      <Image
        className={styles.card_image}
        src={image_path}
        alt={image_alt}
        width={100}
        height={100}
        quality={100}
      ></Image>
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_text}>{text}</p>
      <button className={styles.card_button}>{button_text}</button>
    </li>
  );
}
