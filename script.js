function submitQuiz() {
    // Les réponses correctes
    const correctAnswers = {
        q1: '4',
        q2: 'HTML',
        q3: 'HTML',
        q4: 'HTML',
        q5: 'HTML'
    };

    // Récupérer les réponses du formulaire
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    
    let score = 0;
    let totalQuestions = 0;

    // Vérifier les réponses
    for (const [question, answer] of formData.entries()) {
        totalQuestions++;
        if (answer === correctAnswers[question]) {
            score++;
        }
    }

    // Afficher le score
    alert(`Vous avez obtenu ${score} sur ${totalQuestions} correct.`);
}
