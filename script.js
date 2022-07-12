var dot1 = document.getElementById("1");
var dot2 = document.getElementById("2");
var dot3 = document.getElementById("3");
var dot4 = document.getElementById("4");
let curr;
let currBox;
let windowWidth = window.innerWidth;
let boxes = document.querySelectorAll(".box");
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth < 550) {
    console.log(boxes);
    currBox = boxes[0];
    curr = dot1;
    dot1.classList.add("active");
    boxes[1].classList.add("d-none");
    boxes[2].classList.add("d-none");
    boxes[3].classList.add("d-none");
  }
  if (windowWidth > 550) {
    console.log(boxes);
    boxes[0].classList.remove("d-none");
    boxes[1].classList.remove("d-none");
    boxes[2].classList.remove("d-none");
    boxes[3].classList.remove("d-none");
  }
});
if (windowWidth < 550) {
  let boxes = document.querySelectorAll(".box");
  console.log(boxes);
  currBox = boxes[0];
  curr = dot1;
  dot1.classList.add("active");
  boxes[1].classList.add("d-none");
  boxes[2].classList.add("d-none");
  boxes[3].classList.add("d-none");
}
if (windowWidth > 550) {
  let boxes = document.querySelectorAll(".box");
  console.log(boxes);
  boxes[0].classList.remove("d-none");
  boxes[1].classList.remove("d-none");
  boxes[2].classList.remove("d-none");
  boxes[3].classList.remove("d-none");
}

dot1.addEventListener("click", () => {
  if (boxes[0].classList.contains("d-none")) {
    boxes[0].classList.remove("d-none");
    dot1.classList.add("active");
    curr.classList.remove("active");
    currBox.classList.add("d-none");
    currBox = boxes[0];
    curr = dot1;
  }
});
dot2.addEventListener("click", () => {
  if (boxes[1].classList.contains("d-none")) {
    boxes[1].classList.remove("d-none");
    dot2.classList.add("active");
    curr.classList.remove("active");
    currBox.classList.add("d-none");
    currBox = boxes[1];
    curr = dot2;
  }
});
dot3.addEventListener("click", () => {
  if (boxes[2].classList.contains("d-none")) {
    boxes[2].classList.remove("d-none");
    dot3.classList.add("active");
    curr.classList.remove("active");
    currBox.classList.add("d-none");
    currBox = boxes[2];
    curr = dot3;
  }
});
dot4.addEventListener("click", () => {
  if (boxes[3].classList.contains("d-none")) {
    boxes[3].classList.remove("d-none");
    dot4.classList.add("active");
    curr.classList.remove("active");
    currBox.classList.add("d-none");
    currBox = boxes[3];
    curr = dot4;
  }
});
