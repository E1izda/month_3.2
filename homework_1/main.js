let color = prompt("введи цвет фона");

if (color == "красный") {
    document.body.style.background = "red";
    document.getElementById("title").innerText = "Фон изменён на red";
    console.log("ok");
}
else if (color == "синий") {
    document.body.style.background = "blue";
    document.getElementById("title").innerText = "Фон изменён на blue";
    console.log("ok");
}
else if (color == "зеленый") {
    document.body.style.background = "green";
    document.getElementById("title").innerText = "Фон изменён на green";
    console.log("ok");
}
else if (color == "желтый") {
    document.body.style.background = "yellow";
    document.getElementById("title").innerText = "Фон изменён на yellow";
    console.log("ok");
}
else if (color == "черный") {
    document.body.style.background = "black";
    document.getElementById("title").innerText = "Фон изменён на black";
    console.log("ok");
}
else if (color == "белый") {
    document.body.style.background = "white";
    document.getElementById("title").innerText = "Фон изменён на white";
    console.log("ok");
}
else if (color == "розовый") {
    document.body.style.background = "pink";
    document.getElementById("title").innerText = "Фон изменён на pink";
    console.log("ok");
}
else {
    console.log("ошибка");
}


let light = prompt("Введите цвет светофора:");

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");


red.style.background = "gray";
yellow.style.background = "gray";
green.style.background = "gray";

if (light == "красный") {
    red.style.background = "red";
    console.log("STOP");
} else if (light == "желтый") {
    yellow.style.background = "yellow";
    console.log("WAIT");
} else if (light == "зеленый") {
    green.style.background = "green";
    console.log("GO");
} else {
    console.log("Ошибка! Введите корректный цвет светофора");
}