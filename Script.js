
function validateForm() {
    

    
    var x = document.forms["contactForm"]["firstname"].value;
    var y = document.forms["contactForm"]["lastname"].value;
    var z = document.forms["contactForm"]["emailaddress"].value;
    
    if (x == "") 
        {
            alert("First Name must be filled out.");
            return false;
         }
    
    if (y == "") 
        {
            alert("Last Name must be filled out.");
            return false;
         }
    
    if (z == "") 
        {
            alert("Must submit a valid Email Address");
            return false;
         }
     
                    
}


document.getElementById("date").innerHTML = new Date();