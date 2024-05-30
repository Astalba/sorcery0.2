import React from "react";
import './Home.css';
import logo from './immagini/sorcerylogo.jpeg';
import Button from '@mui/material/Button';

function getDeckList() {

  var xhr = new XMLHttpRequest();
  let url = document.getElementById("linkbox").value
  console.log("sono in getDecklist" + url);
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      console.log(xhr.response);
      renderDeck(xhr.response);
    } else {
      console.log("error")
    }
  };
  xhr.send();
}

const CenterRow = () => {
  return (
    <div id="centerRow" className="row">
      <div className='Image'>
        <img className="logo" src={logo}></img>
      </div>

      <div>
        <input type="text" id="linkbox" name="deckLink"></input><br />
        {/* <select id="favourites" name="favouriteDeck">
          <option defaultChecked="true"></option>
          <option value="def">fire</option>
        </select> <br /> */}
        <Button type="submit" variant="contained" onClick={() => getDeckList()}>Select deck</Button>
      </div>
    </div>
  );
}

const LeftRow = () => {
  return (
    <div id="rightRow" className="row"></div>
  );
}
const RightRow = () => {
  return (
    <div id="leftRow" className="row"></div>
  );
}

function Home() {
  return (
    <div className='Home'>
      <LeftRow />
      <CenterRow />
      <RightRow />

    </div>
  );
}

function renderDeck(response){
  sessionStorage.setItem("deckData",JSON.stringify(response));
  console.log(response["avatar"]);
  document.getElementById("rightRow").innerHTML+=
  '<img src={"immagini/ancient_dragon.jpeg"} style={{ width: "inherit", height: "inherit" }}></img>'

}

export default Home;
