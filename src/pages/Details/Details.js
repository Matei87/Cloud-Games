import React, { useEffect, useState } from 'react';
import './Details.scss';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Loader from '../../components/Loader/Loader';

import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import { SiNintendoswitch, SiGogDotCom, SiSteam, SiEpicgames } from 'react-icons/si';
import { GrGooglePlay, GrAppleAppStore } from 'react-icons/gr';
import { AiFillStar, AiFillWindows, AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';


const Details = (props) => {
    const [data, setData] = useState({
        isLoaded: false,
        details: [],
        pictures: [],


    });
    const { details: { background_image, name, rating, genres, released,
        tags, developers, publishers, esrb_rating, clip, stores, platforms }, pictures } = data;
    //console.log(platforms);
    //console.log(pictures);
    const { id } = props.location.state;


    useEffect(() => {
        const getDetails = async () => {
            try {
                let api = `https://api.rawg.io/api/games/${id}`;
                let apiScreens = `https://api.rawg.io/api/games/${id}/screenshots`;
                let urls = [api, apiScreens];
                let request = await Promise.all(urls.map(url => fetch(url)));
                let data = await Promise.all(request.map(req => req.json()));
                //console.log(data);
                setData({ details: data[0], pictures: data[1].results, isLoaded: true });
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, []);


    const getReleased = (date) => {
        let split = date.replace('-', '').replace('-', '');
        return (split.slice(6, 8) + '/' + split.slice(4, 6) + '/' + split.slice(0, 4));
    }

    const getTags = (tag) => {
        let tags = [];
        for (let i in tag) {
            tags.push(tag[i]['name']);
        }
        return <>
            <span className="badge rounded-pill bg-primary text-dark">
                {tags.slice(0, 1)}
            </span>
            <span className="badge rounded-pill bg-secondary">
                {tags.slice(1, 2)}
            </span>
            <span className="badge rounded-pill bg-danger text-dark">
                {tags.slice(2, 3)}
            </span>
            <span className="badge rounded-pill bg-info">
                {tags.slice(3, 4)}
            </span>
        </>;
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
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'GOG'}>
                        <span className="badge rounded-pill bg-secondary">GOG <SiGogDotCom /></span>
                    </a>;
                    break;
                case "Xbox Store":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'Xbox_Store'}>
                        <span className="badge rounded-pill bg-secondary">Xbox Store <FaXbox /></span>
                    </a>;
                    break;
                case "Steam":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'Steam'}>
                        <span className="badge rounded-pill bg-secondary">Steam <SiSteam /></span>
                    </a>;
                    break;
                case "Epic Games":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'Epic_Games'}>
                        <span className="badge rounded-pill bg-secondary">Epic Games <SiEpicgames /></span>
                    </a>;
                    break;
                case "PlayStation Store":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'PlayStation_Store'}>
                        <span className="badge rounded-pill bg-secondary">PlayStation Store <FaPlaystation /></span>
                    </a>;
                    break;
                case "Nintendo Store":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'Nintendo_Store'}>
                        <span className="badge rounded-pill bg-secondary">Nintendo Store <SiNintendoswitch /></span>
                    </a>;
                    break;
                case "Google Play":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'Google_Play'}>
                        <span className="badge rounded-pill bg-secondary">Google Play <GrGooglePlay /></span>
                    </a>;
                    break;
                case "App Store":
                    return <a href={store[1]} target="_blank" rel="noreferrer" key={'App_Store'}>
                        <span className="badge rounded-pill bg-secondary">App Store <GrAppleAppStore /></span>
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

    let images = [];
    for (let i in pictures) {
        images.push({ original: pictures[i]['image'], thumbnail: pictures[i]['image'] });
    }
    console.log(images);
    return (
        <>{
            data.isLoaded === true ? <div id="details">
                <div className="details-header">

                    <div className="details-header-image" style={{ backgroundImage: `url(${background_image})` }}>
                    </div>

                </div>

                <div className="details-body">

                    <div className="container">

                        <div className="details-header-details">

                            <div className="details-header-left">
                                <span className="details-header-name">{name}</span>
                                <p className="details-header-left-details">
                                    <span className="star"><AiFillStar /></span>
                                    <span className="rating">{(rating).toString().slice(0, 3)}/5</span>|
                                    <span className="platforms">{getPlatforms(platforms)}</span>
                                </p>

                                <ul className="details-header-left-list">
                                    <li className="details-header-left-list-title">Game Details</li>
                                    <li className="release_date">
                                        <span>Release Date:</span>
                                        <span>{getReleased(released)}</span>
                                    </li>
                                    <li className="genres">
                                        <span>Genre:</span>
                                        {genres ? <span>{genres.map(genre => {
                                            return <><span className="genre">{(genre.name)}</span> <span className="dot">-</span></>;
                                        })} </span> : null}
                                    </li>
                                    <li className="developers">
                                        <span>Developers:</span>
                                        {developers ? <span>{developers.map(developer => {
                                            return <><span className="developer">{(developer.name)}</span> <span className="dot">/</span></>;
                                        })} </span> : null}
                                    </li>
                                    <li className="publishers">
                                        <span>Publisher:</span>
                                        <span>{getPublisher(publishers)}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="details-header-right">


                                <span className="details-header-tags">Tags: {getTags(tags)}</span>


                                {esrb_rating ? <span>Recomended: {esrb_rating['name']}</span> : null}
                                {clip ? <div className="embed-responsive embed-responsive-16by9">
                                    <video className="embed-responsive-item" src={clip['clip']} width="320" height="240" controls allowFullScreen></video>
                                </div> : null}
                                <span className="pictures">
                                    <ImageGallery
                                        items={images}
                                        thumbnailPosition='left'
                                        showThumbnails={true}
                                        showPlayButton={false}
                                        showBullets={true}
                                        autoPlay={false}
                                    />
                                </span>
                                <span>Where to Buy</span>
                                <div className="buy">
                                    <>{getStores(stores)}</>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div> : <Loader />
        }</>
    )
}

export default Details;