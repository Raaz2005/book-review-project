import axios from "axios";

// Task 10 - Get all books using async callback
function getAllBooksCallback(callback) {
  axios.get("http://localhost:5000/")
    .then(response => callback(null, response.data))
    .catch(error => callback(error));
}

// Task 11 - Get book by ISBN using Promise
function getBookByISBN(isbn) {
  return axios.get(`http://localhost:5000/isbn/${isbn}`);
}

// Task 12 - Get books by Author
async function getBooksByAuthor(author) {
  const res = await axios.get(`http://localhost:5000/author/${author}`);
  return res.data;
}

// Task 13 - Get books by Title
async function getBooksByTitle(title) {
  const res = await axios.get(`http://localhost:5000/title/${title}`);
  return res.data;
}

// Execute tasks
console.log("Task 10 Result:");
getAllBooksCallback((err, data) => {
  if (err) console.log(err);
  else console.log(data);

  console.log("\nTask 11 Result:");
  getBookByISBN(1)
    .then(res => console.log(res.data))
    .then(() => {
      console.log("\nTask 12 Result:");
      return getBooksByAuthor("Author A");
    })
    .then(res => {
      console.log(res);
      console.log("\nTask 13 Result:");
      return getBooksByTitle("Book One");
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
});
