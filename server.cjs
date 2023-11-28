const express = require('express');
const pets = require('./data.cjs');
const app = express()

app.get('/api/v1/pets/owner', (req, res) => {
    const ownerArray = [];
    for(let i =0; i < pets.length; i++) {
        if(pets[i].owner === req.query.name) {
            ownerArray.push(pets[i]);
        }
    }
    res.send(ownerArray);
});


app.get('/api/v1/pets/:name', (req, res) => {
    const petArray = [];
    for(let i =0; i < pets.length; i++) {
        if(pets[i].name === req.params.name) {
            petArray.push(pets[i]);
        }
    }
    res.send(petArray);
});


app.get('/api/v1/pets', (req, res) => {
    
    res.send(pets)
});




const PORT = 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));