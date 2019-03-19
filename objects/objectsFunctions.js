let myBook = {
    title: 'let us c',
    author: 'yashwant sir',
    pagecount: 200
}
let otherBook = {
    title: 'let us c++',
    author: 'shivam',
    pagecount: 500
}

let getSummary = function(book){


    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pagecount} pages long`
    }
}

let bookSummary = getSummary(myBook);
console.log(bookSummary.summary);
let OtherBookSummary = getSummary(otherBook);
console.log(OtherBookSummary.pageCountSummary);