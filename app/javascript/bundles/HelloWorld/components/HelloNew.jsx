import React from 'react';
import { useParams } from 'react-router-dom';

const HelloNew = (props) => {
  console.log(props)
  const { name } = props;
  return (
    <div>
      <h1>Hello New Page!</h1>
       <p>Hello, {name}!</p>
    </div>
  );
};

export default HelloNew;