const driversData = {
    "Malakpet-Malkajgiri": [
        { name: "Ashok", phone: generatePhoneNumber(), vehicle: "12 BH 3456 AA", fare: "₹50", time: generateRandomTime(), vacancies: 4 },
        { name: "Kamal", phone: generatePhoneNumber(), vehicle: "34 BH 5678 BB", fare: "₹60", time: generateRandomTime(), vacancies: 4 },
        { name: "Vimal", phone: generatePhoneNumber(), vehicle: "56 BH 7890 CC", fare: "₹55", time: generateRandomTime(), vacancies: 4 }
    ],
    "Malakpet-Masab Tank": [
        { name: "Sunil", phone: generatePhoneNumber(), vehicle: "78 BH 9012 DD", fare: "₹45", time: generateRandomTime(), vacancies: 4 },
        { name: "Ravi", phone: generatePhoneNumber(), vehicle: "90 BH 1234 EE", fare: "₹70", time: generateRandomTime(), vacancies: 4 },
        { name: "Raj", phone: generatePhoneNumber(), vehicle: "12 BH 3456 FF", fare: "₹65", time: generateRandomTime(), vacancies: 4 }
    ]
};

function generatePhoneNumber() {
    let number = '9';
    for (let i = 1; i < 10; i++) {
        number += Math.floor(Math.random() * 10).toString();
    }
    return number;
}

function generateRandomTime() {
    const start = new Date();
    start.setHours(6, 0, 0);
    const end = new Date();
    end.setHours(11, 0, 0);

    const randomTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const hours = randomTime.getHours();
    const minutes = randomTime.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} AM`;
}

function showDrivers() {
    const fromCity = document.getElementById("from").value;
    const toCity = document.getElementById("to").value;

    if (fromCity === toCity) {
        alert("From and To locations cannot be the same.");
        return;
    }

    const key = `${fromCity}-${toCity}`;
    const driversList = document.getElementById("drivers-list");

    driversList.innerHTML = "";

    if (driversData[key]) {
        driversData[key].forEach(driver => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${driver.name}</td>
                <td>${driver.phone}</td>
                <td>${driver.vehicle}</td>
                <td>${driver.fare}</td>
                <td>${driver.time}</td>
                <td>${driver.vacancies}</td>
                <td>
                    <button class="book-button" onclick="bookDriver('${driver.name}')">Book</button>
                </td>
            `;

            driversList.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="7">No drivers available for the selected route.</td>`;
        driversList.appendChild(row);
    }
}

function bookDriver(driverName) {
    const driver = Object.values(driversData)
        .flat()
        .find(driver => driver.name === driverName);

    if (driver && driver.vacancies > 0) {
        driver.vacancies--;
        showDrivers();
        alert(`Booking successful for ${driver.name}`);
    } else {
        alert("No vacancies available.");
    }
}

// Navigate to cab registration page
document.getElementById("register-driver-button").addEventListener("click", () => {
    window.location.href = "cab_register.html";
});

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    showDrivers();
});
