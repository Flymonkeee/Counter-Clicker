
let x = 1;
let number = 1000000000000000;
document.getElementById("counter").innerHTML = number;

document.getElementById("button").onclick = function () {
    number -= x;
    document.getElementById("counter").innerHTML = number;
    
    if (number == 999999999990000) {
        window.alert("Mutliplier set to 2x")
        x = 2;
    }

    if (number == 999999999950000) {
        window.alert("Multiplier set to 5x")
        x = 5;
    }

    if (number == 999999999900000) {
        window.alert("Multiplier set to 10x")
        x = 10;
    }

    if (number == 999999999500000) {
        window.alert("Multiplier set to 25x")
        x = 25;
    }

    if (number == 999999995000000) {
        window.alert("Multiplier set to 50x")
        x = 50;
    }

    if (number == 999999990000000) {
        window.alert("Multiplier set to 100x")
        x = 100;
    }

    if (number == 999999950000000) {
        window.alert("Multiplier set to 200x")
        x = 200;
    }

    if (number == 999999900000000) {
        window.alert("Multiplier set to 500x")
        x = 500;
    }

    if (number == 999999000000000) {
        window.alert("Multiplier set to 1000x")
        x = 1000;
    }

    if (number == 999990000000000) {
        window.alert("Multiplier set to 1500")
        x = 1500;
    }

    if (number == 999500000000000) {
        window.alert("Multiplier set to 2000")
        x = 2000;
    }

    if (number == 990000000000000) {
        window.alert("Multiplier set to 5000")
        x = 5000;
    }

    if (number == 900000000000000) {
        window.alert("Multiplier set to 10000")
    }

    if (number == 899999900000000) {
        window.alert("Multiplier set to 20000")
    }

    if (number == 890000000000000) {
        window.alert("Multiplier set to 50000")
    }


    if (number == 850000000000000) {
        window.alert("Multiplier set to 100000")
    }


    if (number == 825000000000000) {
        window.alert("Multiplier set to 200000")
    }


    if (number == 800000000000000) {
        window.alert("Multiplier set to 500000")
    }


    if (number == 750000000000000) {
        window.alert("Multiplier set to 1000000")
    }

    if (number == 700000000000000) {
        window.alert("Multiplier set to 2000000")
    }

    if (number == 600000000000000) {
        window.alert("Multiplier set to 5000000")
    }

    if (number == 450000000000000) {
        window.alert("Multiplier set to 10000000")
    }

    if (number == 300000000000000) {
        window.alert("Multiplier set to 20000000")
    }

    if (number == 115000000000000) {
        window.alert("Multiplier set to 50000000")
    }

    if (number == 99999999999999) {
        window.alert("Multiplier set to 100000000")
    }

    if(number == 0 && number < 0){
        document.getElementById("button").onclick = window.alert("You reached the end!")
    }

}

