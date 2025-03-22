import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils/utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou Thais Dias</h1>
        <p className={styles.description}>
        Profissional em transição para o desenvolvimento web, com foco em WordPress (Elementor, personalização e otimização) e experiência em React, Next.js, TypeScript e Tailwind.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Me contactar
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

