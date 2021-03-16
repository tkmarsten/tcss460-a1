$(document).ready(function () {
    const response = fetch("/orders", {
        method: "GET"
    })
        .then(response => response.json()
            .then(data => {
                var i;

                for (i = 0; i < data.orders.length; i++) {
                    $("#container").append("<ul><li> Order #" + (i + 1) + " - " +
                        data.orders[i].my_size + ", " +
                        data.orders[i].my_base + ", " +
                        data.orders[i].my_protein + ", " +
                        "Kimchi: " + data.orders[i].option1 + ", " +
                        "Cucumber: " + data.orders[i].option2 + ", " +
                        "Kale: " + data.orders[i].option3 + ", " +
                        "Green onion: " + data.orders[i].option4 + ", " +
                        "Daikon: " + data.orders[i].option5 + ", " +
                        "Edamame: " + data.orders[i].option6 + ", " +
                        "Seaweed salad: " + data.orders[i].option7 + ", " +
                        "Ginger: " + data.orders[i].option8 + ", " +
                        "Masago: " + data.orders[i].option9 + ", " +
                        "Imitation crab: " + data.orders[i].option10 + ", " +
                        "Avocado: " + data.orders[i].option11 + ", " +
                        "Sesame seeds: " + data.orders[i].option12 + "</li></ul>")
                }
            }))
})

async function logOut() {
    let response = fetch("/auth", {
        method: 'DELETE'
    })
        .then(window.location.href = "signin.html")
}