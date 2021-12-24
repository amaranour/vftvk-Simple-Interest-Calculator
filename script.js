function compute()
{
    // variable for input Amount
    var principal = document.getElementById("principal").value ;
    // variable for input Rate
    var rate = document.getElementById("rate").value;
    // variable for input years
    var years = document.getElementById("years").value;
    // variable for input interest (calculation)
    var interest = principal * years * rate / 100  ;
    // convert No of years into actual year in the future
    // new Date() create an instance of date(mm/dd/yy)
    //getFullYear() method output the current year 
    // add the parseInt will convert the number of year string 
    // input to an integer 
    var year = new Date().getFullYear() + parseInt(years);

    //document.getElementById("result").innerHTML= "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";

    if (principal <= 0) {
        alert ("Enter a positive number");
        principal.focus();
        return false ;

    } 
    
   
    else {
     
        document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
    
    }
    return true;
    
}
    // write a function the reads the value of the range slider
    // and displays it next to slider <span>
 
function updateRate() {
        
        var rateVal = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText = rateVal;    
    
}
        