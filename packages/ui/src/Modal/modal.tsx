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
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      closeTimeoutMS={150}
    >
      {title && <h2>{title}</h2>}
      <button onClick={onClose} style={{ float: 'right' }}>
        ✕
      </button>
      <div>{children}</div>
    </ReactModal>
  );
}
