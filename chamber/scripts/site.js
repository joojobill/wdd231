const hamburger = document.querySelector('.hamburger-container');
const navigation = document.querySelector('.navigation');
const toggleButton = document.getElementById("toggleView"); 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});

// current year and last modified dates are displayed
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", async function () {
    const membersContainer = document.getElementById("membersContainer");

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
        membersContainer.innerHTML = "";
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

            membersContainer.appendChild(memberCard);
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

   
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            membersContainer.classList.toggle("grid-view");
            membersContainer.classList.toggle("list-view");
        });
    } else {
        console.error("Toggle button not found. Make sure it exists in the HTML.");
    }

    fetchMembers();
});
