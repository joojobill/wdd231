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
  `;
  