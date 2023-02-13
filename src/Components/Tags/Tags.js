import React from 'react';
import styles from './Tags.module.css';
import { TodoContext } from '../TodoContext';

const Tags = () => {
  const {lists, tags, setTags, setFilteredLists} = React.useContext(TodoContext)
  const [selectedTag, setSelectedTag] = React.useState('All');
  const inputRef = React.useRef();


  function handleCreateTag() {
    const value = inputRef.current.value
    if (value && !tags.some((tag) => tag === value)) {
      setTags([...tags, value]);
      inputRef.current.value = '';
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleCreateTag();
    }
  }


  React.useEffect(() => {
    setFilteredLists(lists.filter((listFilter) => listFilter.tags.some((listSome) => listSome === selectedTag)))
  }, [lists, setFilteredLists, selectedTag])

  return (
    <div className={styles.tags} >
      <button className={`${styles.tag} ${selectedTag === 'All' ? 'selected' : ''}`} onClick={() => setSelectedTag('All')}>Todas listas</button>

      {tags.map((tag) => (
        <button key={tag} className={`${styles.tag} ${selectedTag === tag ? 'selected' : ''}`} onClick={() => setSelectedTag(tag)}>{tag}</button>
      ))}

      <div className={styles.createTag}>
        <input className={styles.tagName} type="text" placeholder='Criar nova tag' ref={inputRef} onKeyDown={handleKeyDown}/>
        <div className={styles.addTag} onClick={handleCreateTag}></div>
      </div>
    </div>
  )
}

export default Tags