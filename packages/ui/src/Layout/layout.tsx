'use client';

import { useState } from 'react';
import Sidebar from '../SideBar/SideBar';
import styles from './layout.module.css';

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={styles.layout}>
      <button
        aria-label="Toggle sidebar"
        className={styles.burgerButton}
        onClick={toggleSidebar}
      >
        &#9776;
      </button>

      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}
      >
        <Sidebar />
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
