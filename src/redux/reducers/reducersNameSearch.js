import { Map, List } from 'immutable';

const initialNameSearch = Map({
  info: Map({
    loading: false,
    response: List(),
  }),
  form: Map({
    searchTerm: '',
    error: '',
    filter: 'all'
  })
});

export default (nameSearch = initialNameSearch, action) => Map({
  info: info(nameSearch.get('info'), action),
  form: form(nameSearch.get('form'), action)
});

const info = (info, action) => {
  switch (action.type) {
    case 'LOADING': return info.set('loading', true);
    case 'STOP_LOADING': return info.set('loading', false);
    case 'SET_RESPONSE': return info.set('response', action.response).set('loading', false);
    default: return info;
  }
}

const form = (form, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM': return form.set('searchTerm', action.searchTerm);
    case 'SET_ERROR': return form.set('error', action.error);
    case 'SET_FILTER': return form.set('filter', action.filter);
    case 'FORM_RESET': return initialNameSearch.get('form');
    default: return form;
  }
}
