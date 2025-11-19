import './App.css'
import Count from './components/Counter'
import Saklar from './components/togle'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
    <NavBar/>
    <Outlet />
    {/* <Count />
    <Saklar />   */}
    </>
  )
}

export default App
