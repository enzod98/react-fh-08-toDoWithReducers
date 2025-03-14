import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import './08-useReducer/intro-reducer.js';
import { TodoApp } from './08-useReducer/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <TodoApp />
  // </StrictMode>
)
