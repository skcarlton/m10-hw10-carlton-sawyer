"use strict";

//Constant temps

var boilingTemp = document.getElementById("boiling-temp");
var freezingTemp = document.getElementById("freezing-temp");

boilingTemp.innerHTML = "212";
freezingTemp.innerHTML = "32";

//Water temp

var waterTemp = document.getElementById("water-temp");

waterTemp.innerHTML = "100";

//Temp message

var goodTemp = document.getElementById("good-temp");

setTimeout(function () {
    goodTemp.classList.remove("hide");
    goodTemp.classList.add("show");
}, 3000);