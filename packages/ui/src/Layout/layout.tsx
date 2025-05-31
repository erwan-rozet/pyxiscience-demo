'use client';

import Sidebar from '../SideBar/SideBar';
import styles from './layout.module.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
