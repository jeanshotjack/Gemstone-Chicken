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
    $("#computer").text(computer);
    console.log(computer);

    function reset() {
        computer = [Math.floor(Math.random() * 101) + 19];
        $("#computer").text(computer);
        console.log(computer);
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        num3 = Math.floor(Math.random() * 12) + 1;
        num4 = Math.floor(Math.random() * 12) + 1;
        user = 0;
        $("#user").text(user);
    }

    function winner() {
        win++;
        $("#win").text(win);
        reset();
    }

    function loser() {
        loss++;
        $("#loss").text(loss);
        reset();
    }

    function scoreChecker() {
        if (user === computer) {
            winner();
            console.log("Winner");
        }

        else if (user > computer) {
            loser();
            console.log("LOSER!");
        }
    }

    $("#num1").on("click", function () {
        user = user + num1;
        console.log(user);
        $("#user").text(user);
        scoreChecker();
    });
    $("#num2").on("click", function () {
        user = user + num2;
        console.log(user);
        $("#user").text(user);
        scoreChecker();
    });

    $("#num3").on("click", function () {
        user = user + num3;
        console.log(user);
        $("#user").text(user);
        scoreChecker();

    });

    $("#num4").on("click", function () {
        user = user + num4;
        console.log(user);
        $("#user").text(user);
        scoreChecker();
    });

    
});
