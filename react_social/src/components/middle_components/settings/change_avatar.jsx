import React, { Component } from 'react';
import ImportAvatar from './import_data/import_avatar';

class ChangeAvatar extends Component {
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
      return (
        <div ref={this.toggleContainer}>
          <button className='change_avatar_btn' onClick={this.onClickHandler}>Change avatar</button>
          {this.state.isOpen && (
            <ImportAvatar/>
          )}
        </div>
      );
    }
  }

export default ChangeAvatar;
