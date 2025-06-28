document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  let currentQuestion = 0;
  const correctAnswers = {
    q1: "c",
    q2: "b",
    q3: "d",
    q4: "a",
    q5: "a",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "c",
    q10: "d",
  };

  let score = 0;
  let resultMessage = "";

  // Hide all questions initially
  questions.forEach((q, index) => {
    if (index !== 0) q.style.display = "none"; // only show the first question
  });

  function handleAnswer(event) {
    const selected = questions[currentQuestion].querySelector("input:checked");
    if (!selected) {
      alert("Please select an answer before continuing.");
      return;
    }

    const questionName = selected.name;
    const userAnswer = selected.value;

    if (userAnswer === correctAnswers[questionName]) {
      score++;
      resultMessage += `✅ ${questionName.toUpperCase()} is correct!<br>`;
    } else {
      resultMessage += `❌ ${questionName.toUpperCase()} is incorrect. Correct: ${correctAnswers[
        questionName
      ].toUpperCase()}<br>`;
    }

    // Hide current question
    questions[currentQuestion].style.display = "none";
    currentQuestion++;

    // If there's another question, show it
    if (currentQuestion < questions.length) {
      questions[currentQuestion].style.display = "block";
    } else {
      showResults();
    }
  }

  function showResults() {
    const total = Object.keys(correctAnswers).length;
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = `<h2>Your Score: ${score} / ${total}</h2><p>${resultMessage}</p>`;
    document.querySelector(".border").appendChild(resultDiv);
  }

  // Add change listener to each question's radio buttons
  questions.forEach((questionDiv, index) => {
    const radios = questionDiv.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", handleAnswer);
    });
  });

  // Hide the submit button since we're not using it
  const submitButton = document.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.style.display = "none";
  }
});
