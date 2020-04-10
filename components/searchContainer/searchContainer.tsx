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
    error: string;
};

class Searchcontainer extends Component<void, State> {
    state: State = {
        user: null,
        isLoading: false,
        error: '',
        repos: null,
        isReposLoading: false,
    };

    // FUNCTION FOR GETTING SEARCHED USERS
    getUsers = (search: string) => {
        const url = `${Config.baseURL}users/${search}`;
        this.setState({ isLoading: true, repos: null, user: null });
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                this.setState({ user: data, isLoading: false, error: '' }, () => {
                    this.getRepos(search); // CALLING REPOS API
                });
            })
            .catch(error => {
                this.setState({ isLoading: false, error: error.message });
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
                this.setState({ isReposLoading: false, error: error.message });
            });
    };

    render() {
        const { user, isLoading, isReposLoading, repos, error } = this.state; console.log("TEST")

        return (
            <div className="wrapper">
                {/* SEARCH STARTS */}
                <div className="searchWrapper">
                    <SearchForm onSubmit={this.getUsers} isLoading={isLoading} />
                </div>
                {/* SEARCH ENDS */}

                {/* LIST STARTS */}
                <div className="listWrapper">
                    {user ? <List data={user} repos={repos} isReposLoading={isReposLoading} /> : null}
                    {error && !user ? <div className="error">{error}</div> : ''}
                </div>
                {/* LIST ENDS */}
                <style jsx>{Styles}</style>
            </div>
        );
    }
}

export default Searchcontainer;
