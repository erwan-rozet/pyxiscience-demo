import styles from './page.module.css';
import { AddModule, ModuleCard, SearchBar } from '@repo/ui';

export default async function Profile() {
  const cardsContent = [
    // Mathématiques
    {
      color: 'var(--blue-color)',
      title: 'Outils mathématiques de gestion II (R2.07)',
      category: 'Math.',
    },
    {
      color: 'var(--blue-color)',
      title: 'Finance (R1.10)',
      category: 'Math.',
    },
    {
      color: 'var(--blue-color)',
      title: 'Outils mathématiques de gestion I (R1.08)',
      category: 'Math.',
    },

    // Biologie
    {
      color: 'purple',
      title: 'Biologie cellulaire I (B1.01)',
      category: 'Bio.',
    },
    {
      color: 'purple',
      title: 'Génétique et évolution II (B2.03)',
      category: 'Bio.',
    },
    {
      color: 'purple',
      title: 'Physiologie animale et végétale I (B1.06)',
      category: 'Bio.',
    },

    // Physique
    {
      color: 'crimson',
      title: 'Mécanique du point et du solide I (P1.02)',
      category: 'Phy.',
    },
    {
      color: 'crimson',
      title: 'Électromagnétisme et circuits II (P2.05)',
      category: 'Phy.',
    },
    {
      color: 'crimson',
      title: "Thermodynamique et transferts d'énergie I (P1.08)",
      category: 'Phy.',
    },
  ];

  return (
    <>
      <h1>
        Bonjour Erwan Rozet <span className={styles.nameDetails}>(Prof.)</span>
      </h1>

      <div id="modulesWrapper" className={styles.modulesWrapper}>
        <h3 className={styles.title}>Mes modules</h3>
        <div id="searchBarWrapper" className={styles.searchBarWrapper}>
          <SearchBar />
        </div>
        <div id="plusIconWrapper" className={styles.plusIconWrapper}>
          <AddModule />
        </div>
      </div>
      <div id="cards" className={styles.cards}>
        {cardsContent &&
          cardsContent.map((card) => (
            <ModuleCard
              color={card.color}
              title={card.title}
              category={card.category}
            />
          ))}
      </div>
    </>
  );
}
