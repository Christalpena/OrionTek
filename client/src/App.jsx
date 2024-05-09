import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Client from './pages/Client'
import './App.css'
import Form from './pages/Form'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [id,setId] = useState();

  return (
   <BrowserRouter>
      <Header id={id}/>
      <Routes>
        <Route path='/' element={<Navigate to="/clients" />} />
        <Route path='/clients' element={<Client setId={setId} />} />
        <Route path='/create-client' element={<Form/>} />
        <Route path='/client/:id' element={<Form setId={setId}/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
