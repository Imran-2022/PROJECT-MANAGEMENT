import React from 'react'
import Pages from './components/Pages/Pages';
import Context from './Context/Context';
function App() {
  return (
    <>
      <Context>
        <Pages />
      </Context>
    </>
  );
}

export default App;
