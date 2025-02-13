const hamburger = document.querySelector('.hamburger'); //  Selected `.hamburger` instead of `.hamburger-container`
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
    const cardsContainer = document.querySelector(".membership-cards");
    setTimeout(() => {
      cardsContainer.classList.add("visible"); // Add visible class to trigger animation
    }, 500); // Delay of 500ms
  });

  
  function submitFrom(event) {
    event.preventDefault();
  
    const timestamp = new Date().toLocaleString();
    document.getElementById('timestamp').value =  timestamp;
  
    const fromData = new FromData(event.target);
    const params = new URLSearchParams(fromData).toString();
  
    window.location.href = `http://127.0.0.1:5500/chamber/thankyou.html${params}`;
  
  }
  // Extract URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  // Get form data from URL parameters
  const firstName = urlParams.get('fristname');
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
} `;
