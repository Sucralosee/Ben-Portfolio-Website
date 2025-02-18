import React from 'react';
import "./lister.css"

const Lister = ({ 
  items = [],
  ordered = false,
  listHead = "",
}) => {
  const ListTag = ordered ? 'ol' : 'ul';
  
  return (
    <ListTag className="list-container">
        <p className='list-head SubHead'>{listHead}</p>
        {items.map((item, index) => (
            <li key={index} className="list-item Pop24">
            {item}
            </li>
        ))}
    </ListTag>
  );
};

export default Lister;