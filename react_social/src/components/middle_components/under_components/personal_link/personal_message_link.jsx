import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

import PersonalMessage from './personal_message/personal_message';

const PersonalMessageLink = (props) => {

    let messages_text = props.state.messages.message.map(t => <PersonalMessage text={t.text}/>);

    return (
        <div className='PersonalMessageLink'>
            
            <p>{messages_text}</p>
                
        </div>
    );
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(PersonalMessageLink);
