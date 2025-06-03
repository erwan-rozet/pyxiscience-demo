import Link from 'next/link';
import styles from './page.module.css';

const RootPage = ({}) => {
  return (
    <h1 className={styles.page}>
      Rendez-vous sur votre
      <Link href="/dashboard"> Dashboard</Link>
    </h1>
  );
};

export default RootPage;
