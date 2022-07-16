const grades = [98,38,69];
const max_grades = [100,50,75];

//take the two lists and condense into one list of decimal percentages
function calc_perc (grades, max_grades){
    let i  = 0;
    let earned_perc = [];
    while(i < grades.length){
        earned_perc.push((grades.at(i))/(max_grades.at(i)))
        i += 1;
        }
    
    return earned_perc
}

//calculate the list of decimal percentages into one percentage out of 100
function calc_average(num){
    let = sum_num = 0;
    let t  = 0;
    let avg = 0;
    while(t < num.length){
        sum_num += num.at(t)
        t += 1;
    }

    avg = Math.round((sum_num/num.length)*100)
    return avg
}

//use percentage out of 100 to calculate remaining possible grade
function calc_grey(final_percent){
    return 100 - final_percent
}

//first gives list of perrcentages of the assignments
//second gives the average percent throught all of the grades
//third gives the percentage of the graph that will be grey
console.log(calc_perc(grades, max_grades))
console.log(calc_average(calc_perc(grades, max_grades)))
console.log(calc_grey(calc_average(calc_perc(grades, max_grades))))
