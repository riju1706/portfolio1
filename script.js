const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

////////////scroll event/////////////

window.addEventListener("scroll", scrollFn);

function scrollFn() {
  //home =====================

  const homeImg = document.querySelector(".home-img");
  const homeImgDistance = homeImg.getBoundingClientRect().bottom;
  if (homeImgDistance < 405) {
    homeImg.classList.add("homeImgActive");
  } else {
    homeImg.classList.remove("homeImgActive");
  }

  //  About me==========================================

  const profile = document.querySelector(".profile");
  const skills = document.querySelector(".skills");

  const aboutPDistance = profile.getBoundingClientRect().top;
  const aboutSDistance = skills.getBoundingClientRect().top;

  profile.classList.toggle("showAbout", aboutPDistance < 600);
  skills.classList.toggle("showAbout", aboutSDistance < 600);

  // resume=================================
  const resumeContent = document.querySelector(".resume-content");
  const resumeDistance = resumeContent.getBoundingClientRect().top;

  var box = document.querySelector(".box");
  box.classList.toggle("active2", resumeDistance < 600);

  // project ============================

  const facebookDiv = document.querySelector(".facebookDiv");
  const fashionDiv = document.querySelector(".fashionDiv");
  const omniDiv = document.querySelector(".omniDiv");

  const facebookDistance = facebookDiv.getBoundingClientRect().top;
  const fashionDistance = fashionDiv.getBoundingClientRect().top;
  const omniDistance = omniDiv.getBoundingClientRect().top;

  facebookDiv.classList.toggle("showAbout", facebookDistance < 600);
  fashionDiv.classList.toggle("showAbout", fashionDistance < 600);
  omniDiv.classList.toggle("showAbout", omniDistance < 600);
}

// project ============================

const facebookAllPage = document.querySelector(".facebookAllPage");
const facebookProject = document.querySelector(".facebookProjecttext");
const facebookiconclose = document.querySelector(".facebookIconClose");

facebookProject.addEventListener("click", () => {
  fashionAllPage.classList.remove("show2");

  facebookAllPage.classList.toggle("show2");
});
facebookiconclose.addEventListener("click", () => {
  facebookAllPage.classList.remove("show2");
});
/////////////

//////////////////

const fashionAllPage = document.querySelector(".fashionAllPage");
const fashionProject = document.querySelector(".fashionProjecttext");
const fashioniconclose = document.querySelector(".fashioniconclose");

fashionProject.addEventListener("click", () => {
  facebookAllPage.classList.remove("show2");
  fashionAllPage.classList.toggle("show2");
});
fashioniconclose.addEventListener("click", () => {
  fashionAllPage.classList.remove("show2");
});

////////////////////

const omnifoodAllPage = document.querySelector(".omnifoodAllPage");
const omnifoodProjecttext = document.querySelector(".omnifoodProjecttext");
const omnifoodiconclose = document.querySelector(".omnifoodiconclose");

omnifoodProjecttext.addEventListener("click", () => {
  omnifoodAllPage.classList.toggle("show2");
});
omnifoodiconclose.addEventListener("click", () => {
  omnifoodAllPage.classList.remove("show2");
});

// autotype=============================================

var typed = new Typed(".autoType", {
  strings: ["Web Developer", " React Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// menuIcon============================================
const openCloseIcon = document.querySelector(".openCloseIcon");
const menuIconActive = document.querySelector("#menu-icon-active");

const menuIconClose = document.querySelector("#menu-icon-close");

const navList = document.querySelector(".nav-list");
const navigation = document.querySelectorAll(".navigation");

openCloseIcon.addEventListener("click", function () {
  navList.classList.toggle("nav-list-short");
  menuIconClose.classList.toggle("display-block");
  menuIconActive.classList.toggle("display-none");
});

navigation.forEach((e) => {
  e.addEventListener("click", () => {
    navList.classList.remove("nav-list-short");
    menuIconClose.classList.toggle("display-block");
    menuIconActive.classList.toggle("display-none");
  });
});
const width = window.screen.width;

// smpt.js===========================

function sendmail() {
  const from = document.querySelector(".from").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;

  const message = document.getElementById("message").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rijudasmadanpur@gmail.com",
    Password: "2146FB9A8F0B17E8D30A9BF35922E9541531",
    To: "riju1706@gmail.com",
    From: "rijudasmadanpur@gmail.com",
    Subject: "Portfolio contact",
    Body: `from: ${from}, email: ${email}, subject: ${subject}, message: ${message}`,
  }).then((message) => {
    if ((message = "OK")) {
      alert("Thank You! Your message has been send.");
    }
  });
}
