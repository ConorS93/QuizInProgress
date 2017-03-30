var player = document.getElementById("audio1");

var b = 0;
b++;
var Q = 0;
Q++;

function NextQ(){
    document.getElementById("n1").innerHTML = "";
    document.getElementById("q1").innerHTML = Q++;
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("f1").innerHTML = "";
}
function Ques1() {
document.getElementById("q1").innerHTML = Q++;
document.getElementById("question1").innerHTML = "This chord is a Jazz Chord but which one is it" + "<br />"+"<br />" + "<button onclick=Correct1() id=q1>13th</button><br />" + "<button onclick=Incorrect1() id=q2>Minor 7th</button><br />" + "<button onclick=Incorrect1() id=q3>Major 7th</button><br />";
player.src = "chord1.mp3";
player.load();
document.getElementById("starter1").innerHTML = "";
}
function Correct1() {
document.getElementById("score1").innerHTML = b++;
    document.getElementById("question1").innerHTML = "Correct, it was the A13 Chord!";
    document.getElementById("n1").innerHTML = "<button onclick=Ques2()>Next</button>";
    document.getElementById("f1").innerHTML = "";
}
function Incorrect1() {
    document.getElementById("question1").innerHTML = "Incorrect, it was the A13 Chord";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques2()>Next</button>";
    document.getElementById("f1").innerHTML = "";
}
function Ques2() {
    document.getElementById("question1").innerHTML = "Is this a Asus2 or Bsus4?" + "<br /><br />" + "<button onclick=Incorrect2() id=q5>Bsus4</button><br />" + "<button onclick=Correct2() id=q6>Asus2</button><br />";
    player.src = "chord2.mp3";
    player.load();
    NextQ();
}
function Correct2() {
document.getElementById("score1").innerHTML = b++;
document.getElementById("question1").innerHTML = "Correct it was the Asus2 Chord, this odd chord is found in 'Teenage Dirtbag' by Wheatus & 'Best Of You' by Foo Fighters" + "<br /><br />" + "Both songs Also use C#m7 & Bsus4 Chords";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques3()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Incorrect2() {
document.getElementById("question1").innerHTML = "Incorrect it was the Asus2 Chord, this odd chord is found in 'Teenage Dirtbag' by Wheatus & 'Best Of You' by Foo Fighters" + "<br /><br />" + "Both songs Also use C#m7 & Bsus4 Chords";
document.getElementById("n1").innerHTML = "<button onclick=Ques3()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Ques3() {
document.getElementById("question1").innerHTML = "...and this one?" + "<br /><br /><br />" + "<button onclick=Incorrect3() id=q4>Asus2</button><br />" + "<button onclick=correct3() id=q5>Bsus4</button><br />" + "<button onclick=Incorrect3() id=q6>Dsus2</button><br />";
player.src = "chord3.mp3";
player.load();
NextQ();
}
function correct3() {
document.getElementById("score1").innerHTML = b++;
document.getElementById("question1").innerHTML = "Correct it was the Bsus4 Chord, Here is what it looks like";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques4()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Incorrect3() {
    document.getElementById("question1").innerHTML = "Incorrect it was the Bsus4 Chord, Here is what it looks like";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques4()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Ques4() {
document.getElementById("question1").innerHTML = "What is This Chord Type" + "<br /><br /><br />" + "<button onclick=Correct4() id=q1>Major 7th</button><br />" + "<button onclick=Incorrect4() id=q2>Minor 7th</button><br />" + "<button onclick=Incorrect4() id=q3>13th</button><br />";
player.src = "chord4.mp3";
player.load();
NextQ();
}
function Correct4() {
document.getElementById("score1").innerHTML = b++;
document.getElementById("question1").innerHTML = "Correct it was the C major 7th Chord, another chord commonly found in Jazz Music! ";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques5()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Incorrect4() {
document.getElementById("question1").innerHTML = "Incorrect it was the C major 7th Chord, another chord commonly found in Jazz Music! ";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques5()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Ques5() {
document.getElementById("question1").innerHTML = "What about this chord?" + "<br /><br /><br />" + "<button onclick=Incorrect5() id=q4>major</button><br />" + "<button onclick=Incorrect5() id=q5>minor</button><br />" + "<button onclick=Correct5() id=q6>major 7th</button><br />";
player.src = "chord5.mp3";
player.load();
NextQ();
}
function Correct5() {
document.getElementById("score1").innerHTML = b++;
document.getElementById("starter1").innerHTML = "";
document.getElementById("question1").innerHTML = "Correct it was D Major 7th";
document.getElementById("n1").innerHTML = "<button onclick=Ques6()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Incorrect5() {
document.getElementById("question1").innerHTML = "Incorrect it was D Major 7th";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques6()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Ques6() {
document.getElementById("question1").innerHTML = "This one is very similar" + "<br /><br /><br />" + "<button onclick=correct6() id=q4>minor 7th</button><br />" + "<button onclick=Incorrect6() id=q5>minor</button><br />" + "<button onclick=Incorrect6() id=q6>major 7th</button><br />";
player.src = "chord6.mp3";
player.load();
NextQ();
}
function correct6() {
document.getElementById("score1").innerHTML = b++;
document.getElementById("question1").innerHTML = "Correct it was the Minor 7th";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques7()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Incorrect6() {
document.getElementById("question1").innerHTML = "Incorrect it was the Minor 7th";
document.getElementById("starter1").innerHTML = "";
document.getElementById("n1").innerHTML = "<button onclick=Ques7()>Next</button><br />";
document.getElementById("f1").innerHTML = "";
}
function Ques7() {
    document.getElementById("question1").innerHTML = "This is another suspended chord but, which one is it?" + "<br /><br /><br />" + "<button onclick=Incorrect7() id=q4>Asus2</button><br />" + "<button onclick=Incorrect7() id=q5>Bsus4</button><br />" + "<button onclick=correct7() id=q6>Dsus2</button><br />";
    player.src = "chord7.mp3";
    player.load();
    NextQ();
}
function correct7() {
    document.getElementById("score1").innerHTML = b++;
    document.getElementById("question1").innerHTML = "Correct it was the Dsus2 Chord" + "<br />" + "Fact: John lennon's 'happy xmas' song featured a chord progression using D major, Dsus2 and Dsus4 ";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques8()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Incorrect7() {
    document.getElementById("question1").innerHTML = "incorrect it was the Dsus2 Chord" + "<br />" + "Fact: John lennon's 'happy xmas' song featured a chord progression using D major, Dsus2 and Dsus4";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques8()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Ques8() {
    document.getElementById("question1").innerHTML = "Go on, This one is easy!" + "<br /><br /><br />" + "<button onclick=Correct8() id=q1>Major</button><br />" + "<button onclick=Incorrect8() id=q2>Minor 7th</button><br />" + "<button onclick=Incorrect8() id=q3>13th</button><br />";
    player.src = "chord8.mp3";
    player.load();
    NextQ();
}
function Correct8() {
    document.getElementById("score1").innerHTML = b++;
    document.getElementById("question1").innerHTML = "Correct it was the E major Chord";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques9()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Incorrect8() {
    document.getElementById("question1").innerHTML = "Incorrect it was the E major Chord";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques9()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Ques9() {
    document.getElementById("question1").innerHTML = "What about this chord?, can you hear a similarity to another chord from earlier in the quiz?" + "<br /><br /><br />" + "<button onclick=Incorrect9() id=q4>major7th</button><br />" + "<button onclick=Incorrect9() id=q5>minor</button><br />" + "<button onclick=correct9() id=q6>minor7th</button><br />";
    player.src = "chord9.mp3";
    player.load();
    NextQ();
}
function correct9() {
    document.getElementById("score1").innerHTML = b++;
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("question1").innerHTML = "Correct it was F Minor 7th";
    document.getElementById("n1").innerHTML = "<button onclick=Ques10()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Incorrect9() {
    document.getElementById("question1").innerHTML = "Incorrect it was F Minor 7th";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=Ques10()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Ques10() {
    document.getElementById("question1").innerHTML = "...and finally this one?" + "<br /><br /><br />" + "<button onclick=Incorrect10() id=q4>major</button><br />" + "<button onclick=correct10() id=q5>major 9th</button><br />" + "<button onclick=Incorrect10() id=q6>major 7th</button><br />";
    player.src = "chord10.mp3";
    player.load();
    NextQ();
}
function correct10() {
    document.getElementById("score1").innerHTML = b++;
    document.getElementById("question1").innerHTML = "Correct it was C Major 9th";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=end()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function Incorrect10() {
    document.getElementById("question1").innerHTML = "Incorrect it was the C Major 9th";
    document.getElementById("starter1").innerHTML = "";
    document.getElementById("n1").innerHTML = "<button onclick=end()>Next</button><br />";
    document.getElementById("f1").innerHTML = "";
}
function end() {
var finalScore = document.getElementById("score1").innerHTML;
document.getElementById("question1").innerHTML ="";
document.getElementById("msg1").innerHTML = "Well done! your score is " + finalScore;
document.getElementById("starter1").innerHTML ="";
document.getElementById("n1").innerHTML = "";
document.getElementById("f1").innerHTML = "<button onclick=location.reload()>restart</button>";
}
