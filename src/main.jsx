import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// import './08-useReducer/intro-reducer.js';
// import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* // <StrictMode> */}
      <MainApp />
  {/* // </StrictMode> */}
  </BrowserRouter>
)
