import axios from 'axios';

const FETCH_STOCK_METRICES_REQUEST = 'FETCH_STOCK_METRICES_REQUEST';
const FETCH_STOCK_METRICES_SUCCESS = 'FETCH_STOCK_METRICES_SUCCESS';
const FETCH_STOCK_METRICES_FAILURE = 'FETCH_STOCK_METRICES_FAILURE';

const fetchMetricesSuccess = (metrices) => ({
  type: FETCH_STOCK_METRICES_SUCCESS,
  payload: metrices,
});

const fetchMetricesFailure = (error) => ({
  type: FETCH_STOCK_METRICES_FAILURE,
  payload: error,
});

const fetchMetricesRequest = () => ({
  type: FETCH_STOCK_METRICES_REQUEST,
});

const intialState = {
  loading: true,
  data: [],
  error: false,
};

const API_KEY = 'c1c49f469a4a562fcad4008d7e66762d';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';
export const fetchMetrices = () => (dispatch) => {
  dispatch(fetchMetricesRequest);
  axios
    .get(`${BASE_URL}/stock_market/actives?apikey=${API_KEY}`)
    .then((response) => {
      console.log(response.data);
      dispatch(fetchMetricesSuccess(response.data));
    })
    .catch(() => dispatch(fetchMetricesFailure(true)));
};

const stockReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_METRICES_REQUEST:
      return { ...state, loading: true };

    case FETCH_STOCK_METRICES_SUCCESS:
      return { error: false, data: action.payload, loading: false };

    case FETCH_STOCK_METRICES_FAILURE:
      return { data: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
export default stockReducer;
