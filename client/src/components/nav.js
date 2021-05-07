import React from "react";
import CreateUser from "./create-user.component";
import Items from "./items.component";
import Users from "./users.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => (
    <Router><div className="App"><header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a href className="navbar-brand">HMM</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/create-user"}>Create User</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/items"}>Item List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/users"}>User List</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div className="container">
  <div className="row">
    <div className="col-md-12">
      <Switch>
        <Route exact path='/' component={CreateUser} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/items" component={Items} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  </div>
</div>
</div>
</Router>
    
  
  
);

export default Nav;