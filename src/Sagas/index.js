import { put, takeLatest } from 'redux-saga/effects'
import { ADD_DOCUMENT, ADD_DOCUMENT_FAILED, DOCUMENT_PARSED, ADD_URL, ADD_URL_FAILED } from '../Actions/Documents'
import { ParseDocument, FetchDocument } from '../Services/Documents'

function* addDocument(action) {
    try{
        const results = yield ParseDocument(action.documentContent)
        yield put({type: DOCUMENT_PARSED, results})
    } catch(e) {
        yield put({type: ADD_DOCUMENT_FAILED, error: e})
    }

}

function* addUrl(action) {
    try {
        const documentContent = yield FetchDocument(action.url)
        console.log(documentContent)
        yield put({type: ADD_DOCUMENT, documentContent})
    } catch(e) {
        yield put({type: ADD_URL_FAILED, error: e})
    }
}

function* rootSaga() {
  yield takeLatest(ADD_DOCUMENT, addDocument);
  yield takeLatest(ADD_URL, addUrl);
}

export default rootSaga;