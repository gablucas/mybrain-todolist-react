import React from 'react';
import { GlobalContext } from '../TodoList';
import styles from './ListOptions.module.css';


const PinList = ({ data }) => {
  const {lists, setLists} = React.useContext(GlobalContext);

  function handleMark() {
    setLists([{...data, pinned: true}, ...lists.filter((list) => list.id !== data.id)]);
  }


  return (
    <div className={`${styles.pin} ${styles.option}`} onClick={handleMark}>

    </div>
  )
}

export default PinList