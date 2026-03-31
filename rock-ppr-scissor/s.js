const btn = document.getElementById("buttn")
const arr = ["Rock","Paper","Scissor"]
btn.addEventListener("click",()=>{
    const box1 = document.getElementById("1")
    const box2 = document.getElementById("2")
    let i1 = Math.floor(Math.random()*3)
    let i2 = Math.floor(Math.random()*3)
    box1.innerHTML=`${arr[i1]}`;
    box2.innerHTML=`${arr[i2]}`;
    let a = box1.innerHTML;
    let b=box2.innerHTML
    if(a===b){
        document.querySelector(".result").innerHTML="DRAW";
    }
    else if(a==="Rock" && b==="Paper"){
        document.querySelector(".result").innerHTML="b(Paper) is winner";
    }
    else if(a==="Rock" && b==="Scissor"){
        document.querySelector(".result").innerHTML="a(rock) is winner";
    }
    else if(a==="Paper" && b==="Scissor"){
        document.querySelector(".result").innerHTML="b(scissor) is winner";
    }
    else if(a==="Paper" && b==="Rock"){
        document.querySelector(".result").innerHTML="a(Paper) is winner";
    }
    else if(a==="Scissor" && b==="Rock"){
        document.querySelector(".result").innerHTML="b(Rock) is winner";
    }
    else if(a==="Scissor" && b==="Paper"){
        document.querySelector(".result").innerHTML="a(Scissor) is winner";
    }


   




})