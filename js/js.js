
function  formdata(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("phone").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("message").value;

    if(a==""||b==""||c==""||d==""){
        alert("All Fields Are Mandatory");
        return false;
    }

    else if(b.length<10||b.length>10){
        alert("Number Should be of 10 digit ! Please Enter A Valid Number");
        return false;
    }

    else if(isNaN (b)){
        alert("Only Numbers are Allowed ! PLease Enter a Valid Numbers ");
        return false;
    }



    else{
        true;
    }
}

