import React from 'react';
import { TUserData, TRepo } from '../../../_types';
import Styles from './styles';
import { PlaceHolder } from '..';

type Props = {
    data: TUserData;
    isLoading: boolean;
    repos: TRepo[];
    isReposLoading: boolean;
};

const List = (props: Props) => {
    const { data, repos, isReposLoading, isLoading } = props;
    console.log(repos, 'repos');

    // PROFILE DATA
    // const profile = (
    //   <div>
    //     {data && data.avatar_url && <img src={data && data.avatar_url} />}
    //     <p>{data && data.name}</p>
    //     <a href={data && data.html_url} target="_blank">
    //       View Profile
    //     </a>
    //   </div>
    // );

    const profile = (
        <div className="itemctr">
            <div className="item">
                <div className="imageCtr">{data && data.avatar_url && <img src={data && data.avatar_url} />}</div>
                <div className="summaryCtr">
                    <div className="name">
                        {data && data.name}
                        &nbsp;
                        <span className="bio">({data && data.bio})</span>
                    </div>
                    <a className="anchor" href={data && data.html_url} target="_blank">
                        View Profile
                    </a>
                </div>
            </div>
            <style jsx>{Styles}</style>
        </div>
    );

    //REPO LIST
    const reposList =
        repos &&
        repos.map((repo, index) => {
            return <div key={index}>{repo && repo.name}</div>;
        });

    const placeHolder = (
        <div>
            <PlaceHolder width="100" height="150px" />
        </div>
    );

    return (
        <div>
            {isLoading ? <PlaceHolder width="100" height="150px" /> : profile}
            {reposList}
            <style jsx>{Styles}</style>
        </div>
    );
};

export default List;
