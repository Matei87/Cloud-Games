import React, { useReducer, useEffect } from 'react';
import GamesContext from './GamesContext';


const GamesState = (props) => {
    const initialState = {
        games: []
    }

    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const api = `https://api.rawg.io/api/games?ordering=rating`;
                const request = await fetch(api);
                const response = await request.json();
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