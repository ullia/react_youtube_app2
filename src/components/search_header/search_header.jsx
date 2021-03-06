import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    // console.log(value);
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  console.log('render header!');
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} ref={inputRef} type='search' placeholder='검색하세요' onKeyPress={onKeyPress} />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src='/images/search.png' alt='search' />
      </button>
    </header>
  );
};

export default memo(SearchHeader);
