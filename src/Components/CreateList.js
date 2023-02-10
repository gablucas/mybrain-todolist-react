import React from 'react';
import styles from './CreateList.module.css';
import useRandomID from './Hooks/useRandomID';
import { GlobalContext } from './TodoList';

const CreateList = () => {
  const { lists, setLists } = React.useContext(GlobalContext);
  const listID = useRandomID('list-')

  function handleCreate() {
    setLists([...lists, {id: listID(), title: "", color: "#FFFFFF", pinned: false, tags: ['All'], tasks: []}])
  }

  return (
    <button className={styles.createlist} onClick={handleCreate}>Criar Nova Lista</button>
  )
}

export default CreateList