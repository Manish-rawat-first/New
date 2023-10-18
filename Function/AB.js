function userLoginName(userName){
    if(!userName){
        return `Please Enter User Name`;
    }
    return `${userName} just logged in`;
}
console.log(userLoginName("Gopu"))