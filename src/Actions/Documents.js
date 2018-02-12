import { action } from './index'

export const ADD_DOCUMENT = 'ADD_DOCUMENT'
export const ADD_DOCUMENT_FAILED = 'ADD_DOCUMENT_FAILED'

export const ADD_URL = 'ADD_URL'
export const ADD_URL_FAILED = 'ADD_URL_FAILED'

export const DOCUMENT_PARSED = 'DOCUMENT_PARSED'

export function addDocument(documentContent) {
    return action(ADD_DOCUMENT, {documentContent})
}

export function addUrl(url) {
    return action(ADD_URL, {url})
}
