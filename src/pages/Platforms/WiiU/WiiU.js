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

import { wiiuAction } from '../../../redux/actions/actions';
import { connect } from 'react-redux';


const PlatformWiiU = ({ gamesWiiU, getData, isWiiULoaded }) => {
    console.log(gamesWiiU, isWiiULoaded);


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

            {isWiiULoaded === true ? <div className="container">

                <div className="gamesDetails">
                    <p>Games for WiiU</p>
                    <h1 className="gamesDetails">
                        Nintendo Wii U is the sixth major home video game console made by Nintendo.
                        Released as a successor to the company’s Wii, it was fully backward compatible with Wii games and accessories with Wii Remote Plus being one of the primary controllers for the system.
                        It competed with Xbox One and PlayStation 4 but sold much fewer units then its competitors and overall was a commercial failure for the company.
                        The Wii U’s main was its GamePad – the central controller for the system. It featured a 6.2-inch touchscreen display, a motion sensing capability, microphone, and a front camera as well as traditional input methods.
                        The second screen could be used to display the game without the use of a TV or to provide alternative control methods and display some of the in-game information such as maps, inventory or an alternative viewpoint.
                        Despite its poor sales, the console was praised for its first-party titles and innovative concepts some of which were used in the next Nintendo console – Switch.
                        Some of the most popular and well-received games for Wii U include Mario Kart 8, Super Smash Bros., Splatoon, Super Mario Maker and Xenoblade Chronicles X among others.
                    </h1>
                </div>

                <div className="main-wrapper">

                    {gamesWiiU.map(data => {
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
    getData: games => dispatch(wiiuAction(games))
})

const mapStateToProps = state => ({
    gamesWiiU: state.gamesWiiU.gamesWiiU,
    isWiiULoaded: state.gamesWiiU.isWiiULoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(PlatformWiiU);