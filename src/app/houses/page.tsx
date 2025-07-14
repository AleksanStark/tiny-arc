import Link from "next/link";
import Header from "../components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Houses() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.our_houses}>
          <div className={styles.our_houses_text_wrapper}>
            <h1 className={styles.our_houses_title}>our houses</h1>
            <p className={styles.our_houses_text}>
              Unique glamping houses — your ideal coziness in the nature luxury
              style! Each house is made in a special design: bohemian chic,
              Scandinavian minimalism, forest loft or romantic Provence — there
              is an option for every taste. Inside you will find everything for
              comfort: a comfortable bed with premium linen, a cozy sitting
              area, a modern bathroom. Enjoy nature without denying yourself
              modern amenities. Choose a house below — and get ready for a
              journey into the harmony of comfort and wild nature!
            </p>
            <button className={styles.our_houses_button}>
              <Link className={styles.our_houses_link} href={"/booking"}>
                choose glamping
              </Link>
            </button>
          </div>

          <ul className={styles.our_houses_list}>
            <li className={styles.our_houses_card}>
              <Image
                className={styles.our_houses_card_image}
                src={"/house1.png"}
                alt="First house image"
                width={352}
                height={251}
              />
              <h3 className={styles.our_houses_card_title}>Family house</h3>
              <p className={styles.our_houses_text}>
                The cozy house is equipped with all the amenities
              </p>
              <button className={styles.our_houses_card_button}>
                <Link className={styles.our_houses_card_link} href="/booking">
                  book
                </Link>
              </button>
            </li>
            <li className={styles.our_houses_card}>
              <Image
                className={styles.our_houses_card_image}
                src={"/house2.png"}
                alt="Second house image"
                width={352}
                height={251}
              />
              <h3 className={styles.our_houses_card_title}>Practical house</h3>
              <p className={styles.our_houses_text}>
                A bright house is equipped with everything necessary
              </p>
              <button className={styles.our_houses_card_button}>
                <Link className={styles.our_houses_card_link} href="/booking">
                  book
                </Link>
              </button>
            </li>
            <li className={styles.our_houses_card}>
              <Image
                className={styles.our_houses_card_image}
                src={"/house3.png"}
                alt="Third house image"
                width={352}
                height={251}
              />
              <h3 className={styles.our_houses_card_title}>Cozy house</h3>
              <p className={styles.our_houses_text}>
                Modern house is equipped with all the amenities
              </p>
              <button className={styles.our_houses_card_button}>
                <Link className={styles.our_houses_card_link} href="/booking">
                  book
                </Link>
              </button>
            </li>
            <li className={styles.our_houses_card}>
              <Image
                className={styles.our_houses_card_image}
                src={"/house4.png"}
                alt="Fourth house image"
                width={352}
                height={251}
              />
              <h3 className={styles.our_houses_card_title}>Practical house</h3>
              <p className={styles.our_houses_text}>
                Modern house is equipped with all the amenities
              </p>
              <button className={styles.our_houses_card_button}>
                <Link className={styles.our_houses_card_link} href="/booking">
                  book
                </Link>
              </button>
            </li>
            <li className={styles.our_houses_card}>
              <Image
                className={styles.our_houses_card_image}
                src={"/house5.png"}
                alt="Fifth house image"
                width={352}
                height={251}
              />
              <h3 className={styles.our_houses_card_title}>Modern house</h3>
              <p className={styles.our_houses_text}>
                A bright house is equipped with everything necessary
              </p>
              <button className={styles.our_houses_card_button}>
                <Link className={styles.our_houses_card_link} href="/booking">
                  book
                </Link>
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
