const storedName = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");
const nothing = "nothing"

window.addEventListener("scroll" , function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
  
  });


$(document).ready(function(){
    if(storedName != null){
        $("#nav-name").text(storedName);
    }
    if(storedName != null){
        $(".logout").removeClass("hidden");
    }
    if(storedName === "Admin" && storedPassword === "password01"){
        $(".hidden").removeClass("hidden");
    }
   
})

function deleteSelf() {
    console.log("this is worjichsigbvefwqobi")
    $(this).closest('.div').remove();
}

$(".logout").click(function(){
    $("#nav-name").text("Login/Sign Up")
    localStorage.clear();
})

// Function to get values of name and price from food div
$(".food-div").click(function(){
    if(storedName === "Admin" && storedPassword === "password01"){
        return nothing
    }
    else {
        var div = $(this);
        var item = div.children(".item-name").text();
        var price = div.children(".item-price").text();
        console.log(item);
        console.log(price);
        alert("Item has been added to cart")
        moveToCart(item,price)
        updateTotal(price)
    }
})

// Function to add items to cart on click
function moveToCart(item,price) {
     var $div = $("<div>", {"class": "items"});
    var name = $("<p>" + item + "" + "$" + price + "</p>");
    name.addClass("item");
     var cartPrice = $("<p>" + price + "</p>" , {"class": "cart-price"});
     var inp = $("<input>" , {"type": "number" , "class" : "quantity", "min" : "1"})
     $(".cart-items").append($div);
    $(".cart-items").append(name);
     $(".items").append(cartPrice);
     $(".items").append(inp);
}

// Updates total in cart whenever price changes are made
function updateTotal(itemPrice){
    var total = $("#total").val();
    var newTotal = Number(total) + Number(itemPrice);
    console.log(newTotal);
    $("#total").val(Math.round(newTotal * 100) / 100);
    $("#total").text(Math.round(newTotal * 100) / 100);
}

$("div").click(function(){
    $(this).remove(".items");    
    console.log("working");
    $("div").click(function(){
        $(this).remove(".items");
        console.log("notworkkssdsadmasdj");
})
})

$("#sign-btn").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    $("#username").val("");
    $("#password").val("");
    $("#nav-name").text(username);
})

$("#log-btn").click(function(){
    var username = $("#username-log").val();
    var password = $("#password-log").val();
    if (username === "Admin" && password === "password01"){
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        $("#username-log").val("");
        $("#password-log").val("");
        $("#nav-name").text(username);
    }
})
