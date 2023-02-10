import React from 'react';
import styles from './List.module.css';
import stylesListOptions from './ListOptions/ListOptions.module.css';
import ListTitle from './ListTitle';
import ChangeBackgroundColor from './ListOptions/ChangeBackgroundColor';
import DuplicateList from './ListOptions/DuplicateList';
import DeleteList from './ListOptions/DeleteList';
import NewTask from './NewTask';
import Task from './Task';
import MarkList from './ListOptions/PinList';
import TagList from './ListOptions/TagList';


const List = ({ data }) => {
  const listElement = React.useRef();


  return (
    <div className={`${styles.list} ${stylesListOptions.list}`} ref={listElement} >
      <ListTitle data={data} />
      
      <div className={styles.tasks}>
        {data.tasks.map((task) => (<Task key={task.id} task={task} data={data} /> ))}
      </div>

      <NewTask data={data}  />
      
      <div className={styles.listOptions}>
        <TagList data={data} />
        <MarkList data={data} />
        <ChangeBackgroundColor data={data} listElement={listElement} />
        <DuplicateList data={data} />
        <DeleteList data={data} />
      </div>
    </div>
  )
}

export default List