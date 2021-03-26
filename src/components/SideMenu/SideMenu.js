import React from 'react';
import './SideMenu.scss';

import { NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';

import { FaXbox, FaPlaystation } from 'react-icons/fa';
import { GiTrophy, GiPodiumWinner, GiGamepad } from 'react-icons/gi';
import { AiFillStar, AiFillFire, AiFillAndroid, AiFillWindows } from 'react-icons/ai';
import { GrChapterNext } from 'react-icons/gr';
import { FaDownload, FaGhost, FaCrown } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { MdPhoneAndroid } from 'react-icons/md';


const SideMenu = (props) => {

    // const showSettings = (event) => {
    //     event.preventDefault();
    // }


    return (
        <Menu {...props}>

            <ul>
                <p>Top</p>
                <li>
                    <span><GiTrophy /></span>
                    <NavLink exact id="home" className="menu-item" to="/" activeClassName="selected">Best of the year</NavLink>
                </li>
                <li>
                    <span><GiPodiumWinner /></span>
                    <NavLink exact id="about" className="menu-item" to="/popular-in-2020" activeClassName="selected">Popular in 2020</NavLink>
                </li>
                <li>
                    <span><GiPodiumWinner /></span>
                    <NavLink exact id="about" className="menu-item" to="/popular-in-2019" activeClassName="selected">Popular in 2019</NavLink>
                </li>
                <li>
                    <span><FaCrown /></span>
                    <NavLink exact id="contact" className="menu-item" to="/all-time-popular" activeClassName="selected">All time popular</NavLink>
                </li>
            </ul>

            <ul>
                <p>New Releases</p>
                <li>
                    <span><AiFillStar /></span>
                    <NavLink exact id="home" className="menu-item" to="/last-30-days" activeClassName="selected">Last 30 days</NavLink>
                </li>
                <li>
                    <span><AiFillFire /></span>
                    <NavLink exact id="about" className="menu-item" to="/this-week" activeClassName="selected">This week</NavLink>
                </li>
                <li>
                    <span><GrChapterNext /></span>
                    <NavLink exact id="contact" className="menu-item" to="/next-week" activeClassName="selected">Next week</NavLink>
                </li>
            </ul>

            <ul>
                <p>Browse</p>
                <li>
                    <span><GiGamepad /></span>
                    <NavLink exact id="home" className="menu-item" to="/platforms" activeClassName="selected">Platforms</NavLink>
                </li>
                <li>
                    <span><FaDownload /></span>
                    <NavLink exact id="about" className="menu-item" to="/stores" activeClassName="selected">Stores</NavLink>
                </li>
                <li>
                    <span><FaGhost /></span>
                    <NavLink exact id="contact" className="menu-item" to="/genres" activeClassName="selected">Genres</NavLink>
                </li>
            </ul>

            <ul>
                <p>Platforms</p>
                <li>
                    <span><AiFillWindows /></span>
                    <NavLink exact id="home" className="menu-item" to="/games/pc" activeClassName="selected">PC</NavLink>
                </li>
                <li>
                    <span><FaPlaystation /></span>
                    <NavLink exact id="about" className="menu-item" to="/games/playstation-4" activeClassName="selected">Playstation 4</NavLink>
                </li>
                <li>
                    <span><FaXbox /></span>
                    <NavLink exact id="contact" className="menu-item" to="/games/xbox-one" activeClassName="selected">Xbox One</NavLink>
                </li>
                <li>
                    <span><SiNintendoswitch /></span>
                    <NavLink exact id="contact" className="menu-item" to="/games/nintendo-switch" activeClassName="selected">Nintendo Switch</NavLink>
                </li>
                <li>
                    <span><MdPhoneAndroid /></span>
                    <NavLink exact id="contact" className="menu-item" to="/games/ios" activeClassName="selected">iOS</NavLink>
                </li>
                <li>
                    <span><AiFillAndroid /></span>
                    <NavLink exact id="contact" className="menu-item" to="/games/android" activeClassName="selected">Android</NavLink>
                </li>
            </ul>

        </Menu>
    )
}

export default SideMenu;