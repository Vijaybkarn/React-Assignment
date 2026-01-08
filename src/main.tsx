import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import Timer from './components/Timer.tsx'
import UserList from './components/Class-Example/useEffect/userList.tsx'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserList />
  </StrictMode>,
)
