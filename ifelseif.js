// if else if
console.log("Hello World!");
let tempInDegree=19;

if (tempInDegree < 0){
    console.log("Extremely cold outside...");
}
else if (tempInDegree < 16 && tempInDegree > 0){
    console.log("It is cold outside...");
}
else if(tempInDegree<25 && tempInDegree>=16){
    console.log("Weather is okay...");
}
else if (tempInDegree>=25 && tempInDegree<35){
    console.log("It is hot outside...");
}
else{
    console.log("It is extremely hot outside...");
}