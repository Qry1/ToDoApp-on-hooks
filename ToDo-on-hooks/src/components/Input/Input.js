import React, { useState, useContext } from 'react';
import { Context } from '../Context/Context';

import './Input.css';

export default function Input() {

  const { addItem } = useContext(Context);

  const [ label, setLabel ] = useState('');
  const [ date, setDate ] = useState('');

  const [ styleDate, setStyleDate ] = useState('input-date');
  const [ styleText, setStyleText ] = useState('input-text');

  const onInputChange = (e) => {
    setStyleText('input-text')
    setLabel(e.target.value);
  };

  const onDateChange = (e) => {
    setStyleDate('input-date');
    setDate(e.target.value);
  };

  const checkInput = () => {
    if(date && !label) {
      setStyleText('input-text blur')
    };

    if(!date && label) {
      setStyleDate('input-date blur');
    };

    if(!date && !label) {
      setStyleDate('input-date blur');
      setStyleText('input-text blur');
    };

    if(date && label) {
      addItem(date, label);
      setLabel('');
      setDate('');
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkInput();
  };

  return (
    <form 
      className='footer'
      onSubmit={onSubmit} >
      <input
        className={styleText}
        placeholder='What should you do...'
        type='text'
        value={label}
        onChange={onInputChange} />
      <input
        className={styleDate}
        type='date'
        value={date}
        onChange={onDateChange} />
      <button 
        className='input-submit'>
        Add
      </button>
    </form>
  );
};