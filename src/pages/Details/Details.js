import React, { Fragment, useEffect, useState } from 'react';
import './Details.scss';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


import Exceptional from '../../img/exceptional.png';
import Recommended from '../../img/recommended.png';
import Meh from '../../img/meh.png';
import Skip from '../../img/skip.png';

import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import { SiNintendoswitch, SiGogDotCom, SiSteam, SiEpicgames } from 'react-icons/si';
import { GrGooglePlay, GrAppleAppStore } from 'react-icons/gr';
import { AiFillStar, AiFillWindows, AiFillAndroid, AiFillApple, AiFillHeart } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';


const Details = (props) => {
    const [data, setData] = useState({
        isLoaded: false,
        details: [],
        pictures: [],
        similar: [],

    });
    const { details: { background_image, name, rating, genres, released,
        tags, developers, publishers, esrb_rating, clip, stores, platforms, description }, pictures, similar } = data;
    console.log(data.details);
    //console.log(pictures);
    const { id } = props.match.params;

    //console.log(props);

    useEffect(() => {
        const getDetails = async () => {
            try {
                let api = `https://api.rawg.io/api/games/${id}`;
                let apiScreens = `https://api.rawg.io/api/games/${id}/screenshots`;
                let similarGames = `https://api.rawg.io/api/games/${id}/suggested`;
                let urls = [api, apiScreens, similarGames];
                let request = await Promise.all(urls.map(url => fetch(url)));
                let data = await Promise.all(request.map(req => req.json()));
                //console.log(data);
                setData({ details: data[0], pictures: data[1].results, similar: data[2].results, isLoaded: true });
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [id]);


    const getReleased = (date) => {
        let split = date.replace('-', '').replace('-', '');
        return (split.slice(6, 8) + '/' + split.slice(4, 6) + '/' + split.slice(0, 4));
    }

    const getTags = (tag) => {
        let tags = [];
        for (let i in tag) {
            tags.push(tag[i]['name']);
        }
        return <Fragment key={'tags'}>
            <span className="badge">
                {tags.slice(0, 1)}
            </span>
            <span className="badge">
                {tags.slice(1, 2)}
            </span>
            <span className="badge">
                {tags.slice(2, 3)}
            </span>
        </Fragment>;
    }

    const getPublisher = (publisher) => {
        let publishers = [];
        for (let i in publisher) {
            publishers.push(publisher[i]['name']);
        }
        return publishers.join(' | ');
    }

    const getStores = (store) => {
        let storeName = [];
        let links = [];
        for (let i in store) {
            //console.log(store[i], store[i].url, store[i].store.name);
            storeName.push([store[i].store.name, store[i].url]);
            links.push(store[i].url);
            //console.log(store[i]);
        }
        //console.log(storeName);

        return storeName.map(store => {
            //console.log(store, links);
            let link = [];
            for (let i in links) {
                link.push(links[i]);
            }
            //console.log(store[0], store[1]);

            switch (store[0]) {
                case "GOG":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'GOG'}>
                        <span className="badge">GOG <SiGogDotCom /></span>
                    </a>;
                    break;
                case "Xbox Store":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'Xbox_Store'}>
                        <span className="badge">Xbox Store <FaXbox /></span>
                    </a>;
                    break;
                case "Steam":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'Steam'}>
                        <span className="badge">Steam <SiSteam /></span>
                    </a>;
                    break;
                case "Epic Games":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'Epic_Games'}>
                        <span className="badge">Epic Games <SiEpicgames /></span>
                    </a>;
                    break;
                case "PlayStation Store":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'PlayStation_Store'}>
                        <span className="badge">PlayStation Store <FaPlaystation /></span>
                    </a>;
                    break;
                case "Nintendo Store":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'Nintendo_Store'}>
                        <span className="badge">Nintendo Store <SiNintendoswitch /></span>
                    </a>;
                    break;
                case "Google Play":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'Google_Play'}>
                        <span className="badge">Google Play <GrGooglePlay /></span>
                    </a>;
                    break;
                case "App Store":
                    return <a href={store[1]} className="store" target="_blank" rel="noreferrer" key={'App_Store'}>
                        <span className="badge">App Store <GrAppleAppStore /></span>
                    </a>;
                    break;

                default:
                    return null;
                    break;
            }
        })
    }

    const getPlatforms = (platform) => {
        let platforms = [];
        for (let i in platform) {
            platforms.push(platform[i].platform['name']);
            //console.log(platform[i].platform['name']);
        }
        return platforms.map(platform => {
            switch (platform) {
                case "PC":
                    return <AiFillWindows key={'PC'} />;
                    break;
                case "Xbox One" || "Xbox Series S/X":
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
        });

    }

    const setRating = (title) => {
        //console.log(title[0]);

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

    const setName = (name) => {
        let pieces = name.toLowerCase().split(' ');
        let newWords = pieces.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return newWords.join(' ');
    }

    let images = [];
    for (let i in pictures) {
        images.push({ original: pictures[i]['image'] });
    }

    //console.log(images);
    return (
        <>{
            data.isLoaded === true ? <div id="details">
                <div className="details-header">

                    <div className="details-header-image" style={{ backgroundImage: `url(${background_image})` }}>
                        <div className="details-header-tags">{getTags(tags)}</div>
                    </div>

                </div>

                <div className="details-wrapper container">

                    <div className="details-body">

                        <div className="details-header-details">

                            <div className="details-header-left">
                                <h1 className="details-header-name">{name}</h1>
                                <p className="details-header-left-details">
                                    <span className="star"><AiFillStar /></span>
                                    <span className="rating">{(rating).toString().slice(0, 3)}/5</span>|
                                    <span className="platforms">{getPlatforms(platforms)}</span>
                                </p>

                                <ul className="game-details">
                                    <div className="dot"><h2 className="game-details-title">Game Details</h2></div>
                                    <li className="release-date">
                                        <span className="release-date-title">Release Date:</span>
                                        {released ? <span>{getReleased(released)}</span> : null}
                                    </li>
                                    <li className="genres">
                                        <span className="genres-title">Genre:</span>
                                        {genres ? <span>{genres.slice(0, 2).map(genre => {
                                            return <Fragment key={genre.name}><span className="genre">{genre.name}</span> <span className="line">-</span></Fragment>;
                                        })} </span> : null}
                                    </li>
                                    <li className="developers">
                                        <span className="developers-title">Developers:</span>
                                        {developers ? <span>{developers.map(developer => {
                                            return <Fragment key={developer.name}><span className="developer">{(developer.name)}</span> <span className="line">/</span></Fragment>;
                                        })} </span> : null}
                                    </li>
                                    <li className="publishers">
                                        <span className="publishers-title">Publisher:</span>
                                        <span>{getPublisher(publishers)}</span>
                                    </li>
                                    <li className="recomended">
                                        <span className="recomended-title">Recommended:</span>
                                        <span>
                                            {esrb_rating ?
                                                <span className="recommended">{esrb_rating['name'] === 'Teen' ? '13+ Teen' : esrb_rating['name'] === 'Mature' ? '17+ Mature' : esrb_rating['name'] === 'Adults Only' ? '18+ Adults Only' : null}</span>
                                                : 'Not Rated'}
                                        </span>
                                    </li>
                                </ul>

                                <div className="badges">
                                    <div className="dot"><h2 className="badges-title">Where to Buy</h2></div>
                                    <div className="buy">
                                        <>{getStores(stores)}</>
                                    </div>
                                </div>

                                <div className="description">
                                    <div className="dot"><h2 className="description-title">Description</h2></div>
                                    {description ? <>{parse(description)}</> : null}
                                </div>

                            </div>

                            <div className="details-header-right">

                                {clip ?
                                    <video className="embed-responsive-item" width="100%" height="350px" controls autoPlay muted allowFullScreen>
                                        <source src={clip['clip']} type="video/mp4" />
                                    </video> : null}
                                <span className="pictures">
                                    <ImageGallery
                                        items={images}
                                        showThumbnails={false}
                                        showPlayButton={false}
                                        showBullets={true}
                                        autoPlay={false}
                                    />
                                </span>


                                {platforms ? <>{platforms.map(plat => {

                                    return plat.platform['name'].includes('PC') && plat.requirements !== null ? <div className="requirements">
                                        <div className="dot"><div className="requirements-title">System Requirements</div></div>
                                        {(plat.requirements['minimum'] && !plat.requirements['recommended']) ? <Fragment key={'requirements'}>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Minimum</a>
                                            </div>
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                    <>{parse(plat.requirements['minimum'])}</>
                                                </div>
                                            </div>
                                        </Fragment> : (plat.requirements['recommended'] && !plat.requirements['minimum']) ? <Fragment key={'requirements'}>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Recommended</a>
                                            </div>
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                    <>{parse(plat.requirements['recommended'])}</>
                                                </div>
                                            </div>
                                        </Fragment> : <Fragment key={'requirements'}>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Minimum</a>
                                                        <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Recommended</a>
                                                    </div>
                                                    <div class="tab-content" id="nav-tabContent">
                                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                            <>{parse(plat.requirements['minimum'])}</>
                                                        </div>
                                                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                            <>{parse(plat.requirements['recommended'])}</>
                                                        </div>
                                                    </div>
                                                </Fragment>} </div> : null
                                }
                                )}</> : null}

                            </div>
                        </div>

                    </div>


                    <div className="details-content">
                        <div id="content" className="similar">
                            <h1 className="similar-content-title">Similar to <span>{name}</span>:</h1>

                            <div className="main-wrapper">

                                {similar ? similar.map(games => {
                                    //console.log(games);

                                    return <div className="wrapper" key={games.id}>
                                        <div className="header">
                                            <img src={games.background_image} alt="background" />
                                        </div>
                                        <div className="body">
                                            <span className="platforms">
                                                {games.platforms ? games.platforms.map(plat => {

                                                    let platforms = [];
                                                    for (let i in plat) {
                                                        platforms.push(plat.platform.name);
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

                                                }) : null}
                                            </span>
                                            <>{games.metacritic ?
                                                <span className={games.metacritic <= 70 ? `metacritic yellow` :
                                                    games.metacritic >= 71 || games.metacritic <= 100 ? `metacritic green` : null}>{games.metacritic}</span>
                                                : null}</>
                                        </div>
                                        <div className="footer">
                                            <span className="card-text">{setName(games.name)}</span>
                                            {games.ratings.length > 0 ? <>{setRating(games.ratings[0].title)}</> : null}
                                        </div>

                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <Link
                                                    className="overlay-content-details"
                                                    to={{
                                                        pathname: `/details/${games.id}`,
                                                        state: { id: games.id }
                                                    }}
                                                >See More</Link>
                                                <span className="overlay-content-favorite">< AiFillHeart /></span>
                                            </div>
                                        </div>
                                    </div>
                                }) : <p>No similar games</p>}


                            </div>
                        </div>
                    </div>

                </div>


            </div> : <Loader />
        }</>
    )
}

export default Details;