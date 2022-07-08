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
    
    if  (!event.target.matches('.dropbtnGrand')) {
      var dropdownsGrand = document.getElementById("myDropdownGrand");
        // var i;
        // for (i = 0; i < dropdownsGrand.length; i++) {
        //   var openDropdownGrand = dropdownsGrand[k];
        //   if (openDropdownGrand.classList.contains('show')) {
        //     openDropdownGrand.classList.remove('show');
        //   }
        // }
        if (dropdownsGrand.classList.contains('show')){
          dropdownsGrand.classList.remove('show');
        }
    }
  }
  
function myFunctionGrand() {
    document.getElementById("myDropdownGrand").classList.toggle("show");
  }
  




  function setExperience(id) {
    console.log(id);
    window.localStorage.setItem('experience_level', id);
    let dropBtn = document.getElementById("dropBtn");
    dropBtn.innerText = id;
    dropBtn.style.textTransform = "capitalize"
    
    console.log(window.localStorage.getItem('experience_level'));
  }

  function getGrandmaster(id) {
    console.log(id);
    window.localStorage.setItem('master', id);
    let dropBtn = document.getElementById("dropBtn_grand");
    dropBtn.innerText = id;
    dropBtn.style.textTransform = "capitalize"
    
    console.log(window.localStorage.getItem('master'));
  }

  
  fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
    .then(response=>{
      if (!response.ok){
        throw Error ('Api Is Not Answering')
      } return response.json();
    }).then(data=> {
      
      console.log(data);
      console.log("ეს არის დატას ლოგო")
      console.log(typeof(data));
      console.log("ეს არის typeofდატას ლოგო")
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


      });


      // for (var i = 0; i < Object.keys(kote).length; i++) {
      //   console.log(kote[i]);
      //   let a = '<a id="' + kote[0] + '" onclick="getGrandmaster(this.id)" href="#">'+ '<p>'+ kote[1] + '</p>' + '<img src="https://chess-tournament-api.devtest.ge' + kote[2] + '" alt="">  </a>';
      //   console.log(a);
      //   // document.getElementById("myDropdownGrand").innerText = a;
      //   document.getElementById("myDropdownGrand").innerHTML = a;
   
