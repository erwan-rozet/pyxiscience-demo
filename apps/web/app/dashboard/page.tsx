'use client';

import styles from './page.module.css';
import { AddModule, Modal, ModuleCard, SearchBar } from '@repo/ui';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MODULE, GET_MODULES } from '../../graphql/queries';
import { useState } from 'react';

type ModuleData = {
  title: string;
  category: string;
  color: string;
};

export default function Profile() {
  const { data, loading, error } = useQuery(GET_MODULES);
  const [createModule] = useMutation(CREATE_MODULE);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddModule = async () => {
    await createModule({
      variables: {
        input: {
          title: 'Frontend validation',
          category: 'Exemple',
          color: '#4CAF50',
        },
      },
    });

    setIsOpen(true);
  };

  if (loading) return <p>Chargement des modules...</p>;
  if (error)
    return (
      <>
        <p>Oups, erreur : {error.message} </p>
        <p>
          {' '}
          Veuillez recharger la page ou vérifier que le serveur api est lancé
        </p>
      </>
    );

  return (
    <>
      <h1>
        Bonjour Erwan Rozet <span className={styles.nameDetails}>(Prof.)</span>
      </h1>

      <div id="modulesWrapper" className={styles.modulesWrapper}>
        <h3 className={styles.title}>Mes modules</h3>
        <div className={styles.actionsWrapper}>
          <div id="searchBarWrapper" className={styles.searchBarWrapper}>
            <SearchBar />
          </div>
          <div
            id="plusIconWrapper"
            className={styles.plusIconWrapper}
            onClick={handleAddModule}
            // onClick={() => setIsOpen(true)}
          >
            <AddModule />
          </div>
        </div>
      </div>
      <div id="cards" className={styles.cards}>
        {data &&
          data.modules.map((card: ModuleData) => (
            <ModuleCard
              color={card.color}
              title={card.title}
              category={card.category}
            />
          ))}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {}}
        onClose={() => setIsOpen(false)}
        title="Exemple"
      >
        <p>Ceci est le contenu du modal.</p>
      </Modal>
    </>
  );
}
