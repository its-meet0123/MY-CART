import React from 'react';


class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo.png"
              alt="Avatar Logo"
              style={{ width: 40 }}
              className="rounded-pill"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
