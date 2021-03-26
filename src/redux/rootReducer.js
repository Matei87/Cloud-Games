import { combineReducers } from 'redux';
import {
    bestOfTheYearReducer, popularIn2020Reducer, popularIn2019Reducer, allTimePopularReducer,
    last30DaysReducer, thisWeekReducer, nextWeekReducer, gamesPCReducer, platformsPageReducer,
    storesPageReducer, genresPageReducer, gamesPlaystationReducer, gamesPlaystation2Reducer,
    gamesPlaystation3Reducer, gamesPlaystation4Reducer, gamesPlaystation5Reducer,
    gamesXboxOneReducer, gamesXboxSeriesSXReducer, gamesXbox360Reducer, gamesXboxOldReducer,
    gamesNintendoSwitchReducer, gamesNintendo3DSReducer, gamesNintendoDSReducer, gamesNintendoDSIReducer,
    gamesIosReducer, gamesAndroidReducer, gamesLinuxReducer, gamesMacOSReducer,
    gamesPSVitaReducer, gamesPSPReducer, gamesWiiReducer, gamesWiiUReducer, searchReducer
} from './reducers/reducers';

const rootReducer = combineReducers({
    bestOfTheYear: bestOfTheYearReducer,
    popularIn2020: popularIn2020Reducer,
    popularIn2019: popularIn2019Reducer,
    allTimePopular: allTimePopularReducer,
    gameslast30Days: last30DaysReducer,
    thisWeek: thisWeekReducer,
    nextWeek: nextWeekReducer,
    platformsPage: platformsPageReducer,
    storesPage: storesPageReducer,
    genresPage: genresPageReducer,
    gamesPC: gamesPCReducer,
    gamesPlaystation: gamesPlaystationReducer,
    gamesPlaystation2: gamesPlaystation2Reducer,
    gamesPlaystation3: gamesPlaystation3Reducer,
    gamesPlaystation4: gamesPlaystation4Reducer,
    gamesPlaystation5: gamesPlaystation5Reducer,
    gamesXboxOne: gamesXboxOneReducer,
    gamesXboxSeriesSX: gamesXboxSeriesSXReducer,
    gamesXbox360: gamesXbox360Reducer,
    gamesXboxOld: gamesXboxOldReducer,
    gamesNintendoSwitch: gamesNintendoSwitchReducer,
    gamesNintendoDS: gamesNintendoDSReducer,
    gamesNintendoDSI: gamesNintendoDSIReducer,
    gamesLinux: gamesLinuxReducer,
    gamesMacOS: gamesMacOSReducer,
    gamesNintendo3DS: gamesNintendo3DSReducer,
    gamesIos: gamesIosReducer,
    gamesAndroid: gamesAndroidReducer,
    gamesPSVita: gamesPSVitaReducer,
    gamesPSP: gamesPSPReducer,
    gamesWii: gamesWiiReducer,
    gamesWiiU: gamesWiiUReducer,
    search: searchReducer
})
export default rootReducer;