// Array of valid names
const validNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']; // Add your valid names here

document.getElementById('gift-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const name = document.getElementById('name-input').value.trim();
    
    if (name) {
        // Check if the entered name is in the validNames array
        if (validNames.includes(name)) {
            localStorage.setItem('userName', name); // Store the name in local storage
            window.location.href = 'gifts.html'; // Redirect to gifts.html
        } else {
            alert("Didn't work, sorry."); // Alert if the name doesn't match
        }
    } else {
        alert('Please enter a name!'); // Alert if no name is entered
    }
});

// In gifts.js, after the user is redirected to gifts.html
document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('userName'); // Get the name from local storage
    const greeting = document.getElementById('greeting');

    if (name) {
        greeting.textContent = `Merry Christmas + ${name}!`; // Update greeting with the user's name
    } else {
        greeting.textContent = 'Merry Christmas!'; // Default greeting if no name is found
    }
});