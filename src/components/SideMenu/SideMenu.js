import React from 'react';
import './SideMenu.scss';

import { NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';

import { GiTrophy, GiPodiumWinner } from 'react-icons/gi';
import { AiFillStar, AiFillFire } from 'react-icons/ai';
import { GrChapterNext } from 'react-icons/gr';

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
                    <NavLink exact id="home" className="menu-item" to="/" activeClassName="selected" >Best of the year</NavLink>
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
                    <span><GiPodiumWinner /></span>
                    <NavLink exact id="contact" className="menu-item" to="/all-time-popular" activeClassName="selected" >All time popular</NavLink>
                </li>
            </ul>

            <ul>
                <p>New Releases</p>
                <li>
                    <span><AiFillStar /></span>
                    <NavLink exact id="home" className="menu-item" to="/last-30-days" activeClassName="selected" >Last 30 days</NavLink>
                </li>
                <li>
                    <span><AiFillFire /></span>
                    <NavLink exact id="about" className="menu-item" to="/this-week" activeClassName="selected" >This week</NavLink>
                </li>
                <li>
                    <span><GrChapterNext /></span>
                    <NavLink exact id="contact" className="menu-item" to="/next-week" activeClassName="selected" >Next week</NavLink>
                </li>
            </ul>

        </Menu>
    )
}

export default SideMenu;