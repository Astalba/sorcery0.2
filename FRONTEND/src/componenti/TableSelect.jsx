
import './TableSelect.css' ;
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import { withStyles } from "@mui/material/styles";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TableSelect() {
  const [cakeCount, setCakeCount] = useState(0);
  const [burntCakeCount, setBurntCakeCount] = useState(0);

  const requestProcess = (temperature = 'low') => {                   //creazione del ws 
    const channelId = Math.floor(Math.random() * 10000);
    const websocket = new WebSocket(
      `ws://127.0.0.1:8000/ws/bar/${channelId}/${temperature}/`
    );
    console.log('wb aperto')
    const toastId = toast('Processing', {
      type: toast.TYPE.SUCCESS,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    toast.update(toastId, { progress: 0 / 1 });

    websocket.onmessage = function (e) {                //gestione dei messaggi dal ws
      let data = JSON.parse(e.data);
      if (data.type === 'connection_established' || data.type === 'progress') {
        toast.update(toastId, {
          render: `${data.progress}/6: ${data.message}`,
          progress: Number(data.progress) / 6,
        });
      } else if (data.type === 'completed') {
        toast.done(toastId);
        setCakeCount(cakeCount + 1);
      } else if (data.type === 'error') {
        toast.update(toastId, {
          type: toast.TYPE.ERROR,
          render: `${data.message}`,
        });
        setBurntCakeCount(burntCakeCount + 1);
      }
    };
  };


  
  return (
    <>
      <ToastContainer />
      <h1>Django Channels Bakery</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='card'>You have {cakeCount} cakes</div>
        <div className='card'>
          <img src='/small-bakery.png' alt='bakery' />
        </div>
        <div className='card'>You have {burntCakeCount} burnt cakes</div>
      </div>
      <button onClick={() => requestProcess()}>Make Cake</button>
      <button onClick={() => requestProcess('high')}>
        Make Cake (high Temperature)
      </button>
    </>
  );
}

export default TableSelect;