//your JS code here. If required.

document.getElementById('submit').addEventListener('click', addBook);

function addBook(e) {
    e.preventDefault();
    
    // Get values from input fields
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const isbn = document.getElementById('isbn').value.trim();

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row
    const row = document.createElement('tr');

    // Create cells and append data
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
    `;

    // Add row to table body
    document.getElementById('book-list').appendChild(row);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listener for delete button with event delegation
document.getElementById('book-list').onclick = function(e) {
    if (e.target.classList.contains('delete')) {
        // Confirm only once for each delete action
        if (confirm('Are you sure you want to delete this book?')) {
            e.target.closest('tr').remove();
        }
    }
};

