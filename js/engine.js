// Quiz Game Engine
class QuizEngine {
    constructor() {
        this.currentQuiz = null;
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.mistakes = 0;
        this.timer = null;
        this.seconds = 0;
        this.isActive = false;
    }

    // Start a new quiz
    startQuiz(quizType) {
        const data = QUIZ_DATA[quizType];
        if (!data) return;

        this.currentQuiz = quizType;
        this.questions = this.shuffleArray([...data.items]);
        this.currentIndex = 0;
        this.score = 0;
        this.mistakes = 0;
        this.seconds = 0;
        this.isActive = true;

        this.startTimer();
        return {
            title: data.title,
            question: data.question,
            total: this.questions.length,
            currentItem: this.questions[0]
        };
    }

    // Get current question
    getCurrentQuestion() {
        if (this.currentIndex >= this.questions.length) return null;
        const item = this.questions[this.currentIndex];
        const data = QUIZ_DATA[this.currentQuiz];
        return {
            text: `${data.question} ${item.answer}?`,
            target: item.target,
            remaining: this.questions.length - this.currentIndex
        };
    }

    // Check answer
    checkAnswer(clickedId) {
        if (!this.isActive) return null;

        const currentItem = this.questions[this.currentIndex];
        const isCorrect = clickedId === currentItem.target;

        if (isCorrect) {
            this.score++;
            this.currentIndex++;

            if (this.currentIndex >= this.questions.length) {
                this.endQuiz();
                return { correct: true, finished: true };
            }

            return { correct: true, finished: false };
        } else {
            this.mistakes++;
            return { correct: false, finished: false, correctTarget: currentItem.target };
        }
    }

    // Timer functions
    startTimer() {
        this.timer = setInterval(() => {
            this.seconds++;
            this.updateTimerDisplay();
        }, 1000);
    }

    updateTimerDisplay() {
        const mins = Math.floor(this.seconds / 60).toString().padStart(2, '0');
        const secs = (this.seconds % 60).toString().padStart(2, '0');
        const timerEl = document.getElementById('timer-display');
        if (timerEl) timerEl.textContent = `⏱️ ${mins}:${secs}`;
    }

    endQuiz() {
        this.isActive = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    // Get results
    getResults() {
        const total = this.questions.length;
        const totalAttempts = this.score + this.mistakes;
        const accuracy = totalAttempts > 0 ? Math.round((this.score / totalAttempts) * 100) : 0;
        const mins = Math.floor(this.seconds / 60).toString().padStart(2, '0');
        const secs = (this.seconds % 60).toString().padStart(2, '0');

        return {
            score: this.score,
            total: total,
            accuracy: accuracy,
            time: `${mins}:${secs}`,
            mistakes: this.mistakes
        };
    }

    // Utility: shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Stop quiz
    stop() {
        this.endQuiz();
        this.isActive = false;
    }
}
