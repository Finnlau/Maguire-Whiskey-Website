
//Nav Bar Section Starts
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
//Nav Bar Section Ends


//Newsletter Popup & Email Validator Start
function popupToggle(){
    const Popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

function emailValidator(){
	var userEmail = document.getElementById('email').value;
	var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/; 
	var emailPopupMessage = document.getElementById("emailPopupMessageTag");
	if(userEmail !== "" && emailRegex.test(userEmail)){ 
            emailPopupMessage.innerHTML = "Thank for Subscribing";
            //window.location.href = "www.com";
            // above is for redirect page
	} 
	else if(userEmail ===""){ 
            emailPopupMessage.innerHTML = "Please Enter an Email Adsress";  
	}
	else{ 
            emailPopupMessage.innerHTML = "Email is not valid";   
	}
}
//Newsletter Popup & Email Validator End


// Contact Us Section Start//
function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length <10){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email Address";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 50){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Submitted Sucessful!")
    return true;
}
//Contact Us Section End


// Scroll To Top Start
const scrollBtn = document.querySelector(".scroll-to-top");
const refreshButtonVisibility = () => {
    if(document.documentElement.scrollTop <= 50) {
    scrollBtn.style.display = "none";
    }
    else
    {
    scrollBtn.style.display = "block";
    }
};
refreshButtonVisibility();
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
document.addEventListener('scroll', (e) => {
    refreshButtonVisibility();
});
//Scroll To Top End


//Comming Soon Section Start
var valueList = document.getElementById('valueList');
var text = '<span> We Will Notify You: </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArray.push(this.value);
            valueList.innerHTML = text + listArray.join('  &  ');
        }
        else
        {
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = text + listArray.join('  &  ');
        }
    })
}
//Comming Soon Section Start
