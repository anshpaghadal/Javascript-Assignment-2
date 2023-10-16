// Constants for query selectors
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");



// function to change bg color from user input and add student id
function changeCustomColor() {
  const userInput = parseInt(customNumberInput.value);

  if (userInput < 0 || userInput > 100) {
    document.body.style.backgroundColor = "red";
  } else if (userInput >= 0 && userInput <= 20) {
    document.body.style.backgroundColor = "green";
  } else if (userInput > 20 && userInput <= 40) {
    document.body.style.backgroundColor = "blue";
  } else if (userInput > 40 && userInput <= 60) {
    document.body.style.backgroundColor = "orange";
  } else if (userInput > 60 && userInput <= 80) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }

  myStudentId.innerText = "200544015"; 
}

// function to change bg color from random no.
function changeRandomColor() {
  const randomValue = Math.floor(Math.random() * 100) + 1;
  customNumberInput.value = randomValue;
  changeCustomColor();
}

// function to generate options for select list
function addList() {
  const imageSrcArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
  for (let i = 0; i < imageSrcArray.length; i++) {
    const option = document.createElement("option");
    option.value = imageSrcArray[i];
    option.text = `Image ${i + 1}`;
    imageSelect.appendChild(option);
  }
}

// function to change image
function changeImage() {
  const selectedImage = imageSelect.value;
  images.src = `img/${selectedImage}`;
}

// Initial function call to populate the select list
addList();

// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);