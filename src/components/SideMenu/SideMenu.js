import React from 'react';
import './SideMenu.scss';

import { NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';

import { GiTrophy, GiPodiumWinner } from 'react-icons/gi';

const SideMenu = (props) => {

    // const showSettings = (event) => {
    //     event.preventDefault();
    // }


    return (
        <Menu {...props}>
            <ul>
                <p>Top</p>
                <li>
                    <GiTrophy />  <NavLink exact id="home" className="menu-item" to="/" activeClassName="selected" >Best of the year</NavLink>
                </li>
                <li>
                    <GiPodiumWinner /> <NavLink exact id="about" className="menu-item" to="/popular-in-2019" activeClassName="selected" >Popular in 2019</NavLink>
                </li>
                <li>
                    <GiPodiumWinner /> <NavLink exact id="contact" className="menu-item" to="/all-time-popular" activeClassName="selected" >All time popular</NavLink>
                </li>
            </ul>

        </Menu>
    )
}

export default SideMenu;