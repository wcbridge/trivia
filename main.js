
var timer = 20
var correct = 0;
var wrong = 0;

var intervalId;
function run() {
     clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    document.getElementById('timer').innerHTML = `TIME!: ${timer}`;
    timer--;
    if (timer === 0) {
        stop();
        document.getElementById('timer').innerHTML = 'TIME UP!';
        check();
    }
}
function stop() {
    clearInterval(intervalId);
}

run()

function check() {
    document.getElementById("results").style.visibility = "visible";
   // console.log('hi')
    if(document.getElementById('grail').checked) {
        correct++
    } else {
        wrong++
    }
    if (document.getElementById('blue').checked) {
        correct++
    } else {
        wrong++
    }
    if (document.getElementById('assyria').checked) {
        correct++
    } else {
        wrong++
    }
    if (document.getElementById('swallow').checked) {
        correct++
    } else {
        wrong++
    }
    document.getElementById('correct').innerHTML =`Correct: ${correct}`;
    document.getElementById('wrong').innerHTML = `Wrong: ${wrong}`;
    if (correct+wrong>4){
        document.getElementById('correct').innerHTML = `PLEASE!`;
        document.getElementById('wrong').innerHTML = `NO MORE!`;
    }
};

//count()
//console.log(timer);

