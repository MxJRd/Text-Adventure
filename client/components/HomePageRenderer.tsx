import * as React from 'react';


const HomePageRenderer = () => {
  let myHeading: string = 'My Website Heading';
  async function test() {
    const result: Response = await fetch('google.com');
    console.log(result);
  }

  React.useEffect(() => {
    test();
  }, []);
  return (
    <div>
      <h1> Header </h1>
    </div>
  )
};

export default HomePageRenderer;