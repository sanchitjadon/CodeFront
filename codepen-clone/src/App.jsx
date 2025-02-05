// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from "./components/Home";

import DataProvider from "./Context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App
