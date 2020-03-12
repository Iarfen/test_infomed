import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './Users.css';

class Users extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount()
    {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data });
        });
    }

    render()
    {
        return (<div>
            <div className="top_bar">
                <img src="/menu.png" id="top_bar_menu" />
                <h1>Usuarios</h1>
                <img src="/more.png" id="top_bar_more" />
            </div>
    <div className="users_box">
        <div>
        <div className="users_search">
            <img src="/search.png" />
            <input type="text" className="users_search_input" />
        </div>
        </div>
        <div className="users">
        {this.state.users.map((user) => (
            <div class="user">
                <NavLink to={"/users/" + user.id}>{user.name}</NavLink>
            </div>
          ))}
        </div>
    </div>
    </div>
    );
    }

}

export default Users;
