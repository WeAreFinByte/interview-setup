const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let books = [{
    "id": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "id": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "id": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book/new', (req, res) => {
    const book = req.body;

    books.push(book);

    res.send('Book is added to the database');
});

app.get('/book', (req, res) => {
    res.json(books);
});

app.get('/book/:id', (req, res) => {
    const id = req.params.id;

    for (let book of books) {
        if (book.id === id) {
            res.json(book);
            return;
        }
    }

    res.status(200).send('Book not found');
});

app.delete('/book/delete/:id', (req, res) => {
    const id = req.params.id;

    books = books.filter(i => {
        if (i.id !== id) {
            return true;
        }

        return false;
    });

    res.send('Book is deleted');
});

app.post('/book/:id/update', (req, res) => {
    const id = req.params.id;
    const newBook = req.body;

    for (let i = 0; i < books.length; i++) {
        let book = books[i]

        if (book.id === id) {
            books[i] = newBook;
        }
    }
    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));