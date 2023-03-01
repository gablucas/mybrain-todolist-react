import React from 'react';
import styles from './ListOptions.module.css';
import { TodoContext } from '../TodoContext';
import ColorCircle from '../Helper/ColorCircle';

const ChangeBackgroundColor = ({ data, listElement }) => {
  const {lists, setLists} = React.useContext(TodoContext);
  const colorElement = React.useRef();
  const colorsOptions = React.useRef();

  function setListColor(e) {
    const color = e.target.getAttribute('fill');
    if(color) {
      setLists(lists.map(list => {
        if (list.id === data.id) {
          return {...list, color: color}
        }
  
        return list;
      }))
    }
  }

  React.useEffect(() => {
    listElement.current.style.background = data.color;
  }, [data.color, listElement])


  function handleShowColors() {
    colorsOptions.current.classList.toggle('show');
  }

  return (
    <div>
      <div className={`${styles.color} ${styles.option}`} onClick={handleShowColors} ref={colorElement} ></div>

      <ul onClick={setListColor} className={styles.colorOptions} ref={colorsOptions} >
        <li><ColorCircle color='FFFFFF' /></li>
        <li><ColorCircle color='F28B82' /></li>
        <li><ColorCircle color='FBBC04' /></li>
        <li><ColorCircle color='FFF475' /></li>
        <li><ColorCircle color='CCFF90' /></li>
        <li><ColorCircle color='A7FFEB' /></li>
        <li><ColorCircle color='AECBFA' /></li>
        <li><ColorCircle color='FDCFE8' /></li>
        <li><ColorCircle color='E6C9A8' /></li>
      </ul>
    </div>
  )
}

export default ChangeBackgroundColor