import React from 'react';
import List from './List';
import Masonry from 'react-masonry-css';
import { GlobalContext } from './TodoList';

const ListsContainer = ({ selectedTag }) => {
  const {lists} = React.useContext(GlobalContext);
  
  const listFilteredByTag = lists.filter((listFilter) => listFilter.tags.some((listSome) => listSome === selectedTag));

  const breakpointColumnsObj = {
    default: 5,
    1920: 4,
    1440: 3,
    1100: 2,
    700: 1
  };


  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {listFilteredByTag.map((list) => (<List key={list.id} data={list} />))}
    </Masonry>
  )
}

export default ListsContainer