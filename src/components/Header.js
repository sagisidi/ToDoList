import React, { Component } from 'react';
import logo from '../styles/images/logo.jpg';
import '../styles/Header.css';

class Header extends Component {

    render () {

        return (

            <header className="header">
                <nav>
                    <img src={logo} className="logo" alt="logo"></img>
                    <ul className="links">
                        <li>
                            <a href="https://www.one.co.il">התחבר</a>
                        </li>
                        <li>
                            <a href="https://www.one.co.il">צור קשר</a>
                        </li>
                        <li>
                            <a href="https://www.one.co.il">סתם קישור</a>
                        </li>                   
                    </ul>
                </nav>
 


            </header>
        )


    }

}

export default Header;