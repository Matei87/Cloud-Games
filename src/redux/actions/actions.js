// const today = new Date();
// const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
// export const gamesAction = async (page = 1) => {
//     return dispatch => {
//         let games = [];
//         // // create a lastResult array which is going to be used to check if there is a next page
//         let lastPage = [];

//         try {
//             let today = new Date();
//             let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();

//             //GAMES_7_DAYS_FROM_NOW
//             let getNext7Days = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//             let next7DaysDay = getNext7Days.getDate() < 10 ? '0' + getNext7Days.getDate() : getNext7Days.getDate();
//             let next7MonthWithZero = getNext7Days.getMonth() < 10 ? '0' + (getNext7Days.getMonth() + 1) : (getNext7Days.getMonth() + 1);
//             let next7Days = `${getNext7Days.getFullYear()}-${next7MonthWithZero}-${next7DaysDay}`;
//             //console.log('next7Days', next7Days);


//             //GAMES_LAST_MONTH
//             let getLastMonthFirstDay = new Date(today.getFullYear() - (today.getMonth() > 0 ? 0 : 1), (today.getMonth() - 1 + 12) % 12, 1);
//             let getLastMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 1 - 1);
//             let lastMonthFirstDay = `${getLastMonthFirstDay.getFullYear()}-${getLastMonthFirstDay.getMonth() + 1}-01`;
//             let lastMonthLastDay = `${getLastMonthLastDay.getFullYear()}-${getLastMonthLastDay.getMonth() + 1}-${getLastMonthLastDay.getDate()}`;
//             //console.log('lastMonthFirstDay=>', lastMonthFirstDay, 'lastMonthLastDay=>', lastMonthLastDay);

//             //GAMES_LAST_30_DAYS-GAMES_7_DAYS_FROM_NOW
//             let todaysDateMonthWithZero = today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
//             let todaysDate = `${today.getFullYear()}-${todaysDateMonthWithZero}-${day}`;
//             //console.log(`AZI: ${todaysDate}`);


//             //GAMES_LAST_30_DAYS
//             let thirtyDays = new Date(today.setDate(today.getDate() - 30));
//             let thirtyDaysAgoWithZeroDay = thirtyDays.getDate() < 10 ? '0' + thirtyDays.getDate() : thirtyDays.getDate();
//             let thirtyDaysAgoMonthWithZeroDay = thirtyDays.getMonth() < 10 ? '0' + (thirtyDays.getMonth() + 1) : (thirtyDays.getMonth() + 1);
//             let thirtyDaysAgo = `${thirtyDays.getFullYear()}-${thirtyDaysAgoMonthWithZeroDay}-${thirtyDaysAgoWithZeroDay}`;
//             //console.log(`ACUM 30 ZILE: ${thirtyDays.getFullYear()}-${thirtyDays.getMonth() + 1}-${thirtyDaysAgoWithZeroDay}`);


//             //GAMES_THIS_WEEK
//             let first = new Date().getDate() - new Date().getDay() + 1; // First day is the day of the month - the day of the week
//             let last = first + 6; // last day is the first day + 6
//             let getFirstday = new Date(new Date().setDate(first));
//             let getLastday = new Date(new Date().setDate(last));
//             let getFirstDayWithZero = getFirstday.getDate() < 10 ? '0' + getFirstday.getDate() : getFirstday.getDate();
//             let getLastdayWithZero = getLastday.getDate() < 10 ? '0' + getLastday.getDate() : getLastday.getDate();
//             let getFirstMonthWithZero = getFirstday.getMonth() < 10 ? '0' + (getFirstday.getMonth() + 1) : getFirstday.getMonth();
//             let getLastMonthWithZero = getLastday.getMonth() < 10 ? '0' + (getLastday.getMonth() + 1) : getLastday.getMonth();
//             let firstDayThisWeek = `${getFirstday.getFullYear()}-${getFirstMonthWithZero}-${getFirstDayWithZero}`;
//             let lastDayThisWeek = `${getLastday.getFullYear()}-${getLastMonthWithZero}-${getLastdayWithZero}`;
//             //console.log(getFirstday, firstDayThisWeek, getLastday, lastDayThisWeek);


//             //GAMES_NEXT_WEEK
//             let date = new Date();
//             //let getNextMonday = date.getDate() + (1 + 7 - date.getDay()) % 7;
//             let getNextMonday = date.getDate() + (7 - date.getDay() + 1);
//             //let getNextSunday = date.getDate() + (1 + 7 - date.getDay() + 6);
//             let getNextSunday = date.getDate() + (7 - date.getDay() + 7);
//             let mondayDate = new Date(date.setDate(getNextMonday));
//             let sundayDate = new Date(date.setDate(getNextSunday));
//             let mondayDateWithZero = mondayDate.getDate() < 10 ? '0' + mondayDate.getDate() : mondayDate.getDate();
//             let sundayDateWithZero = sundayDate.getDate() < 10 ? '0' + sundayDate.getDate() : sundayDate.getDate();

//             let mondayMonthDateWithZero = mondayDate.getMonth() < 10 ? '0' + (mondayDate.getMonth() + 1) : (mondayDate.getMonth() + 1);
//             let sundayMonthDateWithZero = sundayDate.getMonth() < 10 ? '0' + (sundayDate.getMonth() + 1) : (sundayDate.getMonth() + 1);

//             let mondayNextWeek = `${mondayDate.getFullYear()}-${mondayMonthDateWithZero}-${mondayDateWithZero}`;
//             let sundayNextWeek = `${sundayDate.getFullYear()}-${sundayMonthDateWithZero}-${sundayDateWithZero}`;
//             //console.log(sundayDate.getMonth() + 1);
//             //console.log(mondayDateWithZero, mondayNextWeek, sundayDateWithZero, sundayNextWeek);

//             //FORMAT: 2020-12-18
//             const API_KEY = '63150f4e38d549339ba029a37509023c';
//             // const API = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`;
//             const BEST_OF_THE_YEAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added&page=${page}`;
//             const POPULAR_IN_2020 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&page=${page}`;
//             const POPULAR_IN_2019 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31&page=${page}`;
//             const ALL_TIME_POPULAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1960-01-01,2020-12-31&page=${page}`;
//             const GAMES_THIS_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${firstDayThisWeek},${lastDayThisWeek}&page=${page}`;
//             const GAMES_NEXT_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${mondayNextWeek},${sundayNextWeek}&page=${page}`;
//             const GAMES_7_DAYS_FROM_NOW = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${todaysDate},${next7Days}&page=${page}`;
//             const GAMES_LAST_MONTH = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastMonthFirstDay},${lastMonthLastDay}&page=${page}`;
//             const GAMES_LAST_30_DAYS = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${thirtyDaysAgo},${todaysDate}&page=${page}`;

//             //browse
//             const PLATFORMS = `https://api.rawg.io/api/platforms?key=${API_KEY}&page=${page}`;
//             const STORES = `https://api.rawg.io/api/stores?key=${API_KEY}&page=${page}`;
//             const GENRES = `https://api.rawg.io/api/genres?key=${API_KEY}&page=${page}`;

//             //platforms
//             const PLATFORM_PC = `https://api.rawg.io/api/games?platforms=4&key=${API_KEY}`;
//             const PLATFORM_PLAYSTATION_4 = `https://api.rawg.io/api/games?platforms=18&key=${API_KEY}`;
//             const PLATFORM_XBOX_ONE = `https://api.rawg.io/api/games?platforms=1&key=${API_KEY}`;
//             const PLATFORM_NINTENDO_SWITCH = `https://api.rawg.io/api/games?platforms=7&key=${API_KEY}`;
//             const PLATFORM_IOS = `https://api.rawg.io/api/games?platforms=3&key=${API_KEY}`;
//             const PLATFORM_ANDROID = `https://api.rawg.io/api/games?platforms=21&key=${API_KEY}`;

//storeS
//const PLATFORM_STEAM = `https://api.rawg.io/api/games?stores=1&key=63150f4e38d549339ba029a37509023c
//const PLATFORM_GOOGLE_PLAY= `https://api.rawg.io/api/games?stores=8&key=63150f4e38d549339ba029a37509023c`    
//const PLATFORM_ITCH= `https://api.rawg.io/api/games?stores=9&key=63150f4e38d549339ba029a37509023c`   

//             //console.log(page, GAMES_THIS_WEEK, GAMES_NEXT_WEEK, GAMES_7_DAYS_FROM_NOW, GAMES_LAST_MONTH, GAMES_LAST_30_DAYS);
//             let URLS = [BEST_OF_THE_YEAR, POPULAR_IN_2020, POPULAR_IN_2019, ALL_TIME_POPULAR, GAMES_THIS_WEEK, GAMES_NEXT_WEEK,
//                 GAMES_7_DAYS_FROM_NOW, GAMES_LAST_MONTH, GAMES_LAST_30_DAYS,
//                 PLATFORM_PC, PLATFORM_PLAYSTATION_4, PLATFORM_XBOX_ONE, PLATFORM_NINTENDO_SWITCH, PLATFORM_IOS, PLATFORM_ANDROID];
//             const request = await Promise.all(URLS.map(e => fetch(e)));
//             const response = await Promise.all(request.map(e => e.json()));
//             lastPage = response;
//             //console.log(lastPage, response);

//             setData({
//                 bestOfTheYear: response[0].results,
//                 popularIn2020: response[1].results,
//                 popularIn2019: response[2].results,
//                 allTimePopular: response[3].results,
//                 gamesThisWeek: response[4].results,
//                 gamesNextWeek: response[5].results,
//                 games7DaysFromNow: response[6].results,
//                 gamesLastMOnth: response[7].results,
//                 gamesLast30Days: response[8].results,

//                 gamesPC: response[9].results,
//                 gamesPlaystation4: response[10].results,
//                 gamesXboxOne: response[11].results,
//                 gamesNintendoSwitch: response[12].results,
//                 gamesIos: response[13].results,
//                 gamesAndroid: response[14].results,

//                 isLoaded: true
//             });
//             console.log(response);

//             // if (response['next'] !== null) {
//             //     //page++;
//             //     gamesFetch(page = page + 1);
//             // }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export const BestOfTheYearAction = (page = 1) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const BEST_OF_THE_YEAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added&page=${page}`;
            let promise = await fetch(BEST_OF_THE_YEAR)
            let result = await promise.json();
            console.log(result.next)
            dispatch({ type: 'FETCH_BEST_OF_THE_YEAR', payload: result.results, totalPages: Math.floor(result.count / 20), isBestOfTheYearLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changeBestOfTheYearAction = (page) => async (dispatch) => {
    try {
        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const BEST_OF_THE_YEAR_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added&page=${page}`;
        let promise = await fetch(BEST_OF_THE_YEAR_NEXT)
        let result = await promise.json();
        console.log('changeBestOfTheYearAction', result)
        dispatch({ type: 'FETCH_BEST_OF_THE_YEAR_NEXT', payload: result.results, page, isChangeBestOfTheYearLoaded: false })
    } catch (error) {
        console.log(error)
    }
}

export const popularIn2020Action = (page = 1) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const POPULAR_IN_2020 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&page=${page}`;
            let promise = await fetch(POPULAR_IN_2020)
            let result = await promise.json();
            dispatch({ type: 'FETCH_POPULAR_IN_2020', payload: result.results, totalPages: Math.floor(result.count / 20), isPopularIn2020Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changePopularIn2020Action = (page) => async (dispatch) => {
    try {
        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const POPULAR_IN_2020_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&page=${page}`;
        let promise = await fetch(POPULAR_IN_2020_NEXT)
        let result = await promise.json();
        dispatch({ type: 'FETCH_POPULAR_IN_2020_NEXT', payload: result.results, page, isChangePopularIn2020Loaded: false })
    } catch (error) {
        console.log(error)
    }
}

export const popularIn2019Action = (page = 1) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const POPULAR_IN_2019 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31&page=${page}`;
            let promise = await fetch(POPULAR_IN_2019)
            let result = await promise.json();
            dispatch({ type: 'FETCH_POPULAR_IN_2019', payload: result.results, totalPages: Math.floor(result.count / 20), isPopularIn2019Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changePopularIn2019Action = (page) => async (dispatch) => {
    try {
        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const POPULAR_IN_2019_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31&page=${page}`;
        let promise = await fetch(POPULAR_IN_2019_NEXT)
        let result = await promise.json();
        dispatch({ type: 'FETCH_POPULAR_IN_2019_NEXT', payload: result.results, page, isChangePopularIn2019Loaded: false })
    } catch (error) {
        console.log(error)
    }
}

export const allTimePopularAction = (page = 1) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const ALL_TIME_POPULAR = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1960-01-01,2020-12-31&page=${page}`;
            let promise = await fetch(ALL_TIME_POPULAR)
            let result = await promise.json();
            dispatch({ type: 'FETCH_ALL_TIME_POPULAR', payload: result.results, totalPages: Math.floor(result.count / 20), isAllTimePopularLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changeAllTimePopularAction = (page) => async (dispatch) => {
    try {
        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const ALL_TIME_POPULAR_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1960-01-01,2020-12-31&page=${page}`;
        let promise = await fetch(ALL_TIME_POPULAR_NEXT)
        let result = await promise.json();
        dispatch({ type: 'FETCH_ALL_TIME_POPULAR_NEXT', payload: result.results, page, isChangeAllTimePopularLoaded: false })
    } catch (error) {
        console.log(error)
    }
}

export const last30DaysAction = (page = 1) => {
    return async (dispatch) => {
        try {
            //GAMES_LAST_30_DAYS
            let today = new Date();
            let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
            let thirtyDays = new Date(today.setDate(today.getDate() - 30));
            let thirtyDaysAgoWithZeroDay = thirtyDays.getDate() < 10 ? '0' + thirtyDays.getDate() : thirtyDays.getDate();
            let thirtyDaysAgoMonthWithZeroDay = thirtyDays.getMonth() < 10 ? '0' + (thirtyDays.getMonth() + 1) : (thirtyDays.getMonth() + 1);
            let thirtyDaysAgo = `${thirtyDays.getFullYear()}-${thirtyDaysAgoMonthWithZeroDay}-${thirtyDaysAgoWithZeroDay}`;
            let todaysDateMonthWithZero = today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
            let todaysDate = `${today.getFullYear()}-${todaysDateMonthWithZero}-${day}`;

            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_LAST_30_DAYS = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${thirtyDaysAgo},${todaysDate}&page=${page}`;
            let promise = await fetch(GAMES_LAST_30_DAYS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_LAST_30_DAYS', payload: result.results, totalPages: Math.floor(result.count / 20), isLast30DaysLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changeLast30DaysAction = (page) => async (dispatch) => {
    try {
        //GAMES_LAST_30_DAYS
        let today = new Date();
        let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
        let thirtyDays = new Date(today.setDate(today.getDate() - 30));
        let thirtyDaysAgoWithZeroDay = thirtyDays.getDate() < 10 ? '0' + thirtyDays.getDate() : thirtyDays.getDate();
        let thirtyDaysAgoMonthWithZeroDay = thirtyDays.getMonth() < 10 ? '0' + (thirtyDays.getMonth() + 1) : (thirtyDays.getMonth() + 1);
        let thirtyDaysAgo = `${thirtyDays.getFullYear()}-${thirtyDaysAgoMonthWithZeroDay}-${thirtyDaysAgoWithZeroDay}`;
        let todaysDateMonthWithZero = today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
        let todaysDate = `${today.getFullYear()}-${todaysDateMonthWithZero}-${day}`;

        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const GAMES_LAST_30_DAYS_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${thirtyDaysAgo},${todaysDate}&page=${page}`;
        let promise = await fetch(GAMES_LAST_30_DAYS_NEXT)
        let result = await promise.json();
        dispatch({ type: 'FETCH_GAMES_LAST_30_DAYS_NEXT', payload: result.results, page, isChangeLast30DaysLoaded: false })
    } catch (error) {
        console.log(error)
    }
}

export const thisWeekAction = (page = 1) => {
    return async (dispatch) => {
        try {
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

            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_THIS_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${firstDayThisWeek},${lastDayThisWeek}&page=${page}`;
            let promise = await fetch(GAMES_THIS_WEEK)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_THIS_WEEK', payload: result.results, totalPages: Math.floor(result.count / 20), isThisWeekLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changeThisWeekAction = (page) => async (dispatch) => {
    try {
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

        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const GAMES_THIS_WEEK_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${firstDayThisWeek},${lastDayThisWeek}&page=${page}`;
        let promise = await fetch(GAMES_THIS_WEEK_NEXT)
        let result = await promise.json();
        dispatch({ type: 'FETCH_GAMES_THIS_WEEK_NEXT', payload: result.results, page, isChangeThisWeekLoaded: false })
    } catch (error) {
        console.log(error)
    }
}

export const nextWeekAction = (page = 1) => {
    return async (dispatch) => {
        try {
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

            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_NEXT_WEEK = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${mondayNextWeek},${sundayNextWeek}&page=${page}`;
            let promise = await fetch(GAMES_NEXT_WEEK)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_NEXT_WEEK', payload: result.results, totalPages: Math.floor(result.count / 20), isNextWeekLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}
export const changeNextWeekAction = (page) => async (dispatch) => {
    try {
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

        const API_KEY = '63150f4e38d549339ba029a37509023c';
        const GAMES_NEXT_WEEK_NEXT = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${mondayNextWeek},${sundayNextWeek}&page=${page}`;
        let promise = await fetch(GAMES_NEXT_WEEK_NEXT)
        let result = await promise.json();
        dispatch({ type: 'FETCH_GAMES_NEXT_WEEK_NEXT', payload: result.results, page, isChangeNextWeekLoaded: false })
    } catch (error) {
        console.log(error)
    }
}

// BROWSE
export const platformsPageAction = (page = 1) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const PLATFORMS = `https://api.rawg.io/api/platforms?key=${API_KEY}&page=${page}`;
            let promise = await fetch(PLATFORMS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_PLATFORMS', payload: result.results, isPlatformsLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const storesAction = (page = 1) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const STORES = `https://api.rawg.io/api/stores?key=${API_KEY}&page=${page}`;
            let promise = await fetch(STORES)
            let result = await promise.json();
            dispatch({ type: 'FETCH_STORES', payload: result.results, isStoresLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const genresAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GENRES = `https://api.rawg.io/api/genres?key=${API_KEY}`;
            let promise = await fetch(GENRES)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GENRES', payload: result.results, isGenresLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}


// PLATFORMS
export const gamesPCAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PC = `https://api.rawg.io/api/games?platforms=4&key=${API_KEY}`;
            let promise = await fetch(GAMES_PC)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PC', payload: result.results, totalPages: Math.floor(result.count / 20), isGamesPCLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const playStationAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PLAYSTATION = `https://api.rawg.io/api/games?platforms=27&key=${API_KEY}`;
            let promise = await fetch(GAMES_PLAYSTATION)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PLAYSTATION', payload: result.results, totalPages: Math.floor(result.count / 20), isPlayStationLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const playStation2Action = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PLAYSTATION_2 = `https://api.rawg.io/api/games?platforms=15&key=${API_KEY}`;
            let promise = await fetch(GAMES_PLAYSTATION_2)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PLAYSTATION_2', payload: result.results, totalPages: Math.floor(result.count / 20), isPlayStation2Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const playStation3Action = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PLAYSTATION_3 = `https://api.rawg.io/api/games?platforms=16&key=${API_KEY}`;
            let promise = await fetch(GAMES_PLAYSTATION_3)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PLAYSTATION_3', payload: result.results, totalPages: Math.floor(result.count / 20), isPlayStation3Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const playStation4Action = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PLAYSTATION_4 = `https://api.rawg.io/api/games?platforms=18&key=${API_KEY}`;
            let promise = await fetch(GAMES_PLAYSTATION_4)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PLAYSTATION_4', payload: result.results, totalPages: Math.floor(result.count / 20), isPlayStation4Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const playStation5Action = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PLAYSTATION_5 = `https://api.rawg.io/api/games?platforms=187&key=${API_KEY}`;
            let promise = await fetch(GAMES_PLAYSTATION_5)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PLAYSTATION_5', payload: result.results, totalPages: Math.floor(result.count / 20), isPlayStation5Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const xboxOneAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_XBOX_ONE = `https://api.rawg.io/api/games?platforms=1&key=${API_KEY}`;
            let promise = await fetch(GAMES_XBOX_ONE)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_XBOX_ONE', payload: result.results, totalPages: Math.floor(result.count / 20), isXboxOneLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const XboxSeriesSXAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_XBOX_SERIES_SX = `https://api.rawg.io/api/games?platforms=186&key=${API_KEY}`;
            let promise = await fetch(GAMES_XBOX_SERIES_SX)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_XBOX_SERIES_SX', payload: result.results, totalPages: Math.floor(result.count / 20), isXboxSeriesSXLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const xbox360Action = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_XBOX_360 = `https://api.rawg.io/api/games?platforms=14&key=${API_KEY}`;
            let promise = await fetch(GAMES_XBOX_360)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_XBOX_360', payload: result.results, totalPages: Math.floor(result.count / 20), isXbox360Loaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const xboxOldAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_XBOX_OLD = `https://api.rawg.io/api/games?platforms=80&key=${API_KEY}`;
            let promise = await fetch(GAMES_XBOX_OLD)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_XBOX_OLD', payload: result.results, totalPages: Math.floor(result.count / 20), isXboxOldLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const nintendoSwitchAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_NINTENDO_SWITCH = `https://api.rawg.io/api/games?platforms=7&key=${API_KEY}`;
            let promise = await fetch(GAMES_NINTENDO_SWITCH)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_NINTENDO_SWITCH', payload: result.results, totalPages: Math.floor(result.count / 20), isNintendoSwitchLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const nintendoDSAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_NINTENDO_DS = `https://api.rawg.io/api/games?platforms=9&key=${API_KEY}`;
            let promise = await fetch(GAMES_NINTENDO_DS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_NINTENDO_DS', payload: result.results, totalPages: Math.floor(result.count / 20), isNintendoDSLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const nintendoDSIAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_NINTENDO_DSI = `https://api.rawg.io/api/games?platforms=13&key=${API_KEY}`;
            let promise = await fetch(GAMES_NINTENDO_DSI)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_NINTENDO_DSI', payload: result.results, totalPages: Math.floor(result.count / 20), isNintendoDSILoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const nintendo3DSAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_NINTENDO_3DS = `https://api.rawg.io/api/games?platforms=8&key=${API_KEY}`;
            let promise = await fetch(GAMES_NINTENDO_3DS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_NINTENDO_3DS', payload: result.results, totalPages: Math.floor(result.count / 20), isNintendo3DSLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const iosAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_IOS = `https://api.rawg.io/api/games?platforms=3&key=${API_KEY}`;
            let promise = await fetch(GAMES_IOS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_IOS', payload: result.results, totalPages: Math.floor(result.count / 20), isIosLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const androidAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_ANDROID = `https://api.rawg.io/api/games?platforms=21&key=${API_KEY}`;
            let promise = await fetch(GAMES_ANDROID)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_ANDROID', payload: result.results, totalPages: Math.floor(result.count / 20), isAndroidLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const linuxAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_LINUX = `https://api.rawg.io/api/games?platforms=6&key=${API_KEY}`;
            let promise = await fetch(GAMES_LINUX)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_LINUX', payload: result.results, totalPages: Math.floor(result.count / 20), isLinuxLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const macOSAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_MACOS = `https://api.rawg.io/api/games?platforms=5&key=${API_KEY}`;
            let promise = await fetch(GAMES_MACOS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_MACOS', payload: result.results, totalPages: Math.floor(result.count / 20), ismacOSLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const wiiuAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_WIIU = `https://api.rawg.io/api/games?platforms=10&key=${API_KEY}`;
            let promise = await fetch(GAMES_WIIU)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_WIIU', payload: result.results, totalPages: Math.floor(result.count / 20), isWiiULoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const wiiAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_WII = `https://api.rawg.io/api/games?platforms=11&key=${API_KEY}`;
            let promise = await fetch(GAMES_WII)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_WII', payload: result.results, totalPages: Math.floor(result.count / 20), isWiiLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const pspAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PSP = `https://api.rawg.io/api/games?platforms=17&key=${API_KEY}`;
            let promise = await fetch(GAMES_PSP)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PSP', payload: result.results, totalPages: Math.floor(result.count / 20), isPSPLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

export const pSVitaAction = () => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            const GAMES_PSVITA = `https://api.rawg.io/api/games?platforms=19&key=${API_KEY}`;
            let promise = await fetch(GAMES_PSVITA)
            let result = await promise.json();
            dispatch({ type: 'FETCH_GAMES_PSVITA', payload: result.results, totalPages: Math.floor(result.count / 20), isPSVitaLoaded: false })
        } catch (error) {
            console.log(error)
        }
    }
}

// SEARCH
export const searchAction = (query) => {
    return async (dispatch) => {
        try {
            const API_KEY = '63150f4e38d549339ba029a37509023c';
            //`https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`
            //`https://api.rawg.io/api/games?search=${query}&search_precise=true&key=${API_KEY}`
            const SEARCH_RESULTS = `https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`;
            let promise = await fetch(SEARCH_RESULTS)
            let result = await promise.json();
            dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: result.results, totalPages: Math.floor(result.count / 20), isSearchLoaded: true })
        } catch (error) {
            console.log(error)
        }
    }
}