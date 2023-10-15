

const calculateTemp = () => {
    const inputTemp = document.getElementById("input").value;

    const tempselected = document.getElementById("temp");

    const valueTemp = temp.options[tempselected.selectedIndex].value;


    // celsius to Fahrenhit
    const celToFah = (cel) => {
        let Fahrenheit = ((cel * 9/5)+32).toFixed(1);
        return Fahrenheit;
    }


    // fahr TO celsius
    const fahTocel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }


    if(valueTemp == 'cel'){
        document.getElementById("result").innerHTML = celToFah(inputTemp) +  "&#176; fahrenheit";

    }

    else{
        document.getElementById("result").innerHTML = fahTocel(inputTemp) +  "&#176; Celsius";

    }


}