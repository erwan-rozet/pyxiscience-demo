'use client';

import Image from 'next/image';
import styles from './SideBar.module.css';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
          alt="Pyxiscience logo"
        ></Image>
      </div>
      <nav className={styles.sidebar}>
        <h2 className={styles.title}>Dashboard</h2>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/profile">Profil</Link>
          </li>
          <li>
            <Link href="/settings">Paramètres</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
