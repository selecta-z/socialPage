import React, { Component } from 'react';

class AddPost extends Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.toggleContainer = React.createRef();
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    
    }
  
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    onClickOutsideHandler(event) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
    
    render() {

      let addPostRef = React.createRef();

      let addPost = () => {

        let message = addPostRef.current.value;

        if (message !== ''){
          this.props.addPostF(message);
        }
        else{
          alert('Please, enter correct description.')
        }
      }

      return (
        <div ref={this.toggleContainer}>
          <button className='addPost_btn' onClick={this.onClickHandler}>Add post</button>
          {this.state.isOpen && (
            <div className='addPost_input-and-accept'>
              <input 
                className='addPost_input'
                type="text"
                placeholder='Enter description'
                ref={addPostRef}
              />
              <button className='accept_addPost_btn' onClick={() => {addPost()}}>Accept</button>
            </div>
          )}
        </div>
      );
    }
  }

export default AddPost;

