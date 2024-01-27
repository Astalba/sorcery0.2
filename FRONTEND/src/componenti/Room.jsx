import React from "react";
import './Room.css' ;
import Grid from '@mui/material/Grid';
import dragon from "./immagini/ancient_dragon.jpeg";
import spell from "./immagini/spellback.jpeg";
import site from "./immagini/siteback.jpeg";

var playerHand = ['ancient_dragon'];
var opponentHand = ['spellback', 'siteback' ];
var detailSrc = dragon;

function details(image) {
    return (console.log(image));
}

function renderDetails(detailSrc) {
    return (
        <Grid item style={{ height: "inherit" }}>
            <img src={detailSrc} style={{ width: "inherit", height: "inherit" }}></img>
        </Grid>
    );
}

function renderHand(hand) {
    var output = [];
    var md = 12 / hand.length
    for (let element of hand) {
        console.log(`./immagini/${element}.jpeg`);
        const immaginecarta = import(`./immagini/${element}.jpeg`);
        console.log({immaginecarta})
        output.push(<Grid onMouseOver={details(this)} item justify="space-between" md={md} style={{ height: "inherit", width:"inherit" }}><img src={immaginecarta} className="card" style={{ width: "inherit", height: "inherit" }} ></img></Grid>);
    }
    console.log(output)
    return (
        <Grid container md={12} style={{ height: "inherit" }}>
            {output}
        </Grid>
    );
}

const PlayingField = () => {
    return (
        <Grid className="container" container alignItems="stretch" spacing={3}>
            <Leftbar />
            <Rightbar />
        </Grid>
    );
}

const Rightbar = () => {
    return (
        <Grid className="right-pane" item md={3}  >
            <Grid container direction="column">
                <Grid className="infobox" item ><h1>Info avversario</h1></Grid>
                <Grid className="details" item >{renderDetails(detailSrc)}</Grid>
                <Grid className="textprompt" item ><h1>Prompt di testo</h1></Grid>
                <Grid className="infobox" item ><h1>Info giocatore</h1></Grid>
            </Grid>
        </Grid>
    );

}

const Leftbar = () => {
    return (
        <Grid className="left-pane" item md={9} >
            <HandOpponent />
            <BattleGrid />
            <HandPlayer />
        </Grid>
    )
}

const HandPlayer = () => {
    return (
        <Grid className="hand">{renderHand(playerHand)}</Grid>
    );
}

const HandOpponent = () => {
    return (
        <Grid className="hand">{renderHand(opponentHand)}</Grid>
    );
}

const BattleGrid = () => {
    return (
        <Grid className="field" container>
            <Grid className="row" container>
                <Grid item md={1}></Grid>
                <Grid className="square" item md={2} ><h1>1</h1></Grid>
                <Grid className="square" item md={2} ><h1>2</h1></Grid>
                <Grid className="square" item md={2} ><h1>3</h1></Grid>
                <Grid className="square" item md={2} ><h1>4</h1></Grid>
                <Grid className="square" item md={2} ><h1>5</h1></Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <Grid className="row" container>
                <Grid item md={1}></Grid>
                <Grid className="square" item md={2} ><h1>6</h1></Grid>
                <Grid className="square" item md={2} ><h1>7</h1></Grid>
                <Grid className="square" item md={2} ><h1>8</h1></Grid>
                <Grid className="square" item md={2} ><h1>9</h1></Grid>
                <Grid className="square" item md={2} ><h1>10</h1></Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <Grid className="row" container>
                <Grid item md={1}></Grid>
                <Grid className="square" item md={2} ><h1>11</h1></Grid>
                <Grid className="square" item md={2} ><h1>12</h1></Grid>
                <Grid className="square" item md={2} ><h1>13</h1></Grid>
                <Grid className="square" item md={2} ><h1>14</h1></Grid>
                <Grid className="square" item md={2} ><h1>15</h1></Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <Grid className="row" container>
                <Grid item md={1}></Grid>
                <Grid className="square" item md={2} ><h1>16</h1></Grid>
                <Grid className="square" item md={2} ><h1>17</h1></Grid>
                <Grid className="square" item md={2} ><h1>18</h1></Grid>
                <Grid className="square" item md={2} ><h1>19</h1></Grid>
                <Grid className="square" item md={2} ><h1>20</h1></Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </Grid>
    );
}

function Room() {
  return (
    <div className='Room'>
      <PlayingField/>  
    </div>
  );
}
  
  export default Room;
  