import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import styles from './page.module.css';

export default async function Profile() {
  return (
    <>
      <h1>
        Bonjour Erwan Rozet <span className={styles.nameDetails}>(Prof.)</span>
      </h1>
      <h3>Liste de mes modules</h3>
      <div>
        <MagnifyingGlassIcon />
        Rechercher un module
      </div>
    </>
  );
}
