
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './componenti/Home';
import ProvaLista from './componenti/provaLista';
import ListaCarte from './componenti/ListaCarte';
function App() {

  return (
    <>
      <Routes>
        <Route path='' element = {<Home/>}/>
        <Route path='/listaCarte' element = {<ListaCarte/>}/>
        <Route path='/provaLista' element = {<ProvaLista/>}/>
      </Routes>
    </>
  )
}

export default App
