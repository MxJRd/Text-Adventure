import * as React from 'react';
import Prompt from './prompt';
import Terminal from './Terminal';
import Hint from './hint';

type AppProps = { room: number}

const HomePageRenderer = ({room}: AppProps) => {

  return (
    <div>
      <Prompt room={room} />
      <Terminal/>
      <Hint />
    </div>
  )
};

export default HomePageRenderer;
