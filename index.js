const storedName = localStorage.getItem("username");

window.addEventListener("scroll" , function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
  
  });


$(document).ready(function(){
    $("#nav-name").text(storedName)
})

$("#sign-btn").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    $("#username").val("");
    $("#password").val("");
    console.log(username);
    console.log(password);
    $("#nav-name").text(username);
})

$("#log-btn").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    $("#username").val("");
    $("#password").val("");
    console.log(username);
    console.log(password);
    $("#nav-name").text(username);
    localStorage.setItem(username);
})
