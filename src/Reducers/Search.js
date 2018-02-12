import { DO_SEARCH } from '../Actions/Search'

const initialState = {
    searchTerms: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case DO_SEARCH:
            return {
                searchTerms: action.searchTerm.split('\n')
            }
        default:
            break;
    }
    return state
}