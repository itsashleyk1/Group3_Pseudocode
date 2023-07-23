// Initialize an empty array to store the extracurriculars 

let extracurriculars = [];

// Function to add a new extracurricular to the 

list function addExtracurricular(name) {
extracurriculars.push(name); 
} 

// Render the extracurriculars on the front-end 

function renderExtracurriculars(){ 
const extracurricularList = document.getElementById('extracurricular-list');
extracurricularList.innerHTML = ''; 
extracurriculars.forEach(
extracurricular => { 
const listItem = document.createElement('li'); 
listItem.textContent = extracurricular; 
extracurricularList.appendChild(listItem); 

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

// Render the updated extracurricular list

 renderExtracurriculars(); } 
// Fetch extracurriculars and render them on page load

window.addEventListener('DOMContentLoaded', () => { 
renderExtracurriculars();
}); 

// Attach event listener to the form submission 

const addExtracurricularForm = document.getElementById('add-extracurricular-form'); 
addExtracurricularForm.addEventListener('submit', handleAddExtracurricular);


