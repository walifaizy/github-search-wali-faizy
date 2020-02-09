import React, { Component } from 'react';
import { SearchForm, List } from './index';
import Styles from './styles';
import Config from '../../config';
import { TUserData } from '../../_types';

type State = {
  user: TUserData | null;
  isLoading: boolean;
};

class Searchcontainer extends Component<State> {
  state: State = {
    user: null,
    isLoading: false,
  };

  // FUNCTION FOR GETTING SEARCHED USERS
  getUsers = (search: string) => {
    const url = `${Config.baseURL}users/${search}`;
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ user: data, isLoading: false }));
  };

  // ONCHANGE FUNCTION FOR INPUT
  onFormChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.getUsers} />
        {user && typeof user != 'undefined' && <List data={user} isLoading={isLoading} />}
        <style jsx>{Styles}</style>
      </div>
    );
  }
}

export default Searchcontainer;
