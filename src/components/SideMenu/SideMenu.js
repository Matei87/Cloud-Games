import React from 'react';
import './SideMenu.scss';

import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';

import { GiTrophy, GiPodiumWinner } from 'react-icons/gi';

const SideMenu = () => {

    // const showSettings = (event) => {
    //     event.preventDefault();
    // }


    return (
        <div id="sidebar">
            <Menu >
                <ul>
                    <p>Top</p>
                    <li>
                        <GiTrophy />  <Link id="home" className="menu-item" to="/">Best of the year</Link>
                    </li>
                    <li>
                        <GiPodiumWinner /> <Link id="about" className="menu-item" to="/about">Popular in 2020</Link>
                    </li>
                    <li>
                        <GiPodiumWinner /> <Link id="contact" className="menu-item" to="/contact">Popular in 2019</Link>
                    </li>
                    <li>
                        <Link className="menu-item--small" to="">Settings</Link>
                    </li>
                </ul>

            </Menu>
        </div>
    )
}

export default SideMenu;