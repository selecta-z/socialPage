import React from 'react';

import '../middle.css';

import UnderPosts from './under_components/under_posts';
import AddPost from './under_components/addPost';

const Posts = (props) => {

    let posts_img = props.state.posts.post.map(i => <UnderPosts img={i.img} username={i.username} description={i.description}/>);

    return (
        <div className='posts'>
            
            <AddPost addPostF={props.addPostF} state={props.state}/>

            <div className='posts_description'>
                {posts_img}
            </div>
            
        </div>
    );
}

export default Posts;
