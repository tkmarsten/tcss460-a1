function addCart() {
    size = $('input[name=sizeRadios]:checked').val();
    base = $('input[name=baseRadios]:checked').val();
    protein = $('input[name=protRadios]:checked').val();

    if (size && base && protein) {
        var newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        newCard.appendChild(cardBody);

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = "Order";
        cardBody.appendChild(cardTitle);

        var radioOptions = [size, base, protein];
        for (const val in radioOptions) {
            var cardText = document.createElement("li");
            cardText.className = "card-text";
            cardText.innerHTML = radioOptions[val];
            cardBody.appendChild(cardText);
        }

        var items = document.getElementsByName('toppCBS');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox' && items[i].checked == true) {
                var cardText = document.createElement("li");
                cardText.className = "card-text";
                cardText.innerHTML = items[i].value;
                cardBody.appendChild(cardText);
            }
        }

        var cart = document.getElementById("shoppingCart");
        cart.appendChild(newCard);

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
    } else {
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