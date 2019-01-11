import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    // const view = e.target.closest('.card').id;
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
     <div>Home</div>
    );
  }
}

export default Home;
