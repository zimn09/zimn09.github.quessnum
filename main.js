const textbox = document.getElementById("textbox");
const tofar = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("res");
let temp;

function convert(){

    if(tofar.checked){
        temp = Number(textbox.value)
        temp = temp * 9/5 + 32;
        result.textContent = temp + "°F"; 
    }
    else if(celsius.checked){
        temp = Number(textbox.value)
        temp = (temp - 32) * 5/9;
        result.textContent = temp + "°C"; 
    }
    else{
        result.textContent = "Prosím vyberte si jednotku";

    }
}