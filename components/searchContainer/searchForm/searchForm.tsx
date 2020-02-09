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
    <div>
      <input type="text" name="userText" onChange={setInputValue} value={value} autoFocus />
      <Button disabled={!value} variant="blue" onClick={onFormSubmit}>
        Search
      </Button>
      <style jsx>{Styles}</style>
    </div>
  );
};

export default SearchForm;
