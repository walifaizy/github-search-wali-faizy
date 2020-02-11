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

export default ({ data, repos, isReposLoading }: Props) => (
    <div>
        {/* PROFILE STARTS */}
        <div className="itemctr">
            <div className="item">
                <div className="imageCtr">{data && data.avatar_url && <img src={data && data.avatar_url} />}</div>
                <div className="summaryCtr">
                    <div className="name">
                        <div>
                            {data && data.name}
                            &nbsp;
                            {data && data.bio && <span className="bio">({(data && data.bio) || '-'})</span>}
                        </div>
                        <a className="anchor" href={data && data.html_url} target="_blank">
                            View Profile
                        </a>
                    </div>
                    <span className="email">
                        <strong>email: </strong> {(data && data.email) || '-'}
                    </span>
                </div>
            </div>
        </div>
        {/* PROFILE ENDS */}

        {/* REPOSITOR STARTS */}
        <div className="repoTitle">Repository List</div>
        <div className="reposWrapper">
            {isReposLoading ? (
                <div className="card">Loading...</div>
            ) : repos && repos.length > 0 ? (
                repos.map((repo, index) => (
                    <div className="listItem" key={index}>
                        <div className="top">
                            <img src={github} className="repoImg" />
                            <div>
                                <a href={repo && repo.html_url} target="_blank">
                                    {repo.html_url}
                                </a>
                                <div className="repoName">
                                    <strong>Repo name</strong>: {repo.name || '-'}
                                </div>
                                <div className="repoName">
                                    <strong>Description</strong>: {repo.description || '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="card">No repository found</div>
            )}
        </div>
        {/* REPOSITOR ENDS */}
        <style jsx>{Styles}</style>
    </div>
);
