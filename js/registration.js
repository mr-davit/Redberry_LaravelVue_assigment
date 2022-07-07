const form = document.getElementById('reg_form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');

// console.log(username);

form.addEventListener('keyup', e =>
{
    const usernameVal  = username.value.trim();
    const emailVal     = email.value.trim();
    const phoneVal     = phone.value.trim(); 
    const dateVal      = date.value.trim();
    window.localStorage.setItem('username', usernameVal);
    window.localStorage.setItem('email', emailVal);
    window.localStorage.setItem('phone', phoneVal);
    window.localStorage.setItem('date_of_birth', dateVal);
}

)

// window.localStorage.setItem('username', usernameVal);
// window.localStorage.setItem('email', emailVal);
// window.localStorage.setItem('phone', phoneVal);
// window.localStorage.setItem('date_of_birth', dateVal);

const userLocal = window.localStorage.getItem('username');
const emailLocal = window.localStorage.getItem('email');
const phoneLocal = window.localStorage.getItem('phone');
const dateLocal = window.localStorage.getItem('date_of_birth');



window.onload = (event) => {
    username.value = userLocal;
    email.value= emailLocal;
    phone.value=phoneLocal;
    date.value=dateLocal;

};


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
    let dateReg= /^\d{4}-\d{2}-\d{2}$/.test(dateVal);
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
        setErrorFor(date, 'Invalid date' ,'date cannot be blank');

    } else if (dateReg == false ){
        setErrorFor(date, 'Invalid date' ,'Please enter valid date ');
    }

    else {
        setSuccessFor(date);
    }



    //set error and success functions
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


    // error window and navigation style
    if (called  < 5) {
        errorWindow.className = 'error_window';
    } else {
        document.getElementById('personal_anc').innerText = ' ';
        document.getElementById('personal_anc').className = 'nav_anc anc_bg';
    }


}
