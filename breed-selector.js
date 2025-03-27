document.addEventListener('DOMContentLoaded', () => {
    const breedData = [
        {
            name: 'Gir',
            milkYield: 'High (3500-4000 kg)',
            climate: 'Tropical',
            strength: 'Heat Resistance',
            region: 'Gujarat'
        },
        {
            name: 'Sahiwal',
            milkYield: 'Medium (2500-3000 kg)',
            climate: 'Subtropical',
            strength: 'Milk Quality',
            region: 'Punjab'
        },
        // Add more breeds...
    ];

    const selector = document.getElementById('breed-selector');
    const resultContainer = document.getElementById('breed-result');

    const createBreedMatchAlgorithm = () => {
        const questions = [
            {
                question: 'What is your primary goal?',
                options: [
                    { text: 'Milk Production', value: 'milkYield' },
                    { text: 'Draft Work', value: 'strength' },
                    { text: 'Climate Adaptation', value: 'climate' }
                ]
            },
            {
                question: 'What type of climate do you have?',
                options: [
                    { text: 'Tropical', value: 'tropical' },
                    { text: 'Subtropical', value: 'subtropical' },
                    { text: 'Arid', value: 'arid' }
                ]
            }
        ];

        // Render questions dynamically
        questions.forEach(q => {
            const questionDiv = document.createElement('div');
            questionDiv.innerHTML = `
                <h3>${q.question}</h3>
                ${q.options.map(opt => `
                    <button class="option-btn" data-value="${opt.value}">
                        ${opt.text}
                    </button>
                `).join('')}
            `;
            selector.appendChild(questionDiv);
        });

        // Add event listeners to options
        selector.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-btn')) {
                const selectedValue = e.target.dataset.value;
                const matchedBreeds = breedData.filter(breed => 
                    breed[selectedValue] !== undefined
                );

                // Display results
                resultContainer.innerHTML = matchedBreeds.map(breed => `
                    <div class="breed-match">
                        <h4>${breed.name} Breed</h4>
                        <p>Region: ${breed.region}</p>
                        <p>Milk Yield: ${breed.milkYield}</p>
                        <p>Climate Suitability: ${breed.climate}</p>
                    </div>
                `).join('');
            }
        });
    };

    createBreedMatchAlgorithm();
});
