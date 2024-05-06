document.addEventListener("DOMContentLoaded", function() {
    function updateLikeCount(feedId) {
        const likeCountElement = document.querySelector(`#like-count-${feedId}`);
        if (likeCountElement) {
            let currentLikes = parseInt(likeCountElement.textContent);
            currentLikes++;
            likeCountElement.textContent = currentLikes;
        } else {
            console.error(`Like count element with ID 'like-count-${feedId}' not found.`);
        }
    }
});

function updateLikeCount(feedId) {
    // Find the like count element corresponding to the clicked button
    const likeCountElement = document.querySelector(`#like-count-${feedId}`);

    // Get the current like count
    let currentLikes = parseInt(likeCountElement.textContent);

    // Increment the like count
    currentLikes++;

    // Update the like count element with the new value
    likeCountElement.textContent = currentLikes;
}


// Change the text to say "Logout" when clicking the "Login" button 

function toggleLogin() {
    var button = document.querySelector('.log');
    if (button.textContent === 'Login') {
        button.textContent = 'Logout';
    } else {
        button.textContent = 'Login';
    }
}


// Remove the Add Definition button when it is clicked 

function removeButton() {
    var button = document.querySelector('.def');
    button.parentNode.removeChild(button);
}

// Alert "Ninja was liked" when clicking a like button 

function showAlert() {
    alert("You liked this!");
}

