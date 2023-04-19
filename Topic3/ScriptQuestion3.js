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

         randomNumber = Math.floor(Math.random()*9);
         questionNumber = randomNumber;
         document.getElementById("scoreTracker").innerHTML = "Score : "+ scoreCounter;

        if(questionCounter<20){

                switch(randomNumber){
                    case 0:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question1.jpg" ;
                        document.getElementById("option1").innerHTML = "14" ;
                        document.getElementById("option2").innerHTML = "16" ;
                        document.getElementById("option3").innerHTML = "11";
                        document.getElementById("option4").innerHTML = "13";
                      
                    break;
                    
                    case 1:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question2.jpg" ;
                        document.getElementById("option1").innerHTML = "The people in the world who prefer rock music" ;
                        document.getElementById("option2").innerHTML = "The people in the world who do not prefer pop music" ;
                        document.getElementById("option3").innerHTML = "The people in the world who prefer pop music";
                        document.getElementById("option4").innerHTML = "The people in the world who do not prefer rock music";
                        
                    break;
                    case 2:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question3.jpg" ;
                        document.getElementById("option1").innerHTML = "{9,5,2,3,1}" ;
                        document.getElementById("option2").innerHTML = "{8,7,5,6,3}" ;
                        document.getElementById("option3").innerHTML = "{6,9,8,2,1}";
                        document.getElementById("option4").innerHTML = "{5,7,8,3,2}";
                      
                    break;
                    case 3:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question4.jpg" ;
                        document.getElementById("option1").innerHTML = "{5,4,3}" ;
                        document.getElementById("option2").innerHTML = "{1,2}" ;
                        document.getElementById("option3").innerHTML = "{1,2,3,4,5}";
                        document.getElementById("option4").innerHTML = "{3,4,5}";
                      
                    break;

                    case 4:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question5.jpg" ;
                        document.getElementById("option1").innerHTML = "5" ;
                        document.getElementById("option2").innerHTML = "3" ;
                        document.getElementById("option3").innerHTML = "6";
                        document.getElementById("option4").innerHTML = "4";
                        
                    break;
                    case 5:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question6.jpg" ;
                        document.getElementById("option1").innerHTML = "All the people in your class" ;
                        document.getElementById("option2").innerHTML = "The people in your class who wear glasses" ;
                        document.getElementById("option3").innerHTML = "The people in your class who do not wear glasses";
                        document.getElementById("option4").innerHTML = "All the people not in your class ";
                      
                    break;
                    case 6:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question7.jpg" ;
                        document.getElementById("option1").innerHTML = "95" ;
                        document.getElementById("option2").innerHTML = "20" ;
                        document.getElementById("option3").innerHTML = "35";
                        document.getElementById("option4").innerHTML = "30";
                      
                    break;
                    case 7:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question8.jpg" ;
                        document.getElementById("option1").innerHTML = "a" ;
                        document.getElementById("option2").innerHTML = "b" ;
                        document.getElementById("option3").innerHTML = "c";
                        document.getElementById("option4").innerHTML = "d";
                      
                    break;
                    case 8:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question9.jpg" ;
                        document.getElementById("option1").innerHTML = "10101001" ;
                        document.getElementById("option2").innerHTML = "11010110" ;
                        document.getElementById("option3").innerHTML = "10010001";
                        document.getElementById("option4").innerHTML = "11010100";
                      
                    break;
                  
                    case 9:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question10.jpg" ;
                        document.getElementById("option1").innerHTML = "143" ;
                        document.getElementById("option2").innerHTML = "111" ;
                        document.getElementById("option3").innerHTML = "-33";
                        document.getElementById("option4").innerHTML = "-113";
                        
                    break;
                    case 10:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question11.jpg" ;
                        document.getElementById("option1").innerHTML = "115" ;
                        document.getElementById("option2").innerHTML = "90" ;
                        document.getElementById("option3").innerHTML = "60";
                        document.getElementById("option4").innerHTML = "85";
                      
                    break;
                    case 11:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question12.jpg" ;
                        document.getElementById("option1").innerHTML = "384" ;
                        document.getElementById("option2").innerHTML = "298" ;
                        document.getElementById("option3").innerHTML = "432";
                        document.getElementById("option4").innerHTML = "235";
                      
                    break;

                    case 12:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question13.jpg" ;
                        document.getElementById("option1").innerHTML = "11001011011" ;
                        document.getElementById("option2").innerHTML = "10100110101" ;
                        document.getElementById("option3").innerHTML = "10101011101";
                        document.getElementById("option4").innerHTML = "10001101010";
                        
                    break;
                    case 13:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question14.jpg" ;
                        document.getElementById("option1").innerHTML = "358" ;
                        document.getElementById("option2").innerHTML = "421" ;
                        document.getElementById("option3").innerHTML = "317";
                        document.getElementById("option4").innerHTML = "287";
                      
                    break;
                    case 14:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question15.jpg" ;
                        document.getElementById("option1").innerHTML = "44B" ;
                        document.getElementById("option2").innerHTML = "29B" ;
                        document.getElementById("option3").innerHTML = "52C";
                        document.getElementById("option4").innerHTML = "26A";
                      
                    break;
                    case 15:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question16.jpg" ;
                        document.getElementById("option1").innerHTML = "67" ;
                        document.getElementById("option2").innerHTML = "132" ;
                        document.getElementById("option3").innerHTML = "44";
                        document.getElementById("option4").innerHTML = "12";
                      
                    break;
                    case 16:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question17.jpg" ;
                        document.getElementById("option1").innerHTML = "1011001" ;
                        document.getElementById("option2").innerHTML = "1101010" ;
                        document.getElementById("option3").innerHTML = "1001001";
                        document.getElementById("option4").innerHTML = "1011000";
                      
                    break;
                    case 17:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question18.jpg" ;
                        document.getElementById("option1").innerHTML = "101010100" ;
                        document.getElementById("option2").innerHTML = "100111010" ;
                        document.getElementById("option3").innerHTML = "100100011";
                        document.getElementById("option4").innerHTML = "100101010";
                      
                    break;
                    case 18:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question19.jpg" ;
                        document.getElementById("option1").innerHTML = "125" ;
                        document.getElementById("option2").innerHTML = "90" ;
                        document.getElementById("option3").innerHTML = "95";
                        document.getElementById("option4").innerHTML = "85";
                      
                    break;
                    case 19:
                        document.getElementById("questionPlacement").src="../Topic3/Topic3-Images/question20.jpg" ;
                        document.getElementById("option1").innerHTML = "34" ;
                        document.getElementById("option2").innerHTML = "45" ;
                        document.getElementById("option3").innerHTML = "67";
                        document.getElementById("option4").innerHTML = "21";
                      
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
