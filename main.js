const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const imgEl = document.querySelector(".imgBx");
let nextImg = 0;
let nowPage = 0;

function setActive(i) {
  for (slide of slides) {
    slide.classList.remove("active");
    slides[i].classList.add("active");
  }
  for (dot of dots) {
    dot.classList.remove("active");
    dots[i].classList.add("active");
  }
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    setActive(j);
  });
}

console.log(imgEl);

imgEl.addEventListener("wheel", function (e) {
  nextImg += e.deltaY * -0.01;

  if (nextImg < -3) {
    let nextImgEl = document.querySelectorAll(".dot");

    console.log(nextImgEl);
    for (let i = 0; i < nextImgEl.length; i++) {
      console.log(nextImgEl[i].classList.value);
      if (nextImgEl[i].classList.value === "dot active") {
        nowPage = i;
        setActive(i + 1);
        nextImg = 0;
        console.log(nowPage);
        break;
      }
    }
  } else if (nextImg > 3) {
    let nextImgEl = document.querySelectorAll(".dot");

    for (let i = 0; i < nextImgEl.length; i++) {
      console.log(nextImgEl[i].classList.value);
      if (nextImgEl[i].classList.value === "dot active") {
        nowPage = i;
        setActive(i - 1);
        console.log(nowPage);

        break;
      }
    }
  }
});
