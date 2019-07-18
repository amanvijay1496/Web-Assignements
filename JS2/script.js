function validateName() {
    var name = document.validationForm.fName.value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (!regex.test(name)) {
        document.getElementById("fname").style.display = "inline";
    } else {
        document.getElementById("fname").style.display = "none";
    }
}


function validateDob() {
    var name = document.validationForm.dob.value;
}

function validatePhone() {
    var name = document.validationForm.mob.value;
    var regex = /^[0]?[789]\d{9}$/;
    if (!regex.test(name)) {
        document.getElementById("mob").style.display = "inline";
    } else {
        document.getElementById("mob").style.display = "none";
    }
}

function validateEmail() {
    alert("aman");
    var name = document.validationForm.email.value;
    alert(name);
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(name)) {
        document.getElementById("emailId").style.display = "inline";
    } else {
        document.getElementById("emailId").style.display = "none";
    }
}

function validateForm(form) {
    console.log(form);
    console.log("hello");
}
