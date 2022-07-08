function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
// function myFunctionGrand() {
//     document.getElementById("myDropdownGrand").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtnGrand')) {
//       var dropdownsGrand = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdownsGrand.length; i++) {
//         var openDropdownGrand = dropdownsGrand[i];
//         if (openDropdownGrand.classList.contains('show')) {
//           openDropdownGrand.classList.remove('show');
//         }
//       }
//     }
//   }

  function setExperience(id) {
    console.log(id);
    window.localStorage.setItem('experience_level', id);
    let dropBtn = document.getElementById("dropBtn");
    dropBtn.innerText = id;
    dropBtn.style.textTransform = "capitalize"
    
    console.log(window.localStorage.getItem('experience_level'));
  }