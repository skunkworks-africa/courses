let currentExercise = 0;

document.getElementById('next-button').addEventListener('click',
        function () {
            if (currentExercise < exercises.length) {
                const exercise = exercises[currentExercise];
                document.getElementById('exercise-content').innerHTML =
                        `<h2>${exercise.title}</h2><p>${exercise.content}</p>`;
                if (exercise.questions) {
                    exercise.questions.forEach(question => {
                        document.getElementById('exercise-content').innerHTML += `<div><b>Question:</b> ${question}</div>`;
                    });
                }
                currentExercise++;
            } else {
                document.getElementById('exercise-content').innerHTML =
                        '<h2>All exercises completed!</h2>';
                this.style.display = 'none';
            }
        });
window.onload = () => {
    document.getElementById('next-button').click(); //Automatic
};


document.getElementById('previous-button').addEventListener('click',
    function () {
        if (currentExercise>0 && currentExercise<=exercises.length) {
            const exercise = exercises[currentExercise];
            document.getElementById('exercise-content').innerHTML =
                    `<h2>${exercise.title}</h2><p>${exercise.content}</p>`;
            if (exercise.questions) {
                exercise.questions.forEach(question => {
                    document.getElementById('exercise-content').innerHTML += `<div><b>Question:</b> ${question}</div>`;
                });
            }
            currentExercise--;
        } 
    });
window.onload = () => {
document.getElementById('previous-button').click(); //Automatic
};
