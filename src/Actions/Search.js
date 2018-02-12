import { action } from './index'

export const DO_SEARCH = 'DO_SEARCH'

export function doSearch(searchTerm) {
    return action(DO_SEARCH, {searchTerm})
}
