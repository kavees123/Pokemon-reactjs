import react from 'react';

const Image = (props) => {
    return (
        <div>
               
      <img src={props.source} alt="test" width="400" height="400"></img>
        </div>
    );
}

export default Image;