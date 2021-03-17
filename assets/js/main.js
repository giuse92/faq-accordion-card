let allQuestions = document.querySelectorAll(".right .question");

let toggleFaq = (e) => {
  let answer = e.currentTarget.nextElementSibling;
  let question = e.currentTarget.children[0];
  let arrowIcon = e.currentTarget.children[1];
  if (answer.style.display === "none") {
    answer.style.display = "block";
    question.style.fontWeight = "700";
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    answer.style.display = "none";
    question.style.fontWeight = "400";
    arrowIcon.style.transform = "rotate(0deg)";
  }
};

for (let question of allQuestions) {
  let answer = question.nextElementSibling;
  answer.style.display = "none";
  question.addEventListener("click", toggleFaq);
}
