import React, { Component } from 'react';
import { SearchForm, List } from './index';
import Styles from './styles';
import Config from '../../config';
import { TUserData, TRepo } from '../../_types';

type State = {
  user: TUserData | null;
  isLoading: boolean;
  repos: TRepo[];
  isReposLoading: boolean;
};

class Searchcontainer extends Component<void, State> {
  state: State = {
    user: null,
    isLoading: false,
    repos: null,
    isReposLoading: false,
  };

  // FUNCTION FOR GETTING SEARCHED USERS
  getUsers = (search: string) => {
    const url = `${Config.baseURL}users/${search}`;
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ user: data, isLoading: false }, () => {
          this.getRepos(search); // CALLING REPOS API
        });
      })
      // .catch(error => {
      //   this.setState({ isLoading: false, error: error.message });
      // });
      .catch(error => {
        this.setState({ isLoading: false });
      });
  };

  // FUNCTION FOR GETTING USERS REPO
  getRepos = (search: string) => {
    const url = `${Config.baseURL}users/${search}/repos`;
    this.setState({ isReposLoading: true });
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => this.setState({ repos: data ? data : '', isReposLoading: false }))
      .catch(error => {
        this.setState({ isReposLoading: false });
      });
  };

  // handle submit function for keyPress
  onKeyPress = e => {
    if (e.key !== 'Enter') {
      return;
    }

    this.getUsers(e);
  };

  render() {
    const { user, isLoading, isReposLoading, repos } = this.state;
    return (
      <div className="wrapper">
        <div className="searchWrapper">
          <SearchForm onSubmit={this.getUsers} />
        </div>
        <div className="listWrapper">
          {user && typeof user != 'undefined' && (
            <List data={user} isLoading={isLoading} repos={repos} isReposLoading={isReposLoading} />
          )}
        </div>
        <style jsx>{Styles}</style>
      </div>
    );
  }
}

export default Searchcontainer;
