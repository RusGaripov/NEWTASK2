import React, { Component } from 'react';
import {Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">
               <div className="container">
                <Link to="/" className="navbar-brand">
                    Посты
                </Link>

                <Link to="/users" className="navbar-brand">
                    Пользователи
                </Link>

                <Link to="/albums" className="navbar-brand">
                    Альбомы
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Добавить пост</Link>
                        </li>
                    </ul>           
                </div>

               </div>
            </nav>
        )
    }
}

export default Navbar
