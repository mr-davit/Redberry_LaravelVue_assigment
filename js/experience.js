const nextBtn = document.getElementById('next');
const dropBtn = document.getElementById('dropBtn')
const dropBtnGrand = document.getElementById('dropBtn_grand')

//check if window is reloaded or closed, if reloaded keep values, if closed reset localstorage
window.onload = (event) => {
  if (window.sessionStorage.getItem('experience') == 1 && window.sessionStorage.getItem('grandmaster') == 1 ){
    nextBtn.innerHTML = "Done";
    document.getElementById('experience_anc').innerText = ' ';
    document.getElementById('experience_anc').className = 'nav_anc anc_bg';
    dropBtn.innerText = window.localStorage.getItem('experience_name');
    dropBtnGrand.innerText = window.localStorage.getItem('master');
  } 
  // else {
  //   window.localStorage.clear();
  // }

}


// open the dropdown menu when user clicks on button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var k;
      for (k = 0; k < dropdowns.length; k++) {
        var openDropdown = dropdowns[k];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } 
      // Close the dropdownGrand menu if the user clicks outside of it

    if  (!event.target.matches('.dropbtnGrand')) {
      var dropdownsGrand = document.getElementById("myDropdownGrand");
        if (dropdownsGrand.classList.contains('show')){
          dropdownsGrand.classList.remove('show');
        }
    }
  }

  // open the dropdownGrand menu when user clicks on button
function myFunctionGrand() {
    document.getElementById("myDropdownGrand").classList.toggle("show");
  }
  



//save user select for experience in local storage
  function setExperience(id,name) {
    window.localStorage.setItem('experience_level', id);
    window.localStorage.setItem('experience_name', name);
    let dropBtn = document.getElementById("dropBtn");
    dropBtn.innerText = id;
    dropBtn.style.textTransform = "capitalize"
   
    document.getElementById('experience_anc').style.backgroundColor = '#E9FAF1';
    
    window.sessionStorage.setItem('experience' , '1');

    checkComplete();
  }

//save user select for Grandmaster in local storage
  function getGrandmaster(master,id) {
    console.log(id);
    window.localStorage.setItem('master_id', id);
    window.localStorage.setItem('master', master);
    dropBtnGrand.innerText = window.localStorage.getItem('master');
    dropBtnGrand.style.textTransform = "capitalize"
    document.getElementById('experience_anc').style.backgroundColor = '#E9FAF1';


    window.sessionStorage.setItem('grandmaster' , '1');
    checkComplete();

  }

  // fetch GET data from API GRANDMASTER and Translate to html
  let array = [];  
  let a = [];
  fetch("https://chess-tournament-api.devtest.ge/api/grandmasters", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }) 
      .then(response=>{
        if (!response.ok){
          throw Error ('Api Is Not Answering')
        } return response.json();
      }).then(data=> {
        array = data.map(obj => {
          return obj
         })
     
      a = array.forEach(element => {
        document.getElementById("myDropdownGrand").innerHTML += '<a id="' + element.id + '" class="GrandmasterA" onclick="getGrandmaster(this.innerText,this.id)" href="#">'+ element.name + '<img src="https://chess-tournament-api.devtest.ge' + element.image + '" alt="">'   +  '</a>';
      });
     
  });
   


// check if all required data is endered and change button text from next to done 
function checkComplete(){
  if (window.sessionStorage.getItem('experience') == 1 && window.sessionStorage.getItem('grandmaster') == 1 ) {
    nextBtn.innerHTML = "Done";
    document.getElementById('experience_anc').innerText = ' ';
    document.getElementById('experience_anc').className = 'nav_anc anc_bg';

  }
}

//check if registration is complited, send data and redirect to congratulations page
let participated = window.localStorage.getItem('participated');

if (participated == 'true'){
  participated = true;
} else { participated = false;

};


function checkRegistration(){

  if ( nextBtn.innerText == "Done"){
    
    fetch("https://chess-tournament-api.devtest.ge/api/register", {
      method: 'POST',
      body: JSON.stringify({
        "name": window.localStorage.getItem('username') ,
        "email": window.localStorage.getItem('email'),
        "phone": window.localStorage.getItem('phone'),
        "date_of_birth": window.localStorage.getItem('date_of_birth'),
        "experience_level": window.localStorage.getItem('experience_level'),
        "already_participated": participated,
        "character_id": window.localStorage.getItem('master_id')
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response=>{
      return response
    }).then(data=>{
      if (data.status = 201){
        window.location.replace("/done.html");
        window.localStorage.clear();
        window.sessionStorage.clear();
      } else {
        alert('something went wrong')
      }
    })
  }

};