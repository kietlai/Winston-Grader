const Q1 = "A";
const Q2 = "A";
const Q3 = "A";
const Q4 = "A";

const FG = "A";

function GCalculate (Q1, Q2, Q3, Q4, FG){
    let Added = Q1 + Q2 + Q3 + Q4;
    let pointVal = 0;

    let aq = (Added.split("A").length - 1)*12;
    let bq = (Added.split("B").length - 1)*9;
    let cq = (Added.split("C").length - 1)*6;
    let dq = (Added.split("D").length - 1)*3;
    pointVal = pointVal + aq + bq + cq + dq

    if(FG === "A"){
        pointVal += 8
    }else if(FG === "B"){
        pointVal += 6
    }else if(FG === "C"){
        pointVal += 4
    }else if(FG === "D"){
        pointVal += 2
    }

    if(pointVal <= 7){
        return "E"
    }else if(pointVal <= 22){
        return "D"
    }else if(pointVal <= 35){
        return "C"
    }else if(pointVal <= 49){
        return "B"
    }else{
        return "A"
    }
}

console.log(GCalculate (Q1, Q2, Q3, Q4, FG))