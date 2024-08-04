let currentExerciseIndex = 0;

// Function to load the exercise content
function loadExercise(index) {
    try {
        if (index < 0 || index >= exercises.length) {
            throw new Error("Invalid exercise index");
        }

        const exercise = exercises[index];
        const exerciseContent = document.getElementById('exercise-content');
        const responseFields = document.getElementById('response-fields');

        if (!exercise || !exercise.title || !exercise.content) {
            throw new Error("Exercise data is missing or incomplete");
        }

        exerciseContent.innerHTML = `<h2>${exercise.title}</h2><p>${exercise.content}</p>`;

        responseFields.innerHTML = "";

        if (exercise.tasks) {
            exercise.tasks.forEach((task, i) => {
                responseFields.innerHTML += `
                    <div><b>Task ${i + 1}:</b> ${task}</div>
                    <textarea id="response-task-${i}" name="response-task-${i}" rows="4" cols="50" placeholder="Enter your response here..."></textarea>
                `;
            });
        }

        if (exercise.questions) {
            exercise.questions.forEach((question, i) => {
                responseFields.innerHTML += `
                    <div><b>Question ${i + 1}:</b> ${question}</div>
                    <textarea id="response-question-${i}" name="response-question-${i}" rows="4" cols="50" placeholder="Enter your answer here..."></textarea>
                `;
            });
        }

        if (exercise.interactive) {
            let interactiveContent = `<div><b>Interactive Activity:</b> ${exercise.interactive.instructions}</div>`;
            switch (exercise.interactive.type) {
                case "code-editor":
                    interactiveContent += `<textarea id="code-editor" name="code-editor" rows="10" cols="80" placeholder="Write your code here..."></textarea>`;
                    break;
                case "discussion-forum":
                    interactiveContent += `<a href="discussion-forum.html" class="btn">Go to Discussion Forum</a>`;
                    break;
                case "project-idea-board":
                    interactiveContent += `<a href="idea-board.html" class="btn">Go to Idea Board</a>`;
                    break;
                case "coding-challenge":
                    interactiveContent += `<a href="coding-challenge.html" class="btn">Participate in Coding Challenge</a>`;
                    break;
                case "hardware-simulator":
                    interactiveContent += `<a href="hardware-simulator.html" class="btn">Explore Hardware Simulator</a>`;
                    break;
                case "reflective-journal":
                    interactiveContent += `<textarea id="reflective-journal" name="reflective-journal" rows="10" cols="80" placeholder="Write your reflection here..."></textarea>`;
                    break;
                case "code-review":
                    interactiveContent += `<a href="code-review.html" class="btn">Submit for Code Review</a>`;
                    break;
                case "data-lab":
                    interactiveContent += `<a href="data-lab.html" class="btn">Access Data Lab</a>`;
                    break;
                case "project-showcase":
                    interactiveContent += `<a href="project-showcase.html" class="btn">Present Your Project</a>`;
                    break;
                default:
                    interactiveContent += `<p>No specific interactive element available for this exercise.</p>`;
            }
            responseFields.innerHTML += interactiveContent;
        }
    } catch (error) {
        console.error("Error loading exercise:", error.message);
        document.getElementById('exercise-content').innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
    }
}

// Event listener for the "Next" button
document.getElementById('next-button').addEventListener('click', function () {
    try {
        if (currentExerciseIndex < exercises.length - 1) {
            currentExerciseIndex++;
            loadExercise(currentExerciseIndex);
        } else {
            document.getElementById('exercise-content').innerHTML = '<h2>All exercises completed!</h2>';
            this.style.display = 'none';
        }

        if (currentExerciseIndex > 0) {
            document.getElementById('previous-button').style.display = 'inline';
        }

    } catch (error) {
        console.error("Error navigating to next exercise:", error.message);
    }
});

// Event listener for the "Previous" button
document.getElementById('previous-button').addEventListener('click', function () {
    try {
        if (currentExerciseIndex > 0) {
            currentExerciseIndex--;
            loadExercise(currentExerciseIndex);
            
            document.getElementById('next-button').style.display = 'inline';
        }

        if (currentExerciseIndex === 0) {
            this.style.display = 'none';
        }

    } catch (error) {
        console.error("Error navigating to previous exercise:", error.message);
    }
});

// Initialize the first exercise on page load
window.onload = function() {
    try {
        loadExercise(currentExerciseIndex);
        document.getElementById('previous-button').style.display = 'none';
    } catch (error) {
        console.error("Error during page load:", error.message);
    }
};
