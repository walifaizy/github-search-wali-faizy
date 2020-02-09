import React from 'react';
import { TUserData } from '../../../_types';

type Props = {
  data: TUserData;
  isLoading: boolean;
};

const List = (props: Props) => {
  const { data } = props;

  const item = (
    <div>
      {data && data.avatar_url && <img src={data && data.avatar_url} />}
      <p>{data && data.name}</p>
      <a href={data && data.html_url} target="_blank">
        View Profile
      </a>
    </div>
  );

  return <div>{item}</div>;
};

export default List;
