import React from 'react';
import './Friends.scss';

class Friends extends React.Component {
  changeView = (e) => {
    this.props.history.push('/friends/new');
  }

  render() {
    return (
      <div>
        <h2>Friends Component</h2>
        <button className="add-friend" onClick={this.changeView}>Add Friend</button>
      </div>
    );
  }
}

export default Friends;
