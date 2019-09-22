class main{
    var users = [];
    var doctors = [];
    var current;
    var currentName;
    var currentPassword;
    function addUser(var u){
        user.push(u);
    }
    function adddoctor(var d){
        doctors.push(d);
    }
    function userLogin(var name, var password){
        current = null;
        for(var i = 0; i < users.length; i++){
            if(users[i].getPassword.equals(password) && user[i].getUserName.equals(name));{
                current = i;
                return true;
            }
        }
        if(current == null){
            alert("Invalid username or password");
            return false;
        }
    }
    function doctorLogin(var name, var pass){
        current = null;
        for(var i = 0; i < users.length; i++){
            if(users[i].password.equals(pass) && user[i].userName.equals(name));{
                current = i;
                return true;
            }
        }
        if(current == null){
            alert("Invalid username or password");
            return false;
        }
    }
function formdata() 
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var doctor = document.getElementById("doctor").value;
var  
var bool = doctorLogin(username, password);
}   
}
