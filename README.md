# Web Quiz App

**Web Quiz App** is a simple and interactive browser-based quiz application built using HTML, CSS, and JavaScript.

## Features

- Start the quiz with a start button  
- Multiple choice questions  
- Instant correct/incorrect feedback  
- Timer and progress bar  
- Score summary at the end  
- Options to retake or finish the quiz  

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Font Awesome Icons  

## File Structure

web-quiz-app/  
│── **index.html** – Main HTML file  
│── **style.css** – Application stylesheet  
│── **quiz.js** – Quiz questions and logic  
│── **ui.js** – UI handling and rendering functions  
│── **script.js** – Event listeners, timer, and quiz flow control  
└── **README.md** – Project documentation  

## Installation and Usage

1. Clone or download the repository.  
2. Open the project folder.  
3. Launch `index.html` in any web browser.  
4. Click **Start Quiz** to begin.  
5. Select answers and use the **Next** button to move forward.  
6. View your total score at the end.  
7. Click **Replay Test** to retake or **Finish Test** to exit.

## Quiz Questions

Quiz questions are created in the `quiz.js` file.  
Example format:

new Exam(
  "Which is the largest desert in the world?",
  { a: "Sahara", b: "Arabian", c: "Gobi", d: "Antarctic" },
  "d"
);

## Contributing
Fork the repository

Create a new branch (git checkout -b feature/feature-name)

Commit your changes (git commit -m "Add feature")

Push the branch (git push origin feature/feature-name)

Open a Pull Request

## License
This project currently has no license.
You may add one if you plan to publish or distribute it.
