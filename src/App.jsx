import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import {getCallById, getAllCalls, archiveCallById, resetCallsToInitialState} from "./requests";

const App = () => {

    useEffect( () => {
        getAllCalls()
        getCallById(7834)
        archiveCallById(7834)
        getCallById(7834)
        resetCallsToInitialState()
    }, []);


  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
