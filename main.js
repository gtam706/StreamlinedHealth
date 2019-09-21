class main{
    var users = [];
    var doctors = [];
    var current;
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
}