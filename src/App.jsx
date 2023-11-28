import './App.css'
import { Route, Routes } from 'react-router-dom'
import PetPage from './PetPage'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<PetPage/>}/>
     </Routes>
    </>
  )
}

export default App
