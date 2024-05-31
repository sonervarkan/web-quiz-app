function UI(){
this.btn_start=document.querySelector(".btn_start");
this.quiz_block=document.querySelector(".quiz_block");
this.btn_next=document.querySelector(".btn_next");
this.quiz_text=document.querySelector(".quiz_text");
this.quiz_choices=document.querySelector(".quiz_choices");
this.correctIcon='<div class="icon"><i class="fas fa-check"></i></div>';
this.incorrectIcon='<div class="icon"><i class="fas fa-times"></i></div>';
this.score_box=document.querySelector(".score_box");
this.btn_finish=document.querySelector(".btn_finish");
this.btn_reply=document.querySelector(".btn_reply");
this.time_second=document.querySelector(".time_second");
this.time_text=document.querySelector(".time_text");
this.time_line=document.querySelector(".time_line");
}

UI.prototype.showQuestion=function(question){
    startTimer(10);
    startTimerLine();
    let quizText=`<span>${question.questionText}</span>`;

    let options="";
    for (let answer in question.choices){
        options+=`<div class="option"><span><b>${answer}</b>: ${question.choices[answer]}</span></div>`
    }
    this.quiz_choices.innerHTML=options;
    this.quiz_text.innerHTML=quizText;

    const option=document.querySelectorAll(".option");
    for (let opt of option){
        opt.style.cursor = "pointer";
        opt.setAttribute("onclick","selectedChoice(this)");
    }
}

UI.prototype.showScore=function(result,totalQuestion){
    let icon = '<div><i class="fa-solid fa-crown fa-2xl"></i></div>';

    ui.quiz_block.classList.add("passive");
    ui.btn_start.classList.add("passive");
    ui.score_box.classList.remove("passive");

    let quizScore=`Result:${result}/${totalQuestion}`
    document.querySelector(".score").innerHTML=icon+quizScore; 
      
}

