class main{
    this.users = [];
    this.doctors = [];
    this.current;
    this.currentName;
    this.currentPassword;
    this.function addUser(var u){
        user.push(u);
    }
    function adddoctor(var d){
        doctors.push(d);
    }
    function userLogin(var name, var password){
        this.current = null;
        for(var i = 0; i < users.length; i++){
            if(users[i].getPassword.equals(password) && user[i].getUserName.equals(name));{
                this.current = i;
                return true;
            }
        }
        if(current == null){
            alert("Invalid username or password");
            return false;
        }
    }
    function doctorLogin(var name, var pass){
        this.current = null;
        for(var i = 0; i < users.length; i++){
            if(users[i].password.equals(pass) && user[i].userName.equals(name));{
                this.current = i;
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
    var storage;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var choice = getRadioVal(document.getElementById("Radio"),document.getElementsByTagName('input'));
if(this.choice.equals("doctor")){
    storage = this.doctorLogin(username,password);
    if(storage){
        window.location.replace();

    }
}
    else if(this.choice.equals("patient")){
    storage = this.userLogin(username,password);
        if(storage){
            window.location.replace();
        }
}
    else{
        alert
        ("Pick account type");
    }

}   
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}
function listDoctotrs(){
    for(var i = 0; i < this.doctors; i++){
        print(this.doctors[i].firstName);
        print(" " + this.doctors[i].lastName);
    }
}
}
