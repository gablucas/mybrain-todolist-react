import React from 'react';
import styles from './Tags.module.css';

const Tags = ({ tags, setTags, selectedTag, setSelectedTag}) => {
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