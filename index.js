var deg = 0;

var test = "W5RW5RW2RW1R";
var i = 0;
var n = test.length;

// Types

var number = typeof 1;
var string = typeof "Khris Bharmmano";
var boolean = typeof true;
var undefined = typeof test[9];


while (i < n){
    // console.log(test[i]);

    // Direction
    if(test[i] == "R"){
        deg += 90;
    }else if(test[i] == "L"){
        deg -= 90;
    }

    if (deg > 360){
        deg = deg - 360
    }

    // Value of X Position and Y Postion

    if (test[i] == "W"){
        var j = i + 1;
        var Xpos = 0;
        var Ypos = 0;
        console.log(`Number Position : ${j}`)
        var num = 0;
        while (test[j] == "R" || test[j] == "L"){
            if (deg == 0 || deg == 360){
                Ypos += test[j];
                j += 1;
            }else if (deg ==90){
                Ypos += test[j];
                j += 1;
            }else if (deg == 180){
                Ypos -= test[j];
                j += 1;
            }else if (deg == 270){
                Xpos -= test[j];
                j += 1;
            }
        }
    }

    i +=1;
}

if (deg == 0 || deg == 360){
    console.log(`Direction : North`);
}else if (deg == 90){
    console.log(`Direction : East`);
}else if (deg == 180){
    console.log(`Direction : South`);
}else if (deg == 270){
    console.log(`Direction : West`);
}

console.log(deg);
console.log(`Position : ${num}`);

console.log(`X : ${Xpos}`);
console.log(`Y : ${Ypos}`);