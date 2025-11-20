# Web Quiz App

**Web Quiz App** is a simple and interactive quiz application that runs in the browser. It is built using HTML, CSS, and JavaScript.  

## Features

- Start the quiz with a start button  
- Multiple choice questions  
- Immediate feedback for correct/incorrect answers  
- Timer and progress bar  
- Display total score at the end of the quiz  
- Options to retake or finish the quiz  

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Font Awesome icons  

## File Structure

web-quiz-app/
│ index.html # Main HTML file of the application
│ style.css # Stylesheet of the application
│ quiz.js # Quiz questions and logic
│ ui.js # User interface and question display
│ script.js # Event listeners and timer functions
│ README.md # Project documentation and usage guide


## Installation and Usage

1. Clone or download the project from GitHub.  
2. Navigate to the project folder and open `index.html` in a browser.  
3. Click the **Start Quiz** button to begin.  
4. Use the **Next** button to navigate between questions.  
5. View the total score and icons at the end of the quiz.  
6. Use **Reply Test** to retake the quiz or **Finish Test** to close it.

## Quiz Questions

Quiz questions are defined in the `quiz.js` file. Example:

```javascript
new Exam(
  "Which is the largest desert in the world?", 
  {a: "Sahara", b: "Arabian", c: "Gobi", d: "Antarctic"}, 
  "d"
)

Contributing

1- Fork the repository.

2- Create a new branch (git checkout -b feature/feature-name).

3- Commit your changes (git commit -m 'Add feature').

4- Push the branch (git push origin feature/feature-name).

5- Open a pull request.
