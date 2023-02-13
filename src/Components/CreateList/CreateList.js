import React from 'react';
import styles from './CreateList.module.css';
import useRandomID from '../../Hooks/useRandomID';
import { TodoContext } from '../TodoContext';

const CreateList = () => {
  const { lists, setLists } = React.useContext(TodoContext);
  const listID = useRandomID('list-')

  function handleCreateNewList() {
    setLists([...lists, {id: listID(), title: "", color: "#FFFFFF", pinned: false, tags: ['All'], tasks: []}])
  }

  return (
    <button className={styles.createlist} onClick={handleCreateNewList}>Criar Nova Lista</button>
  )
}

export default CreateList