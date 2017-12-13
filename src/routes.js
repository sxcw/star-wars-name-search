import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => {
      return (
        <div className="app">
          <Header />
          <div>
            <Component {...matchProps} />
          </div>
          <Footer />
        </div>
      );
    }}
  />
);

const routes = (
  <BrowserRouter>
    <Switch>
      <DefaultLayout
        exact
        path="/"
        component={AppContainer}
      />
    </Switch>
  </BrowserRouter>
);

export default routes;
