import * as React from 'react';
import HomePageRenderer from '../components/HomePageRenderer';
import CssBaseline from '@material-ui/core/CssBaseline';

const Test = () => {
  return (
    <div>Hi</div>
  )
}

const App = () => {
  return (
    <div>
      <CssBaseline />
      <div id="app">
        <h1>App is Running</h1>
        <Test />
        <HomePageRenderer message={'hi'} />
      </div>
    </div>
  )
};

export default App;