import React from 'react';
import useDebounce from '../../Hooks/useDebounce';
import useTextarea from '../../Hooks/useTextarea';
import styles from './ListTitle.module.css';
import { TodoContext } from '../TodoContext';

const ListTitle = ({ data }) => {
  const {lists, setLists} = React.useContext(TodoContext);
  const [displayValue, setDisplayValue] = React.useState(data.title);
  const textareaRef = React.useRef(null);
  const { resizeTextarea } = useTextarea()

  function handleKeyUp(value) {
    if (value && value !== data.title) {
      setLists(lists.map((list) => {
        if (list.id === data.id) {
          list.title = value;
        }

        return list;
      }))
    }
  }
  const handleKeyUpDebounce = useDebounce(handleKeyUp, 500)


  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <>
      <textarea
        className={styles.title} 
        value={displayValue}
        onChange={({ target }) => setDisplayValue(target.value)}
        onKeyUp={({ target }) => handleKeyUpDebounce(target.value)} 
        onKeyDown={(e) => handleKeyDown(e)} 
        onInput={(e) => resizeTextarea(e)}
        ref={textareaRef}
        placeholder='Título'
        onBlur={({ target }) => handleKeyUpDebounce(target.value)}
        >
      </textarea>
    </>
  )
}

export default ListTitle