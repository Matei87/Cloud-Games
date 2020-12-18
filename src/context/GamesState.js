import React, { useState, useEffect } from 'react';
import GamesContext from './GamesContext';


const GamesState = (props) => {
    const initialState = {
        games: [],
        BestOfTheYear: [],
        AllTimePopular: [],
        Popular2019: [],
        gamesThisWeek: [],
        gamesNextWeek: [],
        games7DaysFromNow: [],
        gamesLastMOnth: [],
        gamesLast30Days: [],

        isLoaded: false,

    }

    const [data, setData] = useState(initialState);

    useEffect(() => {
        const gamesFetch = async () => {
            try {
                let today = new Date();
                let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();

                //GAMES_7_DAYS_FROM_NOW
                let getNext7Days = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
                let next7DaysDay = getNext7Days.getDate() < 10 ? '0' + getNext7Days.getDate() : getNext7Days.getDate();;
                let next7Days = `${getNext7Days.getFullYear()}-${getNext7Days.getMonth() + 1}-${next7DaysDay}`;
                //console.log('next7Days', next7Days);


                //GAMES_LAST_MONTH
                let getLastMonthFirstDay = new Date(today.getFullYear() - (today.getMonth() > 0 ? 0 : 1), (today.getMonth() - 1 + 12) % 12, 1);
                let getLastMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 1 - 1);
                let lastMonthFirstDay = `${getLastMonthFirstDay.getFullYear()}-${getLastMonthFirstDay.getMonth() + 1}-01`;
                let lastMonthLastDay = `${getLastMonthLastDay.getFullYear()}-${getLastMonthLastDay.getMonth() + 1}-${getLastMonthLastDay.getDate()}`;
                //console.log('lastMonthFirstDay=>', lastMonthFirstDay, 'lastMonthLastDay=>', lastMonthLastDay);

                //GAMES_LAST_30_DAYS-GAMES_NEXT_WEEK
                let todaysDate = `${today.getFullYear()}-${today.getMonth() + 1}-${day}`;
                //console.log(`AZI: ${todaysDate}`);


                //GAMES_LAST_30_DAYS
                let thirtyDays = new Date(today.setDate(today.getDate() - 30));
                let thirtyDaysAgoWithZeroDay = thirtyDays.getDate() < 10 ? '0' + thirtyDays.getDate() : thirtyDays.getDate();
                let thirtyDaysAgo = `${thirtyDays.getFullYear()}-${thirtyDays.getMonth() + 1}-${thirtyDaysAgoWithZeroDay}`;
                //console.log(`ACUM 30 ZILE: ${thirtyDays.getFullYear()}-${thirtyDays.getMonth() + 1}-${thirtyDaysAgoWithZeroDay}`);


                //GAMES_THIS_WEEK
                let first = new Date().getDate() - new Date().getDay() + 1; // First day is the day of the month - the day of the week
                let last = first + 6; // last day is the first day + 6
                let getFirstday = new Date(new Date().setDate(first));
                let getLastday = new Date(new Date().setDate(last));
                let getFirstDayWithZero = getFirstday.getDate() < 10 ? '0' + getFirstday.getDate() : getFirstday.getDate();
                let getLastdayWithZero = getLastday.getDate() < 10 ? '0' + getLastday.getDate() : getLastday.getDate();
                let firstDayThisWeek = `${getFirstday.getFullYear()}-${getFirstday.getMonth() + 1}-${getFirstDayWithZero}`;
                let lastDayThisWeek = `${getLastday.getFullYear()}-${getLastday.getMonth() + 1}-${getLastdayWithZero}`;
                //console.log(getFirstday, firstDayThisWeek, getLastday, lastDayThisWeek);


                //GAMES_NEXT_WEEK
                let date = new Date();
                //let getNextMonday = date.getDate() + (1 + 7 - date.getDay()) % 7;
                let getNextMonday = date.getDate() + (7 - date.getDay() + 1);
                //let getNextSunday = date.getDate() + (1 + 7 - date.getDay() + 6);
                let getNextSunday = date.getDate() + (7 - date.getDay() + 7);
                let mondayDate = new Date(date.setDate(getNextMonday));
                let sundayDate = new Date(date.setDate(getNextSunday));
                let mondayDateWithZero = mondayDate.getDate() < 10 ? '0' + mondayDate.getDate() : mondayDate.getDate();
                let sundayDateWithZero = sundayDate.getDate() < 10 ? '0' + sundayDate.getDate() : sundayDate.getDate();
                let mondayNextWeek = `${mondayDate.getFullYear()}-${mondayDate.getMonth() + 1}-${mondayDateWithZero}`;
                let sundayNextWeek = `${sundayDate.getFullYear()}-${sundayDate.getMonth() + 1}-${sundayDateWithZero}`;
                //console.log(daysday, getNextMonday, getNextSunday, mondayDate, sundayDate);
                //console.log(mondayDateWithZero, mondayNextWeek, sundayDateWithZero, sundayNextWeek);

                //FORMAT: 2020-12-18
                const API_KEY = '63150f4e38d549339ba029a37509023c';
                // const API = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`;
                const BEST_OF_THE_YEAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&page_size=30&ordering=-added`;
                const BEST_OF_YEAR_2019 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31`;
                const ALL_TIME_POPULAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1960-01-01,2020-12-31`;
                const GAMES_THIS_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${firstDayThisWeek},${lastDayThisWeek}&page_size=30`;
                const GAMES_NEXT_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${mondayNextWeek},${sundayNextWeek}&page_size=30`;
                const GAMES_7_DAYS_FROM_NOW = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${todaysDate},${next7Days}&page_size=30`;
                const GAMES_LAST_MONTH = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastMonthFirstDay},${lastMonthLastDay}&page_size=30`;
                const GAMES_LAST_30_DAYS = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${thirtyDaysAgo},${todaysDate}&page_size=30`;


                //console.log(GAMES_THIS_WEEK, GAMES_NEXT_WEEK, GAMES_7_DAYS_FROM_NOW, GAMES_LAST_MONTH, GAMES_LAST_30_DAYS);
                let URLS = [BEST_OF_THE_YEAR, BEST_OF_YEAR_2019, ALL_TIME_POPULAR, GAMES_THIS_WEEK, GAMES_NEXT_WEEK, GAMES_7_DAYS_FROM_NOW, GAMES_LAST_MONTH, GAMES_LAST_30_DAYS];
                const request = await Promise.all(URLS.map(e => fetch(e)));
                const response = await Promise.all(request.map(e => e.json()));
                setData({
                    BestOfTheYear: response[0].results,
                    Popular2019: response[1].results,
                    AllTimePopular: response[2].results,
                    gamesThisWeek: response[3].results,
                    gamesNextWeek: response[4].results,
                    games7DaysFromNow: response[5].results,
                    gamesLastMOnth: response[6].results,
                    gamesLast30Days: response[7].results,

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
                gamesThisWeek: data.gamesThisWeek,
                gamesNextWeek: data.gamesNextWeek,
                games7DaysFromNow: data.games7DaysFromNow,
                gamesLastMOnth: data.gamesLastMOnth,
                gamesLast30Days: data.gamesLast30Days,

            }}
        >
            {props.children}
        </GamesContext.Provider>
    )
}

export default GamesState;