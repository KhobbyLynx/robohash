// import React from './react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '5px solid #000', height: '65vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;