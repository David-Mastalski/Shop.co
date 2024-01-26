import styles from "./Hero.module.css";

import { CentredContainer } from "../CentredContainer/CentredContainer";
import { HeroDetails } from "../HeroDetails/HeroDetails";

import HERO_IMG from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className={styles.hero}>
      <CentredContainer>
        <div className={styles.heroWrapper}>
          <div>
            <h1 className={styles.heroTitle}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className={styles.heroText}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link to="/men" className={styles.showNowBtn}>
              Shop Now
            </Link>
            <HeroDetails />
          </div>
          <div className={styles.imageWrapper}>
            <img src={HERO_IMG} className={styles.heroImg} />
          </div>
        </div>
      </CentredContainer>
    </div>
  );
}
