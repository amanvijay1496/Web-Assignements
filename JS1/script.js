function calc(operation) {
    var num1 = document.calculator.fNo.value;
    var num2 = document.forms[0][1].value;
    switch (operation) {
        case "add":
            var result = add(num1, num2);
            break;
        case "sub":
            var result = sub(num1, num2);
            break;
        case "mul":
            var result = mul(num1, num2);
            break;
        case "div":
            var result = div(num1, num2);
            break;

    }

    document.calculator.txtresult.value = result;
}

function add(num1, num2) {
    var result = parseInt(num1) + parseInt(num2);
    return result;
}

function sub(num1, num2) {
    var result = parseInt(num1) - parseInt(num2);
    return result;
}

function mul(num1, num2) {
    var result = parseInt(num1) * parseInt(num2);
    return result;
}

function div(num1, num2) {
    var result = parseInt(num1) / parseInt(num2);
    return result;
}

function falDisable() {
    document.getElementById("addButton").disabled = false;
    document.getElementById("subButton").disabled = false;
    document.getElementById("mulButton").disabled = false;
    document.getElementById("divButton").disabled = false;
}
