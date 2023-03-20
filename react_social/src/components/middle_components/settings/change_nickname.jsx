import React, { Component } from 'react';

class ChangeNickname extends Component {
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

      let changeNicknameRef = React.createRef();

      let changeNickname = () => {
        let text = changeNicknameRef.current.value;
        this.props.changeNicknameF(text);
      }

      return (
        <div ref={this.toggleContainer}>
          <button className='change_nickname_btn' onClick={this.onClickHandler}>Change nickname</button>
          {this.state.isOpen && (
            <div className='change_nickname_input-and-accept'>
              <input 
                className='change_nickname_input' 
                type="text" 
                placeholder='Enter your new nickname' 
                ref={changeNicknameRef}
              />
              <button className='accept_change_nickname_btn' onClick={() => {changeNickname()}}>Accept</button>
            </div>
          )}
        </div>
      );
    }
  }

export default ChangeNickname;

