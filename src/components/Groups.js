import React, { Component } from 'react';

import UserBalance from './UserBalance';
import GroupList from './GroupList';

class Groups extends Component {
  render() {
    return (
      <section>
        <UserBalance />
        <GroupList />
      </section>
    )
  }
}
export default Groups;