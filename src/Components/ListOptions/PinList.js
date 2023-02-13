import React from 'react';
import { TodoContext } from '../TodoContext';
import styles from './ListOptions.module.css';


const PinList = ({ data }) => {
  const {lists, setLists} = React.useContext(TodoContext);

  function handleMark() {
    setLists([{...data, pinned: true}, ...lists.filter((list) => list.id !== data.id)]);
  }


  return (
    <div className={`${styles.pin} ${styles.option}`} onClick={handleMark}>

    </div>
  )
}

export default PinList