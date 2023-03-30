import React from 'react';

const UnderPosts = (props) => {
    debugger
    return (
        <div className='underPosts'>
            <div className="post_block">
                <img src={props.img} width={'250px'} height={'170px'} />
                <p>{props.description}</p>
                <p>{props.username}</p>
            </div>
        </div>
    );
}

export default UnderPosts;


