import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saklar from './components/togle'
import Ketik from './components/Text'
import Count from './components/Counter'
import DatalistExample from './components/TodoApp'
// import App from './App.tsx'
// import Welcome from './components/welcome.tsx'
// import Card from './components/card.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <Saklar/>
    <Ketik/>
    <Count/>
    <DatalistExample/>
  </StrictMode>
)
