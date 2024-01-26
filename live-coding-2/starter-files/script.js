// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


// Function to fetch an answer from the API
async function fetchAnswer() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.answer;
  } catch (error) {
    console.error('Error fetching answer:', error);
    return 'Error fetching answer';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.getElementById('input');
  const buttonElement = document.getElementById('button');
  const answerElement = document.getElementById('answer');

  // Attach fetchAnswer to the button click event
  buttonElement.addEventListener('click', async function() {
    // Add loading state (optional)
    answerElement.textContent = 'Loading...';

    const answer = await fetchAnswer();

    // Output the API response
    answerElement.textContent = answer;

    // Clear output after 3 seconds
    setTimeout(() => {
      answerElement.textContent = '';
    }, 3000);
  });
});