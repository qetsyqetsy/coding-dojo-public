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
