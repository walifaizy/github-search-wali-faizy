import React from 'react';
import { TUserData, TRepo } from '../../../_types';
import Styles from './styles';

// image fetching
const github = '/static/images/github.svg';

type Props = {
    data: TUserData;
    repos: TRepo[];
    isReposLoading: boolean;
};

const List = (props: Props) => {
    const { data, repos, isReposLoading } = props;

    //PROFULE CARD
    const profile = (
        <div className="itemctr">
            <div className="item">
                <div className="imageCtr">{data && data.avatar_url && <img src={data && data.avatar_url} />}</div>
                <div className="summaryCtr">
                    <div className="name">
                        {data && data.name}
                        &nbsp;
                        {data && data.bio && <span className="bio">({(data && data.bio) || '-'})</span>}
                    </div>
                    <a className="anchor" href={data && data.html_url} target="_blank">
                        View Profile
                    </a>
                    <span className="email">
                        {' '}
                        <strong>email: </strong> {(data && data.email) || '-'}
                    </span>
                </div>
            </div>
            <style jsx>{Styles}</style>
        </div>
    );

    //REPO LIST
    const reposList =
        repos &&
        repos.map((repo, index) => {
            return (
                <div className="listItem" key={index}>
                    <div className="top">
                        <img src={github} className="repoImg" />{' '}
                        <div>
                            <a href={repo && repo.html_url} target="_blank">
                                {repo.html_url}
                            </a>
                            <span className="repoName">
                                <strong>Repo name</strong>: {repo.name}
                            </span>
                        </div>
                    </div>
                    <style jsx>{Styles}</style>
                </div>
            );
        });

    return (
        <div>
            {profile}
            {repos && repos.length > 0 ? (
                <>
                    <div className="repoTitle">Repository List</div>
                    <div className="reposWrapper">
                        {isReposLoading ? <div className="card">Loading...</div> : reposList}
                    </div>
                </>
            ) : (
                <div className="card">No repository found</div>
            )}
            <style jsx>{Styles}</style>
        </div>
    );
};

export default List;
