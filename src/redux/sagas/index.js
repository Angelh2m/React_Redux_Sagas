import { all } from 'redux-saga/effects'
import toolKitSaga from './toolKitSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([ userSaga(),toolKitSaga() ])
}