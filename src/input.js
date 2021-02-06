import react from 'react';

const Input = (props) => {
    return(
    <div>
          <input type="text"  onChange={props.change}></input>
    </div>
    );
}

export default Input;