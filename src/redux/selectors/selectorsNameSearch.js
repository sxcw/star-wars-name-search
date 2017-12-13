import { createSelector } from 'reselect';

const getNameSearch = state => state.nameSearch;

const getInfo = createSelector(
  getNameSearch,
  nameSearch => nameSearch.get('info')
);

const getForm = createSelector(
  getNameSearch,
  nameSearch => nameSearch.get('form')
);

export const isLoading = createSelector(
  getInfo,
  info => info.get('loading')
);

export const getResponse = createSelector(
  getInfo,
  info => info.get('response')
);

export const getSearchTerm = createSelector(
  getForm,
  form => form.get('searchTerm')
);

export const getErrorMessage = createSelector(
  getForm,
  form => form.get('error')
);

export const getFilter = createSelector(
  getForm,
  form => form.get('filter')
);

export const getPeople = createSelector(
  getResponse,
  getFilter,
  (response, filter) => {
    if (filter === 'male' || filter === 'female') {
      response = response.filter(
        response => response
                    .get('gender') === filter
      )
    }

    return response;
  }
);
