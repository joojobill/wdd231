const hamburger = document.querySelector('.hamburger'); // FIXED: Selected `.hamburger` instead of `.hamburger-container`
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

document.addEventListener("DOMContentLoaded", async function () {
    const memberscontainer = document.getElementById("memberscontainer");

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members) {
        memberscontainer.innerHTML = "";
        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                <p>${member.description}</p>
            `;

            memberscontainer.appendChild(memberCard);
        });
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 1: return "Member";
            case 2: return "Silver";
            case 3: return "Gold";
            default: return "Unknown";
        }
    }

    // Toggle between grid and list view
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            memberscontainer.classList.toggle("grid-view");
            memberscontainer.classList.toggle("list-view");
        });
    } else {
        console.error("Toggle button not found. Make sure it exists in the HTML.");
    }

    fetchMembers();
});
