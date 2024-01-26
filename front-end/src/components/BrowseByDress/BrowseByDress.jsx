import styles from "./BrowseByDress.module.css";

import { CentredContainer } from "../CentredContainer/CentredContainer";
import CASUAL_PHOTO from "../../assets/casual.png";
import FORMAL_PHOTO from "../../assets/formal.png";
import PARTY_PHOTO from "../../assets/party.png";
import GYM_PHOTO from "../../assets/gym.png";

export function BrowseByDress() {
  return (
    <CentredContainer>
      <div className={styles.wrapper}>
        <h2>BROWSE BY dress STYLE</h2>

        <div className={styles.gridContainer}>
          <div
            style={{ backgroundImage: `url(${CASUAL_PHOTO})` }}
            className={styles.styleTile}
          >
            <p>Casual</p>
          </div>
          <div
            style={{ backgroundImage: `url(${FORMAL_PHOTO})` }}
            className={styles.styleTile}
          >
            <p>Formal</p>
          </div>
          <div
            style={{ backgroundImage: `url(${PARTY_PHOTO})` }}
            className={styles.styleTile}
          >
            <p>Party</p>
          </div>
          <div
            style={{ backgroundImage: `url(${GYM_PHOTO})` }}
            className={styles.styleTile}
          >
            <p>Gym</p>
          </div>
        </div>
      </div>
    </CentredContainer>
  );
}
