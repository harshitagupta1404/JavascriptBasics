const radius = [3, 1, 2, 4];

const area = function(r){
    return Math.PI * r * r;
}
const diameter = function(r){
    return r*2;
}

// similar to implementation of a map
function calculate(r,logic){
    let output = [];
    for (i=0;i<r.length;i++){
        output.push(logic(r[i]));
    }
    console.log(output);
}

calculate(radius,area);
calculate(radius,diameter);