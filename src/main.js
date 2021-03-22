//Constant temps

const boilingTemp = document.getElementById("boiling-temp");
const freezingTemp = document.getElementById("freezing-temp");

boilingTemp.innerHTML = "212";
freezingTemp.innerHTML = "32";


//Water temp

const waterTemp = document.getElementById("water-temp");

waterTemp.innerHTML = "100";


//Temp message

const goodTemp = document.getElementById("good-temp");

setTimeout( function() {
    goodTemp.classList.remove("hide");
    goodTemp.classList.add("show");
}, 3000)
