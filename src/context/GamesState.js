import React, { useState, useEffect } from 'react';
import GamesContext from './GamesContext';


const GamesState = (props) => {
    const initialState = {
        games: [],
        bestOfTheYear: [],
        allTimePopular: [],
        popularIn2020: [],
        popularIn2019: [],
        gamesThisWeek: [],
        gamesNextWeek: [],
        games7DaysFromNow: [],
        gamesLastMOnth: [],
        gamesLast30Days: [],
        searchResults: [],

        generator: [],
        isLoaded: false,

    }

    const [data, setData] = useState(initialState);

    useEffect(() => {
        const gamesFetch = async (page = 1) => {
            let games = [];
            // // create a lastResult array which is going to be used to check if there is a next page
            let lastPage = [];

            try {
                let today = new Date();
                let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();

                //GAMES_7_DAYS_FROM_NOW
                let getNext7Days = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
                let next7DaysDay = getNext7Days.getDate() < 10 ? '0' + getNext7Days.getDate() : getNext7Days.getDate();
                let next7MonthWithZero = getNext7Days.getMonth() < 10 ? '0' + (getNext7Days.getMonth() + 1) : (getNext7Days.getMonth() + 1);
                let next7Days = `${getNext7Days.getFullYear()}-${next7MonthWithZero}-${next7DaysDay}`;
                //console.log('next7Days', next7Days);


                //GAMES_LAST_MONTH
                let getLastMonthFirstDay = new Date(today.getFullYear() - (today.getMonth() > 0 ? 0 : 1), (today.getMonth() - 1 + 12) % 12, 1);
                let getLastMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 1 - 1);
                let lastMonthFirstDay = `${getLastMonthFirstDay.getFullYear()}-${getLastMonthFirstDay.getMonth() + 1}-01`;
                let lastMonthLastDay = `${getLastMonthLastDay.getFullYear()}-${getLastMonthLastDay.getMonth() + 1}-${getLastMonthLastDay.getDate()}`;
                //console.log('lastMonthFirstDay=>', lastMonthFirstDay, 'lastMonthLastDay=>', lastMonthLastDay);

                //GAMES_LAST_30_DAYS-GAMES_7_DAYS_FROM_NOW
                let todaysDateMonthWithZero = today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
                let todaysDate = `${today.getFullYear()}-${todaysDateMonthWithZero}-${day}`;
                //console.log(`AZI: ${todaysDate}`);


                //GAMES_LAST_30_DAYS
                let thirtyDays = new Date(today.setDate(today.getDate() - 30));
                let thirtyDaysAgoWithZeroDay = thirtyDays.getDate() < 10 ? '0' + thirtyDays.getDate() : thirtyDays.getDate();
                let thirtyDaysAgoMonthWithZeroDay = thirtyDays.getMonth() < 10 ? '0' + (thirtyDays.getMonth() + 1) : (thirtyDays.getMonth() + 1);
                let thirtyDaysAgo = `${thirtyDays.getFullYear()}-${thirtyDaysAgoMonthWithZeroDay}-${thirtyDaysAgoWithZeroDay}`;
                //console.log(`ACUM 30 ZILE: ${thirtyDays.getFullYear()}-${thirtyDays.getMonth() + 1}-${thirtyDaysAgoWithZeroDay}`);


                //GAMES_THIS_WEEK
                let first = new Date().getDate() - new Date().getDay() + 1; // First day is the day of the month - the day of the week
                let last = first + 6; // last day is the first day + 6
                let getFirstday = new Date(new Date().setDate(first));
                let getLastday = new Date(new Date().setDate(last));
                let getFirstDayWithZero = getFirstday.getDate() < 10 ? '0' + getFirstday.getDate() : getFirstday.getDate();
                let getLastdayWithZero = getLastday.getDate() < 10 ? '0' + getLastday.getDate() : getLastday.getDate();
                let getFirstMonthWithZero = getFirstday.getMonth() < 10 ? '0' + (getFirstday.getMonth() + 1) : getFirstday.getMonth();
                let getLastMonthWithZero = getLastday.getMonth() < 10 ? '0' + (getLastday.getMonth() + 1) : getLastday.getMonth();
                let firstDayThisWeek = `${getFirstday.getFullYear()}-${getFirstMonthWithZero}-${getFirstDayWithZero}`;
                let lastDayThisWeek = `${getLastday.getFullYear()}-${getLastMonthWithZero}-${getLastdayWithZero}`;
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

                let mondayMonthDateWithZero = mondayDate.getMonth() < 10 ? '0' + (mondayDate.getMonth() + 1) : (mondayDate.getMonth() + 1);
                let sundayMonthDateWithZero = sundayDate.getMonth() < 10 ? '0' + (sundayDate.getMonth() + 1) : (sundayDate.getMonth() + 1);

                let mondayNextWeek = `${mondayDate.getFullYear()}-${mondayMonthDateWithZero}-${mondayDateWithZero}`;
                let sundayNextWeek = `${sundayDate.getFullYear()}-${sundayMonthDateWithZero}-${sundayDateWithZero}`;
                //console.log(sundayDate.getMonth() + 1);
                //console.log(mondayDateWithZero, mondayNextWeek, sundayDateWithZero, sundayNextWeek);

                //FORMAT: 2020-12-18
                const API_KEY = '63150f4e38d549339ba029a37509023c';
                // const API = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`;
                const BEST_OF_THE_YEAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added&page=${page}`;
                const POPULAR_IN_2020 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&page=${page}`;
                const POPULAR_IN_2019 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31&page=${page}`;
                const ALL_TIME_POPULAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1960-01-01,2020-12-31&page=${page}`;
                const GAMES_THIS_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${firstDayThisWeek},${lastDayThisWeek}&page=${page}`;
                const GAMES_NEXT_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${mondayNextWeek},${sundayNextWeek}&page=${page}`;
                const GAMES_7_DAYS_FROM_NOW = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${todaysDate},${next7Days}&page=${page}`;
                const GAMES_LAST_MONTH = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastMonthFirstDay},${lastMonthLastDay}&page=${page}`;
                const GAMES_LAST_30_DAYS = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${thirtyDaysAgo},${todaysDate}&page=${page}`;

                console.log(page, GAMES_THIS_WEEK, GAMES_NEXT_WEEK, GAMES_7_DAYS_FROM_NOW, GAMES_LAST_MONTH, GAMES_LAST_30_DAYS);
                let URLS = [BEST_OF_THE_YEAR, POPULAR_IN_2020, POPULAR_IN_2019, ALL_TIME_POPULAR, GAMES_THIS_WEEK, GAMES_NEXT_WEEK, GAMES_7_DAYS_FROM_NOW, GAMES_LAST_MONTH, GAMES_LAST_30_DAYS];
                const request = await Promise.all(URLS.map(e => fetch(e)));
                const response = await Promise.all(request.map(e => e.json()));
                lastPage = response;
                //console.log(lastPage, response);

                setData({
                    bestOfTheYear: response[0].results,
                    popularIn2020: response[1].results,
                    popularIn2019: response[2].results,
                    allTimePopular: response[3].results,
                    gamesThisWeek: response[4].results,
                    gamesNextWeek: response[5].results,
                    games7DaysFromNow: response[6].results,
                    gamesLastMOnth: response[7].results,
                    gamesLast30Days: response[8].results,

                    isLoaded: true
                })
                //console.log(response);

                // if (response['next'] !== null) {
                //     //page++;
                //     gamesFetch(page = page + 1);
                // }
            } catch (error) {
                console.log(error);
            }
        }

        async function requestStuff(url) { ///simple request
            // let request = await fetch([...url]);
            // let result = await request.json();
            const request = await Promise.all(url.map(e => fetch(e)));
            const response = await Promise.all(request.map(e => e.json()));
            return response;
        }

        async function* getFirstComment() {
            try {
                let page = 1;
                // const API = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`;
                const BEST_OF_THE_YEAR = `https://api.rawg.io/api/games?key=63150f4e38d549339ba029a37509023c&dates=2020-01-01,2020-12-31&ordering=-added&page=${page}`;
                const BEST_OF_YEAR_2019 = `https://api.rawg.io/api/games?key=63150f4e38d549339ba029a37509023c&dates=2019-01-01,2019-12-31&page=${page}`;
                const ALL_TIME_POPULAR = `https://api.rawg.io/api/games?key=63150f4e38d549339ba029a37509023c&dates=1960-01-01,2020-12-31&page=${page}`;
                let URLS = [BEST_OF_THE_YEAR, BEST_OF_YEAR_2019, ALL_TIME_POPULAR];
                // const request = await Promise.all(URLS.map(e => fetch(e)));
                // const response = await Promise.all(request.map(e => e.json()));
                let result = await requestStuff(URLS);
                console.log(page, result);
                let resultNext = result.map(r => r['next']);
                //yield result;

                while (resultNext) {
                    page++;
                    result = await requestStuff(resultNext);
                    yield result;
                }

            } catch (error) {
                console.log(error)
            }
        }
        //getFirstComment();
        //let main = getFirstComment()

        // async function runThroughIt(generator) {
        //     let stepOne = await generator.next();
        //     let a = stepOne.value.map(b => b.next);
        //     let b = [];
        //     if (a) {
        //         let c = await requestStuff(a);
        //         b.push(c);
        //     }
        //     console.log("res from step 1! ", b.flat());

        //     // let stepTwo = await generator.next();
        //     // let c = stepTwo.value.map(b => b.next);
        //     // let d = [];
        //     // if (c) {
        //     //     let a = await requestStuff(c);
        //     //     d.push(a);
        //     // }
        //     // console.log("res from step 2: ", d.flat());

        //     // let stepThree = await generator.next();
        //     // let e = stepThree.value.map(b => b.next);
        //     // let f = [];
        //     // if (e) {
        //     //     let a = await requestStuff(e);
        //     //     f.push(a);
        //     // }
        //     // console.log("res from step 3: ", f.flat());

        //     // let stepFour = await generator.next()
        //     // let g = stepFour.value.map(b => b.next);
        //     // let h = [];
        //     // if (g) {
        //     //     let a = await requestStuff(g);
        //     //     h.push(a);
        //     // }
        //     // console.log("res from step 4: ", h.flat());
        // }
        // console.time("Time my API call");
        // runThroughIt(main);
        // console.timeEnd("Time my API call");

        // async function getPages() {
        //     // set some variables
        //     const baseUrl = `https://api.rawg.io/api/games?dates=2020-12-24%2C2020-12-31&key=63150f4e38d549339ba029a37509023c&page=`;
        //     let page = 1;
        //     // create empty array where we want to store the people objects for each loop
        //     let games = [];
        //     // create a lastResult array which is going to be used to check if there is a next page
        //     let lastPage = [];
        //     do {
        //         // try catch to catch any errors in the async api call
        //         try {
        //             // use node-fetch to make api call
        //             const resp = await fetch(`${baseUrl}${page}`);
        //             const data = await resp.json();
        //             //console.log(data);
        //             lastPage = data;
        //             //console.log(lastPage);
        //             data.results.map(game => {
        //                 games.push(game);
        //                 setData({ generator: game, isLoaded: true });
        //             });
        //             // increment the page with 1 on each loop
        //             page++;
        //         } catch (error) {
        //             console.log(error);
        //         }
        //         //     // keep running until there's no next page
        //     } while (lastPage['next'] !== null);
        //     // let's log out our new people array
        //     //console.log("Total Games: ", games);

        // }

        // console.time("Time my API call");
        // getPages();
        // console.timeEnd("Time my API call");

        // console.time("Time my API call");
        // // Initial API Call
        // fetchData('https://api.rawg.io/api/games?dates=2020-12-24%2C2020-12-31&key=63150f4e38d549339ba029a37509023c&page=1');
        // console.timeEnd("Time my API call");

        // Create the function for API Call 
        // async function fetchData(apiUrl) {
        //     let games = [];
        //     let request = await fetch(apiUrl);
        //     let data = await request.json();
        //     console.log(data);
        //     games.push(data.results);
        //     //setData({ generator: data.results });
        //     //console.log(games);

        //     apiUrl = data['next'];
        //     // Check next API url is empty or not, if not empty call the above function 
        //     if (apiUrl !== null) {
        //         fetchData(apiUrl);
        //     }
        //     return data;
        // }

        gamesFetch();
    }, [])
    //console.log(data.generator);

    //SEARCH ***
    const handleSearch = async (query) => {
        try {
            const SEARCH = `https://api.rawg.io/api/games?search=${query}`;
            const request = await fetch(SEARCH);
            const response = await request.json();
            //console.log(response.results);
            setData({ searchResults: response.results, isLoaded: true });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GamesContext.Provider
            value={{
                isLoaded: data.isLoaded,
                bestOfTheYear: data.bestOfTheYear,
                popularIn2020: data.popularIn2020,
                popularIn2019: data.popularIn2019,
                allTimePopular: data.allTimePopular,
                gamesThisWeek: data.gamesThisWeek,
                gamesNextWeek: data.gamesNextWeek,
                games7DaysFromNow: data.games7DaysFromNow,
                gamesLastMOnth: data.gamesLastMOnth,
                gamesLast30Days: data.gamesLast30Days,
                searchResults: data.searchResults,

                handleSearch,

            }}
        >
            {props.children}
        </GamesContext.Provider>
    )
}

export default GamesState;