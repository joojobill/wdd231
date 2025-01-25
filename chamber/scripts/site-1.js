document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    if (hamburger && navigation) {
        hamburger.addEventListener('click', () => {
            const isActive = navigation.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute("aria-expanded", isActive);
        });
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastmodified').textContent = "Last modified: " + document.lastModified;

    // ======================
    // ✅ Weather API (Unchanged)
    // ======================
    const mytown = document.querySelector("#town");
    const mydescription = document.querySelector("#description");
    const mygraphic = document.querySelector("#graphic");
    const mytemperature = document.querySelector("#temperature");

    const mykey = "0f9d3d744809d3d46658f7d51d278efe";
    const mylon = "-0.2868821744118917";
    const mylat = "5.689374593799797";

    const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=metric`;

    async function apiFetch() {
        try {
            const response = await fetch(myurl);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error("Weather API Error:", error);
        }
    }

    function displayResults(data) {
        mytown.textContent = data.name;
        mydescription.textContent = data.weather[0].description;
        mygraphic.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        mytemperature.textContent = `${Math.round(data.main.temp)}°C`;
    }

    apiFetch();

    // ======================
    // ✅ Fetch Chamber Members (Fixed)
    // ======================
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); // Make sure this file exists in the correct location
            if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
            
            const members = await response.json();
            console.log("✅ Members Fetched:", members); // Debugging: Check data
            
            displaySpotlights(members);
        } catch (error) {
            console.error("❌ Error fetching members:", error);
        }
    }

    function displaySpotlights(members) {
        const spotlightContainer = document.querySelector('.other-info');

        // ✅ Ensure the container exists
        if (!spotlightContainer) {
            console.error("❌ Error: .other-info div not found!");
            return;
        }

        spotlightContainer.innerHTML = "<h2>Featured Chamber Members</h2>";

        // ✅ Filter only Gold (3) & Silver (2) members
        const eligibleMembers = members.filter(member => member.MembershipLevel === 3 || member.MembershipLevel === 2);

        // ✅ Check if eligible members exist
        if (eligibleMembers.length === 0) {
            spotlightContainer.innerHTML += "<p>No Gold or Silver members found.</p>";
            return;
        }

        // ✅ Randomly select 2 or 3 members
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        shuffled.forEach(member => {
            console.log("✅ Displaying Member:", member.name); // Debugging

            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p><strong>Phone:</strong> ${member.Phone || member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Membership Level:</strong> ${member.MembershipLevel === 3 ? "Gold" : "Silver"}</p>
                <p><a href="${member.Website || member.website}" target="_blank">Visit Website</a></p>
            `;

            spotlightContainer.appendChild(memberCard);
        });
    }

    fetchMembers();
});
