import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import styles from './searchBar.module.css';

export function SearchBar() {
  return (
    <>
      <div id="searchBar" className={styles.searchBar}>
        {' '}
        <MagnifyingGlassIcon />
        Rechercher un module
      </div>
    </>
  );
}
