import { useState } from "react";
import styles from "./Photos.module.css";

export function Photos({ photos }) {
  const [currentPhoto, setCurrentPhoto] = useState(photos[0]);
  return (
    <div className={styles.flex}>
      <div className={styles.photosContainer}>
        {photos.map((photo, index) => {
          return (
            <img
              key={photo}
              src={photo}
              onClick={() => setCurrentPhoto(photos[index])}
            />
          );
        })}
      </div>
      <img src={currentPhoto} className={styles.activePhoto} />
    </div>
  );
}
