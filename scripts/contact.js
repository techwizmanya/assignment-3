const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page'); // Select the main element

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Create a new paragraph element
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = "Thank you for your message!";
    thankYouMessage.classList.add('large-text'); // Apply the large-text class for styling
    thankYouMessage.style.textAlign = "center"; // Center the text

    // Clear the existing content of the contact page
    contactPage.innerHTML = '';

    // Append the thank you message to the contact page
    contactPage.appendChild(thankYouMessage);
});