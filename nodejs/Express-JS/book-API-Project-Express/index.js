const express = require("express");

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Fiction",
        publicationYear: 1925,
        price: 15.99,
        ISBN: "9780743273565"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic Fiction",
        publicationYear: 1960,
        price: 12.99,
        ISBN: "9780061120084"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        publicationYear: 1949,
        price: 14.99,
        ISBN: "9780451524935"
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic Fiction",
        publicationYear: 1951,
        price: 10.99,
        ISBN: "9780316769488"
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationYear: 1937,
        price: 18.99,
        ISBN: "9780547928227"
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publicationYear: 1813,
        price: 9.99,
        ISBN: "9780141439518"
    },
    {
        id: 7,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publicationYear: 1997,
        price: 24.99,
        ISBN: "9780590353427"
    },
    {
        id: 8,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophical Fiction",
        publicationYear: 1988,
        price: 16.99,
        ISBN: "9780062315007"
    },
    {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Thriller",
        publicationYear: 2003,
        price: 19.99,
        ISBN: "9780307474278"
    },
    {
        id: 10,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationYear: 1954,
        price: 35.99,
        ISBN: "9780544003415"
    }
];

app.get("/", (req, res) => {
    res.json({
        "status":"success",
        "message":"Welcome to Book API",
        "data":"This data is from home route"
    });
});


// fetching Books

app.get("/books",(req,res)=>{
    try{
        res.json({
            "status":"success",
            "message":"Fetching all the Books API",
            "data":books
        });
    }
    catch(e){
        res.json({"message":e.message})
    }
});


app.get("/books/:id",(req,res)=>{
  const bookId = parseInt(req.params.id);
  const book = books.find((bookFound)=>bookFound.id === bookId);

  if(book){
    res.json({
        status:"success",
        message:"single book fetched",
        data:book
    });
  }
  else{
    res.json({
        status:"failed",
        message:"single book fetch failed",
        data:"Can't get the book"
    });
  }
});

app.post("/books",(req,res)=>{
    const newBook = req.body;
    books.push(newBook);
    res.json({
        status:"success",
        message:"Books added Successfully",
        data:books
    })
});


const PORT = 5000;

app.listen(PORT, (err, port) => {
    console.log(`The Sever is running on http://localhost:${PORT}`);
})