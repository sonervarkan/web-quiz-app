const quiz1=new Quiz(questions);
const ui=new UI();

let result=0;

ui.btn_start.addEventListener("click",function(){
    ui.btn_start.classList.add("passive");
    ui.quiz_block.classList.remove("passive");
    ui.btn_next.classList.add("passive");
    ui.showQuestion(quiz1.whichQuestion());
});

function selectedChoice(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAnswer=option.querySelector("span b").textContent;

    if (quiz1.whichQuestion().controlToAnswer(userAnswer)){
        option.classList.add("correct");
        option.innerHTML+=ui.correctIcon;
        result++;
    }
    else{
        option.classList.add("incorrect");
        option.innerHTML+=ui.incorrectIcon;
    }
    document.querySelectorAll(".option").forEach(function(opt){
        opt.classList.add("disabled");
    });
    ui.btn_next.classList.remove("passive"); 
}

ui.btn_next.addEventListener("click",function(){
    
    if(quiz1.questions.length!=quiz1.questionIndex+1){
        quiz1.questionIndex++;
        ui.showQuestion(quiz1.whichQuestion());
        ui.btn_next.classList.add("passive");
    }
    else{
        ui.showScore(result,quiz1.questions.length);
    }
});

let counter;
function startTimer(time){
    counter=setInterval(timer,1000);
    function timer(){
        ui.time_second.innerText=time;
        time--;
        if (time<0){
            clearInterval(counter);
            for (let opt of quiz_choices.children){
                opt.classList.add("disabled");
            }
            ui.btn_next.classList.remove("passive");           
        }
    }
}
let counterLine;
function startTimerLine(){
    let line=0;
    counterLine=setInterval(timer,30);
    function timer(){
        line+=1;
        ui.time_line.style.width=line+"px";
        if (line>349){
            clearInterval(counterLine);
        }
    }
}


ui.btn_reply.addEventListener("click",function(){
    ui.btn_start.classList.remove("passive");
    ui.score_box.classList.add("passive");
    quiz1.questionIndex=0;
    result=0;
});

ui.btn_finish.addEventListener("click",function(){
    window.close();
});