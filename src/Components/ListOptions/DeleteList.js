import React from 'react'
import { TodoContext } from '../TodoContext';
import styles from './ListOptions.module.css';

const DeleteList = ({ data }) => {
  const { lists, setLists } = React.useContext(TodoContext);

  // Faz um filter para remover a lista
  // Faz um map para reorganizar os ids em ordem númerica, assim evitando conflito
  function handleDeleteList() {
    setLists(lists.filter((list) => list.id !== data.id))
  }

  return (
    <div className={`${styles.delete} ${styles.option}`} onClick={handleDeleteList}></div>
  )
}

export default DeleteList