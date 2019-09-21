class user{
    var email;
    var firstName;
    var lastName;
    var userName;
    var weight;
    var age;
    var height;
    var gender;
    constructor(){
        
    }
    function setFirstName(var e){
        firstName = e;
    }
    function setLastName(var e){
        lastName = e;
    }
    function setUserName(var e){
        userName = e;
    }
    function setEmail(var e){
        email = e;
    }
    function setAge(var e){
        age = e;
    }
    function setGender(var g){
        gender = g;
    }
    function setHeight(var feet, var inches){
        height = feet + (inches / 12);
    }
    
}