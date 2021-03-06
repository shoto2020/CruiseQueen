const firstClassIncrease = document.getElementById("firstClassIncrease");
const firstClassDecrease = document.getElementById("firstClassDecrease");
const economyIncrease = document.getElementById("economyIncrease");
const economyDecrease = document.getElementById("economyDecrease");
const bookNow = document.getElementById("bookNow");
const backHome = document.getElementById("backHome")


//! first class increase
firstClassIncrease.addEventListener("click", function() {
    handleTicketValue(true, "firstClass");
}) 

//! first class decrease
firstClassDecrease.addEventListener("click", function() {
    handleTicketValue(false, "firstClass");
}) 

//! economy increase
economyIncrease.addEventListener("click", function() {
    handleTicketValue(true, "economy");
})

//! economy decrease
economyDecrease.addEventListener("click", function() {
    handleTicketValue(false, "economy");
})

//! book now
bookNow.addEventListener("click", function() {
    const fromInput = document.getElementById("fromInput").value;
    const toInput = document.getElementById("toInput").value;
    const departureInput = document.getElementById("departureInput").value;
    const returnInput = document.getElementById("returnInput").value;
    const firstClassInput = document.getElementById("firstClassInput").value;
    const economyInput = document.getElementById("economyInput").value;

    if (!fromInput || !toInput || !departureInput || !returnInput || !firstClassInput || !economyInput) {
        document.getElementById('warning').innerText = 'Please Fill All The Required Information!!';
    }
    else {
        var bookingFrom = document.getElementById("bookingForm");
        bookingFrom.style.display = "none";
        var bookingContent = document.getElementById("bookingContent");
        bookingContent.style.display = "none";
        
        var bookingConfirm = document.getElementById("bookingConfirm");
        bookingConfirm.style.display = "block";
    
        var paymentSlip = calculateTotal();
        document.getElementById("paymentSlip").innerText = paymentSlip;

    }
})

//! Back Home
backHome.addEventListener("click", function() {
    var bookingFrom = document.getElementById("bookingForm");
    bookingFrom.style.display = "block";
    var bookingContent = document.getElementById("bookingContent");
    bookingContent.style.display = "block";
    
    var bookingConfirm = document.getElementById("bookingConfirm");
    bookingConfirm.style.display = "none";
})

function handleTicketValue(isIncrease, ticket) {
    var ticketInput = document.getElementById(ticket + "Input");
    var ticketNumber = parseInt(ticketInput.value);
    if (isIncrease == true) {
        ticketNumber = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        ticketNumber = ticketNumber - 1;
    }

    ticketInput.value = ticketNumber;
    calculateTotal();
}

function calculateTotal() {
    var firstClassInput = document.getElementById("firstClassInput");
    var firstClassNumber = parseInt(firstClassInput.value);

    var economyInput = document.getElementById("economyInput");
    var economyNumber = parseInt(economyInput.value);

    var subTotal = firstClassNumber * 150 + economyNumber * 100;
    document.getElementById("subTotal").innerText = subTotal;

    var tax = (subTotal * .1);
    document.getElementById("tax").innerText = tax; 
    
    var totalPrice = subTotal + tax;
    document.getElementById("totalPrice").innerText = totalPrice; 

    return totalPrice;
}


