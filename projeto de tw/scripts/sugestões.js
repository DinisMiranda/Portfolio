document.addEventListener('DOMContentLoaded', function () {
    const suggestionForm = document.getElementById('suggestionForm');
    const suggestionList = document.getElementById('suggestionList');
    const totalSuggestions = document.getElementById('totalSuggestions');

    // Garante que o localStorage esteja funcionando corretamente
    if (!localStorage.getItem('suggestions')) {
        localStorage.setItem('suggestions', JSON.stringify([]));
    }

    // Carrega sugestões ao iniciar a página
    loadSuggestions();

    suggestionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const suggestionInput = document.getElementById('suggestion');
        const suggestionText = suggestionInput.value.trim();

        if (suggestionText) {
            addSuggestionToList(suggestionText);
            saveSuggestion(suggestionText);
            suggestionInput.value = ''; // Limpa o campo de entrada
        } else {
            alert("Por favor, insira uma sugestão válida.");
        }
    });

    function loadSuggestions() {
        suggestionList.innerHTML = ''; // Limpa a lista antes de carregar
        const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
        
        suggestions.forEach(suggestion => {
            addSuggestionToList(suggestion);
        });

        updateTotalSuggestions(suggestions.length);
    }

    function saveSuggestion(suggestion) {
        const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
        suggestions.push(suggestion);
        localStorage.setItem('suggestions', JSON.stringify(suggestions));

        updateTotalSuggestions(suggestions.length);
    }

    function addSuggestionToList(suggestion) {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        suggestionList.appendChild(listItem);
    }

    function updateTotalSuggestions(count) {
        totalSuggestions.textContent = count;
    }
});
