function vowelConsonant(){
    letter = prompt("Enter a letter: ");
    letter = letter.toLowerCase();
    switch(letter){

        case "a" || "e" || "i" || "o"|| "u":
            console.log("Vowel");
            break;
        default:
            console.log("consonant");

    }
}

var i =1;
var sum = 0;
while(i<=10){
    sum = sum + i;
    i = i+1;

}
 document.write(sum);


// /////////////for loop
var i = 1;
sum = 0;
for (i; i<=10; i = i+1){
    sum = sum + i;

}
document.write(sum);


// //////////////While loop
var i =1;
var sum = 0;
while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        document.write(" "+ i);
        sum = sum + i;
    }
    
    i = i+1;

} 
document.write("<h1>"+sum+"</h1>");


//////////////do while loop
var i = 1;

do{
    document.write(" "+ i);
    i++;
}while(i<=20);

///////////////////////////  break & continue

var i = 1;

for(i; i<=100; i++){
    if(i == 10){
        break; //printing till 10
    }
    document.write(" "+ i);
   

}

document.write("<br>");



var i = 1;
for(i; i<=100; i++){
    if(i == 10){
        continue; //print all except 10
        
    }
    document.write(" "+ i);
}



////////////////////////////////////// Ternary Operator


var number = Number(prompt("Enter"));
if (number>0){
    console.log("Positive");
}
else{
    console.log("Negative");
} // we can write this program like____


// // ternanry operator = "?"............
var result =  number>0 ? "positive" : "neagtive";
document.write(result);


var num1 = Number(prompt("First Number: "));
var num2 = Number(prompt("Second Number: "));
var num3 = Number(prompt("Third Number: "));


var result = num1>num2 && num1>num3 ? " Greater Num 1": num2>num1 && num2>num3 ? "Greater Num 2":"Greater Num 3";
document.write(result);


///////////////////////// Function..............


function adding(num1, num2){
    var result = num1 + num2;
    return result;
}
function substract(num1, num2){
    var result = num1 - num2;
    return result;
}
function multiply(num1, num2){
    var result = num1 * num2;
    return result;
}
function division(num1, num2){
    var result = num1 / num2;
    return result;
}
function modulous(num1, num2){
    var result = num1 % num2;
    return result;
}
function exponent(num1, num2){
    var result = num1 ** num2;
    return result;
}


///////////////// IIFEs( Immediately Invokeable Funfion Expressions)......



(function adding(num1, num2){
    var result = num1 + num2;
    document.write(result);
})();



////////////////////////////// Function Expressions( Store the function in a variable).................


const msg = function message(msg){
    console.log(msg);
}
msg("Hey!!!");



//////////////////////// One dimensional array...................

function highestScore(scores){
    var max_scores = scores[0];
    for (var x=1; x < scores.length; x++){
        if (max_scores < scores[x]){
            max_scores = scores[x];
        }
    }
    return max_scores;
}
var scores = [10, 52 , 4 , 56 , 65, 4, 2];
var max_score = highestScore(scores);
document.write(max_score);


///////////////// two dimentional array...........

var twoDarray = [["Anis", 1], ["Abid", 2], ["Billa", 3], ["Chan", 4], ["Nabil", 5]];

for(var x = 0; x<6; x++){
    for(var y = 0; y<2; y++){
        document.write(twoDarray[x][y] +" ");
    }
    document.write("<br>");
}



/////////////////// task-9

var plyersInfo = [
    ["Ash", 95],
    ["Miz", 150],
    ["Rakib", 45],
    ["Lu", 105],
];

function highestRunScorer(info){
    
    var max_scorer = info[0][0];
    var max_score = info[0][1];


    for(var x=1; x<info.length; x++){

        if (max_score< info[x][1]){
            max_score = info[x][1];
            max_scorer = info[x][0];
        } 
    }
    return max_scorer;

}

var nameOfHgtsScorer = highestRunScorer(plyersInfo);
document.write(nameOfHgtsScorer);




///////////////////////////////// Objects!!!!!!!

var student1 = {
    name : "Anins",
    age: 27,
    cgpa: 3.92,
    lang: ["Bang", "Bang","Bang"],
}
console.log(student1.name);



////////////////////// object constructor..............

function Student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Anisul", 27, 3.75, ["Bang", "Bang","Bang"]);


student1.display();
 


///////////////////// Math Objects.......................

Math.sqrt(); // find the square root
Math.abs();// find the absolute value
Math.sin();// find the sin
Math.cos();// find the cos
Math.pow();// find the power Math.pow(2,4); will print 16, as like (4**2)
Math.floor();// find the floor
Math.ceil();// find the ceiling
Math.round();// show the round value
Math.max();// find the max value...
Math.random(); // find random value....


/////////////////////////////////////


var num1 = parseInt(prompt("Enter 1st number"));
var num2 = parseInt(prompt("Enter 2nd number"));
var num3 = parseInt(prompt("Enter 3rd number"));


var max_num = Math.max(num1, num2, num3);


console.log(max_num);



///////////////////////////////////// Guessing Game.....................



// Guess a number from 1 to 5
// Generate a randome number between 1 to 5
// if the guess number matchs random; print You won
// run the game for 5 times
// show the number of won and lost................


var numOfWon = 0;
var numOfLost = 0;

for(var i= 0; i<5; i++){

    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));


    var randomNumber = Math.floor(Math.random()*5) + 1;


    if (guessNumber == randomNumber){
        console.log("You have won");
        numOfWon++;
    }else{
        console.log("You have lost. Random Number was " + randomNumber);
        numOfLost++;
    }

}

document.write("You have Won "+ numOfWon +" times &<br>Lost " + numOfLost+ " times");




////////////////////////////////////////// Date objects and date methods

var dateObject = new Date();
var year = dateObject.getFullYear();
var month = dateObject.getMonth();
var date = dateObject.getDate();
var day = dateObject.getDay();
var hour = dateObject.getHours();
var mins = dateObject.getMinutes();


console.log(year);
console.log(month);
console.log(date);
console.log(day);
console.log(hour);
console.log(mins);


/////////////////////////////////////////// DOM Or documents object model(Select HTML Elements)..............


document.getElementById();
document.getElementsByClassName(); 
document.getElementsByName();
document.getElementsByTagName();
document.getElementsByTagNameNS();

//..Object....method.........property.......

document.getElementById().inert ="";
document.getElementById().innerHTML = "";
document.getElementById().innerText = "";
document.getElementById().inputMode = "";
document.getElementById().tabIndex = "";
document.getElementById().isConnected = "";
document.getElementById().isContentEditable = "";
document.getElementById().ariaPosInSet = "";
document.getElementById().accessKey = "";
document.getElementById().accessKeyLabel = "";
document.getElementById().ariaAtomic = "";
document.getElementById().ariaAutoComplete = "";
document.getElementById().ariaBusy = "";
document.getElementById().ariaChecked = "";
document.getElementById().ariaColCount = "";
document.getElementById().ariaHasPopup = "";
document.getElementById().ariaCurrent = "";
document.getElementById().style = "";



////////////// query selector.............

document.querySelector(".class/#Id/TagName");
document.querySelectorAll("Element Name/id/class")["indexOfElement"];
document.querySelector().src = "";




///////////////////////// Event Handler to onclick event.........................

///// on html add onclick ="here the function of js"
/////// create a function what you want to do 
//////// paste the function on the onclick method....



//////////////////////////// image slider......


var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var imageTag = document.querySelector("img");


counting = 0;
function next(){

    counting++;

    if(counting >= images.length){

        counting = 0
        imageTag.src = images[counting];

    }else{

        imageTag.src = images[counting];
    } 

}

function pre(){
    counting--;
    if(counting < 0){

        counting = images.length - 1;
        imageTag.src = images[counting];

    }else{

        imageTag.src = images[counting];
    }
    
}



///////////////////////// Adding and removing CSS by JS

var pstyle = document.querySelector("#pstyleID");


function addStyle(){
    pstyle.classList.add("pstyle");
}
function rmvStyle(){
    pstyle.classList.remove("pstyle");
}




//////////////////// Adding Id/class by attribute..........

var addID = document.querySelector("p");


function addIdhere(){
    addID.setAttribute('class','pstyle' );
}
function rmvIdhere(){
    addID.removeAttribute('class','pstyle');
}




/////////////////////////// Use CSS property in JavaScripts...................


/////// remove hyphen from  property an Use camel casing................





///////////////////// event listener..................

///////////////////////////////////////////////////////////// property, function...........................
document.querySelector("SelectElement").addEventListener("click", HereAFunction);
///// dont use parenthesis when use function in addEventListener method's parametre..........


////////// "click", "mouseover", "mouseout", "mousemove" etc are the property of addEventListener and removeEventListener.......






//////////////////////// use event Listener in multiple elements......................

var len = document.querySelectorAll(".mybutton").length;
for (var i = 0; i<len; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked!!";
    });
}



///////////////////// play audio in javaScripts...............


for(var i = 0; i<len; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        audioPlay(text);
    });
}

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audios/1.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("audios/2.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("audios/3.mp3");
            audio.play();
            break;
    }
}



//////////////////////////// add and remove animation....................



for(var i = 0; i<len; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        audioPlay(text);
    });
}

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audios/1.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("audios/2.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("audios/3.mp3");
            audio.play();
            break;
    }
}


function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("animation");

    setTimeout(() => {
        selectedButton.classList.remove("animation");
        
    }, 1000);
}




/////////////////////////////////  keypress listener.................

document.addEventListener("keypress", function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);

});

for(var i = 0; i<len; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    });
}

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audios/1.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("audios/2.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("audios/3.mp3");
            audio.play();
            break;
    }
}


function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("animation");

    setTimeout(() => {
        selectedButton.classList.remove("animation");
        
    }, 1000);
}



///////////////////////// keypress show the character and Count the keypress............

var counting = 0;
document.querySelector("#txtarea").addEventListener("keypress", function(event){
    counting++;
    var text = event.key;
    document.querySelector("p").innerHTML = "You have pressed " + counting;

});




/////////////////////// DOM Event // Event Object................
const inputsss = document.querySelector('input[name = name]');
inputsss.addEventListener('change', changeHangdler);


function changeHangdler(e){

    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value);
}


const programs = document.querySelectorAll('input[name = program]');


console.log(programs);


Array.from(programs).map((program)=>{
    program.addEventListener('change', programHandler)

});

function programHandler(e){
    if(e.target.checked){

        if(e.target.value == "c"){
            console.log("c checked")
        }else if(e.target.value =="java"){
            console.log("java checked")
        }else{
            console.log(e.target.value)

        }
        

    }else{
      console.log("Unchecked")

    }
    
}
console.clear();








 
