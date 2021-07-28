
function getbooksinfo() {
    search = (document.getElementById("search").value).toLowerCase();    //for user book search
    var booksinfo = document.getElementById("books");
    apipage= "https://www.googleapis.com/books/v1/volumes?q="+search+"&max-results=40";    //getting book info from API
    var apiinfo = new XMLHttpRequest();
    apiinfo.open('GET', apipage, true);
    apiinfo.onload = function () {
        for (var i = 0; i < 40; i++) {
            var bookdetails = JSON.parse(this.response);        //getting book properties from API
            var bookwriter = (bookdetails["items"][i]["volumeInfo"]["authors"]) || 'No bookwriter given'
            var bookname = (bookdetails["items"][i]["volumeInfo"]["title"]) || 'No bookname given'
            try {
            var imageofbook = bookdetails["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] 
            }
            catch (bookerror) {
                var imageofbook = "1.jpg";
            }
        booksection = document.createElement('div');   //creating booksection div element to have book image and book info from books in API
        bookimage = document.createElement('img');       //creatng img element to have book images from books in API
        bookimage.src = imageofbook;
        bookimage.style.height="600px";
        bookimage.style.width="600px";
        booksection.appendChild(bookimage);                   //putting book images in booksection
        infoofbook = document.createElement('div');        //creating div section element to show book name and writer
        nameofbook = document.createElement('h2');      //creating h2 element to show book name
        nameofbook.innerHTML = bookname;
        infoofbook.appendChild(nameofbook);                   //putting book name element in section element
        detailsofbook = document.createElement('h2');      //creating h2 element to show book writer
        if(bookwriter!='No bookwriter given'){
        detailsofbook.innerHTML = bookwriter +" is the writer of this book";
        }
        infoofbook.appendChild(detailsofbook);                   //putting book writer name in book section div element
        booksection.appendChild(infoofbook);                //putting book info in book section div element
        booksinfo.appendChild(booksection);                //putting book info in book section div element
    }               
    } 
    apiinfo.send()
    
}
