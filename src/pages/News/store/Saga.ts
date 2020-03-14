import {
    call, put, takeLatest, delay, race, all,
} from 'redux-saga/effects';
import ApiService from '@services/News';
import Actions, {Types} from './Reducer';

/**
 * 取列表
 * @returns {IterableIterator<*>}
 */
export function* fetchPaginate(payload: any) {
    try {
        yield put(Actions.fetchPaginateBegin());

        // 避免 API回傳時間過短, 會讓Loading畫面快速閃過
        // 故將時間設定回傳時間至少0.4秒
        const [response, nonTime]: any = yield all([
            call(ApiService.getNewsList),
            delay(400),
        ]);
        const {body} = response;

        yield put(Actions.fetchPaginateSuccess(body.data.rows));

    } catch (e) {
        yield put(Actions.fetchPaginateFail(e.message));
    }
}

/**
 * 取明細資料
 * @returns {IterableIterator<*>}
 */
export function* fetchCurrent(payload: any) {
    try {
        yield put(Actions.fetchCurrentBegin());
        const {id} = payload;

        // const response = yield call(ApiService.getNewsDetail, id);
        // const {data: responseData} = response;

        yield delay(1000);

        // yield put(Actions.fetchCurrentSuccess(responseData.data));

    } catch (e) {
        yield put(Actions.fetchCurrentFail(e.message));
    }
}

export default function* injectSagaRoot() {
    yield takeLatest(Types.FETCH_CURRENT, fetchCurrent);
    yield takeLatest(Types.FETCH_PAGINATE, fetchPaginate);
}
