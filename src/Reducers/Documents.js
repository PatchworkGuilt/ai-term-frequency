import { DOCUMENT_PARSED, ADD_DOCUMENT, ADD_DOCUMENT_FAILED, ADD_URL, ADD_URL_FAILED } from '../Actions/Documents'

const initialState = {
    count: 0,
    terms: { 
        /* dictionary of string -> {term_frequency, documentId of doc it has highest term_freq in}*/
    },
    documents: {
        /* dictionary of documentId->{documentId, identifier, wordCount} */
    },
    addDocumentStatus: {
        loading: false,
        error: null
    },
    addUrlStatus: {
        loading: false,
        error: null
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT_PARSED:
            const {results: { wordCount, identifier, terms}} = action
            const newId = state.count + 1
            const documents = state.documents
            documents[newId] = {
                documentId: newId,
                wordCount: wordCount,
                identifier: identifier
            }
            const newTerms = state.terms
            for ( let term in terms){
                const termFreq = terms[term] / wordCount
                if(!newTerms[term] || newTerms[term].termFreq < termFreq){
                    newTerms[term] = {
                        termFreq,
                        documentId: newId
                    }
                }
            }
            return Object.assign({}, state, {
                count: state.count + 1,
                documents,
                terms: newTerms,
                addUrlStatus: {
                    loading: false,
                    error: null
                },
                addDocumentStatus: {
                    loading: false,
                    error: null
                }
            })
        case ADD_DOCUMENT_FAILED:
            return Object.assign({}, state, {
                addDocumentStatus: {
                    loading: false,
                    error: "Failed to add document."
                }
            })
        case ADD_URL_FAILED:
            return Object.assign({}, state, {
                addUrlStatus: {
                    loading: false,
                    error: "Failed to fetch document from URL."
                },
                addDocumentStatus: {
                    loading: false,
                    error: "Failed to add document."
                }
            })
        case ADD_DOCUMENT:
            return Object.assign({}, state, {
                addDocumentStatus: {
                    loading: true,
                    error: null
                }
            })
        case ADD_URL:
            return Object.assign({}, state, {
                addDocumentStatus: {
                    loading: true,
                    error: null
                }
            })
        default:
            break;
    }
    return state
}