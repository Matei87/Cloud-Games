const initialState = {
    games: [],
    //bestOfTheYear: [],
    //allTimePopular: [],
    //popularIn2020: [],
    //popularIn2019: [],
    //gamesThisWeek: [],
    //gamesNextWeek: [],
    games7DaysFromNow: [],
    gamesLastMOnth: [],
    gamesLast30Days: [],

    //gamesPC: [],
    //gamesPlaystation4: [],
    //gamesXboxOne: [],
    //gamesNintendoSwitch: [],
    //gamesIos: [],
    //gamesAndroid: [],

    //searchResults: [],

    generator: [],
    isLoaded: false,

}

const bestOfTheYearState = {
    bestOfTheYear: [],
    totalPages: 0,
    isBestOfTheYearLoaded: false
}
export const bestOfTheYearReducer = (state = bestOfTheYearState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_BEST_OF_THE_YEAR':
            return {
                ...state,
                bestOfTheYear: action.payload,
                totalPages: action,
                isBestOfTheYearLoaded: true
            }
        default:
            return state;
    }
}
const changeBestOfTheYearState = {
    changeBestOfTheYear: [],
    page: 1,
    isChangeBestOfTheYearLoaded: false
}
export const changeBestOfTheYearReducer = (state = changeBestOfTheYearState, action) => {
    console.log('changeBestOfTheYearReducer', action)
    switch (action.type) {
        case 'FETCH_BEST_OF_THE_YEAR_NEXT':
            return {
                ...state,
                changeBestOfTheYear: action.payload,
                page: action,
                isChangeBestOfTheYearLoaded: true
            }
        default:
            return state;
    }
}

const popularIn2020State = {
    popularIn2020: [],
    totalPages: 0,
    isPopularIn2020Loaded: false
}
export const popularIn2020Reducer = (state = popularIn2020State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_POPULAR_IN_2020':
            return {
                ...state,
                popularIn2020: action.payload,
                totalPages: action,
                isPopularIn2020Loaded: true
            }
        default:
            return state;
    }
}
const changePopularIn2020State = {
    changePopularIn2020: [],
    page: 1,
    isChangePopularIn2020Loaded: false
}
export const changePopularIn2020Reducer = (state = changePopularIn2020State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_POPULAR_IN_2020_NEXT':
            return {
                ...state,
                changePopularIn2020: action.payload,
                page: action,
                isChangePopularIn2020Loaded: true
            }
        default:
            return state;
    }
}

const popularIn2019State = {
    popularIn2019: [],
    totalPages: 0,
    isPopularIn2019Loaded: false
}
export const popularIn2019Reducer = (state = popularIn2019State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_POPULAR_IN_2019':
            return {
                ...state,
                popularIn2019: action.payload,
                totalPages: action,
                isPopularIn2019Loaded: true
            }
        default:
            return state;
    }
}
const changePopularIn2019State = {
    changePopularIn2019: [],
    page: 1,
    ischangePopularIn2019Loaded: false
}
export const changePopularIn2019Reducer = (state = changePopularIn2019State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_POPULAR_IN_2019_NEXT':
            return {
                ...state,
                changePopularIn2019: action.payload,
                page: action,
                ischangePopularIn2019Loaded: true
            }
        default:
            return state;
    }
}

const allTimePopularState = {
    allTimePopular: [],
    totalPages: 0,
    isAllTimePopularLoaded: false
}
export const allTimePopularReducer = (state = allTimePopularState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_ALL_TIME_POPULAR':
            return {
                ...state,
                allTimePopular: action.payload,
                totalPages: action,
                isAllTimePopularLoaded: true
            }
        default:
            return state;
    }
}
const changeAllTimePopularState = {
    changeAllTimePopular: [],
    page: 1,
    ischangeAllTimePopularLoaded: false
}
export const changeAllTimePopularReducer = (state = changeAllTimePopularState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_ALL_TIME_POPULAR_NEXT':
            return {
                ...state,
                changeAllTimePopular: action.payload,
                page: action,
                ischangeAllTimePopularLoaded: true
            }
        default:
            return state;
    }
}

const last30DaysState = {
    gameslast30Days: [],
    totalPages: 0,
    isLast30DaysLoaded: false
}
export const last30DaysReducer = (state = last30DaysState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_LAST_30_DAYS':
            return {
                ...state,
                gameslast30Days: action.payload,
                totalPages: action,
                isLast30DaysLoaded: true
            }
        default:
            return state;
    }
}
const changeLast30DaysState = {
    gamesChangeLast30Days: [],
    page: 1,
    isChangeLast30DaysLoaded: false
}
export const changeLast30DaysReducer = (state = changeLast30DaysState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_LAST_30_DAYS_NEXT':
            return {
                ...state,
                gamesChangeLast30Days: action.payload,
                page: action,
                isChangeLast30DaysLoaded: true
            }
        default:
            return state;
    }
}

const thisWeekState = {
    thisWeek: [],
    totalPages: 0,
    isThisWeekLoaded: false
}
export const thisWeekReducer = (state = thisWeekState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_THIS_WEEK':
            return {
                ...state,
                thisWeek: action.payload,
                totalPages: action,
                isThisWeekLoaded: true
            }
        default:
            return state;
    }
}
const changeThisWeekState = {
    changeThisWeek: [],
    page: 1,
    isChangeThisWeekLoaded: false
}
export const changeThisWeekReducer = (state = changeThisWeekState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_THIS_WEEK_NEXT':
            return {
                ...state,
                changeThisWeek: action.payload,
                page: action,
                isChangeThisWeekLoaded: true
            }
        default:
            return state;
    }
}

const nextWeekState = {
    nextWeek: [],
    totalPages: 0,
    isNextWeekLoaded: false
}
export const nextWeekReducer = (state = nextWeekState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NEXT_WEEK':
            return {
                ...state,
                nextWeek: action.payload,
                totalPages: action,
                isNextWeekLoaded: true
            }
        default:
            return state;
    }
}
const changeNextWeekState = {
    changeNextWeek: [],
    page: 1,
    isChangeNextWeekLoaded: false
}
export const changeNextWeekReducer = (state = changeNextWeekState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NEXT_WEEK_NEXT':
            return {
                ...state,
                changeNextWeek: action.payload,
                page: action,
                isChangeNextWeekLoaded: true
            }
        default:
            return state;
    }
}

// BROWSE
const platformsState = {
    platformsPage: [],
    isPlatformsLoaded: false
}
export const platformsPageReducer = (state = platformsState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_PLATFORMS':
            return {
                ...state,
                platformsPage: action.payload,
                isPlatformsLoaded: true
            }
        default:
            return state;
    }
}

const storesState = {
    storesPage: [],
    isStoresLoaded: false
}
export const storesPageReducer = (state = storesState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_STORES':
            return {
                ...state,
                storesPage: action.payload,
                isStoresLoaded: true
            }
        default:
            return state;
    }
}

const genresState = {
    genresPage: [],
    isGenresLoaded: false
}
export const genresPageReducer = (state = genresState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GENRES':
            return {
                ...state,
                genresPage: action.payload,
                isGenresLoaded: true
            }
        default:
            return state;
    }
}


//PLATFORMS
const gamesPCState = {
    gamesPC: [],
    totalPages: 0,
    isGamesPCLoaded: false
}
export const gamesPCReducer = (state = gamesPCState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PC':
            return {
                ...state,
                gamesPC: action.payload,
                totalPages: action,
                isGamesPCLoaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystationState = {
    gamesPlaystation: [],
    totalPages: 0,
    isPlayStationLoaded: false
}
export const gamesPlaystationReducer = (state = gamesPlaystationState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION':
            return {
                ...state,
                gamesPlaystation: action.payload,
                totalPages: action,
                isPlayStationLoaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation2State = {
    gamesPlaystation2: [],
    totalPages: 0,
    isPlayStation2Loaded: false
}
export const gamesPlaystation2Reducer = (state = gamesPlaystation2State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_2':
            return {
                ...state,
                gamesPlaystation2: action.payload,
                totalPages: action,
                isPlayStation2Loaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation3State = {
    gamesPlaystation3: [],
    totalPages: 0,
    isPlayStation3Loaded: false
}
export const gamesPlaystation3Reducer = (state = gamesPlaystation3State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_3':
            return {
                ...state,
                gamesPlaystation3: action.payload,
                totalPages: action,
                isPlayStation3Loaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation4State = {
    gamesPlaystation4: [],
    totalPages: 0,
    isPlayStation4Loaded: false
}
export const gamesPlaystation4Reducer = (state = gamesPlaystation4State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_4':
            return {
                ...state,
                gamesPlaystation4: action.payload,
                totalPages: action,
                isPlayStation4Loaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation5State = {
    gamesPlaystation5: [],
    totalPages: 0,
    isPlayStation5Loaded: false
}
export const gamesPlaystation5Reducer = (state = gamesPlaystation5State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_5':
            return {
                ...state,
                gamesPlaystation5: action.payload,
                totalPages: action,
                isPlayStation5Loaded: true
            }
        default:
            return state;
    }
}

const gamesXboxOneState = {
    gamesXboxOne: [],
    totalPages: 0,
    isXboxOneLoaded: false
}
export const gamesXboxOneReducer = (state = gamesXboxOneState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_ONE':
            return {
                ...state,
                gamesXboxOne: action.payload,
                totalPages: action,
                isXboxOneLoaded: true
            }
        default:
            return state;
    }
}

const gamesXboxSeriesSXState = {
    gamesXboxSeriesSX: [],
    totalPages: 0,
    isXboxSeriesSXLoaded: false
}
export const gamesXboxSeriesSXReducer = (state = gamesXboxSeriesSXState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_SERIES_SX':
            return {
                ...state,
                gamesXboxSeriesSX: action.payload,
                totalPages: action,
                isXboxSeriesSXLoaded: true
            }
        default:
            return state;
    }
}

const gamesXbox360State = {
    gamesXbox360: [],
    totalPages: 0,
    isXbox360Loaded: false
}
export const gamesXbox360Reducer = (state = gamesXbox360State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_360':
            return {
                ...state,
                gamesXbox360: action.payload,
                totalPages: action,
                isXbox360Loaded: true
            }
        default:
            return state;
    }
}

const gamesXboxOldState = {
    gamesXboxOld: [],
    totalPages: 0,
    isXboxOldLoaded: false
}
export const gamesXboxOldReducer = (state = gamesXboxOldState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_OLD':
            return {
                ...state,
                gamesXboxOld: action.payload,
                totalPages: action,
                isXboxOldLoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendoSwitchState = {
    gamesNintendoSwitch: [],
    totalPages: 0,
    isNintendoSwitchLoaded: false
}
export const gamesNintendoSwitchReducer = (state = gamesNintendoSwitchState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_SWITCH':
            return {
                ...state,
                gamesNintendoSwitch: action.payload,
                totalPages: action,
                isNintendoSwitchLoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendoDSState = {
    gamesNintendoDS: [],
    totalPages: 0,
    isNintendoDSLoaded: false
}
export const gamesNintendoDSReducer = (state = gamesNintendoDSState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_DS':
            return {
                ...state,
                gamesNintendoDS: action.payload,
                totalPages: action,
                isNintendoDSLoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendoDSIState = {
    gamesNintendoDSI: [],
    totalPages: 0,
    isNintendoDSILoaded: false
}
export const gamesNintendoDSIReducer = (state = gamesNintendoDSIState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_DSI':
            return {
                ...state,
                gamesNintendoDSI: action.payload,
                totalPages: action,
                isNintendoDSILoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendo3DSState = {
    gamesNintendo3DS: [],
    totalPages: 0,
    isNintendo3DSLoaded: false
}
export const gamesNintendo3DSReducer = (state = gamesNintendo3DSState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_3DS':
            return {
                ...state,
                gamesNintendo3DS: action.payload,
                totalPages: action,
                isNintendo3DSLoaded: true
            }
        default:
            return state;
    }
}

const gamesIosState = {
    gamesIos: [],
    totalPages: 0,
    isIosLoaded: false
}
export const gamesIosReducer = (state = gamesIosState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_IOS':
            return {
                ...state,
                gamesIos: action.payload,
                totalPages: action,
                isIosLoaded: true
            }
        default:
            return state;
    }
}

const gamesAndroidState = {
    gamesAndroid: [],
    totalPages: 0,
    isAndroidLoaded: false
}
export const gamesAndroidReducer = (state = gamesAndroidState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_ANDROID':
            return {
                ...state,
                gamesAndroid: action.payload,
                totalPages: action,
                isAndroidLoaded: true
            }
        default:
            return state;
    }
}

const gamesLinuxState = {
    gamesLinux: [],
    totalPages: 0,
    isLinuxLoaded: false
}
export const gamesLinuxReducer = (state = gamesLinuxState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_LINUX':
            return {
                ...state,
                gamesLinux: action.payload,
                totalPages: action,
                isLinuxLoaded: true
            }
        default:
            return state;
    }
}

const gamesMacOSState = {
    gamesMacOS: [],
    totalPages: 0,
    isMacOSLoaded: false
}
export const gamesMacOSReducer = (state = gamesMacOSState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_MACOS':
            return {
                ...state,
                gamesMacOS: action.payload,
                totalPages: action,
                isMacOSLoaded: true
            }
        default:
            return state;
    }
}

const gamesWiiUState = {
    gamesWiiU: [],
    totalPages: 0,
    isWiiULoaded: false
}
export const gamesWiiUReducer = (state = gamesWiiUState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_WIIU':
            return {
                ...state,
                gamesWiiU: action.payload,
                totalPages: action,
                isWiiULoaded: true
            }
        default:
            return state;
    }
}

const gamesWiiState = {
    gamesWii: [],
    totalPages: 0,
    isWiiLoaded: false
}
export const gamesWiiReducer = (state = gamesWiiState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_WII':
            return {
                ...state,
                gamesWii: action.payload,
                totalPages: action,
                isWiiLoaded: true
            }
        default:
            return state;
    }
}

const gamesPSPState = {
    gamesPSP: [],
    totalPages: 0,
    isPSPLoaded: false
}
export const gamesPSPReducer = (state = gamesPSPState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PSP':
            return {
                ...state,
                gamesPSP: action.payload,
                totalPages: action,
                isPSPLoaded: true
            }
        default:
            return state;
    }
}

const gamesPSVitaState = {
    gamesPSVita: [],
    totalPages: 0,
    isPSVitaLoaded: false
}
export const gamesPSVitaReducer = (state = gamesPSVitaState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PSVITA':
            return {
                ...state,
                gamesPSVita: action.payload,
                totalPages: action,
                isPSVitaLoaded: true
            }
        default:
            return state;
    }
}


// SEARCH
const searchState = {
    searchResults: [],
    totalPages: 0,
    isSearchLoaded: false
}
export const searchReducer = (state = searchState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload,
                totalPages: action,
                isSearchLoaded: true
            }
        default:
            return state;
    }
}