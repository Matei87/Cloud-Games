import React, { useReducer, useEffect } from 'react';
import GamesContext from './GamesContext';


const GamesState = (props) => {
    const initialState = {
        games: [],
        isLoaded: false,

    }

    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const API_KEY = '63150f4e38d549339ba029a37509023c';
                const API = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`;
                const BEST_OF_YEAR_2020 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31`;
                const BEST_OF_YEAR_2019 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31`;
                let URLS = [API, BEST_OF_YEAR_2020, BEST_OF_YEAR_2019];
                const request = await Promise.all(URLS.map(e => fetch(e)));
                const response = await Promise.all(request.map(e => e.json()));
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

            }}
        >
            {props.children}
        </GamesContext.Provider>
    )
}

export default GamesState;