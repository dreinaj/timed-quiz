var questionBank = [
    {
        question: "What is HTML ?",
        choices: [ "Hypertext Makeup language","Hypertext Markup language","Hitkertext markup language","Huajsld"],
        answer: 1
    },
    {
        question: "2 What is HTML ?",
        choices: [ "Hypertext Makeup language","Hypertext Markup language","Hitkertext markup language","Huajsld"],
        answer: 1
    },
    {
        question: "3What is HTML ?",
        choices: [ "Hypertext Makeup language","Hypertext Markup language","Hitkertext markup language","Huajsld"],
        answer: 1
    },
    {
        question: "4 What is HTML ?",
        choices: [ "Hypertext Makeup language","Hypertext Markup language","Hitkertext markup language","Huajsld"],
        answer: 1
    }
]
var question=0
var score=0
var timer=document.getElementById("timer")
var counter=30
var timerelement;

var questionContainer=document.getElementById("questioncontainer")
questionContainer.style.display="none"
var startButton=document.getElementById("startbutton")
startButton.addEventListener("click",function(){
    questionContainer.style.display="block"
    startButton.style.display="none"
    timerelement=setInterval(function(){
        timer.textContent="timeleft"+counter
        if (counter>1){
            counter--;
        }
    },1000) 
    questiondisplay()
})
function questiondisplay(){
    document.getElementById("displayquestion").textContent=questionBank[question].question
    document.getElementById("answer1").textContent=questionBank[question].choices[0]
    document.getElementById("answer2").textContent=questionBank[question].choices[1]
    document.getElementById("answer3").textContent=questionBank[question].choices[2]
    document.getElementById("answer4").textContent=questionBank[question].choices[3]
}