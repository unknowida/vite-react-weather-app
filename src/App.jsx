// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/search/search'

function App() {

  // state (état, données)
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  // comportements

  // Affichage (render(rerender))
  



  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
