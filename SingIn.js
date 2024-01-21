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
    if(name.length == 0){
        seterror("name","* This field can not be empty");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if(email.length>15){
        seterror("email","* Email length is too long");
        returnval = false;
    }
    if(email.length == 0){
        seterror("email","* This field can not be empty");
        returnval = false;
    }
    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length != 10){
        seterror("phone","* Phone number should be of 10 digits");
        returnval = false;
    }
    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 6){
        seterror("pass","* Password should be atleast 6 charscters long");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password){
        seterror("cpass","* Password and Confirm password should match !");
        returnval = false;
    }
    return returnval;
}

 function submitData(){
    
    var name = $ (".name").val();
    var email = $ (".email").val();
    var phone = $ (".phone").val();


    jsonObject={

        "Name":"",
        "Email":"",
        "Phone":""
    }
    jsonObject.Name=name;
    jsonObject.Email=email;
    jsonObject.Phone=phone;

    var str=JSON.stringify(jsonObject);
    document.getElementsByClassName('showJson').innerHTML=str;
    document.write(str);
   
}

function submitData2(){

    var formData = JSON.stringify($("#SingInForm").serializeArray());
}
function submitData3(){
        let data=[];
    const adddata=(ev)=>{
     ev.validateForm();
    let obj={
        Name:document.getElementById('name').value,
        Email:document.getElementById('email').value,
        Phone:document.getElementById('phone').value
    }
    data.push(obj);
    document.forms[0].reset();

    console.warn('added',{data});
    let pre =document.querySelector('#msg pre');
    pre.textContent='\n'+JSON.stringify(data,'\t',2);

    localStorage.setItem('myData',JSON.stringify(data));
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('but').addEventListener('click',adddata);
});

}











