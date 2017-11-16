import React from 'react';

const userInput = (props) => {
  let { change, style } = props;
  return (
    <div>
      <input placeholder="username" onChange={change} style={style} />
    </div>
  );
}

export default userInput;
