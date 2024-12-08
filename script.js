import { Gradient } from './Gradient.js'

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')
        

// Handle image uploads
function handleImageUpload(imageUploadId, uploadedImageId, fileLabelId) {
  document.getElementById(imageUploadId).addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
              const img = document.getElementById(uploadedImageId);
              const label = document.getElementById(fileLabelId);
              img.src = e.target.result; // Set the source of the image to the uploaded file
              img.style.display = 'block'; // Show the uploaded image
              label.style.display = 'none'; // Hide the "Choose file" text once an image is uploaded
          };
          reader.readAsDataURL(file);
      }
  });
}

// Image upload handling for all 5 upload areas
handleImageUpload('image-upload-1', 'uploaded-image-1', 'file-label-1');
handleImageUpload('image-upload-2', 'uploaded-image-2', 'file-label-2');
handleImageUpload('image-upload-3', 'uploaded-image-3', 'file-label-3');
handleImageUpload('image-upload-4', 'uploaded-image-4', 'file-label-4');
handleImageUpload('image-upload-5', 'uploaded-image-5', 'file-label-5');

// Download button functionality
document.getElementById('download-btn').addEventListener('click', function () {
  html2canvas(document.getElementById('wrapped-editor')).then(function (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'wrapped_image.png';
      link.click();
  });
});
