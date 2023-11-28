import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ListaDecks = () => {
  const [dati, setDati] = useState([])
  
  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get('http://127.0.0.1:8000/carte/')
      .then(function (response) {
        // handle success
        setDati(response.data)
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, []);

  return (
    <div className='wrapper'>

      <h1>DECK BUILDER</h1>
      <div className="contenitoreLista">
        <ul>
          {dati.map( item => (
            <li key={item.id}> {item.nome} {item.tipo} </li>
          ))}
        </ul>
      </div>
    

    </div>
  )
}

export default ListaDecks