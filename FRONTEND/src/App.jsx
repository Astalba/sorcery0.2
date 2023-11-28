
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './componenti/Home';
import ListaDecks from './componenti/ListaDecks';
import ProvaLista from './componenti/provaLista';
function App() {

  return (
    <>
      <Routes>
        <Route path='' element = {<Home/>}/>
        <Route path='/listaDecks' element = {<ListaDecks/>}/>
        <Route path='/provaLista' element = {<ProvaLista/>}/>
      </Routes>
    </>
  )
}

export default App
