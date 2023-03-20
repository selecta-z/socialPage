import React from 'react';
import Posts from './middle_components/posts';

// import { ReactSmartScroller } from 'react-smart-scroller';


const Slider = (props) => (
    <div className='slider-scroll'
        // style={{
        //     width: 500,
        //     height: 600
        // }}
    >
        <Posts state={props.state} addPostF={props.addPostF}/>
        
        {/* <ReactSmartScroller vertical>
            <Posts state={props.state}/>
        </ReactSmartScroller> */}
    </div>
)

export default Slider;