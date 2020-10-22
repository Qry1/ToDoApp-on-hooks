import React, { useContext } from 'react';
import { Context } from '../Context/Context'

import './Item.css'

export default function Item({ data }) {
  
  const { date, label, important, done, id } = data;
  
  const { deleteItem, toggleImportant, toggleDone } = useContext(Context);

  let classNames = 'item';

  if(done) {
    classNames += ' done';
  };

  if(important) {
    classNames += ' important';
  };

  return (
    <div className={classNames}>
      <div onClick={() => toggleDone(id)}>
        <span 
          className='item-date'>
          {date}
        </span>
        <span 
          className='item-text'>
          {label}
        </span>
      </div>
      <div>
        <button 
          className='button-imp'
          onClick={() => toggleImportant(id)}>
          !
        </button>
        <button 
          className='button-del'
          onClick={() => deleteItem(id)}>
          DEL
        </button>
      </div>
    </div>
  );
};