'use client';

import Image from 'next/image';
import styles from './SideBar.module.css';
import Link from 'next/link';
import { SquaresFourIcon } from '@phosphor-icons/react/dist/icons/SquaresFour';
import { UserListIcon } from '@phosphor-icons/react/dist/icons/UserList';
import { BookOpenTextIcon } from '@phosphor-icons/react/dist/icons/BookOpenText';
import { TrendUpIcon } from '@phosphor-icons/react/dist/icons/TrendUp';
import { TrophyIcon } from '@phosphor-icons/react/dist/icons/Trophy';
import { NotePencilIcon } from '@phosphor-icons/react/dist/icons/NotePencil';
import { ExamIcon } from '@phosphor-icons/react/dist/icons/Exam';
import { SignOutIcon } from '@phosphor-icons/react/dist/icons/SignOut';
import { BroadcastIcon } from '@phosphor-icons/react/dist/icons/Broadcast';
import { UserGearIcon } from '@phosphor-icons/react/dist/icons/UserGear';
import { UserFocusIcon } from '@phosphor-icons/react/dist/icons/UserFocus';
import { CaretDownIcon } from '@phosphor-icons/react/dist/icons/CaretDown';
import { usePathname } from 'next/navigation';

const user = {
  initials: 'ER',
  name: 'Erwan Rozet',
  email: 'erwan.rozet@pyxiscience.com',
  title: 'Professeur',
  subject: 'Mathématiques',
  studentClass: 'BUT GEA 1ère année promo entière',
};
const navLinks = [
  { href: '/dashboard', label: 'Tableau de bord', icon: SquaresFourIcon },
  { href: '/corrections', label: 'Mes corrections', icon: UserListIcon },
  { href: '/exercices', label: 'Exercices', icon: BookOpenTextIcon },
  { href: '/homework', label: 'Devoirs', icon: ExamIcon },
  { href: '/td', label: 'Feuilles TD', icon: NotePencilIcon },
  { href: '/exams', label: 'Examens', icon: TrophyIcon },
  { href: '/progression', label: 'Progression', icon: TrendUpIcon },
  { href: '/personnal-space', label: 'Espace personnel', icon: UserFocusIcon },
  {
    href: '/communications',
    label: 'Communications et documents',
    icon: BroadcastIcon,
  },
  { href: '/profile', label: 'Mon profil', icon: UserGearIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className={styles.sideBarContainer}>
      <div id="logo" className={styles.logo}>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
          alt="Pyxiscience logo"
          unoptimized
        />
      </div>

      <div id="userWrapper" className={styles.userWrapper}>
        <div id="user-infos" className={styles.userInfosContainer}>
          <div id="user-picture" className={styles.userPicture}>
            <Image
              src="/portrait-bw-cold.jpg"
              width={64}
              height={64}
              alt="User picture"
              className={styles.avatar}
              unoptimized
            />
          </div>
          <div
            id="user-initials-mail-block"
            className={styles.userInitialsMailBlock}
          >
            <div id="user-initials" className={styles.userInitials}>
              {user.initials}
            </div>
            <div id="user-email" className={styles.userEmail}>
              {user.email}
            </div>
          </div>
        </div>
        <div id="user-name-title" className={styles.userName}>
          <div>{user.name} </div> <div> {user.title}</div>
        </div>
        <div id="user-student-subject" className={styles.studentSubject}>
          <div> {user.subject}</div>
          <div>
            {' '}
            <CaretDownIcon size={20} />
          </div>
        </div>
        <div id="user-student-class" className={styles.studentClass}>
          <div> {user.studentClass}</div>
          <div>
            {' '}
            <CaretDownIcon size={20} />
          </div>{' '}
        </div>
      </div>
      <div className={styles.scrollableContent}>
        <nav className={styles.sidebar}>
          <ul className={styles.menu}>
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={label} className={styles.link}>
                <Icon
                  size={20}
                  color={pathname === href ? 'var(--blue-color)' : 'darkblue'}
                  weight="bold"
                />
                <Link
                  href={href}
                  className={pathname === href ? styles.activeLink : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.footer}>
        <SignOutIcon size={20} color={'darkblue'} wheight={'bold'} />
        <Link href="/settings">Se déconnecter</Link>
      </div>
    </div>
  );
}
