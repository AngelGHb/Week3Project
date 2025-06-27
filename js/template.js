document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const correctAnswers = {
    q1: 'a',
    q2: 'b',
    q3: 'c',
    q4: 'd',
    q5: 'a',
    q6: 'b',
    q7: 'c',
    q8: 'd',
    q9: 'a',
    q10: 'b'
  };

  let score = 0;
  let total = Object.keys(correctAnswers).length;
  let resultMessage = '';

  for (let question in correctAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    const userAnswer = selected ? selected.value : null;

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
