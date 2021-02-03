import React from 'react';
import HelloWorld from './components/HelloWorld';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <HelloWorld />
      <GlobalStyle />
    </>
  );
};

export default App;
