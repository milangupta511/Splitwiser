import React, {Component} from 'react';

import UserBalance from './UserBalance';
import FriendsList from './FriendsList';

class Friends extends Component {
  render() {
    return (
      <section>
        <UserBalance />
        <FriendsList />
      </section>
    )
  }
}
export default Friends;