 function formValidation()  
    {  
    var uid = document.registration.userid;  
    var passid = document.registration.passid;  
    var ustate = document.registration.state;  
    var uzip = document.registration.zip;  
    var uemail = document.registration.email;  
    var usex = document.registration.sex;  
   
if(userid_validation(uid,6,12))  
    {  
    if(passid_validation(passid,6,12))  
    {  
    if(stateselect(ustate))  
    {  
    if(allnumeric(uzip))  
    {  
    if(ValidateEmail(uemail))  
    {  
    if(validsex(usex))  
    {  
    }  
    }  
    }  
    }  
    }  
    }  
    return false;
}
     
    function userid_validation(uid,mx,my)  
    {  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= my || uid_len < mx)  
    {  
    alert("User Id should not be empty / length be between "+mx+" to "+my);  
    uid.focus();  
    return false;  
    }  
    return true;  
    }  
    function passid_validation(passid,mx,my)  
    {  
    var passid_len = passid.value.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
    {  
    alert("Password should not be empty / length be between "+mx+" to "+my);  
    passid.focus();  
    return false;  
    }  
    return true;  
    }  
   
   
    function stateselect(ustate)  
    {  
    if(ustate.value == "Default")  
    {  
    alert('Select your state from the list');  
    ustate.focus();  
    return false;  
    }  
    else  
    {  
    return true;  
    }  
    }

    function allnumeric(uzip)  
    {  
    var numbers = /^[0-9]+$/;  
    if(uzip.value.match(numbers) || uzip.value !== "")  
    {  
    return true;  
    }  
    else  
    {  
    alert('ZIP code must have numeric characters only');  
    uzip.focus();  
    return false;  
    }  
    }  
    function ValidateEmail(uemail)  
    {  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat))  
    {  
    return true;  
    }  
    else  
    {  
    alert("You have entered an invalid email address!");  
    uemail.focus();  
    return false;  
    }  
    }

function validsex(usex)
{
    if(usex.value == "Select")  
    {  
    alert('Select your Sex from the list');  
    usex.focus();  
    return false;  
    }


    else  
    {
    alert('Form Succesfully Submitted');  
    window.location.reload();
self.close();
return true;
    }  
    } 