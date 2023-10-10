let outputSrn = document.getElementById("output-srn")
function Display(num){
    outputSrn.value += num;
}
Display(num)
function Calculate(){
   
    try{
        outputSrn.value = eval(outputSrn.value);
    }
    catch(err)
    {
        alert('Invalid')
    }
}
function Clear(){
    outputSrn.value = "";
}
function Delete(){
    outputSrn.value = outputSrn.value.slice(0,-1);
}