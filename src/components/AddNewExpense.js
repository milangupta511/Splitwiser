import React, { Component } from 'react';

class AddNewExpense extends Component {

  render() {
    return (
      <form>
        <label>With you and: <input type="search" /></label>
        <p>
          <img src="" />
          <label><input type="text" placeholder="Enter a Description"/></label>
          <span>$</span><input type="text" />
          <label>Paid by
            <select>
              <option>YOU</option>
              <option>Ashish</option>
            </select>
          </label>
          <label> and split
            <select>
              <option>EQUALLY</option>
              <option>UNEQUALLY</option>
            </select>
          </label>
        </p>
      </form>
    )
  }
}
export default AddNewExpense;