let user = {
    1:"Motu",
    2:"Patlu",
    3:"Jhatka",
    4:"Ghasitaram",
    greeting:function(){
        return "hello";
    }
};
Object.freeze(user)
user.greeting = function(){
    return "Hello World";
}
console.log(user.greeting())