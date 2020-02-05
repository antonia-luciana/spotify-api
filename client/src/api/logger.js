import { routerMiddleware, push } from 'react-router-redux'
import history from "../history";

export const logger = store => next => action => {
    console.log("middleware", )
    let token_data = store.getState().playlists.token_data; 
    console.log(token_data, new Date().getTime(), typeof(new Date().getTime()))
    if (token_data && token_data.start_time + new Number(token_data.expires_in) < new Date().getTime()) {
        console.log("nu e expirat")
    }
    console.log("final")
    //store.dispatch(push('/foo'))
    //history.push("/foo")
    next(action);
}