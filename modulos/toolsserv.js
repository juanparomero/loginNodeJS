//funciones necesarias para el servidor
function tools(){
	return {
		dataUserToRegister: function(body){
			var data = {};
			var salCSPRNG = CSPRNG(256,36);
			var passSHA = SHA256(body.password + salCSPRNG).toString();

			data = {
				name: body.name == undefined ? '' : body.name,
				surname: body.name == undefined ? '' : body.surname,
				mobile: body.mobile == undefined ? '' : body.mobile,
				email : body.email,
				sal : salCSPRNG,
				password : passSHA
			};
			console.log("INFO-dataUserToRegister",data);
			return data;
		}
	}
}

var tools = tools();