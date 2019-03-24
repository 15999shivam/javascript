// const notes = ['Note 1','Note 2','Note 3'];

const notes = [{
    title:'my next trip',
    body:'i would like to goto spain'
},{
    title: 'habits to work on',
    body: 'Exercise,Eating a Bit bettter'
},{
    title: 'Office modification',
    body: 'get a new seat'
}]

const findNote = function(notes,noteTitle)
{
return notes.find(function(note,Index){
    return note.title.toLowerCase() === noteTitle.toLowerCase();
})
//return note; 
}




const sortNotes = function(notes){
    notes.sort(function(a,b){
         if(a.title.toLowerCase() < b.title.toLowerCase()) 
         {
             return  -1;
         }
         else
         if(a.title.toLowerCase() > b.title.toLowerCase())
         {
             return 1;
         }
         else{return 0;}
    })
}

sortNotes(notes);
console.log(notes);
//filterNotes returns new array based on the condition we provide

// const findNotes = function(notes,query)
// {
//     const filteredNotes = notes.filter(function(note,index){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase()); 
//         return isBodyMatch || isTitleMatch;
//     })
//     return filteredNotes;
// }



// console.log(findNotes(notes,'work'));

// const findNote = function(notes,noteTitle)
// {
// const index = notes.findIndex(function(note){
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
// })
// if(index!=-1)
// return notes[index];
// else 
// return 'not found';
// }




// const note  = findNote(notes,'office modification');
// console.log(note);


// /*
// [!important]

// push() || pop() => end of the array

// unshift() || shift() => begining of array

// */


// // //add item to the end of the array
// // notes.push('my new note');

// // let removed = notes.pop();
// // console.log(removed);

// // //removes the frist element(begining)
// // console.log(notes.shift());

// // //add itemm in the begining
// // console.log(notes.unshift('this is unshift'))



// //splice method

// // notes.splice(1,1,"this is new item");


// notes[2]="this is new note";

// // looping through thee array (new methd )

// //pass function like this below or define directly
// // const doThis = function()
// // {
     
// // }

// notes.forEach(function(item,index)
// {
//      console.log(item+"  "+index);
// })

// console.log(notes.length);
// console.log(notes);

// //if two objects have same attributes and values but not the same reffrence then they are not equal...in short objects are only equal when their reffrence are same i.e. one is copy of another.

// //indexOf method searches an element n array with === operator but not able to find objects ...it returns first index if foud and -1 if not found;

// const index =  note.findIndex(function(note){
//     console.log(note);
//     return note.title === 'habits to work on'
//  })

// console.log(index);


