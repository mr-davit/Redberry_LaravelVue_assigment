const form = document.getElementById('reg_form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');

// console.log(username);

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
 
    const usernameVal  = username.value.trim();
    const emailVal     = email.value.trim();
    const phoneVal     = phone.value.trim(); 
    const dateVal      = date.value.trim();
    let userReg =  /^[a-zA-Z]+$/.test(usernameVal);
    let emailReg= /^[^\s@]+@redberry.ge$/.test(emailVal);
    let phoneReg= /^[0-9]{9}$/.test(phoneVal);
    let dateReg= /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dateVal);
    const errorWindow = document.getElementById('error');
    let called = 1  ;

    //username validation
    if(usernameVal === '') {
		setErrorFor(username, 'Invalid Username' ,'Username cannot be blank');
 
	} else if (userReg == false ){
        setErrorFor(username, 'Invalid Username' ,'Username only can contain string');
    }
    
    else {
		setSuccessFor(username);
	}
    //email validation
    if(emailVal === '') {
		setErrorFor(email, 'Invalid email' ,'email cannot be blank');
	} else if (emailReg == false ){
        setErrorFor(email, 'Invalid email' ,'Please enter valid email address');
    }
    
    else {
		setSuccessFor(email);
	}

    //phone number validation 
    if(phoneVal === '') {
		setErrorFor(phone, 'Invalid phone' ,'Number cannot be blank');
 
	} else if (phoneReg == false ){
        setErrorFor(phone, 'Invalid phone' ,'Please enter valid phone number ');
    }
    
    else {
		setSuccessFor(phone);
	}
//date validation
if(dateVal === '') {
    setErrorFor(date, 'Invalid date' ,'Number cannot be blank');

} else if (dateReg == false ){
    setErrorFor(date, 'Invalid date' ,'Please enter valid date number ');
}

else {
    setSuccessFor(date);
}



    //ser error and succes functions
    function setErrorFor(input, type, solve) {
        const formControl = input.parentElement;
        formControl.className = 'form_control';
        

    
        
        let errorType = document.getElementById('error_exp');
        let errorSolve = document.getElementById('error_solve');
        input.className = 'error';
        errorWindow.className = 'error_window';
  
        errorType.innerText = type;
        errorSolve.innerText = solve;
        
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form_control success';
        input.className = '';
        errorWindow.className = 'none';
        called += 1;
        
    }

    if (called  < 5) {
        errorWindow.className = 'error_window';
    }

    // console.log(called);
}

