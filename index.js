//------------------------------------1-----------------------

let num = 10;
let output = "";

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (i == j) {
            output += "x";
        } else if (j == num - i - 1) {
            output += "x";
        } else {
            output += "_";
        }
    }
    output += "\n";
}

console.log(output);


//------------------------------------2-----------------------

let list = [1,2,4,3,3,5,4,2,3,4,2,2,2];
let cant = {};

for (let i = 0; i < list.length; i++) {
    let obj = list[i];
    if(!cant[obj]){
        cant[obj] = "*"
    } else {
        cant[obj] += "*"
    }
}

console.log(cant);