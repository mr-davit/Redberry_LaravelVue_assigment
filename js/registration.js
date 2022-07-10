const form = document.getElementById('reg_form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const errorWindow = document.getElementById('error');
const input = document.querySelectorAll('input');

let userLocal = '';
let emailLocal = '';
let phoneLocal = '';
let dateLocal = '';

let usernameVal  = "";
let emailVal     = "";
let phoneVal     = ""; 
let dateVal      = "";


let setinputname = "";
let setinputemail = "";
let setinputphone = "";
let setinputdate = "";


let submited = "";

let checkClose = '';

// form.addEventListener('keypress',  e =>

// {
    
//     checkInputsOnChange();
// }

// )

form.addEventListener('input',  e =>{
    setLocal();
    checkInputsOnChange();
    window.sessionStorage.setItem('wasPassed','false');
}

)

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

    userLocal  = window.localStorage.getItem('username');
    emailLocal = window.localStorage.getItem('email');
    phoneLocal  = window.localStorage.getItem('phone');
    dateLocal  = window.localStorage.getItem('date_of_birth');

}


//load content from local storage when reloading page
window.onload = (event) => {
    checkClose = window.sessionStorage.getItem('reg_reload');
    console.log(checkClose);
    if (checkClose == 1 ) {
    document.getElementById('personal_anc').style.backgroundColor = '#E9FAF1';
    username.value = window.localStorage.getItem('username');
    email.value = window.localStorage.getItem('email');
    phone.value = window.localStorage.getItem('phone');
    date.value = window.localStorage.getItem('date_of_birth');

    } else {
        window.localStorage.clear();
    }
};


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputsOnSubmit();
    checkInputsOnChange('username');
    checkInputsOnChange('email');
    checkInputsOnChange('phone');
    checkInputsOnChange('date');

 
  
 
// if (window.getElementById('error').className == "error_window"  ) {
//     errorWindow.className = "error_window";
// }
//  else 


 if ( ( setinputname == true && setinputemail == true && setinputphone == true && setinputdate == true 

  &&  errorWindow.className == "none" && setSucessname == true && setSucessemail == true && setSucessphone == true && setSucessdate == true) 
  || window.sessionStorage.getItem('wasPassed') == 'true') 

  {
        document.getElementById('personal_anc').innerText = ' ';
        document.getElementById('personal_anc').className = 'nav_anc anc_bg';
        window.sessionStorage.setItem('wasPassed','true');
        window.location.replace("/experience.html");

        console.log("mushaobs")
    }

});




// let userReg =  /^[a-zA-Z]{3,}$/.test(userLocal);
// let emailReg= /^[^\s@]+@redberry.ge$/.test(emailLocal);
// let phoneReg= /^[0-9]{9}$/.test(phoneLocal);
// let dateReg= /^\d{4}-\d{2}-\d{2}$/.test(dateLocal);


function checkInputsOnChange(id){ 

    let userReg =  /^[a-zA-Z]+$/.test(userLocal);
    let emailReg= /^[^\s@]+@redberry.ge$/.test(emailLocal);
    let phoneReg= /^[0-9]{9}$/.test(phoneLocal);
    let dateReg= /^\d{4}-\d{2}-\d{2}$/.test(dateLocal);



    if (id == 'username') {
    //username validation

        if (userReg == false ){
            setErrorFor(username, 'Invalid Username' ,'Username only can contain string');
            setinputname = false;
        }

        else {
            setSuccessFor(username);
        
            setinputname = true;
            console.log(setinputname);
        }
    }

    if (id == 'email') {
    //email validation
        if (emailReg == false ){
            setErrorFor(email, 'Invalid email' ,'Please enter valid email address');
            setinputemail = false;
            console.log(setinputemail);
        }

        else {
            setSuccessFor(email);

            setinputemail = true;
            console.log(setinputemail);
        }
    }


    //phone number validation 
    if (id == 'phone'){

        if (phoneReg == false ){
            setErrorFor(phone, 'Invalid phone' ,'Please enter valid phone number ');
            setinputphone = false;
        }

        else {
            setSuccessFor(phone);

            setinputphone =true;
            console.log(setinputphone);
        }
    }

    if (id == 'date'){
    //date validation
     if (dateReg == false ){
        setErrorFor(date, 'Invalid date' ,'Please enter valid date ');
        setinputdate = false;
    }

    else {
        setSuccessFor(date);
        setinputdate = true;
        console.log(setinputdate);
    }
    }
}


function checkInputsOnSubmit(){

    if( usernameVal.length < 2 && userLocal == null ) {
		setErrorFor(username,   'Invalid Username' ,'Username cannot contain less then 2 simbols');
        console.log("carielia")
        setSucessname = false;
	}     


    else {
        console.log("araa carieli")
 
		setSucessname = true;
	}


    //email validation
    if(emailVal == '' && emailLocal == null) {
		setErrorFor(email,'Invalid email' ,'email cannot be blank');
        setSucessemail = false;
	}     
    else {

        setSucessemail = true;
	}



    //phone number validation 
    if(phoneVal == '' && phoneLocal == null) {
		setErrorFor(phone, 'Invalid phone' ,'Number cannot be blank');
        setSucessphone = false;
	}
    else {

        setSucessphone = true;
	}


    //date validation
    if(dateVal == '' && dateLocal == null) {
        setErrorFor(date, ' Invalid date\r\n' ,'date cannot be blank');
        setSucessdate = false;
    }

    else {

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

  