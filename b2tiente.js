function ChangeMoney() {
    let amount = document.getElementById("Amount").value;
    let fromC = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let result ;


    if (fromC === "USD" && to === "VND") {
        result = "Result: " + (amount * 23000) + " Đ";
    } else if (fromC === "VND" && to === "USD") {
        result = "Result: " + (amount / 23000) + " $";
    } else if (fromC === "VND") {
        result = "Result: " + amount + " Đ"
    } else {
        result = "Result: " + amount + " $"
    }
    document.getElementById("result").innerHTML =  result;
    
}
