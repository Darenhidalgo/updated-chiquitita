var sliderContent = ["Developer", "Student", "Pogi", "Astig"];
var sliderCounter = 0;
var sliderValue = document.querySelector("#SliderValue");

function slide() {
  if (sliderCounter == sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");

  let letterDiv = document.createElement("div");
  letterDiv.innerHTML = sliderContent[sliderCounter];

  if (letterDiv.innerHTML == "") {
    letterDiv.innerHTML = "&nbsp";
  }
  letterDiv.classList.add("start");
  letterDiv.classList.add("animation");
  sliderValue.appendChild(letterDiv);

  sliderCounter++;
}

slide();
setInterval(slide, 2000);

$(".menu-btn").click(function () {
  $(".menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

const sr = ScrollReveal({
  origin: "top",
  disance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text", {});
sr.reveal(".home-img", { delay: 200 });

sr.reveal(".heading", {});
