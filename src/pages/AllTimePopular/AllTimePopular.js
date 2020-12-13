import React, { useContext } from 'react';

import GamesContext from '../../context/GamesContext';
import Loader from '../../components/Loader/Loader';

const AllTimePopular = () => {
    const { AllTimePopular, isLoaded } = useContext(GamesContext);
    console.log(AllTimePopular, isLoaded);

    return (
        <div id="content">
            <div className="container">
                <div className="row">

                    {isLoaded === true ? AllTimePopular.map(data => {
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

export default AllTimePopular;