 $("#sign-btn").click(function(){
     var username = $("#username").val();
     var password = $("#password").val();
     $("#username").val("");
     $("#password").val("");
     console.log(username);
     console.log(password);
     $("#nav-name").text(username)
 })

 $("#log-btn").click(function(){
     var username = $("#username").val();
     var password = $("#password").val();
     $("#username").val("");
     $("#password").val("");
     console.log(username);
     console.log(password);
     $("#nav-name").text(username)
 })

window.addEventListener("scroll" , function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
  
  });

// $("#nav-name").text(username)