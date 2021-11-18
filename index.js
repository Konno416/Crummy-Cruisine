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

// $("#nav-name").text(username)