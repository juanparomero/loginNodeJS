function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// ============================================================================================
function post(path, params, method) {
	console.log("post!!!!!");
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    console.log(path);
    console.log(params);
    console.log(method);
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
            console.log(key);
            console.log(params[key]);
         }
    }
    
    document.body.appendChild(form);
    form.submit();
}
// ============================================================================================
function showDialog(ModalId, elementFocus, formId){

	// Get the modal
	var modal = document.getElementById(ModalId);

	// When the user clicks on the button, open the modal 
	modal.style.display = "block";

	if (formId != undefined) {
		var inputs = document.forms[formId].getElementsByClassName("cleanme");
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value="";
		}
	}

	var element = document.getElementById(elementFocus);
	element.focus();
	
}
// ============================================================================================
function closeModalId(elementId){
	var myElement = document.getElementById(elementId);
	myElement.style.display = "none";
}