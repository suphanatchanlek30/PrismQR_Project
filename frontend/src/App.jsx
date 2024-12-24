import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App