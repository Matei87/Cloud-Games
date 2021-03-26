import React, { useEffect } from 'react';
import './Platforms.scss';

import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { BiUser } from 'react-icons/bi';

import { platformsPageAction } from '../../redux/actions/actions';
import { connect } from 'react-redux';


const Platforms = ({ platforms, getData, isPlatformsLoaded }) => {
    console.log(platforms, getData, isPlatformsLoaded);

    useEffect(() => {
        getData();
    }, []);


    return (
        <div id="content" className="main-page">
            <div className="container">
                <div className="main-wrapper">

                    {isPlatformsLoaded === true ? platforms.map(data => {
                        return <div className="wrapper" key={data.id}>
                            <div className="body-fixed">
                                <img src={data.image_background} alt="background" />
                            </div>

                            <div className="overlay-fixed">
                                <div className="overlay-content-fixed">
                                    <span className="card-text">
                                        <Link
                                            className="overlay-content-link"
                                            to={{
                                                pathname: `/games/${data.slug}`
                                            }}>{data.name}</Link>
                                    </span>
                                    <div className="overlay-content-footer">
                                        <div>
                                            <span>Popular Items</span>
                                            <span>{(data.games_count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                                        </div>
                                        <ul>
                                            {data.games.slice(0, 3).map(game => {
                                                return <li key={game.id}>
                                                    <span>
                                                        <Link
                                                            to={{
                                                                pathname: `/details/${game.id}`,
                                                                state: { id: game.id }
                                                            }}>
                                                            {game.name}
                                                        </Link>
                                                    </span>
                                                    <span>{(game.added).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} <BiUser /></span>
                                                </li>
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    }) : <Loader />}

                </div>

            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getData: games => dispatch(platformsPageAction(games))
})

const mapStateToProps = state => ({
    platforms: state.platformsPage.platformsPage,
    isPlatformsLoaded: state.platformsPage.isPlatformsLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(Platforms);