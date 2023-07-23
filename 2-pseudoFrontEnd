let extracurriculars = [];

// Function to add a new extracurricular to the list

function addExtracurricular(name) {
  extracurriculars.push(name);
}

// Function to generate AI response

function generateAIResponse() {
  // Make a request to the AI API with the extracurriculars
  const requestPayload = {
    extracurriculars: extracurriculars
  };

  // Send the request to the AI API
  fetch('/api/ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestPayload)
  })
    .then(response => response.json())
    .then(data => {
      // Extract the ranking, rephrased extracurriculars, and best-fit major from the AI response
      const { ranking, rephrasedExtracurriculars, bestFitMajor } = data;

      // Display the ranking on the front-end
      const rankingList = document.getElementById('ranking-list');
      rankingList.innerHTML = '';

      ranking.forEach((extracurricular, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${extracurricular}`;
        rankingList.appendChild(listItem);
      });

      // Display the rephrased extracurriculars on the front-end
      const rephrasedList = document.getElementById('rephrased-list');
      rephrasedList.innerHTML = '';

      rephrasedExtracurriculars.forEach(rephrased => {
        const listItem = document.createElement('li');
        listItem.textContent = rephrased;
        rephrasedList.appendChild(listItem);
      });

      // Display the best-fit major on the front-end
      const bestFitMajorElement = document.getElementById('best-fit-major');
      bestFitMajorElement.textContent = bestFitMajor;
    })
    .catch(error => {
      console.error('Error generating AI response:', error);
      alert('Failed to generate AI response. Please try again.');
    });
}

// Handle form submission for adding a new extracurricular
function handleAddExtracurricular(event) {
  event.preventDefault();

  const nameInput = document.getElementById('extracurricular-name');
  const name = nameInput.value.trim();

  if (name === '') {
    alert('Please enter a valid extracurricular name.');
    return;
  }

  // Add the new extracurricular to the list
  addExtracurricular(name);

  // Clear the input field
  nameInput.value = '';
}

// Handle AI response generation
function handleGenerateAIResponse(event) {
  event.preventDefault();

  if (extracurriculars.length === 0) {
    alert('Please add at least one extracurricular before generating AI response.');
    return;
  }

  // Generate the AI response
  generateAIResponse();
}

// Attach event listener to the form submission for adding an extracurricular

const addExtracurricularForm = document.getElementById('add-extracurricular-form');
addExtracurricularForm.addEventListener('submit', handleAddExtracurricular);

// Attach event listener to the form submission for generating AI response

const generateAIResponseForm = document.getElementById('generate-ai-response-form');
generateAIResponseForm.addEventListener('submit', handleGenerateAIResponse);
