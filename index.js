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

// if (word[j] !== guess) {
//     attempts--;
// }
// if ( attempts < 1) {
//     alert("Game over!");
//     break;
// }


// <!-- <script>
// var words = [
//     "макака",
//     "девушка",
//     "паладин",
//     "подушка",
//     "телевизор"
// ];
// var word = words[Math.floor(Math.random() * words.length)];
// var attempts = 5;

// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = word.length;

// while (remainingLetters > 0 && attempts-- > 0) {
//     alert(answerArray.join(" "));
//     var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
//     guess.toLowerCase;
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("You are stupid ?")
//     }
//     else  {
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);


// var add = function(a,b) {
//     c = a + b;
//     return c;
// };
// var multiply = function(a,b) {
//     c = a * b;
//     return c;
// };

// var result = add(multiply(36325, 9824),777);

// var areArraysSame = function(argument1,argument2) {
// for(i = 0; i < argument1.length; i++) {
//     if(argument1[i] !== argument2[i] || argument1.length !== argument2.length) {
//         return false;
//     }
// }
// return true
// };
// </script> -->