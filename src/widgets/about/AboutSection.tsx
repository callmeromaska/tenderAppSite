import { aboutContent } from '@/shared/content/home';
import { Card } from '@/shared/ui/Card/Card';
import styles from './AboutSection.module.css';

export function AboutSection() {
  const { title, intro, historyTitle, historyText, advantagesTitle, advantages, stats } = aboutContent;
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <div className={styles.container}>
        <h2 id="about-heading" className={styles.heading}>
          {title}
        </h2>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.grid}>
          <Card title={historyTitle} className={styles.card}>
            <p className={styles.text}>{historyText}</p>
          </Card>
          <div>
            <h3 className={styles.advTitle}>{advantagesTitle}</h3>
            <ul className={styles.list}>
              {advantages.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
