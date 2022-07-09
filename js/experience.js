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
  function setExperience(id) {
    console.log(id);
    window.localStorage.setItem('experience_level', id);
    let dropBtn = document.getElementById("dropBtn");
    dropBtn.innerText = id;
    dropBtn.style.textTransform = "capitalize"
    
    console.log(window.localStorage.getItem('experience_level'));
    document.getElementById('experience_anc').style.backgroundColor = '#E9FAF1';

  }

//save user select for Grandmaster in local storage
  function getGrandmaster(id,master) {
    console.log(id);
    window.localStorage.setItem('master', master);
    let dropBtn = document.getElementById("dropBtn_grand");
    dropBtn.innerText = id;
    dropBtn.style.textTransform = "capitalize"
    
    console.log(window.localStorage.getItem('master'));
  }

  
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
     
     console.log(a);
  });
    //   for (var i = 0; i < Object.keys(data).length; i++) {
    //     let kote = (Object.values(data[i]));
    //     console.log(data+"ეს არის დატას ლოგი");
    //     for (var i = 0; i < Object.keys(kote).length; i++) {
    //       console.log(kote+"ეს არის კოტეს ლოგო");
    //       let a = '<a id="' + kote[0] + '" onclick="getGrandmaster(this.id)" href="#">'+ '<p>'+ kote[1] + '</p>' + '<img src="https://chess-tournament-api.devtest.ge' + kote[2] + '" alt="">  </a>';
    //       console.log(a);
    //       // document.getElementById("myDropdownGrand").innerText = a;
    //       document.getElementById("myDropdownGrand").innerHTML = a;
    //  }
    //   }


  


      // for (var i = 0; i < Object.keys(kote).length; i++) {
      //   console.log(kote[i]);
      //   let a = '<a id="' + kote[0] + '" onclick="getGrandmaster(this.id)" href="#">'+ '<p>'+ kote[1] + '</p>' + '<img src="https://chess-tournament-api.devtest.ge' + kote[2] + '" alt="">  </a>';
      //   console.log(a);
      //   // document.getElementById("myDropdownGrand").innerText = a;
      //   document.getElementById("myDropdownGrand").innerHTML = a;
   
