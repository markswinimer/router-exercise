import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact
          to={`/dogs/${dog.name}`}
          className='nav-link'
          key={dog.name}>
          {dog.name}
        </NavLink>
      </li>
    ))
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbard-brand" to="#">
          Dog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to='/dogs' className="nav-link">Home</NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;
