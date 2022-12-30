import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import ReactTextTransition, { presets } from "react-text-transition";

const inter = Inter({ subsets: ["latin"] });

const names = ["jitin dodd", "jitin ਡੋਡ", "ਜਿਤਿਨ dodd", "ਜਿਤਿਨ ਡੋਡ"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % names.length),
      5000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>jitin</title>
        <meta name="description" content="Jitin Dodd's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tree.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.me}>
          <div className={styles.name}>
            <h2>
              {"hey, I'm "}
              <ReactTextTransition className={styles.handle} inline>
                {names[index]}
              </ReactTextTransition>
            </h2>
          </div>

          <h3>find me on:</h3>
          <ul>
            <li>
              <a
                href="https://instagram.com/jitindodd"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram: <span className={styles.handle}>@jitindodd</span>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/jitin_dodd"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter: <span className={styles.handle}>@jitin_dodd</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@doddtv"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube: <span className={styles.handle}>@dodd</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/jitindodd"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin: <span className={styles.handle}>@jitindodd</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.goodreads.com/user/show/59516132-jitin"
                target="_blank"
                rel="noopener noreferrer"
              >
                goodreads: <span className={styles.handle}>@jitin</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/jitindodd"
                target="_blank"
                rel="noopener noreferrer"
              >
                github: <span className={styles.handle}>@jitindodd</span>
              </a>
            </li>

            <li>
              <a href="mailto:jitindodd@gmail.com">
                email:{" "}
                <span className={styles.handle}>jitindodd@gmail.com</span>
              </a>
            </li>

            <li>
              <a
                href="https://rainbow.me/jitin.eth"
                target="_blank"
                rel="noopener noreferrer"
              >
                ens: <span className={styles.handle}>jitin.eth</span>
              </a>
            </li>

            <li className={styles.emoji}>
              {/* <h3>🦎🦖🪲🐸🐢🐉🌲/h3> */}
                <h3>🦎🌲🦖</h3>
           </li>
          </ul>
        </div>
      </main>
    </>
  );
}
