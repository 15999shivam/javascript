'use strict'
let noteBody = document.querySelector('#noteBody');
let notetitle = document.querySelector('#noteTitle'); 
let lastEdited = document.querySelector('#lastEdited');
const noteId = location.hash.substring(1)
let notes = getSavedNotes();
 
let note = notes.find((note) =>  note.id === noteId)

if(!note)//we can also flip truthy and flasy values with logical not operator original was if(note == undefined) 
{
   // console.log(noteId)
    //console.log(notes)
   location.assign('./index.html')
}

//update last edited
const updateLastEdited = ()=>
{
    lastEdited.textContent = `Last Edited: ${moment(note.updatedAt).fromNow()}`;
}

noteTitle.value = note.title;

noteBody.value = note.body;

updateLastEdited();
noteTitle.addEventListener('input',(e)=>
{
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();

    updateLastEdited();   
     saveNotes(notes);
})

noteBody.addEventListener('input',(e)=>
{
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();

    updateLastEdited();    
    saveNotes(notes);
})

document.querySelector('#removeNote').addEventListener('click',()=>{
    removeNote(note.id);
    saveNotes(notes);
    location.assign('./index.html')
})

window.addEventListener('storage',(e)=>{
   if(e.key==='notes')
   {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
    
        if(!note)
        {
        // console.log('hii')
        location.assign('./index.html')
        }

        updateLastEdited();        
        noteTitle.value = note.title;
        
        noteBody.value = note.body;
   }
})