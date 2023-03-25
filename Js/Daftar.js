document.getElementById("dfakun").addEventListener("submit", function(event) {
    event.preventDefault(); 
    

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    var users = JSON.parse(localStorage.getItem("users")) || [];
    
   
    var userExists = users.some(function(u) {
      return u.username === username || u.email === email;
    });
    
    if (userExists) {
      alert("Username atau email sudah digunakan");
    } else {
    
      var newUser = {
        username: username,
        email: email,
        password: password
      };
      
      
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      
      alert("Daftar Akun Berhasil,Silahkan Login!");
      document.getElementById("dfakun").reset();
    }
  });
  

