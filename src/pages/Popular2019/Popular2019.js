import React, { useContext } from 'react';

import GamesContext from '../../context/GamesContext';
import Loader from '../../components/Loader/Loader';

const Popular2019 = () => {
    const { Popular2019, isLoaded } = useContext(GamesContext);
    console.log(Popular2019, isLoaded);

    return (
        <div id="content">
            <div className="container">
                <div className="row">

                    {isLoaded === true ? Popular2019.map(data => {
                        return <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <span className="card-text">{data.name}</span>
                                </div>
                                <div className="card-body">
                                    <img src={data.background_image} alt="background" />
                                </div>
                                <div className="card-footer">

                                </div>
                            </div>
                        </div>
                    }) : <Loader />}

                </div>

            </div>

        </div>
    )
}

export default Popular2019;