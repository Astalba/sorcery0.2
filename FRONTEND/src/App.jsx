
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './componenti/Home';
import ProvaLista from './componenti/ProvaLista';
import ListaCarte from './componenti/ListaCarte';
import TableSelect from './componenti/TableSelect';
import Room from './componenti/Room';
import Deckview from './componenti/DeckView';

function App() {

  return (
      <Routes>
        <Route path='' element = {<Home/>}/>
        <Route path='/listaCarte' element = {<ListaCarte/>}/>
        <Route path='/provaLista' element = {<ProvaLista/>}/>
        <Route path='/tableselect' element = {<TableSelect/>}/>
        <Route path='/room' element = {<Room/>}/>
        <Route path='/deckview' element = {<Deckview/>}/>
      </Routes>
  )
}

export default App
