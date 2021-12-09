const storedName = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");
var storedMenu = localStorage.getItem("menu");
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
    if(storedName != "Admin" && storedPassword != "password01"){
        buttonDelete = $(".btn-delete");
        buttonEdit = $(".btn-edit");
        buttonDelete.addClass("hidden");
        buttonEdit.addClass("hidden");
    }
    if(storedName === "Admin" && storedPassword === "password01"){
        $(".hidden").removeClass("hidden");
    }
})

$(document).ready(function(){
    if(storedMenu != null){
        console.log("This should be working");
        var update = $("#menu");
        update.html(storedMenu);
    }
})

// Saves menu page to local storage
$(window).on("unload", function(){
    if(storedName === "Admin" && storedPassword === "password01"){
        var menu = $("#menu")[0].outerHTML;
        localStorage.setItem("menu" , menu);
    }
    else {
        return nothing
    }
})

// Function that deletes parent div on click of delete button
$(".btn-delete").click(function(){
    $(this).parent().remove();
})

// Allows admin to edit menu options
$(".btn-edit").click(function(){
    console.log("edit");
    var name = prompt("Item Name", "Name");
    var price = prompt("Item Price", "Price");
    var img = prompt("Picture URL", "Img URL");
    var parent = $(this).parent();
    parent.children(".item-name").text(name);
    parent.children(".item-price").text(price);
    parent.children("img").attr("src", img);
})

// Button to log out and clear local storage
$(".logout").click(function(){
    $("#nav-name").text("Login/Sign Up")
    delete localStorage.username
    delete localStorage.password
})

// Function to get values of name and price from food div
$(document).ready(function(){
    $(document).on("click",".food-div", function(){
        if(storedName === "Admin" && storedPassword === "password01"){
            console.log("returning nothing");
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
})

// Function to add items to cart on click
function moveToCart(item,price) {
    var name = $("<p>" + item + "" + "$" + price + "</p>");
    name.addClass("item");
    $(".cart-items").append(name);
}

// Updates total in cart whenever price changes are made
function updateTotal(itemPrice){
    var total = $("#total").val();
    var newTotal = Number(total) + Number(itemPrice);
    console.log(newTotal);
    $("#total").val(Math.round(newTotal * 100) / 100);
    $("#total").text(Math.round(newTotal * 100) / 100);
}

// Delete from cart function
$(document).ready(function(){
    $(document).on("click",".item", function(){
        $(this).remove();
        console.log(this)
        console.log("new test");
        var num = $(this).text().replace(/[^0-9]/gi, '');
        console.log(parseInt(num, 10));
        updateTotal(-num);
    });
});

// Sign in button adds name and password to local storage and name to nav bar
$("#sign-btn").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    $("#username").val("");
    $("#password").val("");
    $("#nav-name").text(username);
})

// Admin login
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

// slick function for homepage
$(document).ready(function(){
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('#next'),
        prevArrow: $('#previous'),
    });
});