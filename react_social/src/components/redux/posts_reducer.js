import React from 'react';

let initialState = {
    posts: {
        post: [ 
            {
                id: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-otJmRA3KKMWr9GBSm9zgY0o5d0omBauAg&usqp=CAU",
                description: 'Description 1 ^-^',
                username: 'Cyber_Coban'
            },

            {
                id: 2,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdOcGOgDUX9u0y9TZtpuRlIjF6AKyTtnBAA&usqp=CAU",
                description: 'Description 2 ^-^',
                username: 'Pa1n'
            },

            {
                id: 3,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B5ZduoI_x13ieaWWIKN-W7xx6-hrT2MMnw&usqp=CAU",
                description: 'Description 3 ^-^',
                username: 'Wik1'
            },

            {
                id: 4,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShp00acEf98mUs2xXIhPh97NMp5RKfxVHQ6dS4MY4CJqeNQf46T-1izO6e_Xjn3bGekPc&usqp=CAU",
                description: 'Description 4 ^-^',
                username: 'Menthalist'
            }
        ]
    },
    avatar: [
        {
            img: "./images/avatar.jpg",
            nickname: 'selecta',
            id: 1
        }
    ],

    addPostF (message) {

        let nickname = this.state.avatar[0].nickname;
        let length_post = this.state.posts.post.length;
        let nickname_id = length_post + 1;

        let newPost = {
            img: "https://pravdatutnews.com/sites/default/files/news/2022/11/10/instagram.jpg",
            description: message,
            username: nickname,
            id: nickname_id
        }

        initialState.posts.post.push(newPost);
    },
}

const PostsReducer = (state = initialState, action) => {
    return state;
}

export default PostsReducer;
