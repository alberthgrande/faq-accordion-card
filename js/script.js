const faqQuestion = document.querySelectorAll(".question");

faqQuestion.forEach((question) =>
  question.addEventListener("click", function () {
    //
    //
    if (question.parentNode.classList.contains("active")) {
      //
      question.parentNode.classList.toggle("active");
      //
    } else {
      //

      faqQuestion.forEach((question) =>
        question.parentNode.classList.remove("active")
      );

      question.parentNode.classList.add("active");
      //
    }
  })
);
