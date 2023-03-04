// Get the gallery container element
const galleryContainer = document.getElementById("gallery-container");

// Define the path to the folder containing the images
const imagePath = "./gallery/";

// Define an array to hold the image file names
const imageNames = ["image1.jpg", "image2.jpg", "image3.jpg"];

// Loop through the image file names and create an img element for each
imageNames.forEach((imageName) => {
  // Create the img element
  const img = document.createElement("img");

  // Set the src attribute to the image path + image name
  img.src = imagePath + imageName;

  // Add the img element to the gallery container
  galleryContainer.appendChild(img);
});
