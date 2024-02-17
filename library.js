const myLibrary =[];

function Book(title,author,page_no,read_book){
    this.title = title;
    this.author = author;
    this.page_no = page_no;
    this.status = read_book;
    this.info = function(){
        return (this.title + this.author + this.page_no + this.status);
    }
}



//function that loops through library list and displays book

var dim, container, box, boxes; 

//Add an event listener to the button --> onclick --> submit info & regenerate library --> iterate through list and add to DOM
const add_book_button = document.querySelector('#add_book');
let title = document.querySelector('#book_title');
let author = document.querySelector('#book_author');
let pages = document.querySelector('#book_pages');
let read = "no";
add_book_button.addEventListener('click',()=>{
    console.log("clicked");
    let bt = title.value;
    let ba = author.value;
    let bp = pages.value;
    let r = "no";
    const book = new Book(bt,ba,bp,r);
    myLibrary.push(book);
    generateNewLibrary(book);
})
//Function to generate new graph & add event listeners to the boxes
function generateNewLibrary(book){
        //Get parent div
        container = document.getElementById('right');
        //Create new HTML element
        box = document.createElement('div');
        box.id = 'book_card'
        //Add HTML to DOM
        container.appendChild(box); 
        //Add in text
        let b_title = document.createElement('div');
        b_title.id='b_title';
        b_title.innerHTML = book.title;
        box.appendChild(b_title);

        let b_author = document.createElement('div');
        b_author.id='b_text';
        b_author.innerHTML = 'Author: '+ book.author;
        box.appendChild(b_author);

        let b_pages = document.createElement('div');
        b_pages.id='b_text';
        b_pages.innerHTML = 'Pages: ' + book.page_no;
        box.appendChild(b_pages);
        

        //Add in footer
        bottom_box = document.createElement('div');
        
        bottom_box.id = "bottom_box";
        box.appendChild(bottom_box);
    }
//remove elements from DOM so can create new graph
//function removePrevious(prev_squares){
  //  let c = document.getElementById('big_container');
    //for (let s = 0 ; s<prev_squares.length;s++){
//      //  c.removeChild(prev_squares[s]);
        //console.log('slay');
    //}
//}
//function addBookToLibrary(){

//}
 //Function to generate new graph & add event listeners to the boxes
//function generateGraph(n){
  //  dim = 960/n;
    //Create new div
   // for(let i = 0;i<n**2;i++){
        //Get parent div
     //   container = document.getElementById('big_container');
        //Create new HTML element
       // box = document.createElement('div');
       // box.id = 'square'
        //Add HTML to DOM
       // container.appendChild(box); 
        //sizing
       // let sizing = dim+"px";
       // box.style.width = sizing;
       // box.style.height = sizing
    //}

    //Get all boxes
    //let squares=document.querySelectorAll('#square');
    //Array.from('squares');

    //Add an event listener to every square
    //for(let j = 0; j<n**2; j++){
      //  let s = squares[j];
       // s.addEventListener('mouseover',()=>{
       // s.style.backgroundColor='black';
       // })
    //}
    //return squares;
//}




