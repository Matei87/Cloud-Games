import { combineReducers } from 'redux';
import {
    changeBestOfTheYearReducer, bestOfTheYearReducer, popularIn2020Reducer, changePopularIn2020Reducer,
    popularIn2019Reducer, changePopularIn2019Reducer, allTimePopularReducer, changeAllTimePopularReducer,
    last30DaysReducer, changeLast30DaysReducer, thisWeekReducer, changeThisWeekReducer,
    nextWeekReducer, changeNextWeekReducer, gamesPCReducer, platformsPageReducer,
    storesPageReducer, genresPageReducer, gamesPlaystationReducer, gamesPlaystation2Reducer,
    gamesPlaystation3Reducer, gamesPlaystation4Reducer, gamesPlaystation5Reducer,
    gamesXboxOneReducer, gamesXboxSeriesSXReducer, gamesXbox360Reducer, gamesXboxOldReducer,
    gamesNintendoSwitchReducer, gamesNintendo3DSReducer, gamesNintendoDSReducer, gamesNintendoDSIReducer,
    gamesIosReducer, gamesAndroidReducer, gamesLinuxReducer, gamesMacOSReducer,
    gamesPSVitaReducer, gamesPSPReducer, gamesWiiReducer, gamesWiiUReducer, searchReducer
} from './reducers/reducers';

const rootReducer = combineReducers({
    bestOfTheYear: bestOfTheYearReducer,
    changeBestOfTheYear: changeBestOfTheYearReducer,
    popularIn2020: popularIn2020Reducer,
    changePopularIn2020: changePopularIn2020Reducer,
    popularIn2019: popularIn2019Reducer,
    changePopularIn2019: changePopularIn2019Reducer,
    allTimePopular: allTimePopularReducer,
    changeAllTimePopular: changeAllTimePopularReducer,
    gamesLast30Days: last30DaysReducer,
    gamesChangeLast30Days: changeLast30DaysReducer,
    thisWeek: thisWeekReducer,
    changeThisWeek: changeThisWeekReducer,
    nextWeek: nextWeekReducer,
    changeNextWeek: changeNextWeekReducer,
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