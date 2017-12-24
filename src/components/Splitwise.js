import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Friends from './Friends';
import Groups from './Groups';
import Activity from './Activity';
import AddNewExpense from './AddNewExpense';

class Splitwise extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Splitwise app</h1>
        </header>
        <Switch>
          <Route path='/new/expense' component={AddNewExpense}></Route>
          <Route path='*' component={Home}></Route>
        </Switch>
        
      </div>
    )
  }
}
export default Splitwise