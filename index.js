var Xpos = 0;
var Ypos = 0;
var i = 0;
const arr = [];
var deg = 0;
const test = "RW15RW1";
n = test.length;
number = typeof 42;
string = typeof 'blubber';
boolean = typeof true;

// Loop

while(i < n){

    if (test[i] == 'R'){
        deg = deg + 90;
        console.log(deg);
    }else if (test[i] == 'L'){
        def = deg - 90;
        console.log(deg);
    }
    
    if (test[i] == 'W'){
        if (deg == 0){
            Ypos = Ypos + test[i + 1];
            console.log(Ypos)
        }else if (deg == 180){
            Ypos = Ypos - test[i + 1];
            console.log(Ypos)
        }else if (deg == 90){
            Xpos = Xpos + test[i + 1]
            console.log(Xpos)
        }else if (deg == 270){
            Xpos = Xpos - test[i + 1]
            console.log(Xpos)
        }
    }
    i = i + 1

}

// Check Direction

if (deg == 0 || deg == 360){
    console.log("Direction : North");
}else if (deg == 90){
    console.log("Direction : East");
}else if (deg == 180){
    console.log("Direction : South");
}else if (deg == 270){
    console.log("Direction : West");
}
console.log(`Degrees : ${deg}`);