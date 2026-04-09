function gT() {
    let number=document.getElementById("num").value;
    if (number==="") {
        alert("Please enter a number: ");
        return;
    }
    let output="";
    for (let i = 1; i <= 10; i++) {
        output+=number+" x "+i+" = "+(number * i)+"<br>";
    }
    document.getElementById("res").innerHTML = output;
}