function one(){
    console.log("One")
}
function two(){
    console.log("Two");
    one();
}
function Three(){
    console.log("Three");
    two();
}
one();
two();
Three();