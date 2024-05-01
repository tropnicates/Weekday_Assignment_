import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobBoardContainer from './components/JobBoardContainer';

function App() {
  return (
    <Provider store={store}>
      <JobBoardContainer />
    </Provider>
  );
}

export default App;