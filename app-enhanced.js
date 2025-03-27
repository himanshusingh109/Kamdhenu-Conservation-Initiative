// Enhanced JavaScript for Kamdhenu Conservation Initiative

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Breed Filter and Search Functionality
    const breedList = document.getElementById('breed-list');
    const breedDetailsContent = document.getElementById('breed-details-content');
    
    const breeds = [
        {
            name: 'Gir',
            region: 'Gujarat',
            speciality: 'High Milk Production',
            image: 'gir-cow.jpg',
            description: 'Renowned for exceptional milk production and heat resistance.'
        },
        {
            name: 'Sahiwal',
            region: 'Punjab',
            speciality: 'Milk Quality',
            image: 'sahiwal-cow.jpg',
            description: 'Prized for high milk production and docile nature.'
        },
        // Add more breeds from the existing page
    ];

    function renderBreedCards() {
        breedList.innerHTML = breeds.map(breed => `
            <div class="breed-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img src="${breed.image}" alt="${breed.name} Cow" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-semibold text-indigo-700">${breed.name} Cow</h3>
                <p class="text-gray-600 mb-2">Region: ${breed.region}</p>
                <p class="text-gray-600 mb-4">${breed.description}</p>
                <button class="view-breed-details bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Learn More
                </button>
            </div>
        `).join('');

        // Add event listeners to "Learn More" buttons
        document.querySelectorAll('.view-breed-details').forEach((button, index) => {
            button.addEventListener('click', () => {
                // Open a modal or navigate to a detailed breed page
                openBreedModal(breeds[index]);
            });
        });
    }

    function openBreedModal(breed) {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div class="bg-white p-8 rounded-lg max-w-2xl w-full">
                    <h2 class="text-3xl font-bold text-indigo-800 mb-4">${breed.name} Cow</h2>
                    <img src="${breed.image}" alt="${breed.name} Cow" class="w-full h-64 object-cover rounded-lg mb-4">
                    <p class="text-gray-700 mb-4">${breed.description}</p>
                    <button class="close-modal bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                        Close
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    }

    // Impact Chart
    const impactChart = document.getElementById('impact-chart');
    if (impactChart) {
        new Chart(impactChart, {
            type: 'bar',
            data: {
                labels: ['Carbon Sequestration', 'Biodiversity', 'Soil Fertility', 'Economic Impact'],
                datasets: [{
                    label: 'Conservation Impact',
                    data: [85, 75, 90, 80],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic form validation
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (name && email && message) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Initial render of breed cards
    renderBreedCards();
});
