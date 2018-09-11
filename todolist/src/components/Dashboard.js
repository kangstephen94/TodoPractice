import React from 'react';
import List from './List';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        Dashboard
        <List />
      </div>
    )
  }
}

export default Dashboard;