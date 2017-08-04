document.addEventListener("DOMContentLoaded",listenerButton);


function listenerButton(){
	var btnOpenRegister = document.getElementById("btn-open-register");
	btnOpenRegister.addEventListener('click',prepareRegister);
}

function prepareRegister(){
	var formRegister = document.getElementById("formRegister");
	var formEmail = document.getElementById("formEmail");
	var inputEmail = document.getElementById("email");
	var msgErrorEmail = document.getElementById('helpBlockEmail');
	var email = null;
	var formConfirmPass = document.getElementById("formConfirmPass");
	var inputConfirmPass = document.getElementById("confirmPass");
	var msgErrorConfirmPass = document.getElementById('helpBlockConfirmPass');
	var confirmPass = null;
	var inputPassword = document.getElementById("password");
	var password = null;
	var fallaEmail = false;
	var fallaPassword = false;
	var modalId = "modal-register";
	var elementIdFocus = "email";
	var formIdRegister = "formRegister";
	var btnCancelar = document.getElementById("btnCancelar");

	showDialog(modalId, elementIdFocus, formIdRegister);
	btnCancelar.addEventListener("click", closeModal);
	formRegister.addEventListener("submit", validarRegister);
	
	function closeModal(){
		closeModalId(modalId);
	}
	
	function validarRegister(evento){
		evento.preventDefault();

		email = inputEmail.value;
		password = inputPassword.value;
		confirmPass = inputConfirmPass.value;

		if (!isEmailValid(email)) {
			emailError();
			activaListenerError();
		}
		if (password !== confirmPass){
			passError();
			activaListenerError();
		}
		if (isEmailValid(email) & password === confirmPass) {
			var pass = email + password + confirmPass;
			var hash = CryptoJS.SHA512(pass);
			var path = "/register";
			var params = {
				email: email,
				password: hash.toString(),
				confirmPass: hash.toString()
				};
			var method = "post";

			post(path, params, method);
		}
	}
	
	function onChange(){
		email = inputEmail.value;
		password = inputPassword.value;
		confirmPass = inputConfirmPass.value;

		if (isEmailValid(email)){
			emailOk();
		}else{
			emailError();
		}
		if (password == confirmPass){
			passOk();
		}else{
			passError();
		}

		if (fallaEmail | fallaPassword) {
			document.getElementById('btnRegister').disabled= true;

		}else{
			document.getElementById('btnRegister').disabled= false;
		}
	}
	function activaListenerError(){
		document.getElementById('btnRegister').disabled= true;
		inputEmail.addEventListener("input", onChange);
		inputConfirmPass.addEventListener("input", onChange);
		inputPassword.addEventListener("input", onChange);
	}

	function emailError(){
		formEmail.className += " " + "has-error";
		msgErrorEmail.style.display ="block";
		fallaEmail = true;
	}
	function passError(){
		formConfirmPass.className += " " + "has-error";
		msgErrorConfirmPass.style.display ="block";
		fallaPassword = true;
	}
	function emailOk(){
		formEmail.classList.remove("has-error");
		msgErrorEmail.style.display ="none";
		fallaEmail = false;
	}
	function passOk(){
		formConfirmPass.classList.remove("has-error");
		msgErrorConfirmPass.style.display = "none";
		fallaPassword = false;
	}
}