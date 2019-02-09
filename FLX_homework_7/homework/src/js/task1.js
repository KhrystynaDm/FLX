let visitirs = {
    "User": "UserPass",
    "Admin": "RootPass"
}

let currentHours = new Date().getHours();

let login = prompt("Please enter login");

if (!login || login === null) {
    alert("Canceled.");
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (visitirs[login]) {

    let pass = prompt("Please enter pass");

    if (!pass && pass === null) {
        alert("Canceled.");
    } else {
        if (pass === "UserPass") {
            currentHours < 20 ? alert("Good day, dear User!") : alert("Good evening, dear User!");

        } else if (pass === "RootPass") {
            currentHours < 20 ? alert("Good day, dear Admin!") : alert("Good evening, dear Admin!");

        } else {
            alert("Wrong password");
        }
    }
} else {
    alert("I don’t know you");
}