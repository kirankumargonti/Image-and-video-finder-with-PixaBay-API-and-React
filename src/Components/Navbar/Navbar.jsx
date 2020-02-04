import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <h4 class="navbar-brand">PixaBay Finder</h4>
          <button
            class="navbar-toggler d-lg-block"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
