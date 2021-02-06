import react from 'react';

const Button = (props) => {
    return (
        <div>
           
            <div>
             <button onClick={props.click}>{props.label}</button>
             </div>
        </div>
    )
}
export default Button;