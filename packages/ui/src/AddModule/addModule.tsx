import { PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import styles from './addModule.module.css';

export function AddModule() {
  return (
    <>
      <div id="add-module-plus-icon" className={styles.plusCircle}>
        <PlusIcon size={20} />
      </div>
    </>
  );
}
