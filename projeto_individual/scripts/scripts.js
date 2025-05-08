document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const resultContainer = document.querySelector('.result-container');

    const books = [
        { title: 'The Way of Kings', author: 'Brandon Sanderson', cover: 'imgs/TheWayOfKings.png' },
        // Add more book objects here
        { title: 'Words of Radiance', author: 'Brandon Sanderson', cover: 'imgs/WordsOfRadiance.png' },
        { title: 'Oathbringer', author: 'Brandon Sanderson', cover: 'imgs/Oathbringer.png' },
        { title: 'Rhythm of War', author: 'Brandon Sanderson', cover: 'imgs/RhythmOfWar.png' },
        { title: 'The Final Empire', author: 'Brandon Sanderson', cover: 'imgs/TheFinalEmpire.png' },
        { title: 'The Well of Ascension', author: 'Brandon Sanderson', cover: 'imgs/TheWellOfAscension.png' },
        { title: 'The Hero of Ages', author: 'Brandon Sanderson', cover: 'imgs/TheHeroOfAges.png' },
        { title: 'The Alloy of Law', author: 'Brandon Sanderson', cover: 'imgs/TheAlloyOfLaw.png' },
        { title: 'Shadows of Self', author: 'Brandon Sanderson', cover: 'imgs/ShadowsOfSelf.png' },
        { title: 'The Bands of Mourning', author: 'Brandon Sanderson', cover: 'imgs/TheBandsOfMourning.png' },
        { title: 'Secret History', author: 'Brandon Sanderson', cover: 'imgs/SecretHistory.png' },
        { title: 'Dawnshard', author: 'Brandon Sanderson', cover: 'imgs/Dawnshard.png' },
        { title: 'Mistborn: The Final Empire', author: 'Brandon Sanderson', cover: 'imgs/MistbornTheFinalEmpire.png' },
        { title: 'Mistborn: The Well of Ascension', author: 'Brandon Sanderson', cover: 'imgs/MistbornTheWellOfAscension.png' },
        { title: 'Mistborn: The Hero of Ages', author: 'Brandon Sanderson', cover: 'imgs/MistbornTheHeroOfAges.png' },
        { title: 'Mistborn: The Alloy of Law', author: 'Brandon Sanderson', cover: 'imgs/MistbornTheAlloyOfLaw.png' },
        { title: 'Mistborn: Shadows of Self', author: 'Brandon Sanderson', cover: 'imgs/MistbornShadowsOfSelf.png' },
        { title: 'Mistborn: The Bands of Mourning', author: 'Brandon Sanderson', cover: 'imgs/MistbornTheBandsOfMourning.png' },
    ];

    function displayBooks(books) {
        resultContainer.innerHTML = '';
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('result-card');
            bookCard.innerHTML = `
                <img src="${book.cover}" alt="Capa do Livro" class="book-cover">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
            `;
            resultContainer.appendChild(bookCard);
        });
    }

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    }

    searchInput.addEventListener('input', filterBooks);

    // Initial display of books
    displayBooks(books);
});