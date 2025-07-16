import Link from "next/link";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.glamping_section}>
          <div className={styles.glamping_text_wrapper}>
            {" "}
            <h1 className={styles.glamping_title}>your ideal glamping</h1>
            <p className={styles.glamping_text}>
              Treat yourself to a vacation where premium comfort meets wild
              nature. Our glampings are cozy and stylish houses with designer
              interiors, soft beds, modern amenities and everything you need for
              an unforgettable vacation. Located in picturesque places - by the
              lake, in the forest or in the mountains - our glampings give
              privacy and inspiration, turning your vacation into a real
              adventure. Book your escape vacation and immerse yourself in the
              harmony of luxury and nature!
            </p>
            <button className={styles.glamping_button}>
              <Link className={styles.glamping_link} href={"/booking"}>
                choose glamping
              </Link>
            </button>
          </div>

          <ul className={styles.glamping_list}>
            <li className={styles.glamping_card}>
              <Image
                className={styles.glamping_image}
                src={"/glamping.jpg"}
                width={900}
                height={600}
                alt="First glamping image"
              />
            </li>

            <li className={styles.glamping_card}>
              <Image
                className={styles.glamping_image}
                src={"/glamping2.jpg"}
                width={900}
                height={600}
                alt="Second glamping image"
              />
            </li>
            <li className={styles.glamping_card}>
              <Image
                className={styles.glamping_image}
                src={"/glamping3.jpg"}
                width={900}
                height={600}
                alt="Third glamping image"
              />
            </li>
            <li className={styles.glamping_card}>
              <Image
                className={styles.glamping_image}
                src={"/glamping4.jpg"}
                width={900}
                height={600}
                alt="Fourth glamping image"
              />
            </li>
          </ul>
          <Form />
        </section>
      </main>
    </>
  );
}
