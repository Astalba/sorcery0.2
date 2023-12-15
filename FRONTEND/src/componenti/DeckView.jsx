import React, { useState, useRef } from "react";
import './DeckView.css';
import Grid from '@mui/material/Grid';
import { ReactNode } from "react";
import Cookies from 'js-cookie';
import { Button } from "@mui/material";


function DeckView  ()  {
    const [deckUrl,setDeckUrl] = useState('');
    const [cardImages,setCardImages] = useState('');
    const [cardImage,setCardImage] = useState('');

    function GetDeckArrayFromJson(list){
        console.log("sto chiamando getdeckarrayfromjson");
        let result=[];
        console.log(list.avatar[0]["identifier"]);
        result.push(list.avatar[0]["identifier"])
        for (let element in list.spellbook){
            console.log(list.spellbook[element]["identifier"]);
            result.push(list.spellbook[element]["identifier"]);
        }
        for (let element in list.atlas){
            console.log(list.atlas[element]["identifier"]);
            result.push(list.atlas[element]["identifier"]);
        }
    
        console.log("questo è il risultato d agetdeckarrayfromjson %o",result);
        return(result);

    }

    async function GetListFromApi(url) {
        console.log("sto chiamando getlistfromapi");
        return fetch(url,{mode:'cors'} )
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("questo è il json %o", responseJson);
                return GetDeckArrayFromJson(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
        function LoadDeck(deckUrl) {
            let output='';
            console.log("LoadDeck: l'url é: %o", deckUrl);
            GetListFromApi(deckUrl).then((res)=>{
                output=BuildHTML(res);
            }).then(()=>{
                console.log("funzionerà? %o",output)
                setCardImages(output)});
        return output;
    }

        function BuildHTML(decklist){
        let output=[];
        Cookies.remove('decklist');
        Cookies.set('decklist', decklist);
        console.log("questo è quello che arriva a buildhtml: %o", decklist);
        for(let e of decklist){
            
                import("./immagini/"+e+".jpeg").then(image =>{
                    setCardImage({image});
                }).then(()=>{
                    console.log("questo è il singolo elemento di decklist: %o",cardImage);
                output.push(<Grid item> <img src={cardImage}></img></Grid>);
                });
            
        }
        console.log("questo è l'output %o",output);
        return (
            <Grid container style={{ height: "inherit" }}>
            {output}
            </Grid>
        );
    }
    
    return(
    <div className='deckView'>
        <Grid className="deckForm">
            <input type="text" name="textValue" onChange={ e => setDeckUrl(e.target.value)}></input>
            <button onClick={()=>{
                LoadDeck(deckUrl)
            }}>sbiribillo</button>
        </Grid>
        <div className="cards">{cardImages}</div>
    </div>
    
    );
}

export default DeckView
