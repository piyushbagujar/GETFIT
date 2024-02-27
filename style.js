function HOME(){
    document.getElementById("home").style.color="rgb(24, 234, 13)"; 
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="white";
    document.getElementById("blog").style.color="white";
    document.getElementById("contact").style.color="white";
}

function PROGRAM(){
    document.getElementById("home").style.color="white"; 
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="rgb(24, 234,13)";
    document.getElementById("blog").style.color="white";
    document.getElementById("contact").style.color="white";
}
function PLAN(){
    document.getElementById("home").style.color="white"; 
    document.getElementById("plan").style.color="rgb(24, 234, 13)";
    document.getElementById("program").style.color="white";
    document.getElementById("blog").style.color="white";
    document.getElementById("contact").style.color="white";
}
function BLOG(){
    document.getElementById("home").style.color="white"; 
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="white";
    document.getElementById("blog").style.color="rgb(24, 234, 13)";
    document.getElementById("contact").style.color="white";
}
function CONTACTUS(){
    document.getElementById("home").style.color="white"; 
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="white";
    document.getElementById("blog").style.color="white";
    document.getElementById("contact").style.color="rgb(24, 234, 13)";
}
// submit

function submit(){

    let Name = document.getElementById("Name");
    let Number = document.getElementById("Number");

    if(Name.value ==""){
        alert("Please Enter Your Name")
    }else if(Number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join :" + Name.value)
    }
}