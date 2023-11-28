
import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { ImageList, ImageListItem, FormControl, InputLabel, Select, MenuItem, Button  } from '@mui/material';
import arrayFireDeck from './deckPredefiniti/fireDeck'
import arrayEarthDeck from './deckPredefiniti/earthDeck'
//per il select

const ProvaLista = () => {

    const [deckPredefinito, setDeckPredefinito] = useState([])
    const [imageName, setImageName] = useState([])
    const deckCorrente = []

    //chiamata get al backend
    useEffect(() => {
    axios.get('http://127.0.0.1:8000/carte/')
        .then(response => {
            const nomi = response.data.map(item => item.nome);
            setImageName(nomi);
            console.log(nomi)
        })
        .catch(error => {
            console.error('Errore nella chiamata al backend', error);
        });
    }, []);



      // Trova gli elementi con lo stesso nome nel backend
    deckPredefinito.forEach(elemento => {
      const elementiCorrispondenti = imageName.filter(
        elemento => imageName.nome === elemento.nome        //elemento è la singola carta nell'array, imageName i vari dati del backend
      );

      // Fai qualcosa con gli elementi corrispondenti
      if (elementiCorrispondenti.length > 0) {
        console.log(`Elemento ${elemento.nome} trovato nel backend`);
        deckCorrente.push(elemento.nome)
      } 
      else {
        console.log(`Nessun elemento corrispondente per ${elemento.nome}`);
      }
    });

    const handleChange = (event) => {
      setDeckPredefinito(event.target.value)
    }


   

    return (
        <div>
          <FormControl fullWidth>
            <InputLabel id="scegli_deck_label">Deck predefiniti</InputLabel>
            <Select
              labelId="scegli_deck_label"
              id="scegli_deck"
              value={deckPredefinito}
              label="Scegli deck"
              onChange={handleChange}
            >
              <MenuItem value={arrayFireDeck}>Fire</MenuItem>
              <MenuItem value={arrayEarthDeck}>Earth</MenuItem>
            </Select>
          </FormControl>
        
          <ImageList sx={{ width: 700, height: 450 }} cols={4} rowHeight={164}>
            {deckCorrente.map((item) => {
              const immagine = React.lazy(() => import(`./immagini/${item}.jpeg`)); 
              console.log(immagine) 
              return(
              <ImageListItem key={item}>
                <Suspense fallback={<div>Loading...</div>}>
                  <img src={immagine} alt = {item}/>
                </Suspense>
                <p> {item} </p> 
              </ImageListItem>
            )})}
          </ImageList>

        </div>
      );
}

export default ProvaLista

          //LISTA
          /*<ul>
          {deckCorrente.map( item => (
            <li key={item.nome}> {item} </li>
          ))}
        </ul>*/