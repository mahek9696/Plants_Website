function clearError(){

    error=document.getElementsByClassName('formerror');
    for(let item of error)
    {
        item.innerHTML = "";
    }
}
function seterror(id,error){
    //sets error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validateForm(){
    var returnval = true;
    clearError();
    //perform validation and if validation fails,set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;

    if(name.length<5){
        seterror("name","* Length of name is too short");
        returnval = false;
    }
    if(name.length== 0){
        seterror("name","* Length of name cannot be zero");
        returnval = false;
    }
    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 6){
        seterror("pass","* Password should be atleast 6 charscters long");
        returnval = false;
    }
    return returnval;
}
