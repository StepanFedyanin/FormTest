const form = document.getElementById("form");
form.addEventListener("submit", formSend)
async function formSend(e){
	e.preventDefault();
	let error = formValidate(form);
}


function formValidate(form){
	let error = 0;
	let NameForm = document.getElementById("formName");

	let PhoneForm = document.getElementById("formPhone").value;
	let PhoneReady = document.getElementById("formPhone");
	let checkedPhone =  /^\d[\d\(\)\ -]{4,14}\d$/;

	let passwordForm=document.getElementById("formPassword").value;
	let passwordError=document.getElementById("formPassword");


	let inputLike = document.getElementById("optionsLike");
	let inputVeryLike = document.getElementById("optionsVeryLike");

	if(NameForm.value==""){
		NameForm.classList.add("Error")
	}else{NameForm.classList.remove("Error")
}
    var validPhone = checkedPhone.test(PhoneForm);
    if (validPhone) {
		PhoneReady.classList.remove("Error");
		}else{
			PhoneReady.classList.add("Error");
		}
	 if(passwordForm===""){
		 passwordError.classList.add("Error");
		}else{
			passwordError.classList.remove("Error");

		}	

	if(inputVeryLike.type=="radio"&&inputVeryLike.checked||inputLike.type=="radio"&&inputLike.checked){
		inputVeryLike.classList.remove("Error");
		inputLike.classList.remove("Error")
	}
	else{
		inputVeryLike.classList.add("Error");
		inputLike.classList.add("Error")
	}
	 

}

