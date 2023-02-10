import React from 'react';
import Header from './Header';
import CreateList from './CreateList';
import Tags from './Tags';
import ListsContainer from './ListsContainer';
import styles from './TodoList.module.css';

export const GlobalContext = React.createContext();

const TodoList = () => {
  const [lists, setLists] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [selectedTag, setSelectedTag] = React.useState('All');
  

  return (
    <GlobalContext.Provider value={{lists, setLists, tags}}>
      <Header />
      <section className={styles.todolist}>
        <Tags tags={tags} setTags={setTags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <CreateList tags={tags} />
        <ListsContainer tags={tags} setTags={setTags} selectedTag={selectedTag} />
      </section>
    </GlobalContext.Provider>
  )
}

export default TodoList