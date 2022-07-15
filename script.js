function calculate() {

    let billAmt = document.getElementById("bill-amount").value;
    let tip_percent = document.getElementById("tip").value;
    let guest = document.getElementById("guests").value;

    let tip = ((billAmt * tip_percent) / 100) / guest;

    rounded_tip = Math.round(tip * 100) / 100;
    //next line allows us to always have two digits after decimal point
    rounded_tip = rounded_tip.toFixed(2);

    document.getElementById("output_text").innerHTML = rounded_tip;



    console.log(billAmt);
    console.log(tip_percent);
    console.log(guest);
    console.log(rounded_tip);

    


};

//click to call function
document.getElementById("calculate").onclick = function() {
    
    calculate();

    //print the value of whatever we have in bill amount to the bottom where we plan to print the results of the calculation



}