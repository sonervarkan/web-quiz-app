function Exam(questionText,choices,correctAnswer){
    this.questionText=questionText;
    this.choices=choices;
    this.correctAnswer=correctAnswer;
}

let questions=[
    new Exam("Which is the largest desert in the world?",{a: "Sahara", b: "Arabian", c: "Gobi", d: "Antarctic" },"d"),
    new Exam("What is the capital city of Australia?",{ a: "Sydney",b: "Melbourne",c: "Canberra",d: "Brisbane"},"c"),
    new Exam("Which river is the longest in the world?",{a: "Nile",b: "Amazon",c: "Yangtze",d: "Mississippi"},"a"),
    new Exam("Mount Everest is located in which mountain range?",{a: "Andes", b: "Rockies", c: "Alps", d: "Himalayas"},"d"),
    new Exam("Which country has the most natural lakes?",{a: "Canada",b: "Russia",c: "United States",d: "Brazil"},"a"),
    new Exam("What is the smallest country in the world by land area?",{a: "Monaco", b: "San Marino", c: "Vatican City", d: "Liechtenstein"},"a"),
    new Exam("Which ocean is the deepest?",{a: "Atlantic",b: "Indian", c: "Arctic", d: "Pacific"},"d"),
    new Exam("What is the longest mountain range in the world?",{a: "Rockies",b: "Andes", c: "Himalayas", d:"Alps"},"b"),
    new Exam("Which country is the largest by land area?",{a: "Canada", b: "China", c: "United States", d: "Russia"},"d"),
    new Exam("Which continent has the most countries?",{a: "Africa", b: "Asia", c: "Europe", d: "South America"},"a")
];

Exam.prototype.controlToAnswer=function(answer){
    return answer===this.correctAnswer;
}

function Quiz(questions){
    this.questions=questions;
    this.questionIndex=0;
}

Quiz.prototype.whichQuestion=function(){
    return this.questions[this.questionIndex];
}



