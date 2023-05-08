let books = [];

fetch('assets/json/books.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        let output = "";

        for (let item of books) {
            output += `
                <div class="book-card">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="book-title book-text">${item.title}</p>
                    <p class="book-author book-text">${item.author}</p>
                    <p class="book-release book-text">${item.release}</p>
                    <p class="book-status book-text">Status: ${item.status}</p>
                </div>
            `;
        }
        document.querySelector(".book-cards").innerHTML = output;

        const bookCards = document.querySelectorAll(".book-card");
        books.forEach((book, index) => {
            book.element = bookCards[index];
        });
    })
    .catch(error => console.log(error));

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", evt => {
    const value = evt.target.value.toLowerCase();
    books.forEach(book => {
        const isVisible = book.title.toLowerCase().includes(value) || book.author.toLowerCase().includes(value);
        book.element.classList.toggle("hide", !isVisible);
    });
});
