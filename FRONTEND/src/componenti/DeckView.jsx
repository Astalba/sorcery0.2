import React from "react";
import './DeckView.css';
import Grid from '@mui/material/Grid';
import { ReactNode } from "react";
//import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

/* function renderDecks() {
    var fs = require('fs');
    var path = require('path');
    var process = require('process');
    var folder = "./decks";
    var output = [];
    import()

    fs.readdir(folder, function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }
        files.forEach(function () {
            output.push(<Grid>deck1</Grid>)
            
        })
    })
    return (output
    );
} */

const leftbar = () => {
    return (
        <Grid>
            {/* {renderDecks()} */}
        </Grid>
    )

}

const App = () => (
    <div className='deckView'>
        {leftbar}
    </div>
);

export default App;
