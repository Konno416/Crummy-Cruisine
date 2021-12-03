const storedName = localStorage.getItem("username");

window.addEventListener("scroll" , function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
  
  });


$(document).ready(function(){
    if(storedName != null){
        $("#nav-name").text(storedName)
    }
   
})

$(".food-div").click(function(){
    var div = $(this);
    var item = div.children(".item-name").text();
    var price = div.children(".item-price").text();
    console.log(item);
    console.log(price);
    alert("Item has been added to cart")
    moveToCart(item,price)
    updateTotal(price)
})

function moveToCart(item,price) {
    var $div = $("<div>", {"class": "items"});
    var name = "<p>";
    name += item;
    name += "</p>";
    var cartPrice = "<p>";
    cartPrice += price;
    cartPrice += "</p>"
    $(".cart-items").append($div);
    $(".items").append(name);
    $(".items").append(cartPrice);
}

function updateTotal(itemPrice){
    var total = $("#total").val();
    var newTotal = Number(total) + Number(itemPrice);
    console.log(newTotal);
    $("#total").val(newTotal);
    $("#total").text(newTotal);
}

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
