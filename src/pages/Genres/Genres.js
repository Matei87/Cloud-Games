import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { BiUser } from 'react-icons/bi';

import { genresAction } from '../../redux/actions/actions';
import { connect } from 'react-redux';


const Genres = ({ genresPage, isGenresLoaded, getData }) => {
    console.log(genresPage, isGenresLoaded, getData);

    useEffect(() => {
        getData();
    }, [getData]);


    return (
        <div id="content" className="main-page">

            {isGenresLoaded === true ? <div className="container">

                <div className="gamesDetails">
                    <p>Stores</p>
                </div>

                <div className="main-wrapper">

                    {genresPage.map(data => {
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
                                                pathname: `/games/${(data.name).replace(' ', '-').toLowerCase()}`
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
                    })}

                </div>

            </div> : <Loader />}

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getData: games => dispatch(genresAction(games))
})

const mapStateToProps = state => ({
    genresPage: state.genresPage.genresPage,
    isGenresLoaded: state.genresPage.isGenresLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(Genres);