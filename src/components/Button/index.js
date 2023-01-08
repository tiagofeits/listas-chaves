import React from 'react';

function Button(props) {
  return (
    <button className='btn btn-primary' type={props.type}>
      {props.children}
    </button>
  )
}

export default Button;