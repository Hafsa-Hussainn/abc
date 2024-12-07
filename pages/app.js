


function signup(){

    var sname = document.getElementById('name').value;
    var email = document.getElementById('sup_email').value;
    var pass = document.getElementById('sup_password').value;
    localStorage.setItem('Name', sname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    location.href = './signin.html'
    // window.location.replace ('./signin.html') 
  }
  
  function signin(){
    var email = document.getElementById('sin_email').value;
    var pass = document.getElementById('sin_password').value;
    if(localStorage.getItem('Email')== email && localStorage.getItem('Password')== pass){
      location.href = './welcome.html'
    }
    else{
      location.href = './signup.html'
    }
  }

//   function signup() {
//     var sname = document.getElementById('name').value;
//     var email = document.getElementById('sup_email').value;
//     var pass = document.getElementById('sup_password').value;
//     localStorage.setItem('Name', sname);
//     localStorage.setItem('Email', email);
//     localStorage.setItem('Password', pass);
//     window.location.replace('./signin.html')
// }

// function signin() {
//     var email = document.getElementById('sin_email').value;
//     var pass = document.getElementById('sin_password').value;
//     if (localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass) {
//         window.location.replace('./welcome.html')
//     } else {
//         alert("Invalid credentials");
//     }
// }