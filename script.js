//your JS code here. If required.

let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let submit = document.getElementById("submit");
let bookList = document.getElementById("book-list");

const createBookList = () => {
  let tr = document.createElement("tr");
  let tdTitle = document.createElement("td");
  let tdAuthor = document.createElement("td");
  let tdIsbn = document.createElement("td");
  let removeRow = document.createElement("td");

  tdTitle.innerHTML = title.value;
  tdAuthor.innerHTML = author.value;
  tdIsbn.innerHTML = isbn.value;
  removeRow.innerHTML = "&#10005;";
  removeRow.classList.add("removeMe");

  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdIsbn);
  tr.appendChild(removeRow);

  bookList.appendChild(tr);

 // To remove a table row 
  let removeMe = document.querySelectorAll(".removeMe");
  removeMe.forEach((remove) => {
    remove.addEventListener("click", () => {
      remove.parentElement.remove();
    });
  });
};

submit.addEventListener("click", createBookList);
