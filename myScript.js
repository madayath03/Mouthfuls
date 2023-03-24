
emailval = false
mobileval = false
nameval = false
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Get the email input element from the DOM
const emailInput = document.getElementById('email');

// Get the error message element from the DOM
const errorMessage = document.getElementById('error-message');
// Add an event listener to the email input element to validate the email
emailInput.addEventListener('blur', function () {
    // Get the value of the email input
    const email = emailInput.value.trim();

    // Define a regular expression to check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email matches the regular expression
    if (!emailRegex.test(email)) {
        // Display an error message if the email is not valid
        errorMessage.textContent = 'Invalid Email';
        emailval = false
    } else {
        // Clear the error message if the email is valid
        errorMessage.textContent = '';
        emailval = true
    }
});

// Get the mobile number input element from the DOM
const mobileInput = document.getElementById('mobile-input');

// Get the error message element from the DOM
const mobileerrorMessage = document.getElementById('mobileerror-message');
// Add an event listener to the mobile number input element to validate the number
mobileInput.addEventListener('blur', function mobile() {
    // Get the value of the mobile number input
    const mobileNumber = mobileInput.value.trim();

    // Define a regular expression to check if the mobile number is valid
    const mobileRegex = /^\d{10}$/;

    // Check if the mobile number matches the regular expression
    if (!mobileRegex.test(mobileNumber)) {
        // Display an error message if the mobile is not valid
        mobileerrorMessage.textContent = 'Invalid Mobile';
        mobileval = false
    } else {
        // Clear the error message if the mobile is valid
        mobileerrorMessage.textContent = '';
        mobileval = true
    }
});

// Get the name input element from the DOM
const nameInput = document.getElementById('name-input');

// Get the error message element from the DOM
const nameerrorMessage = document.getElementById('nameerror-message');


// Add an event listener to the name input element to validate the name
nameInput.addEventListener('blur', function name() {
    // Get the value of the name input
    const name = nameInput.value.trim();

    // Define a regular expression to check if the name is valid
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    // Check if the name matches the regular expression
    if (!nameRegex.test(name)) {
        // Display an error message if the name is not valid
        nameerrorMessage.textContent = 'Invalid Name';
        nameval = false
    } else {
        // Clear the error message if the name is valid
        nameerrorMessage.textContent = '';
        nameval = true
    }
});


function togglemenu() {
    const menutoggle = document.querySelector(".menutoggle");
    const navigation = document.querySelector(".navigation");
    menutoggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

function view() {
    const viewAllButton = document.querySelector("#view-all-btn");
    const hiddenItems = document.querySelectorAll("#hidden");

    viewAllButton.addEventListener("click", function () {
        // loop through the hidden items and display them
        hiddenItems.forEach(function (item) {
            item.style.display = "block";
        });

        // hide the view all button
        viewAllButton.style.display = "none";
    });
}

// alert("Thanks for contacting Us")
// redirect to 0,0 location

// Redirect to the top of the page
// window.location.href = '#banner';


function send1() {
    const senderrorMessage = document.getElementById('senderror-message');
    if (emailval == true && mobileval == true && nameval == true) {
        alert("Thanks for contacting Us")
        window.location.reload();

    }
    else {
        senderrorMessage.textContent = 'Please check your input';
    }
}



