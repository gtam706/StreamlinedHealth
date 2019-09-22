class main{
    this.users = [];
    this.doctors = [new doctor("Bob","Babatunde","Booby37@yahoo.com","Male","01/15/1975","49020134", 3627, "Fire way", "Cupertino", "California", "United States", "Bobbyfire", "password"), new doctor("John","Baba","Bay37@gmail.com","Male","01/15/1985","49560134", 3337, "Salsa way", "Miami", "Florida", "United States", "johnthebeast", "123456780")new doctor("Miley","Smith","king@gmail.com","Female","09/12/1985","51020134", 1111, "SilverStallone street", "Hydebad", "Andhra", "India", "boredom", "spandom")new doctor("Adash","Thoppae","thomas@yahoo.com","Male","12/15/1980","19020134", 4444, "Sparticus Road", "Fresno", "California", "United States", "Godman", "LOLOLOLOl")new doctor("Tamurna","Koka","koka@yahoo.com","Female","5/15/1975","49888134", 8590, "Ares street", "Athens", "None", "Greece", "wsgfsr", "firegames")];
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
        window.location.href("homepageDoctor.html");

    }
}
    else if(this.choice.equals("patient")){
    storage = this.userLogin(username,password);
        if(storage){
            window.location.href("homepage_Patient.html");
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
function listDoctors(){
    for(var i = 0; i < this.doctors; i++){
        print(this.doctors[i].firstName);
        print(" " + this.doctors[i].lastName);
    }
}
}
