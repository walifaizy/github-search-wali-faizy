import React, { Component, useState } from 'react';
import { Button } from '../../common/index';
import Styles from './styles';

type Props = {
  onSubmit: (search: string) => void;
};

const SearchForm = (props: Props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const setInputValue = (e: { target: HTMLInputElement }) => setValue(e.target.value);
  const onFormSubmit = () => onSubmit(value);

  return (
    <div className="formWrapper">
      <h2 className="title">React app to search github users</h2>
      <div className="search">
        <input type="text" name="userText" onChange={setInputValue} value={value} autoFocus />
        <button disabled={!value} className="ripple" onClick={onFormSubmit}>
          Search
        </button>
      </div>
      <style jsx>{Styles}</style>
    </div>
  );
};

export default SearchForm;
