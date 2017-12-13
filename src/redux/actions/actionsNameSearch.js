import { fromJS } from 'immutable';
import axios from 'axios';

import { getSearchTerm, getErrorMessage } from '../selectors/selectorsNameSearch';

export const loading = () => ({
  type: 'LOADING',
});

export const stopLoading = () => ({
  type: 'STOP_LOADING',
});

export const setSearchTerm = searchTerm => ({
  type: 'SET_SEARCH_TERM',
  searchTerm,
});

export const setError = error => ({
  type: 'SET_ERROR',
  error,
});

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter,
});

export const setResponse = response => ({
  type: 'SET_RESPONSE',
  response,
});

export const validateForm = () => (dispatch, getState) => {
  const term = getSearchTerm(getState());

  if (term === '') {
    dispatch(setError('Search query cannot be empty. Please enter a search string.'));
  } else if (term.match(/[^0-9a-z]/i)) {
    dispatch(setError('Search query should contain letters and numbers only.'));
  } else {
    dispatch(submitForm(term));
  }
}

export const submitForm = (term) => (dispatch, getState) => {
  if (getErrorMessage(getState()) !== '') {
    return;
  }
  dispatch(loading());

  const ROOT_URL = 'https://swapi.co/api/people/?page=';
  const allRequests = () => {
    const requests = [];
    for (let i = 1; i < 10; i++){
      requests.push(`${ROOT_URL}${i}`);
    }
    return requests;
  }

  axios.all(allRequests().map(l => axios.get(l)))
  .then(axios.spread((...res) => {
    const response = res.map(page => page.data.results)
                        .reduce((acc, curr) => acc.concat(curr))
                        .filter(person => person.name.toLowerCase()
                                          .includes(getSearchTerm(getState()).toLowerCase()))
    dispatch(setFilter('all'));
    dispatch(setResponse(fromJS(response)));
  }))
  .catch(err => {
    console.log(err);
    dispatch(stopLoading());
  });
};
