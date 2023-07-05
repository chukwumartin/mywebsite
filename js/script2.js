// Get the necessary elements
const photoFileInput = document.getElementById('photo-file');
const uploadButton = document.getElementById('upload-button');
const photoFeed = document.getElementById('photo-feed');

// Add event listener for the upload button
uploadButton.addEventListener('click', () => {
  // Get the selected file
  const file = photoFileInput.files[0];

  // Clear the file input
  photoFileInput.value = '';
});

// Enable drag and drop functionality for the photo feed
photoFeed.addEventListener('dragover', (event) => {
  event.preventDefault();
});

photoFeed.addEventListener('drop', (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];

  // Perform necessary processing (e.g., upload to server, add to photo feed)
});
