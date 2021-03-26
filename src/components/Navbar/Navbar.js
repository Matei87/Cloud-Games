import React, { useState } from 'react';
import './Navbar.scss';

import GamesContext from '../../context/GamesContext';
import { Link, useHistory, withRouter } from 'react-router-dom';
import Logo from '../../img/logo.png'

import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { ImHome } from "react-icons/im";

import { searchAction } from '../../redux/actions/actions';
import { connect } from 'react-redux';


const Navbar = ({ getData }) => {
    // const { handleSearch } = useContext(GamesContext);
    const [data, setData] = useState('');

    let history = useHistory();


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target['name'].value);
        getData(e.target['name'].value);
        history.push("/search");
        setData('');
    }

    const handleChange = (e) => {
        setData(e.target.value);
    }


    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <form className="form-group" onSubmit={onSubmit}>
                        <button className="btn" type="submit">
                            <AiOutlineSearch />
                        </button>
                        <input
                            className="form-control"
                            type="search" name="name"
                            placeholder="Search..."
                            value={data}
                            onChange={handleChange}
                            aria-label="Search"
                        />

                    </form>

                </div>

                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            <ImHome />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/login">
                            <BiUserCircle />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapDispatchToProps = dispatch => ({
    getData: games => dispatch(searchAction(games))
})


export default connect(null, mapDispatchToProps)(withRouter(Navbar));