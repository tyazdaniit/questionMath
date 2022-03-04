var allQuestions = [
    {question: "2 + 2 = ?", answer: 4},
    {question: "2 * 12 = ?", answer: 24},
    {question: "3 + 1 = ?", answer: 2},
    {question: "12 / 12 = ?", answer: 1},
    {question: "22 / 2 = ?", answer: 11},
];
var userScore = 0;
for(var i = 0 ; i < allQuestions.length ; i++){
    var questionPrompt = prompt(allQuestions[i].question)
if(questionPrompt == allQuestions[i].answer){
        userScore++
}}
alert("شما" + " " + userScore + " " + "سوال از ۵ سوال را درست پاسخ داده اید");