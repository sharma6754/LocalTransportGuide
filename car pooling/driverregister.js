document.getElementById("driver-register-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("driver-name").value;
    const phone = document.getElementById("driver-phone").value;
    const vehicle = document.getElementById("vehicle-info").value;
    const fromCity = document.getElementById("from-city").value;
    const toCity = document.getElementById("to-city").value;

    if (fromCity === toCity) {
        alert("From and To cities cannot be the same.");
        return;
    }

    const newDriver = {
        name,
        phone,
        vehicle,
        fromCity,
        toCity,
        fare: "₹50",
        time: "9:00 AM",
        vacancies: 4,
    };

    // Save to local storage
    const drivers = JSON.parse(localStorage.getItem("drivers")) || [];
    drivers.push(newDriver);
    localStorage.setItem("drivers", JSON.stringify(drivers));

    alert("Driver registered successfully!");

    // Redirect to cabpooling page
    window.location.href = "./carpooling.html"; // Correct path based on your folder structure
 // Adjust path as necessary
});
