import styles from './moduleCard.module.css';

type Props = {
  color: string;
  title: string;
  category: string;
};

export function ModuleCard(props: Props) {
  return (
    <>
      <div id="card" className={styles.card}>
        <h3 style={{ padding: '1.15rem', height: '60%' }}>{props.title}</h3>
        <div
          id="bottom"
          className={styles.bottom}
          style={{ background: props.color }}
        >
          <div id="category" className={styles.category}>
            {props.category}
          </div>
          <div id="button" className={styles.button}>
            Voir le module
          </div>
        </div>
      </div>
    </>
  );
}
