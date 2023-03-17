import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { cssDefaultTemplate2, htmlDefaultTemplate2 } from './config';
import { Context } from './context';
import useLocalStorage from './hooks/useLocalStorage';
import { Layout } from './layout/Layout';
import { IState } from './model';

const initialState: IState = {
  html: htmlDefaultTemplate2,
  css: cssDefaultTemplate2,
  theme: 'dark',
};
function App() {
  const [state, dispatch] = useLocalStorage('state', initialState);

  return (
    <div className="App">
      <Header />
      <main>
        <Context.Provider value={{ state, dispatch }}>
          <Layout />
        </Context.Provider>
      </main>
    </div>
  );
}

export default App;
