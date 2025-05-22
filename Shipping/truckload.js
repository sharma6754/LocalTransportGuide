const driversData = {
    // Hyderabad to all other cities
    "Hyderabad-Delhi": [
        { name: "Ashok", phone: generatePhoneNumber() },
        { name: "Kamal", phone: generatePhoneNumber() },
        { name: "Vimal", phone: generatePhoneNumber() }
    ],
    "Hyderabad-Mumbai": [
        { name: "Sunil", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Raj", phone: generatePhoneNumber() }
    ],
    "Hyderabad-Chennai": [
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Nikhil", phone: generatePhoneNumber() },
        { name: "Ajay", phone: generatePhoneNumber() }
    ],
    "Hyderabad-Bengaluru": [
        { name: "Srinivas", phone: generatePhoneNumber() },
        { name: "Ganesh", phone: generatePhoneNumber() },
        { name: "Kiran", phone: generatePhoneNumber() }
    ],
    "Hyderabad-Ahmedabad": [
        { name: "Pradeep", phone: generatePhoneNumber() },
        { name: "Naveen", phone: generatePhoneNumber() },
        { name: "Deepak", phone: generatePhoneNumber() }
    ],

    // Delhi to all other cities
    "Delhi-Hyderabad": [
        { name: "Rajesh", phone: generatePhoneNumber() },
        { name: "Suresh", phone: generatePhoneNumber() },
        { name: "Naveen", phone: generatePhoneNumber() }
    ],
    "Delhi-Mumbai": [
        { name: "Rajeev", phone: generatePhoneNumber() },
        { name: "Sandeep", phone: generatePhoneNumber() },
        { name: "Vikash", phone: generatePhoneNumber() }
    ],
    "Delhi-Chennai": [
        { name: "Deepak", phone: generatePhoneNumber() },
        { name: "Manoj", phone: generatePhoneNumber() },
        { name: "Anil", phone: generatePhoneNumber() }
    ],
    "Delhi-Bengaluru": [
        { name: "Amit", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Siddharth", phone: generatePhoneNumber() }
    ],
    "Delhi-Ahmedabad": [
        { name: "Nitin", phone: generatePhoneNumber() },
        { name: "Rajiv", phone: generatePhoneNumber() },
        { name: "Vivek", phone: generatePhoneNumber() }
    ],

    // Mumbai to all other cities
    "Mumbai-Hyderabad": [
        { name: "Anil", phone: generatePhoneNumber() },
        { name: "Vikram", phone: generatePhoneNumber() },
        { name: "Arvind", phone: generatePhoneNumber() }
    ],
    "Mumbai-Delhi": [
        { name: "Ajit", phone: generatePhoneNumber() },
        { name: "Sunil", phone: generatePhoneNumber() },
        { name: "Pradeep", phone: generatePhoneNumber() }
    ],
    "Mumbai-Chennai": [
        { name: "Ganesh", phone: generatePhoneNumber() },
        { name: "Suresh", phone: generatePhoneNumber() },
        { name: "Mohan", phone: generatePhoneNumber() }
    ],
    "Mumbai-Bengaluru": [
        { name: "Kunal", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Rajesh", phone: generatePhoneNumber() }
    ],
    "Mumbai-Ahmedabad": [
        { name: "Ajit", phone: generatePhoneNumber() },
        { name: "Ramesh", phone: generatePhoneNumber() },
        { name: "Sandeep", phone: generatePhoneNumber() }
    ],

    // Chennai to all other cities
    "Chennai-Hyderabad": [
        { name: "Prakash", phone: generatePhoneNumber() },
        { name: "Arun", phone: generatePhoneNumber() },
        { name: "Siva", phone: generatePhoneNumber() }
    ],
    "Chennai-Delhi": [
        { name: "Gaurav", phone: generatePhoneNumber() },
        { name: "Karthik", phone: generatePhoneNumber() },
        { name: "Shyam", phone: generatePhoneNumber() }
    ],
    "Chennai-Mumbai": [
        { name: "Manoj", phone: generatePhoneNumber() },
        { name: "Rajiv", phone: generatePhoneNumber() },
        { name: "Vikash", phone: generatePhoneNumber() }
    ],
    "Chennai-Bengaluru": [
        { name: "Srinivas", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Suresh", phone: generatePhoneNumber() }
    ],
    "Chennai-Ahmedabad": [
        { name: "Manoj", phone: generatePhoneNumber() },
        { name: "Rajiv", phone: generatePhoneNumber() },
        { name: "Srinivas", phone: generatePhoneNumber() }
    ],

    // Bengaluru to all other cities
    "Bengaluru-Hyderabad": [
        { name: "Mohan", phone: generatePhoneNumber() },
        { name: "Raghav", phone: generatePhoneNumber() },
        { name: "Vishal", phone: generatePhoneNumber() }
    ],
    "Bengaluru-Delhi": [
        { name: "Suresh", phone: generatePhoneNumber() },
        { name: "Ramesh", phone: generatePhoneNumber() },
        { name: "Ajay", phone: generatePhoneNumber() }
    ],
    "Bengaluru-Mumbai": [
        { name: "Vikash", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Amit", phone: generatePhoneNumber() }
    ],
    "Bengaluru-Chennai": [
        { name: "Manoj", phone: generatePhoneNumber() },
        { name: "Gaurav", phone: generatePhoneNumber() },
        { name: "Ramesh", phone: generatePhoneNumber() }
    ],
    "Bengaluru-Ahmedabad": [
        { name: "Nilesh", phone: generatePhoneNumber() },
        { name: "Pavan", phone: generatePhoneNumber() },
        { name: "Vikas", phone: generatePhoneNumber() }
    ],

    // Ahmedabad to all other cities
    "Ahmedabad-Hyderabad": [
        { name: "Pradeep", phone: generatePhoneNumber() },
        { name: "Naveen", phone: generatePhoneNumber() },
        { name: "Deepak", phone: generatePhoneNumber() }
    ],
    "Ahmedabad-Delhi": [
        { name: "Nitin", phone: generatePhoneNumber() },
        { name: "Rajiv", phone: generatePhoneNumber() },
        { name: "Vivek", phone: generatePhoneNumber() }
    ],
    "Ahmedabad-Mumbai": [
        { name: "Vikash", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Amit", phone: generatePhoneNumber() }
    ],
    "Ahmedabad-Chennai": [
        { name: "Arun", phone: generatePhoneNumber() },
        { name: "Suresh", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() }
    ],
    "Ahmedabad-Bengaluru": [
        { name: "Kunal", phone: generatePhoneNumber() },
        { name: "Ravi", phone: generatePhoneNumber() },
        { name: "Rajesh", phone: generatePhoneNumber() }
    ]
};

function generatePhoneNumber() {
    // Generate a random 10-digit phone number starting with '9' or '8'
    let number = '9'; // Start with a '9' prefix
    for (let i = 1; i < 10; i++) {
        number += Math.floor(Math.random() * 10).toString();
    }
    return number;
}

function showDrivers() {
    const fromCity = document.getElementById("from").value;
    const toCity = document.getElementById("to").value;

    if (fromCity === toCity) {
        alert("From and To locations cannot be the same.");
        return;
    }

    const key = fromCity + "-" + toCity;
    const driversList = document.getElementById("drivers-list");

    driversList.innerHTML = ""; // Clear previous results

    if (driversData[key]) {
        driversData[key].forEach(function(driver) {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const phoneCell = document.createElement("td");
            const bookCell = document.createElement("td");

            // Driver name cell
            nameCell.textContent = driver.name;

            // Driver phone number cell with "Book" button
            phoneCell.textContent = driver.phone;

            // Create and style the "Book" button
            const bookButton = document.createElement("button");
            bookButton.textContent = "Book";
            bookButton.className = "book-button";
            bookButton.style.cursor = "pointer"; // Make cursor responsive
            bookButton.onclick = function() {
                alert(`Booking initiated for driver: ${driver.name}`);
            };

            bookCell.appendChild(bookButton);
            row.appendChild(nameCell);
            row.appendChild(phoneCell);
            row.appendChild(bookCell);

            driversList.appendChild(row);
        });
    } else {
        // If no drivers are found for the selected route
        const row = document.createElement("tr");
        const noDriversCell = document.createElement("td");
        noDriversCell.colSpan = 3;
        noDriversCell.textContent = "No drivers available for the selected route.";
        row.appendChild(noDriversCell);
        driversList.appendChild(row);
    }
}

// Optional: Add event listener to handle form submissions or city selections
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    showDrivers();
});
