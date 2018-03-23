// var q = [
//     {
//     question: "What is your quest?",
//     answers: {
//         a: "To find the Holy Grail",
//         b: "To go to Toledo",
//         c: "to get some marmalade",
//     },
//         correctAnswer: "a",
//     },

//     {
//     question: "What is your favorite color?",
//     answers: {
//         a: "blue",
//         b: "no",

//     },
//     correctAnswer: "a",
// },
// 	{
//         question: "What is the capital of asyria?",
//         answers: {
//             a: "Assur",
//             b: "Constantia",
//             c: "I don't know that",
//         },
//         correctAnswer: 'a',
//     },
//     {
//         question: "What is the air speed velocity of a swallow?",
//         answers: {
//             a: "African or European swallow?",
//             b: "23 knots",
//             c: "I don't know that"
//         },
//         correctAnswer: 'a',
//     },
// ];
var timer = 30
var correct = 0;
var wrong = 0;
var name = ['grail','blue', 'assyria', 'swallow'];


function check() {
    document.getElementById("results").style.visibility = "visible";
    console.log('hi')
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
};



// function quiz() {
//     var x = document.getElementById("myRadio");

//     x.checked = true;
// }