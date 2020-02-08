import React, { Component } from 'react';
import { SearchForm, List } from './index';
import Styles from './styles';
import Config from '../../config';

type State = {
  userList: object[];
  userText: string;
  isLoading: boolean;
};

class Searchcontainer extends Component<State> {
  state = {
    userList: null,
    isLoading: false,
  };

  // FUNCTION FOR GETTING SEARCHED USERS
  getUsers = (search: string) => {
    const url = `${Config.baseURL}search/users?q=${search}`;
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ userList: data && data.items, isLoading: false }));
  };

  // ONCHANGE FUNCTION FOR INPUT
  onFormChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { userList } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.getUsers} />
        <List data={userList} />
        <style jsx>{Styles}</style>
      </div>
    );
  }
}

export default Searchcontainer;
