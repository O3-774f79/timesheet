import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <div>
        <div>
          Header
        </div>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
            <li>
              <Link to="/">logout</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
