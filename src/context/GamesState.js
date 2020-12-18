import React, { useState, useEffect } from 'react';
import GamesContext from './GamesContext';


const GamesState = (props) => {
    const initialState = {
        games: [],
        BestOfTheYear: [],
        AllTimePopular: [],
        Popular2019: [],
        isLoaded: false,

    }

    const [data, setData] = useState(initialState);

    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const API_KEY = '63150f4e38d549339ba029a37509023c';
                // const API = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`;
                const BEST_OF_THE_YEAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&page_size=30&ordering=-added`;
                const BEST_OF_YEAR_2019 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31`;
                const ALL_TIME_POPULAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1960-01-01,2020-12-31`;

                let URLS = [BEST_OF_THE_YEAR, BEST_OF_YEAR_2019, ALL_TIME_POPULAR];
                const request = await Promise.all(URLS.map(e => fetch(e)));
                const response = await Promise.all(request.map(e => e.json()));
                setData({
                    BestOfTheYear: response[0].results,
                    Popular2019: response[1].results,
                    AllTimePopular: response[2].results,
                    isLoaded: true
                })
                console.log(response);

            } catch (error) {
                console.log(error);
            }
        }
        gamesFetch();
    }, [])


    return (
        <GamesContext.Provider
            value={{
                isLoaded: data.isLoaded,
                BestOfTheYear: data.BestOfTheYear,
                Popular2019: data.Popular2019,
                AllTimePopular: data.AllTimePopular,

            }}
        >
            {props.children}
        </GamesContext.Provider>
    )
}

export default GamesState;