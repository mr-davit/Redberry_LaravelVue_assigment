const form = document.getElementById('reg_form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const errorWindow = document.getElementById('error');
const input = document.querySelectorAll('input');

let userLocal = '1';
let emailLocal = '1';
let phoneLocal = '1';
let dateLocal = '1';

let usernameVal  = "";
let emailVal     = "";
let phoneVal     = ""; 
let dateVal      = "";

let userOnInput = '';
let emailOnInput = '';
let phoneOnInput = '';
let dateOnInput = '';
let setSucess = '';

let submited = "";

// form.addEventListener('keypress',  e =>

// {
    
//     checkInputsOnChange();
// }

// )

form.addEventListener('input',  e =>
{

    setLocal();
    
    checkInputsOnChange();
    window.sessionStorage.setItem('wasPassed','false');

}

)





//regex


let called = 0;
let notEmpty = 0;




function setLocal (){
    usernameVal  = username.value.trim();
    emailVal     = email.value.trim();
    phoneVal     = phone.value.trim(); 
    dateVal      = date.value.trim();
  
    window.localStorage.setItem('username', usernameVal);
    window.localStorage.setItem('email', emailVal);
    window.localStorage.setItem('phone', phoneVal);
    window.localStorage.setItem('date_of_birth', dateVal);
    window.sessionStorage.setItem('reg_reload','1');
    document.getElementById('personal_anc').style.backgroundColor = '#E9FAF1';

}


userLocal  = window.localStorage.getItem('username');
emailLocal = window.localStorage.getItem('email');
phoneLocal  = window.localStorage.getItem('phone');
dateLocal  = window.localStorage.getItem('date_of_birth');



//load content from local storage when reloading page
window.onload = (event) => {
    let checkClose = window.sessionStorage.getItem('reg_reload');
    console.log(checkClose);
    if (checkClose == 1 ) {
    document.getElementById('personal_anc').style.backgroundColor = '#E9FAF1';
    username.value = userLocal;
    email.value= emailLocal;
    phone.value=phoneLocal;
    date.value=dateLocal;
    // document.getElementById('date_label').innerText=dateLocal;
    
    } else {
        window.localStorage.clear();
        checkInputsOnChange();
    }
};


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputsOnSubmit();
    checkInputsOnChange();

    // window.localStorage.setItem('username', usernameVal);
    // window.localStorage.setItem('email', emailVal);
    // window.localStorage.setItem('phone', phoneVal);
    // window.localStorage.setItem('date_of_birth', dateVal);
    // window.sessionStorage.setItem('reg_reload','1');
    
    // check if everything is correct, if yes change error window and navigation style & redirect to experience page
    console.log(errorWindow.className == "none")
 
// if (window.getElementById('error').className == "error_window"  ) {
//     errorWindow.className = "error_window";
// }
//  else 
//  if ( ( setinputname == true && setinputemail == true && setinputphone == true && setinputdate == true 

 if ( (errorWindow.className == "none" && setSucessname == true && setSucessemail == true && setSucessphone == true && setSucessdate == true) || window.sessionStorage.getItem('wasPassed') == 'true') {
        document.getElementById('personal_anc').innerText = ' ';
        document.getElementById('personal_anc').className = 'nav_anc anc_bg';
        window.sessionStorage.setItem('wasPassed','true');
        window.location.replace("/experience.html");

        console.log("mushaobs")
    }

});




let setinputname = "";
let setinputemail = "";
let setinputphone = "";
let setinputdate = "";



function checkInputsOnChange(id){ 

let userReg =  /^[a-zA-Z]+$/.test(usernameVal);
let emailReg= /^[^\s@]+@redberry.ge$/.test(emailVal);
let phoneReg= /^[0-9]{9}$/.test(phoneVal);
let dateReg= /^\d{4}-\d{2}-\d{2}$/.test(dateVal);


    if (id == 'username') {
    //username validation
    console.log(userReg);
     if (userReg == false ){
        setErrorFor(username, 'Invalid Username' ,'Username only can contain string');
        setinputname = false;
    }

    else {
		setSuccessFor(username);
        called += 1;
        setinputname = true;
	}
}

    if (id == 'email')
    //email validation
     if (emailReg == false ){
        setErrorFor(email, 'Invalid email' ,'Please enter valid email address');
        setinputemail = false;
    }
        else if (email == ""){
        
    }
    else {
		setSuccessFor(email);
        called += 1;
        setinputemail = true;
	}



    //phone number validation 
    if (id == 'phone')
     if (phoneReg == false ){
        setErrorFor(phone, 'Invalid phone' ,'Please enter valid phone number ');
        setinputphone = false;
    }

    else {
		setSuccessFor(phone);
        called += 1;
        setinputphone =true;
	}

    if (id == 'date'){
    //date validation
     if (dateReg == false ){
        setErrorFor(date, 'Invalid date' ,'Please enter valid date ');
        setinputdate = false;
    }
    else if (dateVal == ""){
        
    }
    else {
        setSuccessFor(date);
        called += 1;
        setinputdate = true;
    }
    }
}

function checkInputsOnSubmit(){

    if( usernameVal.length < 2  ) {
		setErrorFor(username,   'Invalid Username' ,'Username cannot contain less then 2 simbols');
        console.log("carielia")
        setSucessname = false;
	}     


    else {
        console.log("araa carieli")
        setSuccessFor(username);
		setSucessname = true;
	}


    //email validation
    if(emailVal === '') {
		setErrorFor(email,'Invalid email' ,'email cannot be blank');
        setSucessemail = false;
	}     
    else {
        setSuccessFor(email);
        setSucessemail = true;
	}



    //phone number validation 
    if(phoneVal === '') {
		setErrorFor(phone, 'Invalid phone' ,'Number cannot be blank');
        setSucessphone = false;
	}
    else {
        setSuccessFor(phone);
        setSucessphone = true;
	}


    //date validation
    if(dateVal === '') {
        setErrorFor(date, ' Invalid date\r\n' ,'date cannot be blank');
        setSucessdate = false;
    }

    else {
        setSuccessFor(date);
        setSucessdate = true;
    }
    console.log("checked on submit");
}



    //set error and success functions
    function setErrorFor(input, type, solve) {
        const formControl = input.parentElement;
        formControl.className = 'form_control';

        const errorType = document.getElementById('error_exp');
        const errorSolve = document.getElementById('error_solve');
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
        setSucess = input;
        
    }

  