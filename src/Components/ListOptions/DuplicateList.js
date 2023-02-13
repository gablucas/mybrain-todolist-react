import React from 'react';
import styles from './ListOptions.module.css';
import { TodoContext } from '../TodoContext';
import useRandomID from '../../Hooks/useRandomID';

const DuplicateList = ({ data }) => {
  const {lists, setLists} = React.useContext(TodoContext);
  const listID = useRandomID('list-')
  const taskID = useRandomID('task-')

  function handleDuplicateList() {
    const duplicateList = {...data, id: listID()}
    duplicateList.tasks = duplicateList.tasks.map((task) => {
      return {...task, id: taskID()}})

    setLists([...lists, duplicateList])
  }

  return (
    <div className={`${styles.duplicate} ${styles.option}`} onClick={handleDuplicateList}></div>
  )
}

export default DuplicateList