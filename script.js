const calctemp = () => {
    const numbertemp = document.getElementById('usertemp').value;
   

    const scaleSelected = document.getElementById('userscale');
    const scaleValue = userscale.options[scaleSelected.selectedIndex].value;


    const celToFah = (cel) => {
        let fahrenhit = Math.round((cel * 9/5) + 32);
        return fahrenhit;
    }
    const fahToCel = (fah) => {
        let celcious = Math.round((fah - 32) *5/9);
        return celcious;
    }
    let result;

    if(scaleValue == 'cel'){
        result = celToFah(numbertemp);
        document.getElementById('resultcontainer').innerHTML= `= ${result}°Fahrenhit`;
    }else{
        result = fahToCel(numbertemp);
        document.getElementById('resultcontainer').innerHTML= `= ${result}°Celcious`;
    }
}