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
    isBestOfTheYearLoaded: false
}
export const bestOfTheYearReducer = (state = bestOfTheYearState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_BEST_OF_THE_YEAR':
            return {
                ...state,
                bestOfTheYear: action.payload,
                isBestOfTheYearLoaded: true
            }
        default:
            return state;
    }
}

const popularIn2020State = {
    popularIn2020: [],
    isPopularIn2020Loaded: false
}
export const popularIn2020Reducer = (state = popularIn2020State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_POPULAR_IN_2020':
            return {
                ...state,
                popularIn2020: action.payload,
                isPopularIn2020Loaded: true
            }
        default:
            return state;
    }
}

const popularIn2019State = {
    popularIn2019: [],
    isPopularIn2019Loaded: false
}
export const popularIn2019Reducer = (state = popularIn2019State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_POPULAR_IN_2019':
            return {
                ...state,
                popularIn2019: action.payload,
                isPopularIn2019Loaded: true
            }
        default:
            return state;
    }
}

const allTimePopularState = {
    allTimePopular: [],
    isAllTimePopularLoaded: false
}
export const allTimePopularReducer = (state = allTimePopularState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_ALL_TIME_POPULAR':
            return {
                ...state,
                allTimePopular: action.payload,
                isAllTimePopularLoaded: true
            }
        default:
            return state;
    }
}

const last30DaysState = {
    gameslast30Days: [],
    isLast30DaysLoaded: false
}
export const last30DaysReducer = (state = last30DaysState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_LAST_30_DAYS':
            return {
                ...state,
                gameslast30Days: action.payload,
                isLast30DaysLoaded: true
            }
        default:
            return state;
    }
}

const thisWeekState = {
    thisWeek: [],
    isThisWeekLoaded: false
}
export const thisWeekReducer = (state = thisWeekState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_THIS_WEEK':
            return {
                ...state,
                thisWeek: action.payload,
                isThisWeekLoaded: true
            }
        default:
            return state;
    }
}

const nextWeekState = {
    nextWeek: [],
    isNextWeekLoaded: false
}
export const nextWeekReducer = (state = nextWeekState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NEXT_WEEK':
            return {
                ...state,
                nextWeek: action.payload,
                isNextWeekLoaded: true
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
    isGamesPCLoaded: false
}
export const gamesPCReducer = (state = gamesPCState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PC':
            return {
                ...state,
                gamesPC: action.payload,
                isGamesPCLoaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystationState = {
    gamesPlaystation: [],
    isPlayStationLoaded: false
}
export const gamesPlaystationReducer = (state = gamesPlaystationState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION':
            return {
                ...state,
                gamesPlaystation: action.payload,
                isPlayStationLoaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation2State = {
    gamesPlaystation2: [],
    isPlayStation2Loaded: false
}
export const gamesPlaystation2Reducer = (state = gamesPlaystation2State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_2':
            return {
                ...state,
                gamesPlaystation2: action.payload,
                isPlayStation2Loaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation3State = {
    gamesPlaystation3: [],
    isPlayStation3Loaded: false
}
export const gamesPlaystation3Reducer = (state = gamesPlaystation3State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_3':
            return {
                ...state,
                gamesPlaystation3: action.payload,
                isPlayStation3Loaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation4State = {
    gamesPlaystation4: [],
    isPlayStation4Loaded: false
}
export const gamesPlaystation4Reducer = (state = gamesPlaystation4State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_4':
            return {
                ...state,
                gamesPlaystation4: action.payload,
                isPlayStation4Loaded: true
            }
        default:
            return state;
    }
}

const gamesPlaystation5State = {
    gamesPlaystation5: [],
    isPlayStation5Loaded: false
}
export const gamesPlaystation5Reducer = (state = gamesPlaystation5State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PLAYSTATION_5':
            return {
                ...state,
                gamesPlaystation5: action.payload,
                isPlayStation5Loaded: true
            }
        default:
            return state;
    }
}

const gamesXboxOneState = {
    gamesXboxOne: [],
    isXboxOneLoaded: false
}
export const gamesXboxOneReducer = (state = gamesXboxOneState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_ONE':
            return {
                ...state,
                gamesXboxOne: action.payload,
                isXboxOneLoaded: true
            }
        default:
            return state;
    }
}

const gamesXboxSeriesSXState = {
    gamesXboxSeriesSX: [],
    isXboxSeriesSXLoaded: false
}
export const gamesXboxSeriesSXReducer = (state = gamesXboxSeriesSXState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_SERIES_SX':
            return {
                ...state,
                gamesXboxSeriesSX: action.payload,
                isXboxSeriesSXLoaded: true
            }
        default:
            return state;
    }
}

const gamesXbox360State = {
    gamesXbox360: [],
    isXbox360Loaded: false
}
export const gamesXbox360Reducer = (state = gamesXbox360State, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_360':
            return {
                ...state,
                gamesXbox360: action.payload,
                isXbox360Loaded: true
            }
        default:
            return state;
    }
}

const gamesXboxOldState = {
    gamesXboxOld: [],
    isXboxOldLoaded: false
}
export const gamesXboxOldReducer = (state = gamesXboxOldState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_XBOX_OLD':
            return {
                ...state,
                gamesXboxOld: action.payload,
                isXboxOldLoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendoSwitchState = {
    gamesNintendoSwitch: [],
    isNintendoSwitchLoaded: false
}
export const gamesNintendoSwitchReducer = (state = gamesNintendoSwitchState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_SWITCH':
            return {
                ...state,
                gamesNintendoSwitch: action.payload,
                isNintendoSwitchLoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendoDSState = {
    gamesNintendoDS: [],
    isNintendoDSLoaded: false
}
export const gamesNintendoDSReducer = (state = gamesNintendoDSState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_DS':
            return {
                ...state,
                gamesNintendoDS: action.payload,
                isNintendoDSLoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendoDSIState = {
    gamesNintendoDSI: [],
    isNintendoDSILoaded: false
}
export const gamesNintendoDSIReducer = (state = gamesNintendoDSIState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_DSI':
            return {
                ...state,
                gamesNintendoDSI: action.payload,
                isNintendoDSILoaded: true
            }
        default:
            return state;
    }
}

const gamesNintendo3DSState = {
    gamesNintendo3DS: [],
    isNintendo3DSLoaded: false
}
export const gamesNintendo3DSReducer = (state = gamesNintendo3DSState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_NINTENDO_3DS':
            return {
                ...state,
                gamesNintendo3DS: action.payload,
                isNintendo3DSLoaded: true
            }
        default:
            return state;
    }
}

const gamesIosState = {
    gamesIos: [],
    isIosLoaded: false
}
export const gamesIosReducer = (state = gamesIosState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_IOS':
            return {
                ...state,
                gamesIos: action.payload,
                isIosLoaded: true
            }
        default:
            return state;
    }
}

const gamesAndroidState = {
    gamesAndroid: [],
    isAndroidLoaded: false
}
export const gamesAndroidReducer = (state = gamesAndroidState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_ANDROID':
            return {
                ...state,
                gamesAndroid: action.payload,
                isAndroidLoaded: true
            }
        default:
            return state;
    }
}

const gamesLinuxState = {
    gamesLinux: [],
    isLinuxLoaded: false
}
export const gamesLinuxReducer = (state = gamesLinuxState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_LINUX':
            return {
                ...state,
                gamesLinux: action.payload,
                isLinuxLoaded: true
            }
        default:
            return state;
    }
}

const gamesMacOSState = {
    gamesMacOS: [],
    isMacOSLoaded: false
}
export const gamesMacOSReducer = (state = gamesMacOSState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_MACOS':
            return {
                ...state,
                gamesMacOS: action.payload,
                isMacOSLoaded: true
            }
        default:
            return state;
    }
}

const gamesWiiUState = {
    gamesWiiU: [],
    isWiiULoaded: false
}
export const gamesWiiUReducer = (state = gamesWiiUState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_WIIU':
            return {
                ...state,
                gamesWiiU: action.payload,
                isWiiULoaded: true
            }
        default:
            return state;
    }
}

const gamesWiiState = {
    gamesWii: [],
    isWiiLoaded: false
}
export const gamesWiiReducer = (state = gamesWiiState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_WII':
            return {
                ...state,
                gamesWii: action.payload,
                isWiiLoaded: true
            }
        default:
            return state;
    }
}

const gamesPSPState = {
    gamesPSP: [],
    isPSPLoaded: false
}
export const gamesPSPReducer = (state = gamesPSPState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PSP':
            return {
                ...state,
                gamesPSP: action.payload,
                isPSPLoaded: true
            }
        default:
            return state;
    }
}

const gamesPSVitaState = {
    gamesPSVita: [],
    isPSVitaLoaded: false
}
export const gamesPSVitaReducer = (state = gamesPSVitaState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_GAMES_PSVITA':
            return {
                ...state,
                gamesPSVita: action.payload,
                isPSVitaLoaded: true
            }
        default:
            return state;
    }
}


// SEARCH
const searchState = {
    searchResults: [],
    isSearchLoaded: false
}
export const searchReducer = (state = searchState, action) => {
    console.log('reducers', action)
    switch (action.type) {
        case 'FETCH_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload,
                isSearchLoaded: true
            }
        default:
            return state;
    }
}