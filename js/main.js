// Setting Box
let settingsButton = document.querySelector(".settings-box .fa-cog");
settingsButton.onclick = function () {
  document.querySelector(".settings-box").classList.toggle("open");
};
// *****************************************
// Check if there is a color in the local storage
let mainColor = localStorage.getItem("color-option");
if (mainColor != null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
  // remove active class from all items
  document.querySelectorAll(".colors-list li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == localStorage.getItem("color-option")) {
      li.classList.add("active");
    }
  });
}
// *****************************************
// Switch color
let colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    // remove class active from all list items
    colorsList.forEach((li) => {
      li.classList.remove("active");
    });
    // add class active to the target li
    li.classList.add("active");
    // change the --main-color variable
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Store color in the local storage
    localStorage.setItem("color-option", e.target.dataset.color);
  });
});
// *****************************************
// Random background image
// let randomOption = true;
let landingImage = document.querySelector(".landing-page");
let images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.PNG",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];
function randomImageRun() {
  let iden = setInterval(() => {
    // genrate random number
    let num = Math.floor(Math.random() * 10);
    landingImage.style.backgroundImage = `URL(images/${images[num]})`;
  }, 10000);
  return iden;
}
// *****************************************
// Random backgroundImage options
let identifier;
let backgroundOption_Yes = document.querySelector(
  ".settings-container .option-box span.background-yes"
);
let backgroundOption_No = document.querySelector(
  ".settings-container .option-box span.background-no"
);
backgroundOption_Yes.onclick = function (e) {
  backgroundOption_Yes.classList.add("active");
  backgroundOption_No.classList.remove("active");
  // local Storage
  localStorage.setItem("background-option", e.target.dataset.background);
  identifier = randomImageRun();
};
backgroundOption_No.onclick = function (e) {
  backgroundOption_No.classList.add("active");
  backgroundOption_Yes.classList.remove("active");
  // local Storage
  localStorage.setItem("background-option", e.target.dataset.background);
  clearInterval(identifier);
};
// get the value from the local storage when we reload the page
if (
  localStorage.getItem("background-option") == "yes" ||
  localStorage.getItem("background-option") == null
) {
  backgroundOption_Yes.classList.add("active");
  identifier = randomImageRun();
} else {
  backgroundOption_No.classList.add("active");
  backgroundOption_Yes.classList.remove("active");
  clearInterval(identifier);
}
// *****************************************
// Show Bullets
let Bullets = document.querySelector(".bullets");
let showYes = document.querySelector(
  ".settings-container .option-box span.show-yes"
);
let showNo = document.querySelector(
  ".settings-container .option-box span.show-no"
);
showYes.onclick = function (e) {
  showYes.classList.add("active");
  showNo.classList.remove("active");
  // local Storage
  localStorage.setItem("show-option", e.target.dataset.show);
  Bullets.style.display = "block";
  console.log(e.target.dataset.show);
};
showNo.onclick = function (e) {
  showNo.classList.add("active");
  showYes.classList.remove("active");
  // local Storage
  localStorage.setItem("show-option", e.target.dataset.show);
  Bullets.style.display = "none";
  console.log(e.target.dataset.show);
};
// get the value from the local storage when we reload the page
if (
  localStorage.getItem("show-option") == "yes" ||
  localStorage.getItem("show-option") == null
) {
  showYes.classList.add("active");
  showNo.classList.remove("active");
  Bullets.style.display = "block";
} else {
  showNo.classList.add("active");
  showYes.classList.remove("active");
  Bullets.style.display = "none";
}
// *****************************************
// Reset Settings
let reset = document.querySelector(".settings-container .option-box .reset");
reset.onclick = function () {
  localStorage.clear();
  location.reload();
};
// *****************************************
// Skills Section
let skillsSection = document.querySelector(".skills");
let htmlLevel = document.getElementById("html-level");
let cssLevel = document.getElementById("css-level");
let jsLevel = document.getElementById("js-level");
let reactLevel = document.getElementById("react-level");
// get the span inside to write the value of progress
let htmlLevelSpan = document.querySelector("#html-level span");
let cssLevelSpan = document.querySelector("#css-level span");
let jsLevelSpan = document.querySelector("#js-level span");
let reactLevelSpan = document.querySelector("#react-level span");

window.onscroll = function () {
  // landing height + aboutUs height
  let skillsOffsetTop = skillsSection.offsetTop;
  // Skills height
  let skillsOuterHeight = skillsSection.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // window scroll Top (The scrolled height of the page)
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop >= skillsOffsetTop + skillsOuterHeight - windowHeight) {
    htmlLevel.style.width = htmlLevelSpan.innerHTML = "85%";
    cssLevel.style.width = cssLevelSpan.innerHTML = "70%";
    jsLevel.style.width = jsLevelSpan.innerHTML = "50%";
    reactLevel.style.width = reactLevelSpan.innerHTML = "40%";
  }
};
// *****************************************
// Open the photo when i click on it
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //overlay element
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    //popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    // create the image
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    // add image to popup box
    popupBox.appendChild(popupImage);
    // add popup box to body
    document.body.appendChild(popupBox);
    // create heading
    let imageHeading = document.createElement("h3");
    let imgText;
    if (img.alt != "") {
      imgText = document.createTextNode(img.alt);
    } else {
      imgText = document.createTextNode("No title");
    }
    imageHeading.appendChild(imgText);
    popupBox.appendChild(imageHeading);
    // Close Span
    let closeSpan = document.createElement("span");
    closeSpan.className = "close-span";
    let closeText = document.createTextNode("X");
    closeSpan.appendChild(closeText);
    popupBox.appendChild(closeSpan);
  });
});
// Close the popup box when clicking on the close span
document.addEventListener("click", (e) => {
  if (e.target.className == "close-span") {
    // remove popup box
    e.target.parentElement.remove();
    // remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});
// *****************************************
