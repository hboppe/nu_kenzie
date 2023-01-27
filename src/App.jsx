import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';


function App() {
  const [start, setStart] = useState(false); // alterar pra false 

  return (
    <div className="App">

      {!start ? <LandingPage click={setStart}/> : <Dashboard click={setStart}/>}  

    </div>
  )
}

export default App
