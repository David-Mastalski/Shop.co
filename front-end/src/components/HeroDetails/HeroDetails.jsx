import styles from "./HeroDetails.module.css";

export function HeroDetails() {
  const skills = [
    {
      count: "200+",
      info: "International Brands",
    },
    {
      count: "2,000+",
      info: "High-Quality Products",
    },
    {
      count: "30,000+",
      info: "Happy Customers",
    },
  ];

  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill, index) => {
        return (
          <div key={index}>
            <p className={styles.skillsCount}>{skill.count}</p>
            <p className={styles.skillInfo}>{skill.info}</p>
          </div>
        );
      })}
    </div>
  );
}
