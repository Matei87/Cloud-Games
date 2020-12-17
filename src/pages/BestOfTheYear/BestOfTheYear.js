import React, { useContext } from 'react';
import './BestOfTheYear.scss';

import { Link } from 'react-router-dom';

import GamesContext from '../../context/GamesContext';
import Loader from '../../components/Loader/Loader';

import { AiFillWindows, AiFillAndroid, AiFillApple, AiFillHeart } from 'react-icons/ai';
import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import { SiNintendo, SiNintendoswitch, SiNintendo3Ds, SiPlaystation4 } from 'react-icons/si';
import { MdPhoneAndroid } from 'react-icons/md';


import Exceptional from '../../img/exceptional.png';
import Recommended from '../../img/recommended.png';
import Meh from '../../img/meh.png';
import Skip from '../../img/skip.png';


const BestOfTheYear = () => {
    const { BestOfTheYear, isLoaded } = useContext(GamesContext);
    console.log(BestOfTheYear, isLoaded);

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

    const linkName = (name) => {
        return name.replace(':', '').toLowerCase().split(' ').join('-');
    }


    return (
        <div id="content">
            <div className="container">
                <div className="main-wrapper">

                    {isLoaded === true ? BestOfTheYear.map(data => {
                        return <div className="wrapper" key={data.id}>
                            <div className="header">
                                <img src={data.background_image} alt="background" />
                            </div>
                            <div className="body">
                                <span className="platforms">{data.platforms ? data.platforms.map(platform => {
                                    let platforms = [];
                                    for (let i in platform) {
                                        platforms.push(platform[i]['name']);
                                    }

                                    switch (platforms[0]) {
                                        case "PC":
                                            return <AiFillWindows key={'PC'} />;
                                            break;
                                        case "Xbox One":
                                            return <FaXbox key={'Xbox_One'} />;
                                            break;
                                        case "Linux":
                                            return <FaLinux key={'Linux'} />;
                                            break;
                                        case "iOS":
                                            return <MdPhoneAndroid key={'iOS'} />;
                                            break;
                                        case "PlayStation 4" || "PlayStation 5":
                                            return <FaPlaystation key={'PlayStation'} />;
                                            break;
                                        case "Nintendo Switch":
                                            return <SiNintendoswitch key={'Nintendo_Switch'} />;
                                            break;
                                        case "Android":
                                            return <AiFillAndroid key={'Android'} />;
                                            break;
                                        case "macOS":
                                            return <AiFillApple key={'macOS'} />;
                                            break;
                                        default:
                                            return null;
                                    }
                                }) : null}</span>
                                <>{data.metacritic ?
                                    <span className={data.metacritic <= 70 ? `metacritic yellow` :
                                        data.metacritic >= 71 || data.metacritic <= 100 ? `metacritic green` : null}>{data.metacritic}</span>
                                    : null}</>
                            </div>
                            <div className="footer">
                                <span className="card-text">{name(data.name)}</span>
                                {data.ratings ? <>{setRating(data.ratings[0]['title'])}</> : null}
                            </div>

                            <div className="overlay">
                                <div className="overlay-content">
                                    <Link
                                        className="overlay-content-details"
                                        to={{
                                            pathname: `details/${linkName(data.name)}`,
                                            state: { id: data.id }
                                        }}
                                    >See More</Link>
                                    <span className="overlay-content-favorite">< AiFillHeart /></span>
                                </div>
                            </div>
                        </div>
                    }) : <Loader />}

                </div>

            </div>

        </div>
    )
}

export default BestOfTheYear;