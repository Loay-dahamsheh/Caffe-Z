
var name, gender,preName,type,nameOfDrink;





var br = document.createElement("br");
	
			
	// Create a form dynamically
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "submit.php");

	// Create an input element for Full Name
	var FN = document.createElement("input");
	FN.setAttribute("type", "text");
	FN.setAttribute("name", "FullName");
	FN.setAttribute("placeholder", "User Name");

	// Create an input element for date of birth
	var age = document.createElement("input");
	age.setAttribute("type", "text");
	age.setAttribute("name", "dob");
	age.setAttribute("placeholder", "Age");

	// Create an input element for emailID
	var hot = document.createElement("input");
	hot.setAttribute("type", "checkbox");
	hot.setAttribute("name", "type");
	hot.setAttribute("placeholder", "hot");
    var lab = document.getElementById("hot");
    
   
            


    var cold = document.createElement("input");
    cold.setAttribute("type", "checkbox");
	cold.setAttribute("name", "type");
	cold.setAttribute("placeholder", "cold");
    var lab = document.getElementById("cold");

	// Create an input element for password
	var dn = document.createElement("input");
	dn.setAttribute("type", "text");
	dn.setAttribute("name", "Drink Name");
	dn.setAttribute("placeholder", "Drink Name");

	

				// create a submit button
				var s = document.createElement("input");
				s.setAttribute("type", "submit");
				s.setAttribute("value", "Submit");
				
				// Append the full name input to the form
				form.appendChild(FN);
				
				// Inserting a line break
				form.appendChild(br.cloneNode());
				
				// Append the DOB to the form
				form.appendChild(age);
				form.appendChild(br.cloneNode());
                
				
				// Append the emailID to the form
				form.appendChild(hot);
                form.appendChild(lab);
				form.append("hot");

                form.appendChild(cold);
                form.appendChild(lab);
                
				form.appendChild(br.cloneNode());
				// Append the Password to the form
				form.appendChild(dn);
				form.appendChild(br.cloneNode());
				
				
				
				// Append the submit button to the form
				form.appendChild(s);

				document.getElementsByTagName("body")[0]
			.appendChild(form);
			