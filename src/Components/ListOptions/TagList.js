import React from 'react';
import { GlobalContext } from '../TodoList';
import styles from './ListOptions.module.css';

const TagList = ({ data }) => {
  const { tags, lists, setLists } = React.useContext(GlobalContext);
  const tagContainerRef = React.useRef();

  function handleCheckboxTag(e, tag) {
    e.target.classList.toggle('selected');

    let selectedTags;

    if (data.tags.some((tagSome) => tagSome === tag)) {
      selectedTags = data.tags.filter((tagFilter) => tagFilter !== tag);
    } else {
      selectedTags = [...data.tags, tag]
    }

    setLists(lists.map((list) => {
      if (list.id === data.id) {
        return {...list, tags: selectedTags}
      }
      return list;
    }))
  }

  function handleShowTagContainer() {
    console.log(tagContainerRef.current)
    tagContainerRef.current.classList.toggle('show');
  }

  return (
    <div>
      <div className={`${styles.tag} ${styles.option}`} onClick={() => handleShowTagContainer()}></div>
      
      <div className={styles.tags} ref={tagContainerRef}>
        {tags.map((tag) => (
          <button key={tag}  onClick={(e) => handleCheckboxTag(e, tag)}>{tag}</button>
        ))}</div>
    </div>
  )
}

export default TagList