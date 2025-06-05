'use client';
import ReactModal from 'react-modal';
import { ReactNode, useEffect } from 'react';
import styles from './modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRequestClose: () => void;
  children: ReactNode;
  title?: string;
};

export function Modal({
  isOpen,
  onClose,
  onRequestClose,
  children,
  title,
}: ModalProps) {
  useEffect(() => {
    // for accessibility (screen readers)
    ReactModal.setAppElement('body');
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`${styles.modalContent} ${isOpen ? styles.modalContentOpen : ''}`}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={300}
    >
      <div id="titleWrapper" className={styles.titleWrapper}>
        {title && <h2>{title}</h2>}
        <div id="buttonWrapper" className={styles.buttonWrapper}>
          {' '}
          <button id="button" className={styles.button} onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
      <div>{children}</div>
    </ReactModal>
  );
}
