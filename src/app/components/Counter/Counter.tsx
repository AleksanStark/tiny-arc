import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import styles from "./Counter.module.css";
import clsx from "clsx";

export default function Counter() {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count + 1);

  const Decrement = () => setCount(count - 1);

  return (
    <ul className={styles.container}>
      <li className={clsx(styles.item)}>
        <button
          className={clsx(styles.item_button, styles._increment)}
          disabled={count <= 0}
          onClick={Decrement}
        >
          <Minus />
        </button>
      </li>
      <li>
        <span className={styles.count_display}>{count}</span>
      </li>
      <li className={clsx(styles.item)}>
        <button
          className={clsx(styles.item_button, styles._decrement)}
          onClick={Increment}
        >
          <Plus />
        </button>
      </li>
    </ul>
  );
}
