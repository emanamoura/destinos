import './App.css';
import {  DataContextProvider } from './context/DataContext';
import { Principal } from './page/Principal';

function App() {

  return (
      <DataContextProvider>
        <Principal/>
      </DataContextProvider>
  );
}

export default App;
