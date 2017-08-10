

// ============================================================================================
function initanyo(){
	var currentYear = new Date().getFullYear();
	document.getElementById("anyo").value = currentYear;
}
document.addEventListener("DOMContentLoaded",initanyo);
// ============================================================================================

// inicializa tooltip de bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
