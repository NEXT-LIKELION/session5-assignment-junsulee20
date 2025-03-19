let user = prompt('가위,바위,보 중 택1', "가위");
let computer = Math.random();


if(computer <= 0.333){
    console.log("컴퓨터:가위")
    if(user=='가위'){
        console.log("무승부")
    }
    
    if(user=='바위'){
        console.log("승리")
    }
    
    if(user=='보'){
        console.log("패배")
    }
}

else if(computer <= 0.666){
    console.log("컴퓨터:바위")
    if(user=='가위'){
        console.log("패배")
    }
    
    if(user=='바위'){
        console.log("무승부")
    }
    
    if(user=='보'){
        console.log("승리")
    }
}

else{
    console.log("컴퓨터:보")
    if(user=='가위'){
        console.log("승리")
    }
    
    if(user=='바위'){
        console.log("패배")
    }
    
    if(user=='보'){
        console.log("무승부")
    }
}