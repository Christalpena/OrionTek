import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Client from './pages/Client'
import './App.css'
import Form from './pages/Form'
import Header from './components/Header'

function App() {

  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/clients" />} />
        <Route path='/clients' element={<Client />} />
        <Route path='/create_client' element={<Form/>} />
        <Route path='/client/:id' element={<Form/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
