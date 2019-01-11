import React from 'react';
import './NewFriend.scss';

class NewFriend extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends Component</h2>
        <button className="add-friend">Add Friend</button>
      </div>
    );
  }
}

export default NewFriend;
