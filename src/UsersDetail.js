import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './UsersDetail.css';

class UsersDetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            users: [],
            id: props.match.params.id,
            selected_user: {}
        };
    }

    componentDidMount()
    {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data});
        }).then(() => {
            for (var i = 0; i < this.state.users.length; i++)
            {
                if (this.state.users[i].id == this.state.id)
                {
                    this.setState({selected_user: this.state.users[i]});
                }
            }
        });
    }

    render()
    {
        if (this.state.selected_user.company !== undefined)
        {
            return (
                <div>
                <div className="top_bar">
                    <img src="/menu.png" id="top_bar_menu" />
                    <h1>Detalles</h1>
                    <img src="/more.png" id="top_bar_more" />
                </div>
                <div className="detail">
                <div className="info">
                <div>username: {this.state.selected_user.name}</div>
                <div>email: {this.state.selected_user.email}</div>
                <div>company: {this.state.selected_user.company.name}</div>
                <div>phone: {this.state.selected_user.phone}</div>
                </div>
                <div className="back"><NavLink to="/users"><img src="/back.png" />Volver</NavLink></div>
                </div>
                </div>
            );
        }
        else
        {
            return (
                <div></div>
            );
        }
    }
}

export default UsersDetail;
