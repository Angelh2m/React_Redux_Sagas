import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getUser, setUser } from '../slices/reducer/userSlice';


const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* getFunc() {
   try {
      const users = yield call(getApi);
      yield put(setUser({...users}));
   } catch {}
}

function* toolKitSaga() {
   yield takeLatest(getUser.type, getFunc);
}

export default toolKitSaga;