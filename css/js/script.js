document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Favorites Management
    function getFavorites() {
        const favs = localStorage.getItem('plant_favorites');
        return favs ? JSON.parse(favs) : [];
    }

    function toggleFavorite(plantId, btnElement) {
        let favs = getFavorites();
        if (favs.includes(plantId)) {
            favs = favs.filter(id => id !== plantId);
            if (btnElement) {
                btnElement.classList.remove('active');
                btnElement.innerHTML = '♡';
            }
        } else {
            favs.push(plantId);
            if (btnElement) {
                btnElement.classList.add('active');
                btnElement.innerHTML = '❤';
            }
        }
        localStorage.setItem('plant_favorites', JSON.stringify(favs));
        
        // If on favorites page, re-render
        if (document.getElementById('favorites-container')) {
            renderFavorites();
        }
    }

    // 3. Render Cards
    function createPlantCard(plant) {
        const isFav = getFavorites().includes(plant.id);
        const card = document.createElement('div');
        card.className = 'plant-card';
        card.innerHTML = `
            <img src="${plant.image}" alt="${plant.name} on PlantGuide" onerror="this.src='https://via.placeholder.com/600x400/2E7D32/ffffff?text=${plant.name}'">
            <div class="plant-card-content">
                <div class="plant-card-header">
                    <h3>${plant.name}</h3>
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${plant.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                        ${isFav ? '❤' : '♡'}
                    </button>
                </div>
                <p style="color: var(--text-light); margin-bottom: 1.5rem; font-size: 0.95rem;">${plant.description}</p>
                <button class="btn btn-primary view-details-btn" data-id="${plant.id}" style="width: 100%;">View Care Details</button>
            </div>
        `;

        // Attach event listeners to buttons
        const favBtn = card.querySelector('.fav-btn');
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(plant.id, favBtn);
        });

        const detailBtn = card.querySelector('.view-details-btn');
        detailBtn.addEventListener('click', () => {
            openModal(plant);
        });

        return card;
    }

    // Modal Logic
    const modalOverlay = document.getElementById('plant-modal');
    const modalClose = document.getElementById('modal-close');
    const modalFavBtn = document.getElementById('modal-fav-btn');
    let currentModalPlantId = null;

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    if (modalFavBtn) {
        modalFavBtn.addEventListener('click', () => {
            if (currentModalPlantId) {
                toggleFavorite(currentModalPlantId, modalFavBtn);
                // Sync grid button if on plants page
                const gridBtn = document.querySelector(`.fav-btn[data-id="${currentModalPlantId}"]`);
                if (gridBtn) {
                    const isNowFav = getFavorites().includes(currentModalPlantId);
                    if (isNowFav) {
                        gridBtn.classList.add('active');
                        gridBtn.innerHTML = '❤';
                    } else {
                        gridBtn.classList.remove('active');
                        gridBtn.innerHTML = '♡';
                    }
                }
            }
        });
    }

    function openModal(plant) {
        if (!modalOverlay) return;
        currentModalPlantId = plant.id;
        
        document.getElementById('modal-title-text').textContent = plant.name;
        document.getElementById('modal-image').src = plant.image;
        document.getElementById('modal-desc').textContent = plant.description;
        document.getElementById('modal-water').textContent = plant.watering;
        document.getElementById('modal-sun').textContent = plant.sunlight;
        document.getElementById('modal-soil').textContent = plant.soil;
        document.getElementById('modal-fert').textContent = plant.fertilizer;
        document.getElementById('modal-probs').textContent = plant.problems;
        
        const stepsContainer = document.getElementById('modal-steps');
        stepsContainer.innerHTML = '';
        plant.steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            stepsContainer.appendChild(li);
        });

        const isFav = getFavorites().includes(plant.id);
        if (isFav) {
            modalFavBtn.classList.add('active');
            modalFavBtn.innerHTML = '❤';
            modalFavBtn.title = "Remove from Favorites";
        } else {
            modalFavBtn.classList.remove('active');
            modalFavBtn.innerHTML = '♡';
            modalFavBtn.title = "Add to Favorites";
        }

        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
            currentModalPlantId = null;
        }
    }

    // Render logic for Plants Page
    const plantsContainer = document.getElementById('plants-container');
    if (plantsContainer && typeof plantsData !== 'undefined') {
        plantsData.forEach(plant => {
            plantsContainer.appendChild(createPlantCard(plant));
        });
    }

    // Render logic for Favorites Page
    function renderFavorites() {
        const favContainer = document.getElementById('favorites-container');
        const emptyMsg = document.getElementById('fav-empty-msg');
        
        if (favContainer && typeof plantsData !== 'undefined') {
            favContainer.innerHTML = '';
            const favIds = getFavorites();
            const favPlants = plantsData.filter(p => favIds.includes(p.id));
            
            if (favPlants.length === 0) {
                emptyMsg.style.display = 'block';
            } else {
                emptyMsg.style.display = 'none';
                favPlants.forEach(plant => {
                    favContainer.appendChild(createPlantCard(plant));
                });
            }
        }
    }
    
    if (document.getElementById('favorites-container')) {
        renderFavorites();
    }

    // 4. Form Validation
    function showError(group, show) {
        if (show) {
            group.classList.add('error');
        } else {
            group.classList.remove('error');
        }
    }

    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const groupUser = document.getElementById('group-username');
            const groupPass = document.getElementById('group-password');
            const feedback = document.getElementById('login-feedback');
            
            if (!usernameInput.value.trim()) {
                showError(groupUser, true);
                isValid = false;
            } else {
                showError(groupUser, false);
            }

            if (passwordInput.value.length < 6) {
                showError(groupPass, true);
                isValid = false;
            } else {
                showError(groupPass, false);
            }

            if (isValid) {
                feedback.textContent = `Welcome back, ${usernameInput.value.trim()}! Logged in successfully.`;
                feedback.className = 'feedback-msg success';
                loginForm.reset();
            } else {
                feedback.textContent = 'Please fix the errors above.';
                feedback.className = 'feedback-msg error';
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const msgInput = document.getElementById('message');
            
            const groupName = document.getElementById('group-name');
            const groupEmail = document.getElementById('group-email');
            const groupMsg = document.getElementById('group-message');
            const feedback = document.getElementById('contact-feedback');
            
            // Name validation
            if (!nameInput.value.trim()) {
                showError(groupName, true);
                isValid = false;
            } else {
                showError(groupName, false);
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                showError(groupEmail, true);
                isValid = false;
            } else {
                showError(groupEmail, false);
            }

            // Message validation
            if (msgInput.value.trim().length < 10) {
                showError(groupMsg, true);
                isValid = false;
            } else {
                showError(groupMsg, false);
            }

            if (isValid) {
                feedback.textContent = 'Thank you for your message! We will get back to you shortly.';
                feedback.className = 'feedback-msg success';
                contactForm.reset();
            } else {
                feedback.textContent = 'Please fix the errors above.';
                feedback.className = 'feedback-msg error';
            }
        });
    }
});
