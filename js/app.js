// GeoQuiz România — Main Application Controller
(function() {
    const engine = new QuizEngine();
    let currentQuizType = null;

    // DOM Elements
    const menuScreen = document.getElementById('menu-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const knowledgeScreen = document.getElementById('knowledge-screen');
    const mapContainer = document.getElementById('map-container');
    const questionText = document.getElementById('question-text');
    const scoreDisplay = document.getElementById('score-display');
    const remainingCount = document.getElementById('remaining-count');
    const quizTitle = document.getElementById('quiz-title');
    const progressFill = document.getElementById('progress-fill');

    // Navigation
    function showScreen(screen) {
        [menuScreen, quizScreen, resultsScreen, knowledgeScreen].forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    // Category card click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const quizType = card.dataset.quiz;
            if (quizType === 'tari-knowledge') {
                startKnowledgeQuiz();
            } else {
                startQuiz(quizType);
            }
        });
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        engine.stop();
        showScreen(menuScreen);
    });

    // Results buttons
    document.getElementById('retry-btn').addEventListener('click', () => {
        if (currentQuizType) startQuiz(currentQuizType);
    });

    document.getElementById('menu-btn').addEventListener('click', () => {
        showScreen(menuScreen);
    });

    // Start a quiz
    async function startQuiz(quizType) {
        currentQuizType = quizType;
        const quizInfo = engine.startQuiz(quizType);
        if (!quizInfo) return;

        quizTitle.textContent = quizInfo.title;
        if (progressFill) progressFill.style.width = '0%';
        showScreen(quizScreen);

        // Show loading
        mapContainer.innerHTML = '<p style="color:var(--text-muted);font-size:1rem;text-align:center;">Se încarcă harta...</p>';

        // Generate and insert the map
        let svgHTML = '';
        try {
            switch(quizType) {
                case 'resedinte':
                    svgHTML = await loadRomaniaSVG();
                    break;
                case 'rauri':
                    svgHTML = await loadRiversSVG();
                    break;
            }
        } catch(e) {
            console.error('Error loading map:', e);
            switch(quizType) {
                case 'resedinte':
                    svgHTML = generateRomaniaSVG();
                    break;
                case 'rauri':
                    svgHTML = generateRiversSVG();
                    break;
            }
        }

        mapContainer.innerHTML = svgHTML;
        updateQuestion();
        attachMapListeners(quizType);
    }

    // Update question display
    function updateQuestion() {
        const q = engine.getCurrentQuestion();
        if (!q) return;

        questionText.textContent = q.text;
        remainingCount.textContent = `Rămase: ${q.remaining}`;
        scoreDisplay.textContent = `Scor: ${engine.score}/${engine.questions.length}`;

        // Progress bar
        if (progressFill) {
            const total = engine.questions.length;
            const done = engine.currentIndex;
            progressFill.style.width = (total > 0 ? (done / total) * 100 : 0) + '%';
        }
    }

    // Attach click listeners to map elements
    function attachMapListeners(quizType) {
        let selector;
        switch(quizType) {
            case 'resedinte': selector = 'path.county'; break;
            case 'rauri': selector = 'path.river'; break;
        }
        const elements = mapContainer.querySelectorAll(selector);
        elements.forEach(el => el.addEventListener('click', handleMapClick));
    }

    // Handle map element click
    function handleMapClick(e) {
        const element = e.target;
        if (element.classList.contains('correct')) return;

        const clickedId = element.dataset.id;
        const result = engine.checkAnswer(clickedId);
        if (!result) return;

        if (result.correct) {
            element.classList.add('correct');
            showFeedback(`✓ Corect! ${element.dataset.name}`, 'success');

            // Add label on the map over the county/river
            addLabelToElement(element);

            if (result.finished) {
                if (progressFill) progressFill.style.width = '100%';
                setTimeout(showResults, 500);
            } else {
                updateQuestion();
            }
        } else {
            element.classList.add('incorrect');
            const clickedName = element.dataset.name || clickedId;
            showFeedback(`✗ Ai apăsat pe: ${clickedName}`, 'error');

            setTimeout(() => element.classList.remove('incorrect'), 600);

            // Highlight correct answer with yellow — stays visible until answered
            const correctEl = mapContainer.querySelector(`[data-id="${result.correctTarget}"]`);
            if (correctEl) {
                correctEl.classList.add('highlight');
            }

            scoreDisplay.textContent = `Scor: ${engine.score}/${engine.questions.length}`;
        }
    }

    // Add a text label on the SVG over a completed element
    function addLabelToElement(element) {
        const svg = mapContainer.querySelector('svg');
        if (!svg) return;

        const name = element.dataset.name || '';
        if (!name) return;

        // Get bounding box of the element to center the text
        try {
            const bbox = element.getBBox();
            const cx = bbox.x + bbox.width / 2;
            const cy = bbox.y + bbox.height / 2;

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', cx);
            text.setAttribute('y', cy);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.setAttribute('class', 'map-label');
            text.textContent = name;

            svg.appendChild(text);
        } catch(e) {
            // getBBox can fail if element is not rendered
        }
    }

    // Show feedback message
    function showFeedback(message, type) {
        let feedback = document.getElementById('feedback-msg');
        if (!feedback) return;
        feedback.textContent = message;
        feedback.className = 'feedback ' + type;

        clearTimeout(feedback._timeout);
        feedback._timeout = setTimeout(() => {
            feedback.textContent = '';
            feedback.className = 'feedback';
        }, 2000);
    }

    // Show results
    function showResults() {
        const results = engine.getResults();

        document.getElementById('final-score').textContent = `${results.score}/${results.total}`;
        document.getElementById('accuracy').textContent = `${results.accuracy}%`;
        document.getElementById('final-time').textContent = results.time;

        // Rank
        const rankEl = document.getElementById('results-rank');
        if (results.accuracy >= 95) {
            rankEl.textContent = 'Excelent! Ești pregătit pentru BAC.';
        } else if (results.accuracy >= 80) {
            rankEl.textContent = 'Foarte bine! Mai exersează puțin.';
        } else if (results.accuracy >= 60) {
            rankEl.textContent = 'Bine, dar mai ai de lucru.';
        } else {
            rankEl.textContent = 'Continuă să exersezi!';
        }

        showScreen(resultsScreen);
    }

    // ==========================================
    // COUNTRY KNOWLEDGE QUIZ
    // ==========================================

    let currentCountry = null;
    let knowledgeCategories = { vecini: true, importante: true };

    function startKnowledgeQuiz() {
        showScreen(knowledgeScreen);
        document.getElementById('knowledge-filters').style.display = '';
        document.getElementById('knowledge-panels').classList.remove('revealed');
        document.getElementById('knowledge-form').style.display = 'none';
        document.getElementById('knowledge-next-btn').style.display = 'none';
        document.getElementById('knowledge-settings-btn').style.display = 'none';
    }

    // Start button in filters
    document.getElementById('start-knowledge-btn').addEventListener('click', () => {
        knowledgeCategories = {
            vecini: document.getElementById('filter-vecini').checked,
            importante: document.getElementById('filter-importante').checked
        };
        document.getElementById('knowledge-filters').style.display = 'none';
        document.getElementById('knowledge-form').style.display = '';
        document.getElementById('knowledge-next-btn').style.display = '';
        document.getElementById('knowledge-settings-btn').style.display = '';
        loadNewCountry();
    });

    function loadNewCountry() {
        currentCountry = getRandomCountry(knowledgeCategories);

        document.getElementById('country-name-display').textContent =
            `Pentru ${currentCountry.name}, precizați:`;

        const inputs = document.querySelectorAll('#knowledge-form input');
        inputs.forEach(input => {
            input.value = '';
            input.className = '';
        });

        // Reset: form goes back to center, answers hidden
        document.getElementById('knowledge-panels').classList.remove('revealed');
    }

    // Verify button
    document.getElementById('verify-btn').addEventListener('click', () => {
        if (!currentCountry) return;

        const data = currentCountry.data;

        checkInputs(['input-vecin1', 'input-vecin2', 'input-vecin3'], data.vecini);
        checkInputs(['input-relief1', 'input-relief2'], data.relief);
        checkInputs(['input-apa1', 'input-apa2'], data.ape);
        checkInputs(['input-oras1', 'input-oras2', 'input-oras3'], data.orase);

        document.getElementById('correct-vecini').textContent = data.vecini.join(', ');
        document.getElementById('correct-relief').textContent = data.relief.join(', ');
        document.getElementById('correct-ape').textContent = data.ape.join(', ');
        document.getElementById('correct-orase').textContent = data.orase.join(', ');

        // Animate: form slides left, answers appear right
        document.getElementById('knowledge-panels').classList.add('revealed');
    });

    function checkInputs(inputIds, correctAnswers) {
        inputIds.forEach(id => {
            const input = document.getElementById(id);
            const value = input.value.trim().toLowerCase();

            if (!value) {
                input.className = 'wrong-input';
                return;
            }

            const isCorrect = correctAnswers.some(answer => {
                const a = answer.toLowerCase();
                return a.includes(value) || value.includes(a) || levenshtein(value, a) <= 2;
            });

            input.className = isCorrect ? 'correct-input' : 'wrong-input';
        });
    }

    function levenshtein(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    // Back button for knowledge quiz
    document.getElementById('knowledge-back-btn').addEventListener('click', () => {
        showScreen(menuScreen);
    });

    // Settings button
    document.getElementById('knowledge-settings-btn').addEventListener('click', () => {
        document.getElementById('knowledge-filters').style.display = '';
        document.getElementById('knowledge-form').style.display = 'none';
        document.getElementById('knowledge-panels').classList.remove('revealed');
        document.getElementById('knowledge-next-btn').style.display = 'none';
        document.getElementById('knowledge-settings-btn').style.display = 'none';
    });

    // Next country button
    document.getElementById('knowledge-next-btn').addEventListener('click', () => {
        loadNewCountry();
    });

})();
