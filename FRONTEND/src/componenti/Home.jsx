import React from "react";
import './Home.css' ;
import logo from './immagini/sorcerylogo.jpeg';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Grid version 1

import { makeStyles } from '@mui/styles'
//import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const Home = () => (
  <div className='Home'>
            <div className='Image'>
                <img src={logo}></img>
            </div>
            <div>
              <form action = "http://localhost:3001/tableselect">
                <Button type="submit" variant="contained">Select room</Button>
              </form>
            </div>
            <div>
              <form action = "http://localhost:3001/provaLista">
                <Button type="submit" variant="contained">Select deck</Button>
              </form>
            </div>
        </div>
);

export default Home;
