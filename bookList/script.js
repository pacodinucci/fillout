function addBook() {
  let title = prompt("Enter book title:");
  let author = prompt("Enter book author:");
  let description = prompt("Enter book description:");

  if (title && author && description) {
    let bookList = document.getElementById("bookList");
    let article = document.createElement("article");
    article.classList.add("book");

    article.innerHTML = `
                    <h2>Title: ${title}</h2>
                    <h3>Author: ${author}</h3>
                    <p>Description: ${description}</p>
                `;

    bookList.appendChild(article);
  } else {
    alert("All fields are required to add a book.");
  }
}
