$(document).ready(function(){
    username = localStorage.getItem(username);
    $("nav-name").text(username);
})

$("#sign-btn").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    $("#username").val("");
    $("#password").val("");
    console.log(username);
    console.log(password);
    $("#nav-name").text(username)
    localStorage.setItem(username)
})

$("#log-btn").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    $("#username").val("");
    $("#password").val("");
    console.log(username);
    console.log(password);
    $("#nav-name").text(username)
    localStorage.setItem(username)
})