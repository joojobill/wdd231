const hamburger = document.querySelector('.hamburger'); // Selected `.hamburger` instead of `.hamburger-container`
const navigation = document.querySelector('.navigation');
const toggleButton = document.getElementById("toggleView");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});

// Highlight the active link in the navigation
document.querySelectorAll(".navigation a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    // Modal functionality
    const modalLinks = document.querySelectorAll(".modal-link");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    modalLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("href");
            document.querySelector(target).style.display = "flex";
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modals.forEach((modal) => (modal.style.display = "none"));
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });

    // Timestamp
    const timestampElement = document.getElementById("timestamp");
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
    timestampElement.textContent = now.toLocaleDateString("en-US", options);

    // Animate membership cards
    const cardsContainer = document.querySelector(".cards-container");
    setTimeout(() => {
        cardsContainer.classList.add("visible"); // Add visible class to trigger animation
    }, 500); // Delay of 500ms
});

function submitForm(event) {
    event.preventDefault();

    const timestamp = new Date().toLocaleString();
    document.getElementById('timestamp').value = timestamp;

    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();

    window.location.href = `http://127.0.0.1:5500/chamber/thankyou.html?${params}`;
}

// Extract URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get form data from URL parameters
const firstName = urlParams.get('firstname');
const lastName = urlParams.get('lastname');
const organizationalTitle = urlParams.get('organizational-title');
const email = urlParams.get('emailaddress');
const phone = urlParams.get('phonenumber');
const businessName = urlParams.get('businessname');
const membershipLevel = urlParams.get('membershiplevel');
const description = urlParams.get('description');
const timestamp = urlParams.get('timestamp');

// Display form data
const formDataDisplay = document.getElementById('formDataDisplay');
if (formDataDisplay) {
    formDataDisplay.innerHTML = `
        <div class="info"><label>First Name:</label> ${firstName}</div>
        <div class="info"><label>Last Name:</label> ${lastName}</div>
        <div class="info"><label>Organizational Title:</label> ${organizationalTitle}</div>
        <div class="info"><label>Email:</label> ${email}</div>
        <div class="info"><label>Phone:</label> ${phone}</div>
        <div class="info"><label>Business Name:</label> ${businessName}</div>
        <div class="info"><label>Membership Level:</label> ${membershipLevel}</div>
        <div class="info"><label>Business Description:</label> ${description}</div>
        <div class="info"><label>Timestamp:</label> ${timestamp}</div>
    `;
}
document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");

    // Get the current date and time
    const currentDate = new Date();

    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the time difference in milliseconds
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentDate - lastVisitDate;

        // Convert time difference to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            // Less than a day ago
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            // A day or more ago
            visitMessage.textContent = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
        }
    }

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", currentDate.toISOString());
});