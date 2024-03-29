import './Button.css';
import { useState } from 'react';

function Button(props) {
  let [user, setUser] = useState('User');


  return (
    <div className="Button">
      <props.icon className="ButtonIcon" />
      <button>{props.text}</button>
    </div>
  );
}

export default Button;
