import React from 'react';
import Icon from 'react-crud-icons';

import 'react-crud-icons/dist/css/react-crud-icons.css';

const IconBtn = (props) => (
  <Icon
    name={props.name}
    tooltip={props.tooltip}
    theme='light'
    size='medium'
    onClick={props.onClick}
  />
);

export default IconBtn;