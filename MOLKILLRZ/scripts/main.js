document.addEventListener('DOMContentLoaded', function() {
    // Visual feedback effect for cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Visual feedback on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const subjectCards = document.querySelectorAll('.subject-card');
    const categoryTitles = document.querySelectorAll('.category-title');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            // If search is empty, show all cards and categories
            if (searchTerm === '') {
                subjectCards.forEach(card => {
                    card.closest('.col-md-6').style.display = 'block';
                });
                
                categoryTitles.forEach(title => {
                    title.style.display = 'block';
                });
                
                return;
            }
            
            // Hide all category titles initially
            categoryTitles.forEach(title => {
                title.style.display = 'none';
            });
            
            // Search through cards
            let visibleCards = 0;
            
            subjectCards.forEach(card => {
                const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
                const cardText = card.querySelector('.card-text').textContent.toLowerCase();
                const cardContainer = card.closest('.col-md-6');
                
                if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
                    cardContainer.style.display = 'block';
                    visibleCards++;
                    
                    // Show the category title if it contains visible cards
                    const categoryTitle = cardContainer.closest('.container').querySelector('.category-title');
                    if (categoryTitle) {
                        categoryTitle.style.display = 'block';
                    }
                } else {
                    cardContainer.style.display = 'none';
                }
            });
            
            // Show "No results found" message if no cards match
            const noResultsMsg = document.getElementById('no-results-message');
            if (visibleCards === 0) {
                if (!noResultsMsg) {
                    const message = document.createElement('div');
                    message.id = 'no-results-message';
                    message.className = 'alert alert-info text-center mt-4';
                    message.innerHTML = '<i class="fas fa-search me-2"></i>Nenhum resultado encontrado para "' + searchTerm + '"';
                    document.querySelector('.container').appendChild(message);
                } else {
                    noResultsMsg.style.display = 'block';
                    noResultsMsg.innerHTML = '<i class="fas fa-search me-2"></i>Nenhum resultado encontrado para "' + searchTerm + '"';
                }
            } else if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
        });
    }
    
    // Handle section display in materia.html
    const referenceSections = document.querySelectorAll('.reference-section');
    const backButton = document.getElementById('backButton');
    const cardsContainer = document.getElementById('cardsContainer');
    const subtitle = document.getElementById('subtitle');
    
    if (referenceSections.length > 0) {
        // Hide all sections initially
        referenceSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Check if there's a hash in the URL
        if (window.location.hash) {
            const sectionId = window.location.hash.substring(1);
            showSection(sectionId);
        }
        
        // Handle card clicks
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('data-section');
                showSection(sectionId);
            });
        });
        
        // Handle back button
        if (backButton) {
            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                hideAllSections();
            });
        }
        
        function showSection(sectionId) {
            // Hide all sections first
            referenceSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
                document.body.classList.add('content-shown');
                
                // Update subtitle
                if (subtitle) {
                    const cardTitle = document.querySelector(`.card[data-section="${sectionId}"] h3`).textContent;
                    subtitle.innerHTML = `<p>${cardTitle}</p>`;
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
        }
        
        function hideAllSections() {
            referenceSections.forEach(section => {
                section.classList.remove('active');
            });
            document.body.classList.remove('content-shown');
            if (subtitle) {
                subtitle.innerHTML = '<p>Selecione um tópico para estudar</p>';
            }
        }
    }
});
