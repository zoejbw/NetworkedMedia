function randomTime(){
    let time = '';
    time = ((Math.floor(Math.random() * 11)) + 1) + ":" + ((Math.floor(Math.random() * 48)) + 10);
    //return time;
    time = "Your phone says it is " + time + ".";
    document.getElementById("myTime").innerHTML = time;
}

function randomText(){
    let text = '';
    let firsts = ["mom", "dad", "boyfriend","girlfriend","roommate","boss","professor","roommate's dog", "ex"];
    let seconds = ["what's up?","love you","where are you???","you're late!!","goodnight","how are you doing?","did you get my email?", "is your refrigerator running?"];
    let first = firsts[Math.floor(Math.random() * firsts.length)];
    let second = seconds[Math.floor(Math.random() * seconds.length)];
    text = "You have text from your " + first + " that says: " + second;
    document.getElementById("myText").innerHTML = text;
}

