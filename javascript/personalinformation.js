const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');


form.addEventListener('click', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(fname, 'First name cannot be blank');
	} else if (fnameValue.length<2) {
        setErrorFor(fname, 'First Name should be at least 2 characters long')
    }
    else {
		setSuccessFor(fname);
	}
	

    if(lnameValue === '') {
		setErrorFor(lname, 'Last name cannot be blank');
	} 
    else if (lnameValue.length<2) {
        setErrorFor(lname, 'Last Name should be at least 2 characters long')
    } else {
		setSuccessFor(lname);
	}
	

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
    //phone validation
    if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Last name cannot be blank');
	} else {
		setSuccessFor(phonenumber);
	}

}

function setErrorFor(input, message) {
	const formInputGroup = input.parentElement;
    const small=formInputGroup.querySelector('small');
	formInputGroup.className = 'form__input-error';
    small.innerText = message;
}

function setSuccessFor(input) {
	const formInputGroup = input.parentElement;
	formInputGroup.className = 'form__input-success';
}
	
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}






