//Scan all the data from the html and display a summary including the calculated amount of money
function compute()
{

    var principalValue = parseFloat(document.getElementById("principal").value);
    var rateValue = parseFloat(document.getElementById("rate").value);
    var years = document.getElementById("years").value;
    var interest = principalValue * years * rateValue/100;
    var year = new Date().getFullYear()+parseInt(years);

    // Check if the amount is valid
    if (validPrincipal())
    {
        // use innerHTML to allow usage of tag to highlight values
        document.getElementById("result").innerHTML=
        `If you deposit <mark>${principalValue} </mark> <br/>
        at an interest rate of <mark>${rateValue}%</mark>. <br/>
        You will receive an amount of <mark>${interest}</mark>, <br/>
        in the year <mark>${year}</mark>.<br/>`;
        return true;
    }
    return false;
}

// Check if the amount input is a valid number (> 0 and not empty)
function validPrincipal(){
    var principalValue = document.getElementById("principal").value;

    if (principalValue <=0 || principalValue === ""){
        document.getElementById("result").innerHTML="";
        alert ("Please enter an amount superior to 0");
        principal.focus();
        return false;
    }
    return true;
}

// Link this function with an "onchange" event on the range input.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
    return true;
}

// Reset the rate and amount value at each page reload (to have a displayed value and a range bar synced and a good amount value)
function initPage()
{
    var rate = document.getElementById("rate");
    document.getElementById("principal").value = "100000";

    rate.value=rate.defaultVal;
    document.getElementById("rate_val").innerText=rate.value+"%";
    console.log("In initRate");
    return true;
}
        