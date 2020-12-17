import React, { useEffect, useState } from 'react';
import './Details.scss';

import Loader from '../../components/Loader/Loader';


const Details = (props) => {
    const [data, setData] = useState({
        isLoaded: false,
        details: [],

    });
    const { id } = props.location.state;


    useEffect(() => {
        const getDetails = async () => {
            try {
                let api = `https://api.rawg.io/api/games/${id}`;
                let request = await fetch(api);
                let data = await request.json();
                setData({ details: data, isLoaded: true });
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, []);

    const getGenres = (genre) => {
        let genres = [];
        for (let i in genre) {
            genres.push(genre[i]['name']);
        }
        return genres.join(' | ');
    }

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

    const getDevelopers = (developer) => {
        let developers = [];
        for (let i in developer) {
            developers.push(developer[i]['name']);
        }
        return developers.join(' | ');
    }

    const getPublisher = (publisher) => {
        let publishers = [];
        for (let i in publisher) {
            publishers.push(publisher[i]['name']);
        }
        return publishers.join(' | ');
    }

    console.log(data.details);
    const { background_image, name, rating, rating_top, genres, released,
        tags, developers, publishers, esrb_rating, clip } = data.details;
    return (
        <>{
            data.isLoaded === true ? <div id="details">
                <div className="details-header">
                    <div className="details-header-image">
                        <img src={background_image} alt="background_image" />
                    </div>
                    <div className="details-header-details">
                        <span className="details-header-name">{name}</span>
                        <span>{getReleased(released)}</span>
                        <span>{getGenres(genres)}</span>
                        <span>{rating} ({rating_top})</span>
                        <span className="details-header-tags">Tags: {getTags(tags)}</span>
                        <span>Developers: {getDevelopers(developers)}</span>
                        <span>Publisher: {getPublisher(publishers)}</span>
                        {esrb_rating ? <span>Recomended: {esrb_rating['name']}</span> : null}
                        <div className="embed-responsive embed-responsive-16by9">
                            <video className="embed-responsive-item" src={clip['clip']} width="320" height="240" controls allowfullscreen></video>
                        </div>
                    </div>
                </div>
                <div className="details-body">

                </div>
            </div> : <Loader />
        }</>
    )
}

export default Details;