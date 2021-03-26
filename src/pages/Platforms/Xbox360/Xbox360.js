import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Web from '../../../img/web.svg';
import Loader from '../../../components/Loader/Loader';

import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import { AiFillWindows, AiFillAndroid, AiFillApple, AiFillHeart } from 'react-icons/ai';
import { SiNintendoswitch, SiNintendo3Ds, SiWii, SiWiiu, SiPlaystationvita, SiSega } from 'react-icons/si';
import { MdPhoneAndroid } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi';

import Exceptional from '../../../img/exceptional.png';
import Recommended from '../../../img/recommended.png';
import Meh from '../../../img/meh.png';
import Skip from '../../../img/skip.png';

import { xbox360Action } from '../../../redux/actions/actions';
import { connect } from 'react-redux';


const PlatformXbox360 = ({ gamesXbox360, getData, isXbox360Loaded }) => {
    console.log(gamesXbox360, getData, isXbox360Loaded);


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
            } else if (platforms[i] === 'PlayStation' || platforms[i] === 'PlayStation 2' || platforms[i] === 'PlayStation 3' || platforms[i] === 'PlayStation 4' || platforms[i] === 'PlayStation 5') {
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
            } else if (platforms[i] === 'Nintendo DS' || platforms[i] === 'Nintendo 3DS' || platforms[i] === 'Game Boy Advance' || platforms[i] === 'Game Boy' || platforms[i] === 'Game Boy Color') {
                hashtable['nintendo3ds'] = ['Nintendo DS', 'Nintendo 3DS', 'Game Boy Advance', 'Game Boy', 'Game Boy Color'];
            } else if (platforms[i] === 'PS Vita') {
                hashtable['psvita'] = ['PS Vita'];
            } else if (platforms[i] === 'Web') {
                hashtable['web'] = ['Web'];
            } else if (platforms[i] === 'Dreamcast' || platforms[i] === 'Genesis' || platforms[i] === 'SEGA 32X') {
                hashtable['dreamcast'] = ['Dreamcast', 'Genesis', 'SEGA 32X'];
            } else if (platforms[i] === 'GameCube' || platforms[i] === 'SNES' || platforms[i] === 'Nintendo 64') {
                hashtable['gameCube'] = ['GameCube', 'SNES', 'Nintendo 64'];
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
                case "dreamcast":
                    return <SiSega key={'dreamcast'} />
                    break;
                case "gameCube":
                    return <GiGamepad key={'gameCube'} />
                    break;
                default:
                    return null;
            }
        });
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div id="content" className="main-page">

            {isXbox360Loaded === true ? <div className="container">

                <div className="gamesDetails">
                    <p>Games for Xbox 360</p>
                    <h1 className="gamesDetails">
                        Xbox 360 is a home video game console released by Microsoft in 2005.
                        There are three hardware variations to the system&#39;s body: original, slim and E versions.
                        They primarily differ with internal storage capacity and size as well as malware immunity — the first installments bore an overheat defect.
                        The central controller is Xbox 360 gamepad featuring either wired and wireless options with the latter being powered by AA batteries.
                        The controller is widely regarded as the best one in the seventh generations with the only primary competitor of it was PS3 DualShock 3 with awkward ergonomics.
                        During the existence period of a console, Kinect was released. It is the software which tracks the movements of the players allowing them to synchronize their movements with their avatar&#39;s.
                        The notable thing is Kinect was later used in surprising fields other than the games: medicine, sports and science.
                    </h1>
                </div>

                <div className="main-wrapper">

                    {gamesXbox360.map(data => {
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
                    })}

                </div>

            </div> : <Loader />}

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getData: games => dispatch(xbox360Action(games))
})

const mapStateToProps = state => ({
    gamesXbox360: state.gamesXbox360.gamesXbox360,
    isXbox360Loaded: state.gamesXbox360.isXbox360Loaded
})

export default connect(mapStateToProps, mapDispatchToProps)(PlatformXbox360);