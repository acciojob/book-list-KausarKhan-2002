//your JS code here. If required.

let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let submit = document.getElementById("submit");
let bookList = document.getElementById("book-list");

const createBookList = (e) => {
	e.preventDefault()
  let tr = document.createElement("tr");
  let tdTitle = document.createElement("td");
  let tdAuthor = document.createElement("td");
  let tdIsbn = document.createElement("td");
  let removeRow = document.createElement("td");
  let removeButton = document.createElement("button");
  // removeButton.innerHTML = "&#10005;"
	removeButton.innerHTML = "clear"
  removeButton.classList.add("delete");
  console.log(removeButton);
  

  tdTitle.innerHTML = title.value;
  tdAuthor.innerHTML = author.value;
  tdIsbn.innerHTML = isbn.value;
//   removeRow.innerHTML = removeButton;

  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdIsbn);
  tr.appendChild(removeRow);
  tr.appendChild(removeButton)

  bookList.appendChild(tr);

  // To remove a table row
  let deleteMe = document.querySelectorAll(".delete");
  deleteMe.forEach((ele) => {
    ele.addEventListener("click", () => {
      ele.parentElement.remove();
    });
  });
  console.log(deleteMe);
  
};

submit.addEventListener("click", createBookList);

