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
        //Add in footer icons 
        let b_delete = document.createElement('div');
        bottom_box.appendChild(b_delete);
        b_delete.outerHTML='<svg class = "icon" id="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>'
        

        let b_status = document.createElement('div');
        bottom_box.appendChild(b_status);
        b_status.outerHTML='<svg class = "icon"id="status" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-check</title><path d="M6,5H8.5C8.5,3.34 9.84,2 11.5,2C13.16,2 14.5,3.34 14.5,5H17C18.66,5 20,6.34 20,8V19C20,20.66 18.66,22 17,22H6C4.34,22 3,20.66 3,19V8C3,6.34 4.34,5 6,5M6,6C4.9,6 4,6.9 4,8V19C4,20.1 4.9,21 6,21H17C18.1,21 19,20.1 19,19V8C19,6.9 18.1,6 17,6H16V9H7V6H6M8,8H15V6H8V8M11.5,3C10.4,3 9.5,3.9 9.5,5H13.5C13.5,3.9 12.6,3 11.5,3M17.15,11.6L10,18.75L6.8,15.55L7.5,14.84L10,17.34L16.44,10.89L17.15,11.6Z" /></svg>'
        
    }

    let trash_button = document.querySelectorAll("#trash")
    trash_button.addEventListener('click',()=>{
        console.log("trashed");
    })

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




