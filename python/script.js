let currentExerciseIndex = 0;

// Function to load the exercise content
function loadExercise(index) {
    try {
        // Validate the exercise index
        if (index < 0 || index >= exercises.length) {
            throw new Error("Invalid exercise index");
        }

        const exercise = exercises[index];
        const exerciseContent = document.getElementById('exercise-content');
        
        // Validate that the exercise exists and has the required properties
        if (!exercise || !exercise.title || !exercise.content) {
            throw new Error("Exercise data is missing or incomplete");
        }

        // Set exercise content
        exerciseContent.innerHTML = `<h2>${exercise.title}</h2><p>${exercise.content}</p>`;
        
        // Add questions if any
        if (exercise.questions && Array.isArray(exercise.questions)) {
            exercise.questions.forEach((question, i) => {
                exerciseContent.innerHTML += `<div><b>Question ${i + 1}:</b> ${question}</div>`;
            });
        }

    } catch (error) {
        // Handle errors gracefully
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
            this.style.display = 'none'; // Hide the "Next" button when all exercises are completed
        }

        // Show the "Previous" button if not on the first exercise
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
            
            // Show the "Next" button if there are more exercises to navigate
            document.getElementById('next-button').style.display = 'inline';
        }

        // Hide the "Previous" button if on the first exercise
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
        document.getElementById('previous-button').style.display = 'none'; // Hide "Previous" button on first load
    } catch (error) {
        console.error("Error during page load:", error.message);
    }
};
