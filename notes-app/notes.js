'use strict'
let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes,filters);

document.querySelector('#createNote').addEventListener('click',(e)=>{

    const id = uuidv4();
   const timeStamp = moment().valueOf();
    notes.push({
        id: id,
        title:"",
        body:"",
        createdAt:timeStamp,
        updatedAt:timeStamp
    })
    saveNotes(notes);
    location.assign(`./note.html#${id}`)

  //no need of re rendering notes as we moved to anoher page and if we reurn back hen automatic rerendering will occur
   //renderNotes(notes,filters);
})

document.querySelector('#searchText').addEventListener('input',(e)=>{
     filters.searchText = e.target.value;
     renderNotes(notes,filters);
})

document.querySelector('#filterBy').addEventListener('change',(e)=>{
    filters.sortBy = e.target.value;
    renderNotes(notes,filters);
})

window.addEventListener('storage',(e)=>{
    if(e.key==='notes')
    {
        notes = JSON.parse(e.newValue);
        
        renderNotes(notes,filters);
    }
    
 })
 
