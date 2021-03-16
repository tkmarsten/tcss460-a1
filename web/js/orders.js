$(document).ready(function () {
    $("#placeOrder").click(placeOrder)
    //$("#viewOrder").click(() => window.location.href = "orders.html")
    //$("#logout").click(logOut)
})

async function placeOrder() {
    const order = {
        size: $('input[name=sizeRadios]:checked').val(),
        base: $('input[name=baseRadios]:checked').val(),
        protein: $('input[name=protRadios]:checked').val(),
        option1: $("#toppCB1").is(':checked').toString(),
        option2: $("#toppCB2").is(':checked').toString(),
        option3: $("#toppCB3").is(':checked').toString(),
        option4: $("#toppCB4").is(':checked').toString(),
        option5: $("#toppCB5").is(':checked').toString(),
        option6: $("#toppCB6").is(':checked').toString(),
        option7: $("#toppCB7").is(':checked').toString(),
        option8: $("#toppCB8").is(':checked').toString(),
        option9: $("#specCB1").is(':checked').toString(),
        option10: $("#specCB2").is(':checked').toString(),
        option11: $("#specCB3").is(':checked').toString(),
        option12: $("#specCB4").is(':checked').toString()
    }

    const response = await fetch("/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
    })

    const json = await response.json()

    console.log(order)
    console.log(json)
    //alert(json.message)

    addCart()
}


async function logOut() {
    let response = fetch("/auth", {
        method: 'DELETE'
    })
        .then(window.location.href = "signin.html")
}