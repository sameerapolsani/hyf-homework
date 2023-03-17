//Smart-ease - Back to the basics!

const notes = [];

function saveNote(content, id) {
    notes.push({content,id});
  
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 

// Get a note

function getNote(id) {
    // your code here
    for(let i = 0; i < notes.length;i++){
        if(notes[i].id === id) {
            return notes[i];
        }

    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}

  // log out notes
  function logOutNotesFormatted() {
    for (const i of notes) {
        console.log(`the note with id: ${i.id}, has following text:${i.content}`);

    }
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry