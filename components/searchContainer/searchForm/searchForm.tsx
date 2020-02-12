import React, { Component, useState } from 'react';
import Styles from './styles';

type Props = {
    onSubmit: (search: string) => void;
    isLoading: boolean;
};

const SearchForm = (props: Props) => {
    const { onSubmit, isLoading } = props;
    const [value, setValue] = useState('');
    const setInputValue = (e: { target: HTMLInputElement }) => setValue(e.target.value);
    const onFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <div className="formWrapper">
            <h2 className="title">React app to search github users</h2>
            <form className="search" onSubmit={onFormSubmit}>
                <input type="text" name="userText" onChange={setInputValue} value={value} autoFocus />
                <button disabled={!value} className="ripple">
                    {isLoading ? (
                        <div className="lds-ring">
                            <div></div>
                        </div>
                    ) : (
                        'search'
                    )}
                </button>
            </form>
            <style jsx>{Styles}</style>
        </div>
    );
};

export default SearchForm;
