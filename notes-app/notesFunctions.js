'use strict'
//read existing notes from local storage
const getSavedNotes = ()=>
{
    const notesJSON = localStorage.getItem('notes');

    try{
        return (notesJSON)? JSON.parse(notesJSON): []//used truthy values

    }catch(e){
        return [];
    }

}

//save notes to local storage
const saveNotes = (notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes));
}

//remove a note from the list
const removeNote = (id)=>
{
    const noteIndex = notes.findIndex((note)=> note.id === id )
    

    if(noteIndex>-1)
    {
        notes.splice(noteIndex,1);
    }
}


//generate the the dom structure for a note
const generateNoteDom = (note)=>{
    const noteEl = document.createElement('div');
    const textEl = document.createElement('span');
    const button = document.createElement('button');
    const link = document.createElement('a');

    
    //set up remove note button
    button.textContent = 'x'
    noteEl.appendChild(button);
    button.addEventListener('click',(e)=>{
            removeNote(note.id);
            saveNotes(notes);
            renderNotes(notes,filters);
    })

    //set up note title text
    if(note.title)
    textEl.textContent = note.title;
    else
    textEl.textContent = 'Untitled Note';

    //setting up anchor tag
    link.setAttribute('href',`./note.html#${note.id}`);
    link.appendChild(textEl);

    noteEl.appendChild(link);
    return noteEl;
}

//the sorting function
const sortNotes = (notes,sortBy)=>{
    if(sortBy === 'byEdited')
    {
        return  notes.sort((a,b)=>{
            if(a.updatedAt>b.updatedAt)
            {
                return -1;
            }
            else
            if(a.updatedAt<b.updatedAt)
            {
                return 1;
            }
            else
            return 0;
        })
    }
    else
    if(sortBy==='byCreated')
    {
        return  notes.sort((a,b)=>{
            if(a.createdAt>b.createdAt)
            {
                return -1;
            }
            else
            if(a.createdAt<b.createdAt)
            {
                return 1;
            }
            else
            return 0;
        })
    }
    else
    if(sortBy === 'alphabatical')
    {
        return notes.sort((a,b)=>{
            if(a.title.toLowerCase() < b.title.toLowerCase())
            {
                return -1;
            }
            else
            if(a.title.toLowerCase()> b.title.toLowerCase())
            {
                return 1;
            }
            else
            return 0;
        })
    }
    else
    return notes;
      
}



//render application notes
const renderNotes = (notes,filters)=>
{
    notes = sortNotes(notes,filters.sortBy);
    const filterNotes = notes.filter((note)=> note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    )

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach((note)=>{
      const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl);
    })
}