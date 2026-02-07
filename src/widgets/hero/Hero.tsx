import { Link } from 'react-router-dom';
import { heroContent } from '@/shared/content/home';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import styles from './Hero.module.css';

export function Hero() {
  const { title, subtitle, badges, cards, blocks } = heroContent;
  return (
    <section className={styles.hero} aria-label="Главный экран">
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.badges}>{badges}</p>
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.title} className={styles.card}>
              {card.title}
            </Card>
          ))}
        </div>
        <div className={styles.blocks}>
          {blocks.map((b) => (
            <div key={b.title} className={styles.block}>
              <h2 className={styles.blockTitle}>{b.title}</h2>
              <p className={styles.blockSubtitle}>{b.subtitle}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Link to="/contacts">
            <Button variant="secondary" size="lg">
              Связаться
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
