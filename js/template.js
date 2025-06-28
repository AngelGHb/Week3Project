document.addEventListener("DOMContentLoaded", () => {
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

  const form = document.getElementById("quiz-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    let resultMessage = "";

    for (let question in correctAnswers) {
      const selected = form.querySelector(`input[name="${question}"]:checked`);
      const userAnswer = selected ? selected.value : null;

      if (userAnswer === correctAnswers[question]) {
        score++;
        resultMessage += `✅ ${question.toUpperCase()} is correct!<br>`;
      } else {
        resultMessage += `❌ ${question.toUpperCase()} is incorrect. Correct: ${correctAnswers[question].toUpperCase()}<br>`;
      }
    }

    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = `<h2>Your Score: ${score} / 10</h2><p>${resultMessage}</p>`;
    document.body.appendChild(resultDiv);
  });
});
