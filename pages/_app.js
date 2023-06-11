import React from 'react';
import withReduxStore from '../components/hocs/withReduxStore';
import { Provider } from 'react-redux';
import '../sass/style.scss';

function NextApp(props) {
  const { Component, pageProps, reduxStore } = props;
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withReduxStore(NextApp);
