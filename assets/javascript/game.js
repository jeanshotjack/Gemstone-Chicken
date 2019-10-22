var win = 0;
var loss = 0;
var num1 = Math.floor(Math.random() * 12) + 1;
var num2 = Math.floor(Math.random() * 12) + 1;
var num3 = Math.floor(Math.random() * 12) + 1;
var num4 = Math.floor(Math.random() * 12) + 1;
var user = 0;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

$(document).ready(function () {

    var computer = [Math.floor(Math.random() * 101) + 19];
    $("#computer").append(computer);
    console.log(computer);

    // set reset function
    // new random number, append new number, assign new crystal numbers, reset and append user total

    // set winner/loser function
    // add wins/losses, signal winner, reset 



    $("#num1").on("click", function () {
        user = user + num1;
        // user + num1; // fix so it actually adds instead of just sticking the number on
        console.log(user);
        $("#user").text(user);
    });
    $("#num2").on("click", function () {
        user = user + num2;
        // user + num1; // fix so it actually adds instead of just sticking the number on
        console.log(user);
        $("#user").text(user);
    });
    $("#num3").on("click", function () {
        user = user + num3;
        // user + num1; // fix so it actually adds instead of just sticking the number on
        console.log(user);
        $("#user").text(user);
    });
    $("#num4").on("click", function () {
        user = user + num4;
        console.log(user);
        $("#user").text(user);
    });

    // if else statements for winner and loser
});
