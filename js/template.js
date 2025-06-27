document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const correctAnswers = {
    q1: 'c',
    q2: 'b',
    q3: 'd',
    q4: 'a',
    q5: 'a',
    q6: 'b',
    q7: 'c',
    q8: 'a',
    q9: 'c',
    q10: 'd'
  };

  let score = 0;
  let total = Object.keys(correctAnswers).length;
  let resultMessage = '';

  for (let question in correctAnswers) {
    let selected = document.querySelector(`input[name="${question}"]:checked`);
    let userAnswer;

    if (selected) {
    userAnswer = selected.value;
    } else {
    userAnswer = null;
    }

    if (userAnswer === correctAnswers[question]) {
      score++;
      resultMessage += `✅ ${question.toUpperCase()} is correct!<br>`;
    } else {
      resultMessage += `❌ ${question.toUpperCase()} is incorrect. Correct: ${correctAnswers[question].toUpperCase()}<br>`;
    }
  }

  // Show results below the form
  const resultDiv = document.createElement('div');
  resultDiv.innerHTML = `<h2>Your Score: ${score} / ${total}</h2><p>${resultMessage}</p>`;
  document.body.appendChild(resultDiv);
});
