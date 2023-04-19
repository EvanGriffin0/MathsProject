var questionCounter=-1;
var questionPicker =0;
let scoreCounter =0;
var option1 =0;
var option2 =0;
var option3 =0;
var option4 =0;
var questionNumber =0;

function randomQuestionPicker() {

    questionCounter++;
    document.getElementById("questionTitle").innerHTML="Question "+questionCounter;

         randomNumber = Math.floor(Math.random()*20);
         questionNumber = randomNumber;
         document.getElementById("scoreTracker").innerHTML = "Score : "+ scoreCounter;

        if(questionCounter<20){

                switch(randomNumber){
                    case 0:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question1.jpg" ;
                        document.getElementById("option1").innerHTML = "snake in the grass" ;
                        document.getElementById("option2").innerHTML = "mouse on the floor" ;
                        document.getElementById("option3").innerHTML = "tiger in the house";
                        document.getElementById("option4").innerHTML = "whale in the ocean";
                      
                    break;
                    
                    case 1:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question2.jpg" ;
                        document.getElementById("option1").innerHTML = "have a lovely monday " ;
                        document.getElementById("option2").innerHTML = "have a lovely summer" ;
                        document.getElementById("option3").innerHTML = "have a deadly winter";
                        document.getElementById("option4").innerHTML = "have a peachy sunday";
                        
                    break;
                    case 2:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question3.jpg" ;
                        document.getElementById("option1").innerHTML = "30" ;
                        document.getElementById("option2").innerHTML = "90" ;
                        document.getElementById("option3").innerHTML = "20";
                        document.getElementById("option4").innerHTML = "2";
                      
                    break;
                    case 3:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question4.jpg" ;
                        document.getElementById("option1").innerHTML = "4" ;
                        document.getElementById("option2").innerHTML = "8" ;
                        document.getElementById("option3").innerHTML = "3";
                        document.getElementById("option4").innerHTML = "2";
                      
                    break;

                    case 4:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question5.jpg" ;
                        document.getElementById("option1").innerHTML = "Thursday" ;
                        document.getElementById("option2").innerHTML = "Wednesday" ;
                        document.getElementById("option3").innerHTML = "Tuesday";
                        document.getElementById("option4").innerHTML = "Saturday";
                        
                    break;
                    case 5:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question6.jpg" ;
                        document.getElementById("option1").innerHTML = "17" ;
                        document.getElementById("option2").innerHTML = "42" ;
                        document.getElementById("option3").innerHTML = "1";
                        document.getElementById("option4").innerHTML = "23";
                      
                    break;
                    case 6:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question7.jpg" ;
                        document.getElementById("option1").innerHTML = "1" ;
                        document.getElementById("option2").innerHTML = "2" ;
                        document.getElementById("option3").innerHTML = "4";
                        document.getElementById("option4").innerHTML = "0";
                      
                    break;
                    case 7:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question8.jpg" ;
                        document.getElementById("option1").innerHTML = "5" ;
                        document.getElementById("option2").innerHTML = "4" ;
                        document.getElementById("option3").innerHTML = "6";
                        document.getElementById("option4").innerHTML = "3";
                      
                    break;
                    case 8:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question9.jpg" ;
                        document.getElementById("option1").innerHTML = "6" ;
                        document.getElementById("option2").innerHTML = "9" ;
                        document.getElementById("option3").innerHTML = "3";
                        document.getElementById("option4").innerHTML = "5";
                      
                    break;
                  
                    case 9:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question10.jpg" ;
                        document.getElementById("option1").innerHTML = "26" ;
                        document.getElementById("option2").innerHTML = "1" ;
                        document.getElementById("option3").innerHTML = "34";
                        document.getElementById("option4").innerHTML = "6";
                        
                    break;
                    case 10:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question11.jpg" ;
                        document.getElementById("option1").innerHTML = "n pzsa pizlw" ;
                        document.getElementById("option2").innerHTML = "a isja shjsa" ;
                        document.getElementById("option3").innerHTML = "z hjsa pshlw";
                        document.getElementById("option4").innerHTML = "m pszi qexlw";
                      
                    break;
                    case 11:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question12.jpg" ;
                        document.getElementById("option1").innerHTML = "htebrtfzq" ;
                        document.getElementById("option2").innerHTML = "sghdfshsa" ;
                        document.getElementById("option3").innerHTML = "jkfkfdfsr";
                        document.getElementById("option4").innerHTML = "vnxegysae";
                      
                    break;

                    case 12:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question13.jpg" ;
                        document.getElementById("option1").innerHTML = "20" ;
                        document.getElementById("option2").innerHTML = "24" ;
                        document.getElementById("option3").innerHTML = "14";
                        document.getElementById("option4").innerHTML = "35";
                        
                    break;
                    case 13:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question14.jpg" ;
                        document.getElementById("option1").innerHTML = "38" ;
                        document.getElementById("option2").innerHTML = "31" ;
                        document.getElementById("option3").innerHTML = "42";
                        document.getElementById("option4").innerHTML = "27";
                      
                    break;
                    case 14:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question15.jpg" ;
                        document.getElementById("option1").innerHTML = "Wednesday" ;
                        document.getElementById("option2").innerHTML = "Tuesday" ;
                        document.getElementById("option3").innerHTML = "Saturday";
                        document.getElementById("option4").innerHTML = "Sunday";
                      
                    break;
                    case 15:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question16.jpg" ;
                        document.getElementById("option1").innerHTML = "dfuas asfhsfhsh" ;
                        document.getElementById("option2").innerHTML = "kjggs safafhwwc" ;
                        document.getElementById("option3").innerHTML = "ohwwf joypzathz";
                        document.getElementById("option4").innerHTML = "opksf ssbfnywac";
                      
                    break;
                    case 16:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question17.jpg" ;
                        document.getElementById("option1").innerHTML = "4" ;
                        document.getElementById("option2").innerHTML = "1" ;
                        document.getElementById("option3").innerHTML = "3";
                        document.getElementById("option4").innerHTML = "2";
                      
                    break;
                    case 17:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question18.jpg" ;
                        document.getElementById("option1").innerHTML = "1" ;
                        document.getElementById("option2").innerHTML = "4" ;
                        document.getElementById("option3").innerHTML = "7";
                        document.getElementById("option4").innerHTML = "2";
                      
                    break;
                    case 18:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question19.jpg" ;
                        document.getElementById("option1").innerHTML = "8" ;
                        document.getElementById("option2").innerHTML = "5" ;
                        document.getElementById("option3").innerHTML = "1";
                        document.getElementById("option4").innerHTML = "4";
                      
                    break;
                    case 19:
                        document.getElementById("questionPlacement").src="../Topic2/Topic2-Images/question20.jpg" ;
                        document.getElementById("option1").innerHTML = "6" ;
                        document.getElementById("option2").innerHTML = "2" ;
                        document.getElementById("option3").innerHTML = "3";
                        document.getElementById("option4").innerHTML = "8";
                      
                    break;
                }

        }
        else{
            gameOver();
        }
}

function answerChecker(userInput){

    buttonPressed=userInput;
    return buttonPressed;
}



function button1(){
    if(randomNumber==0){
        updateScore();
    }
    else if(randomNumber==4){
        updateScore();
    }
    else if(randomNumber==8){
        updateScore();
    }
    else if(randomNumber==11){
        updateScore();
    }
    else if(randomNumber==12){
        updateScore();
    }
    else if(randomNumber==19){
        updateScore();
    }
}

function button2(){
    if(randomNumber==1){
        updateScore();
    }
    else if(randomNumber==6){
        updateScore();
    }
    else if(randomNumber==9){
        updateScore();
    }
    else if(randomNumber==14){
        updateScore();
    }
    else if(randomNumber==17){
        updateScore();
    }
}

function button3(){
    if(randomNumber==2){
        updateScore();
    }
    else if(randomNumber==5){
        updateScore();
    }
    else if(randomNumber==13){
        updateScore();
    }
    else if(randomNumber==15){
        updateScore();
    }
    else if(randomNumber==18){
        updateScore();
    }
}

function button4(){
    if(randomNumber==3){
        updateScore();
    }
    else if(randomNumber==7){
        updateScore();
    }
    else if(randomNumber==10){
        updateScore();
    }
    else if(randomNumber==16){
        updateScore();
    }
}



function updateScore(){
    scoreCounter++;
    document.getElementById("scoreTracker").innerHTML = "Score : "+ scoreCounter;
}
function scoreCheck(){
    document.getElementById("scoreTracker").innerHTML = "Score : "+ scoreCounter;
}

function gameOver(){
    window.location.href= '../Home/index.html';
}
