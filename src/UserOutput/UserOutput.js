import React from 'react';

const userOutput = (props) => {
  let { username, style } = props;
  return (
    <div>
      <p style={style}>{username}</p>
    </div>
  );
};

export default userOutput;
