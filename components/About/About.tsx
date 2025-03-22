import styles from "./About.module.css";
import { getImageUrl } from "../../utils/utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Desenvolvo interfaces responsivas e otimizadas usando React, Next.js, TypeScript e Tailwind.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Wordpress</h3>
              <p>
              Personalizo temas e plugins, utilizo Elementor para criação de páginas profissionais e otimizadas, cuidando de SEO e desempenho.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Experiência em criação de APIs e integração de sistemas com Django
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
