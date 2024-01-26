import styles from "./Brands.module.css";

import { CentredContainer } from "../CentredContainer/CentredContainer";

import VERSACE from "../../assets/versace.svg";
import ZARA from "../../assets/zara.svg";
import GUCCI from "../../assets/gucci.svg";
import PRADA from "../../assets/prada.svg";
import CALVIN_CLEIN from "../../assets/calvinKlein.svg";

export function Brands() {
  return (
    <div className={styles.brands}>
      <CentredContainer>
        <ul className={styles.brandsList}>
          <li>
            <img src={VERSACE} alt="Versace" />
          </li>
          <li>
            <img src={ZARA} alt="Zara" />
          </li>
          <li>
            <img src={GUCCI} alt="Gucci" />
          </li>
          <li>
            <img src={PRADA} alt="Prada" />
          </li>
          <li>
            <img src={CALVIN_CLEIN} alt="Calvin&Klein" />
          </li>
        </ul>
      </CentredContainer>
    </div>
  );
}
