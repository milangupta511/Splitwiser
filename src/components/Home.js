import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Friends from './Friends';
import Groups from './Groups';
import Activity from './Activity';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/'>FRIENDS</Link></li>
            <li><Link to='/groups'>GROUPS</Link></li>
            <li><Link to='/activity'>ACTIVITY</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Friends} />
            <Route path='/groups' component={Groups} />
            <Route path='/activity' component={Activity} />
          </Switch>
          <Link to='/new/expense'>Add new Expense</Link>
        </main>
      </div>
    )
  }
}
export default Home;