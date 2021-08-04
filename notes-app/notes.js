const fs = require('fs');

const addNotes = function(title, body){
    const notes = loadNotes();
    const duplicateTitle = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateTitle.length === 0){
        notes.push({
            title: title,
            body:body
        })
        console.log(notes);
        saveNotes(notes); 
    }
    else{
        console.log("title is already exists  !!");
    }
  
}


const saveNotes = function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const stringData = dataBuffer.toString();
        return JSON.parse(stringData);
    } catch (error) {
        return [];
    }
}


//remove notes
 const removeNotes = function (title){
    const notes = loadNotes();
    const notesTokeep = notes.filter((note) => {
        return note.title !== title;
    })
    if(notes.length > notesTokeep.length){
        saveNotes(notesTokeep)
        console.log('remove notes !!');
    }
    else{
        console.log('title not match!!');
    }
 }

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes
}