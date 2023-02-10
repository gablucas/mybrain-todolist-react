import React, { useRef } from 'react';
import useRandomID from './Hooks/useRandomID';
import styles from './List.module.css';
import { GlobalContext } from './TodoList';

const NewTask = ({ data }) => {
  const { lists, setLists } = React.useContext(GlobalContext);
  const taskID = useRandomID('task-')
  const newTaskRef = useRef();

  // Insere a tarefa no objeto quando é digitado a primeira letra
  function handleInsertTask(e) {
    const value = e.target.value;

    if (/\w/.test(value)) {
      setLists(lists.map((listMap) => {
        if (listMap.id === data.id) {

          listMap.tasks.push({id: taskID(), checked: false, value: value})
        }
  
        return listMap;
      }))

      e.target.value = "";
    }
  }

  // Previne o padrão do ENTER
  function handleKeyDown(e) {
    if(e.key === "Enter") {
      e.preventDefault();
    }
  }
  


  // Aplica o .focus() na ultima tarefa adicionada
  React.useEffect(() => {
    const lastTask = newTaskRef.current.previousElementSibling.lastElementChild?.firstElementChild.nextElementSibling;
    if(lastTask) {
      lastTask.focus();
      lastTask.setSelectionRange(1, 1);
    }
  }, [data.tasks.length])

  return (
    <div className={styles.newtask} ref={newTaskRef}>
      <textarea type="text" placeholder='Nova tarefa' onInput={handleInsertTask} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default NewTask;