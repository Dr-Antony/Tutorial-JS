// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// for(i = 0; i < 4; i++ ) {
// console.log(animals[i] += " - прекрассное животное!")
// };
// console.log("Вот так вот!:)");

// console.log(animals);


// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var randomString = "";

// while(randomString.length < (6 / 33) * alphabet.length) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     console.log(randomString)
// };



// var input = "javascript is awesome";
// var output = "";

// for(i = 0; i < input.length; i++) {
//     if(input[i] === "a") {output += "4"}
//     else if (input[i] === "e") {output += "3"}
//     else if (input[i] === "i") {output += "1"}
//     else if (input[i] === "o") {output += "0"}
//     else {output += input[i]}
// };
// console.log(output);

var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
alert(answerArray.join(" "));


while ( var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.") ) {
    if (guess === null) {
    break;
}
    else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
} else {
    for (var j = 0; j < word.length; j++) {
             if (word[j] === guess) {
            answerArray[j] = guess;
             remainingLetters--;
        }
    }

}
}