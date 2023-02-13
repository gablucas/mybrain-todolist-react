import React from 'react'
import styles from './Task.module.css';
import { TodoContext } from '../TodoContext';
import checkedImage from '../../Assets/icons/checkbox_checked.svg';
import uncheckedImage from '../../Assets/icons/checkbox_unchecked.svg';
import useDebounce from '../../Hooks/useDebounce';
import useTextarea from '../../Hooks/useTextarea';


const Task = ({ task, data }) => {
  const { lists, setLists } = React.useContext(TodoContext);
  const [displayValue, setDisplayValue] = React.useState(task.value);
  const taskRef = React.useRef();
  const checkboxRef = React.useRef();
  const { resizeTextarea } = useTextarea()


  // Função que altera o valor da tarefa
  function handleKeyUp(value) {
    if (value !== task.value) {
      setLists(lists.map((list) => {
        if (list.id === data.id) {
          list.tasks.map((taskMap) => {
            if (taskMap.id === task.id) {
              taskMap.value = value;
            }
            return taskMap;
          })
        }

        return list;
      }))
    }
  } 

  // Debounce que recebe a função acima e o tempo de delay para executa-la
  const handleKeyUpDebounce = useDebounce(handleKeyUp, 100)

  // Previne o padrão o ENTER
  // Apaga a tarefa se apertar backspace com o campo vazio
  function handleKeyDown(e) {
    if(e.key === "Enter") {
      e.preventDefault();
    } else if(!e.target.value && e.key === "Backspace") {
      setLists(lists.map((listMap) => {
        if (listMap.id === data.id) {
          listMap.tasks = listMap.tasks.filter((taskFilter) => taskFilter.id !== task.id);
        }
        return listMap;
      }))
    }
  }

  // Marca ou desmarca a checkbox
  function handleClick() {
    setLists(lists.map((list) => {
      if (list.id === data.id) {
        list.tasks.map((taskMap) => {
          if (taskMap.id === task.id) {
            taskMap.checked = !taskMap.checked;
          }
          return taskMap;
        })
      }

      return list;
    }))
  }

  // Deletar a tarefa
  function handleDelete() {
    setLists(lists.map((listMap) => {
      if (listMap.id === data.id) {
        listMap.tasks = listMap.tasks.filter((listTask) => listTask.id !== task.id);
      }
      return listMap;
    }))
  }

  // Reajusta o tamanho da task
  React.useEffect(() => {
    resizeTextarea(taskRef.current)
  }, [resizeTextarea])

  React.useEffect(() => {
    if (task.checked) {
      checkboxRef.current.style.background = `url(${checkedImage}) no-repeat center`;
      taskRef.current.style.textDecoration = 'line-through';
      taskRef.current.style.opacity = '0.6';
    } else {
      checkboxRef.current.style.background = `url(${uncheckedImage}) no-repeat center`;
      taskRef.current.style.textDecoration = 'none';
      taskRef.current.style.opacity = '1';

    }
  }, [task.checked])

  return (
      <div className={styles.taskContainer}>

        <div className={styles.checkbox} 
          onClick={handleClick} ref={checkboxRef} >
        </div>

        <textarea 
          className={styles.textarea}
          value={displayValue} 
          onChange={({ target }) => setDisplayValue(target.value)} 
          onKeyUp={({ target }) => handleKeyUpDebounce(target.value)} 
          onKeyDown={handleKeyDown} 
          onInput={(e) => resizeTextarea(e)}
          ref={taskRef}>
        </textarea>

        <div 
          className={styles.close}
          onClick={handleDelete}>
        </div>

      </div>
  )
}

export default Task