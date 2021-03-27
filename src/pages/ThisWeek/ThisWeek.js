import React, { useEffect, useState } from 'react';

import Web from '../../img/web.svg';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import { AiFillWindows, AiFillAndroid, AiFillApple, AiFillHeart } from 'react-icons/ai';
import { SiNintendoswitch, SiNintendo3Ds, SiWii, SiWiiu, SiPlaystationvita } from 'react-icons/si';
import { MdPhoneAndroid } from 'react-icons/md';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Exceptional from '../../img/exceptional.png';
import Recommended from '../../img/recommended.png';
import Meh from '../../img/meh.png';
import Skip from '../../img/skip.png';

import { thisWeekAction, changeThisWeekAction } from '../../redux/actions/actions';
import { connect } from 'react-redux';


const setRating = (title) => {
    switch (title) {
        case "exceptional":
            return <span className="rating"> <img src={Exceptional} alt="exceptional" /></span>;
            break;
        case "recommended":
            return <span className="rating"> <img src={Recommended} alt="recommended" /></span>;
            break;
        case "meh":
            return <span className="rating"> <img src={Meh} alt="meh" /></span>;
            break;
        case "skip":
            return <span className="rating"> <img src={Skip} alt="skip" /></span>;
            break;
        default:
            return null;
    }
}

const name = (name) => {
    let pieces = name.toLowerCase().split(' ');
    let newWords = pieces.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return newWords.join(' ');
}

const getPlatforms = (platform) => {
    let platforms = [];
    for (let i in platform) {
        platforms.push(platform[i].platform['name']);
        //console.log(platform[i].platform['name']);
    }
    //console.log(platforms);
    //pc, playstation, xbox, android, mac, nintendo
    let hashtable = {};
    for (let i = 0; i < platforms.length; i++) {
        if (platforms[i] === 'PC') {
            hashtable['pc'] = ["PC"];
        } else if (platforms[i] === 'Xbox Series S/X' || platforms[i] === 'Xbox One' || platforms[i] === 'Xbox 360') {
            hashtable['xbox'] = ["xbox", 'Xbox Series S/X', 'Xbox 360'];
        } else if (platforms[i] === 'PlayStation 3' || platforms[i] === 'PlayStation 4' || platforms[i] === 'PlayStation 5') {
            hashtable['playstation'] = ['PlayStation 3', 'PlayStation 4', 'PlayStation 5'];
        } else if (platforms[i] === 'Nintendo Switch') {
            hashtable['nintendo_switch'] = ['Nintendo Switch'];
        } else if (platforms[i] === 'Wii') {
            hashtable['wii'] = ['Wii'];
        } else if (platforms[i] === 'Wii U') {
            hashtable['wiiu'] = ['Wii U'];
        } else if (platforms[i] === 'Android') {
            hashtable['android'] = ['Android'];
        } else if (platforms[i] === 'macOS' || platforms[i] === 'Classic Macintosh') {
            hashtable['macos'] = ['macOS', 'Classic Macintosh'];
        } else if (platforms[i] === 'Linux') {
            hashtable['linux'] = ['Linux'];
        } else if (platforms[i] === 'iOS') {
            hashtable['ios'] = ['iOS'];
        } else if (platforms[i] === 'Nintendo DS') {
            hashtable['nintendods'] = ['Nintendo DS'];
        } else if (platforms[i] === 'Nintendo 3DS') {
            hashtable['nintendo3ds'] = ['Nintendo 3DS'];
        } else if (platforms[i] === 'PS Vita') {
            hashtable['psvita'] = ['PS Vita'];
        } else if (platforms[i] === 'Web') {
            hashtable['web'] = ['Web'];
        }
    }
    //console.log(Object.keys(hashtable));

    return Object.keys(hashtable).map(platform => {
        //console.log(platform);

        switch (platform) {
            case "pc":
                return <AiFillWindows key={'PC'} />;
                break;
            case "xbox":
                return <FaXbox key={'Xbox_One'} />;
                break;
            case "linux":
                return <FaLinux key={'Linux'} />;
                break;
            case "ios":
                return <MdPhoneAndroid key={'iOS'} />;
                break;
            case 'playstation':
                return <FaPlaystation key={'PlayStation'} />;
                break;
            case "nintendo_switch":
                return <SiNintendoswitch key={'Nintendo_Switch'} />;
                break;
            case "wii":
                return <SiWii key={'Wii'} className="wii" />;
                break;
            case "android":
                return <AiFillAndroid key={'Android'} />;
                break;
            case "macos":
                return <AiFillApple key={'macOS'} />;
                break;
            case "wiiu":
                return <SiWiiu key={'wiiu'} className="wiiu" />;
                break;
            case "nintendo3ds":
                return <SiNintendo3Ds key={'nintendo3ds'} />;
                break;
            case "psvita":
                return <SiPlaystationvita key={'psvita'} className="psvita" />;
                break;
            case "web":
                return <img src={Web} alt="web" key={'web'} className="web" />
                break;
            default:
                return null;
        }
    });
}


const ThisWeek = ({ gamesThisWeek, getData, isThisWeekLoaded, totalPages, changeThisWeek, getDatas, startPage, page }) => {
    console.log(gamesThisWeek, getData, isThisWeekLoaded);

    useEffect(() => {
        getData();
    }, [getData])

    let roundedPages;
    if (totalPages > 500) {
        roundedPages = 500;
    } else {
        roundedPages = totalPages;
    }

    const pageLinks = [];
    for (let i = (startPage || page); (i <= (startPage || page) + 4) && (i <= roundedPages); i++) {
        pageLinks.push(
            <li className={(startPage || page) === i ? 'page-item active' : 'page-item'} key={i} onClick={() => getDatas(i)} >
                <a className="page-link" href="#">{i}</a>
            </li>)
    }


    return (
        <div id="content" className="main-page">
            <div className="container">

                <div id="pagination">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            {(startPage || page) > 1 ? <li className='page-item' onClick={() => getDatas(roundedPages - (roundedPages - 1))} >
                                <a className="page-link" href="#">
                                    <BiChevronsLeft />
                                </a>
                            </li> : ''}
                            {(startPage || page) > 1 ? <li className='page-item' onClick={() => getDatas((startPage || page) - 1)} >
                                <a className="page-link" href="#">
                                    <FiChevronLeft />
                                </a>
                            </li> : ''}
                            {pageLinks}
                            {roundedPages > (startPage || page) ? <li className='page-item' onClick={() => getDatas((startPage || page) + 1)} >
                                <a className="page-link" href="#">
                                    <FiChevronRight />
                                </a>
                            </li> : ''}
                            {roundedPages > (startPage || page) ? <li className='page-item' onClick={() => getDatas(roundedPages)} >
                                <a className="page-link" href="#">
                                    <BiChevronsRight />
                                </a>
                            </li> : ''}
                        </ul>
                    </nav>
                </div>

                <div className="main-wrapper">

                    {isThisWeekLoaded === true && !changeThisWeek.length ? gamesThisWeek.map(data => {
                        return <div className="wrapper" key={data.id}>
                            <div className="header">
                                <img src={data.background_image} alt="background" />
                            </div>
                            <div className="body">
                                <span className="platforms">{data.platforms ? getPlatforms(data.platforms) : null}</span>
                                <>{data.metacritic ?
                                    <span className={data.metacritic <= 70 ? `metacritic yellow` :
                                        data.metacritic >= 71 || data.metacritic <= 100 ? `metacritic green` : null}>{data.metacritic}</span>
                                    : null}</>
                            </div>
                            <div className="footer">
                                <span className="card-text">{name(data.name)}</span>
                                {data.ratings.length > 0 ? <>{setRating(data.ratings[0]['title'])}</> : null}
                            </div>

                            <div className="overlay">
                                <div className="overlay-content">
                                    <Link
                                        className="overlay-content-details"
                                        to={{
                                            pathname: `/details/${data.id}`,
                                            state: { id: data.id }
                                        }}
                                    >See More</Link>
                                    <span className="overlay-content-favorite">< AiFillHeart /></span>
                                </div>
                            </div>
                        </div>
                    }) : changeThisWeek.length ? changeThisWeek.map(data => {
                        return <div className="wrapper" key={data.id}>
                            <div className="header">
                                <img src={data.background_image} alt="background" />
                            </div>
                            <div className="body">
                                <span className="platforms">{data.platforms ? getPlatforms(data.platforms) : null}</span>
                                <>{data.metacritic ?
                                    <span className={data.metacritic <= 70 ? `metacritic yellow` :
                                        data.metacritic >= 71 || data.metacritic <= 100 ? `metacritic green` : null}>{data.metacritic}</span>
                                    : null}</>
                            </div>
                            <div className="footer">
                                <span className="card-text">{data.name}</span>
                                {data.ratings.length > 0 ? <>{setRating(data.ratings[0]['title'])}</> : null}
                            </div>

                            <div className="overlay">
                                <div className="overlay-content">
                                    <Link
                                        className="overlay-content-details"
                                        to={{
                                            pathname: `/details/${data.id}`,
                                            state: { id: data.id }
                                        }}
                                    >See More</Link>
                                    <span className="overlay-content-favorite">< AiFillHeart /></span>
                                </div>
                            </div>
                        </div>
                    }) : < Loader />}

                </div>

            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getData: games => dispatch(thisWeekAction(games)),
    getDatas: games => dispatch(changeThisWeekAction(games))
})

const mapStateToProps = state => ({
    gamesThisWeek: state.thisWeek.thisWeek,
    isThisWeekLoaded: state.thisWeek.isThisWeekLoaded,
    totalPages: state.thisWeek.totalPages.totalPages,
    changeThisWeek: state.changeThisWeek.changeThisWeek,
    page: state.changeThisWeek.page,
    startPage: state.changeThisWeek.page.page
})

export default connect(mapStateToProps, mapDispatchToProps)(ThisWeek);