import { DOCUMENT_PARSED } from '../Actions/Documents'

const initialState = {
    count: 0,
    terms: { 
        /* dictionary of string -> {term_frequency, documentId of doc it has highest term_freq in}*/
    },
    documents: {
        /* dictionary of documentId->{documentId, identifier, wordCount} */
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
            return {
                count: state.count + 1,
                documents,
                terms: newTerms
            }
        default:
            break;
    }
    return state
}