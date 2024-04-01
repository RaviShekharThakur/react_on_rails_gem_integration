import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './HelloWorld.module.css';

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  const handleSubmit = (e)=>{
    e.preventDefault()
    const encodedName = encodeURIComponent(name);
    window.location.href = `/hello_new?name=${encodedName}`;
    
  }
  return (
    <div >
      <h3>Hello, {name}!</h3>
      <hr />
      <form onSubmit= {handleSubmit}>
        <label className={style.bright} htmlFor="name">
          Say hello to:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
