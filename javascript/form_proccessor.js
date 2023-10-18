// Add an event listener to the form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector("button[type=submit]");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the user's email input
        const email = document.getElementById("email").value;

        // You can add more fields and validation here if needed

        // Lock out the submit button
        submitButton.disabled = true;
        submitButton.textContent = "Thank you for your soul"

        // Simulate form processing (you should replace this with your actual server-side processing)
        setTimeout(function () {
            // Reset the form
            form.reset();

            // Display a success message
            const confirmationMessage = document.createElement("p");
            confirmationMessage.innerText = `Thank you, ${email}! You've successfully signed the contract.`;
            confirmationMessage.classList.add("text-green-500", "my-4", "text-xl");
            form.parentNode.appendChild(confirmationMessage);
        }, 500); // Simulating a 0.5-second delay (you can remove this in your actual implementation)
    });
});
