/********w************
    
	Project 4
    Name: Akshita	
    Date: 25 April 2023
    Description: Shoe Heaven Website Contacts Page

*********************/

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e){
    //Hides all the errors on the page
    hideErrors();

    //Checks if the form has errors
    if(formHasErrors()){
        //when the form has errors, it doesn't allow to submit
        e.preventDefault();

        return false;
    }

    //Submits the form
    return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e){
    //Hides the errors displayed
    hideErrors();

    //Gets focus on first input
    document.getElementById("fullname").focus();

    //resets the form
    return true;
}

/*
 * Hides all of the error elements.
 */
function hideErrors(){
    let error = document.getElementsByClassName("error");

    for(let i = 0; i < error.length; i++){
        error[i].style.display = "none";
    }
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors(){
    let errors = 0;
    let firstErrorInput = null;

    //Checks validation for name
    if(document.getElementById("fullname").value == ""){
        document.getElementById("name_error").style.display = "block";

        errors = 1;
        firstErrorInput = firstErrorInput || document.getElementById("fullname");
    }

    //Checks validation for email using a regular expression
    let regex1 = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    let email = document.getElementById("email").value;

    if(document.getElementById("email").value == ""){
        document.getElementById("email_error").style.display = "block";

        errors = 1;
        firstErrorInput = firstErrorInput || document.getElementById("email");
    }

    if(!regex1.test(email) && document.getElementById("email").value != ""){
		document.getElementById("emailformat_error").style.display = "block";

		errors = 1;
        firstErrorInput = firstErrorInput || document.getElementById("email");
	}

    //Checks validation for phone number using regular expresssion
    let regex2 = new RegExp(/^\d{10}$/);
    let phonenumber = document.getElementById("number").value;

    if(document.getElementById("number").value == ""){
        document.getElementById("number_error").style.display = "block";

        errors = 1;
        firstErrorInput = firstErrorInput || document.getElementById("number");
    }

    if(!regex2.test(phonenumber) && document.getElementById("number").value != ""){
        document.getElementById("numberformat_error").style.display = "block";

        errors = 1;
        firstErrorInput = firstErrorInput || document.getElementById("number");
    }

    //Checks validation for comments area
    if(document.getElementById("comment").value == ""){
        document.getElementById("comment_error").style.display = "block";

        errors = 1;
        firstErrorInput = firstErrorInput || document.getElementById("comment");
    }

    //If form has errors, sets focus on the first input with error
    if(errors == 1){
        firstErrorInput.focus();
        return true;
	}
}

/*
 * Handles the load event of the document.
 */
function load(){
    //Event listeners for form submit and reset
    document.getElementById("ContactForm").addEventListener("submit", validate);
    document.getElementById("ContactForm").addEventListener("reset", resetForm);

    hideErrors();
}

//Document load event listener
document.addEventListener("DOMContentLoaded", load);