
let RerenderTree = () => {
    
}

let store = {

    _state: {

        avatar: [
            {
                img: "./images/avatar.jpg",
                nickname: 'selecta',
                id: 1
            }
        ],
    
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
    
        messages: {
            message: [ 
                {
                    id: 1,
                    username: 'Cyber_Coban',
                    text: 'Text 1 ))'
                },
                
                {
                    id: 2,
                    username: 'Pa1n',
                    text: 'Text 2 ))'
                },
                
                {
                    id: 3,
                    username: 'Menthalist',
                    text: 'Text 3 ))'
                },
                
                {
                    id: 4,
                    username: 'Wik1',
                    text: 'Text 4 ))'
                }
            ]
        }
    },

    getState () {
        return this._state;
    },

    changeNicknameF (text) {

        // let newArrAvatar = store.state.avatar.splice(1, 0, text);
        // RerenderTree()
        // return newArrAvatar;

        let newNickname = {
        nickname:text
        }
        // store.state.avatar.nickname = null;
        store.state.avatar.push(newNickname);
        RerenderTree(store)
    },

    addPostF (message) {
        debugger
        let nickname = this.state.avatar[0].nickname

        let newPost = {
            img: "https://pravdatutnews.com/sites/default/files/news/2022/11/10/instagram.jpg",
            description: message,
            username: nickname
        }

        store.state.posts.post.push(newPost);
        RerenderTree(store)
    },

        // let newNickname = {
        // nickname:text
        // }
        // store.getState.avatar.nickname.remove();
        // store.getState.avatar.push(newNickname);

    // dispatch(action){
    //     if(action.type === ''){
            
    //     }
    // }
}

// window.store = store;

export const subscribe = (observer) => {
    RerenderTree = observer;
}
export default store;

