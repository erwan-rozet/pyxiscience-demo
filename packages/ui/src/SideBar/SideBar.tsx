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

const user = {
  initials: 'ER',
  name: 'Erwan Rozet',
  email: 'erwan.rozet@pyxiscience.com',
  title: 'Professeur',
  subject: 'Mathématiques',
  studentClass: 'BUT GEA 1ère année promo entière',
};

export default function Sidebar() {
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
              src="/avatar.png"
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
            <li className={styles.link}>
              <SquaresFourIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/dashboard">Tableau de bord</Link>
            </li>
            <li className={styles.link}>
              <UserListIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/profile">Mes corrections</Link>
            </li>
            <li className={styles.link}>
              <BookOpenTextIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/settings">Exercices</Link>
            </li>
            <li className={styles.link}>
              <ExamIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/">Devoirs</Link>
            </li>
            <li className={styles.link}>
              <NotePencilIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/profile">Feuilles TD</Link>
            </li>
            <li className={styles.link}>
              <TrophyIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/settings">Examens</Link>
            </li>
            <li className={styles.link}>
              <TrendUpIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/profile">Progression</Link>
            </li>
            <li className={styles.link}>
              <UserFocusIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/settings">Espace personnel</Link>
            </li>
            <li className={styles.link}>
              <BroadcastIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/settings">Communications et documents</Link>
            </li>
            <li className={styles.link}>
              <UserGearIcon size={20} color={'darkblue'} wheight={'bold'} />
              <Link href="/settings">Mon profil</Link>
            </li>
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
