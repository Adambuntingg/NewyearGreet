// Array of valid names
const validNames = ['Alice', 'Tito', 'Charlie', 'David', 'Eve']; // Add your valid names here

// Event listener for the gift link
document.getElementById('gift-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const name = document.getElementById('name-input').value.trim(); // Get and trim the input value
    
    if (name) {
        // Check if the entered name is in the validNames array
        const nameIndex = validNames.indexOf(name);
        if (nameIndex !== -1) {
            // Store the name and its index in local storage
            localStorage.setItem('userName', name);
            localStorage.setItem('userIndex', nameIndex); // Save the index as well
            window.location.href = 'gifts.html'; // Redirect to gifts.html
        } else {
            alert("Didn't work, sorry."); // Alert if the name doesn't match
        }
    } else {
        alert('Please enter a name!'); // Alert if no name is entered
    }
});

