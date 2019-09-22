class doctor{
this.firstname = null;
this.lastName = null;  
this.email = null;
this.gender = null; 
this.dob = null;
this.ID  = null;
this.buildingNumber =null;
this.streetName = null; 
this.city = null;
this.state = null; 
this.country = null;  
this.userName = null;
this.password = null;
function formdata() 
{
var firstname1= document.getElementById("firstname").value;
var lastname1= document.getElementById("lastname").value;
document.writeln("<h1>Confirmation Page</h1><br>");
document.writeln("Thank you for completing this form.<br><br>");
document.writeln("The first name you entered is " + firstname + "<br>");
document.writeln("The last name you entered is " + lastname);
}
}