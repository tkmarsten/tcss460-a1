// Create and add the order to the shopping cart
async function addCart() {
    size = $('input[name=sizeRadios]:checked').val();
    base = $('input[name=baseRadios]:checked').val();
    protein = $('input[name=protRadios]:checked').val();

    if (size && base && protein) {

        // Create card div
        var newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";


        // Create card body div
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        newCard.appendChild(cardBody);


        // Create the checkbox for order selection
        var cardBttn = document.createElement("input");
        cardBttn.type = "checkbox";
        cardBttn.name = "deleteOrder";
        cardBttn.value = "delete";
        cardBody.appendChild(cardBttn);


        // Create card title within the body
        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        var orderName = document.getElementById("orderName").value;
        cardTitle.innerHTML = `Order ${orderName}`;
        cardBody.appendChild(cardTitle);


        // Append the size, base, and protein options in the card
        var radioOptions = [size, base, protein];
        for (const val in radioOptions) {
            var cardText = document.createElement("li");
            cardText.className = "card-text";
            cardText.innerHTML = radioOptions[val];
            cardBody.appendChild(cardText);
        }


        // Append the topping options in the card
        var items = document.getElementsByName('toppCBS');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox' && items[i].checked == true) {
                var cardText = document.createElement("li");
                cardText.className = "card-text";
                cardText.innerHTML = items[i].value;
                cardBody.appendChild(cardText);
            }
        }


        // Take the running total price and append to the card
        var totalPrice = document.getElementById("totalPrice");
        var orderPrice = document.createElement("p");
        orderPrice.innerHTML = "Total: " + totalPrice.innerHTML;
        cardBody.append(orderPrice);


        // Add the newly created order card to the cart
        var cart = document.getElementById("cartOrders");
        cart.appendChild(newCard);


        // Reset the color of the required options back to black after order has
        // been successfully added
        sizeLabel = document.getElementsByName("sizeRadioLabel");
        for (const sl of sizeLabel) {
            sl.style.color = "black";
        }

        baseLabel = document.getElementsByName("baseRadioLabel");
        for (const bl of baseLabel) {
            bl.style.color = "black";
        }

        protLabel = document.getElementsByName("protRadioLabel");
        for (const pl of protLabel) {
            pl.style.color = "black";
        }


        // Reset buttons after successful order addition
        $('input[name=sizeRadios]').prop('checked', false);
        $('input[name=baseRadios]').prop('checked', false);
        $('input[name=protRadios]').prop('checked', false);
        $('input[name=toppCBS]').prop('checked', false);
    } else {

        // Set the required radio buttons to red for the user
        alert("You did not selected a required item.");

        sizeLabel = document.getElementsByName("sizeRadioLabel");
        for (const sl of sizeLabel) {
            sl.style.color = "red";
        }

        baseLabel = document.getElementsByName("baseRadioLabel");
        for (const bl of baseLabel) {
            bl.style.color = "red";
        }

        protLabel = document.getElementsByName("protRadioLabel");
        for (const pl of protLabel) {
            pl.style.color = "red";
        }
    }

}

// Resets the cart by deleting every order
function resetCart() {

    var cards = document.getElementById("cartOrders");
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}

// Remove the orders that have been checked
function removeOrders() {

    var cb = document.getElementsByName("deleteOrder");
    for (var i = 0; i < cb.length; i++) {
        if (cb[i].type == 'checkbox' && cb[i].checked == true) {
            cb[i].parentNode.parentNode.parentNode.removeChild(cb[i].parentNode.parentNode);
            i--;
        }
    }
}

// Update the cart price total
function updateCart() {

    var total = 0;

    if (document.getElementById("sizeRadio1").checked) {
        total += 9.95;
    } else if (document.getElementById("sizeRadio2").checked) {
        total += 10.95;
    } else if (document.getElementById("sizeRadio3").checked) {
        total += 12.95;
    }

    var toppings = document.getElementsByName("toppCBS");
    var count = 0;

    for (var i = 0; i < toppings.length - 4; i++) {
        if (toppings[i].checked) {
            count++;
        }
    }

    if (count > 4) {
        total += 1.00 * (count - 4);
    }

    if (document.getElementById("specCB1").checked) {
        total += 1.00;
    }

    if (document.getElementById("specCB2").checked) {
        total += 1.50;
    }

    if (document.getElementById("specCB3").checked) {
        total += 2.00;
    }

    if (document.getElementById("specCB4").checked) {
        total += 1.00;
    }

    document.getElementById("totalPrice").innerHTML = "$" + total;
}