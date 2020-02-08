import React from 'react';

type Props = {
  data: object[];
};

const List = (props: Props) => {
  const { data } = props;

  const item = <div>IIIIItem</div>;

  return (
    <div>
      "list"
      {item}
    </div>
  );
};

export default List;
