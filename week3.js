function SumMsgJS(){
var N1 = parseInt(document.getElementById("Number1").value);
var testOut1 = document.getElementById("Test1");
var N2 = parseInt(document.getElementById("Number2").value);
    if(N1>=0 && N1<= 100 ){
        testOut1.innerHTML="Number 1 is between 0 and 100";
    }else{
        testOut1.innerHTML="Number 1 is not between 0 and 100";
    }
    var sum1 = N1+N2;
    alert(sum1+ "is the sum of the number entered");
}