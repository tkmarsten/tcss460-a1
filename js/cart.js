function addCart() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    newCard.appendChild(cardBody);
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardBody.appendChild(cardTitle);
    var cart = document.getElementById("shoppingCart");
    cart.appendChild(newCard);
}