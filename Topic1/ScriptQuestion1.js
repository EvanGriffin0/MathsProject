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
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question1.jpg" ;
                        document.getElementById("option1").innerHTML = "55" ;
                        document.getElementById("option2").innerHTML = "45" ;
                        document.getElementById("option3").innerHTML = "54";
                        document.getElementById("option4").innerHTML = "33";
                      
                    break;
                    
                    case 1:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question2.jpg" ;
                        document.getElementById("option1").innerHTML = "200" ;
                        document.getElementById("option2").innerHTML = "231" ;
                        document.getElementById("option3").innerHTML = "148";
                        document.getElementById("option4").innerHTML = "190";
                        
                    break;
                    case 2:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question3.jpg" ;
                        document.getElementById("option1").innerHTML = "215" ;
                        document.getElementById("option2").innerHTML = "90" ;
                        document.getElementById("option3").innerHTML = "105";
                        document.getElementById("option4").innerHTML = "110";
                      
                    break;
                    case 3:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question4.jpg" ;
                        document.getElementById("option1").innerHTML = "11010101" ;
                        document.getElementById("option2").innerHTML = "01010011" ;
                        document.getElementById("option3").innerHTML = "11001011";
                        document.getElementById("option4").innerHTML = "10111001";
                      
                    break;

                    case 4:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question5.jpg" ;
                        document.getElementById("option1").innerHTML = "1577" ;
                        document.getElementById("option2").innerHTML = "1500" ;
                        document.getElementById("option3").innerHTML = "1655";
                        document.getElementById("option4").innerHTML = "1756";
                        
                    break;
                    case 5:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question6.jpg" ;
                        document.getElementById("option1").innerHTML = "2B1" ;
                        document.getElementById("option2").innerHTML = "1C2" ;
                        document.getElementById("option3").innerHTML = "1B1";
                        document.getElementById("option4").innerHTML = "2B2";
                      
                    break;
                    case 6:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question7.jpg" ;
                        document.getElementById("option1").innerHTML = "3D" ;
                        document.getElementById("option2").innerHTML = "4D" ;
                        document.getElementById("option3").innerHTML = "5C";
                        document.getElementById("option4").innerHTML = "2A";
                      
                    break;
                    case 7:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question8.jpg" ;
                        document.getElementById("option1").innerHTML = "10100100" ;
                        document.getElementById("option2").innerHTML = "11010110" ;
                        document.getElementById("option3").innerHTML = "10010001";
                        document.getElementById("option4").innerHTML = "10010100";
                      
                    break;
                    case 8:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question9.jpg" ;
                        document.getElementById("option1").innerHTML = "10101001" ;
                        document.getElementById("option2").innerHTML = "11010110" ;
                        document.getElementById("option3").innerHTML = "10010001";
                        document.getElementById("option4").innerHTML = "11010100";
                      
                    break;
                  
                    case 9:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question10.jpg" ;
                        document.getElementById("option1").innerHTML = "131" ;
                        document.getElementById("option2").innerHTML = "112" ;
                        document.getElementById("option3").innerHTML = "148";
                        document.getElementById("option4").innerHTML = "190";
                        
                    break;
                    case 10:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question11.jpg" ;
                        document.getElementById("option1").innerHTML = "115" ;
                        document.getElementById("option2").innerHTML = "90" ;
                        document.getElementById("option3").innerHTML = "60";
                        document.getElementById("option4").innerHTML = "85";
                      
                    break;
                    case 11:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question12.jpg" ;
                        document.getElementById("option1").innerHTML = "384" ;
                        document.getElementById("option2").innerHTML = "298" ;
                        document.getElementById("option3").innerHTML = "432";
                        document.getElementById("option4").innerHTML = "235";
                      
                    break;

                    case 12:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question13.jpg" ;
                        document.getElementById("option1").innerHTML = "11001011011" ;
                        document.getElementById("option2").innerHTML = "10100110101" ;
                        document.getElementById("option3").innerHTML = "10101011101";
                        document.getElementById("option4").innerHTML = "10001101010";
                        
                    break;
                    case 13:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question14.jpg" ;
                        document.getElementById("option1").innerHTML = "358" ;
                        document.getElementById("option2").innerHTML = "421" ;
                        document.getElementById("option3").innerHTML = "317";
                        document.getElementById("option4").innerHTML = "287";
                      
                    break;
                    case 14:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question15.jpg" ;
                        document.getElementById("option1").innerHTML = "44B" ;
                        document.getElementById("option2").innerHTML = "29B" ;
                        document.getElementById("option3").innerHTML = "52C";
                        document.getElementById("option4").innerHTML = "26A";
                      
                    break;
                    case 15:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question16.jpg" ;
                        document.getElementById("option1").innerHTML = "67" ;
                        document.getElementById("option2").innerHTML = "132" ;
                        document.getElementById("option3").innerHTML = "44";
                        document.getElementById("option4").innerHTML = "12";
                      
                    break;
                    case 16:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question17.jpg" ;
                        document.getElementById("option1").innerHTML = "1011001" ;
                        document.getElementById("option2").innerHTML = "1101010" ;
                        document.getElementById("option3").innerHTML = "1001001";
                        document.getElementById("option4").innerHTML = "1011000";
                      
                    break;
                    case 17:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question18.jpg" ;
                        document.getElementById("option1").innerHTML = "101010100" ;
                        document.getElementById("option2").innerHTML = "100111010" ;
                        document.getElementById("option3").innerHTML = "100100011";
                        document.getElementById("option4").innerHTML = "100101010";
                      
                    break;
                    case 18:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question19.jpg" ;
                        document.getElementById("option1").innerHTML = "125" ;
                        document.getElementById("option2").innerHTML = "90" ;
                        document.getElementById("option3").innerHTML = "95";
                        document.getElementById("option4").innerHTML = "85";
                      
                    break;
                    case 19:
                        document.getElementById("questionPlacement").src="../Topic1/Topic1-Images/question20.jpg" ;
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
