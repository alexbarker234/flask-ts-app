import { randBetween } from "./utils";

document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.innerHTML = "Here is a random number: " + randBetween(1, 10);
        console.log("Hello from TypeScript!");
    }
});
