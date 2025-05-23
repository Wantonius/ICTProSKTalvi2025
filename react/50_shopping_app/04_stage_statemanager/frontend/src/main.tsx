import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import App from './App.tsx'
import bootstrap from 'bootstrap';
import StateManager from './context/StateManager';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <StateManager>
    <App />
  </StateManager>
  </BrowserRouter>
  </StrictMode>,
)
