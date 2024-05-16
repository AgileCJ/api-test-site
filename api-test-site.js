const form = document.getElementById('user-id-form');
const userIdInput = document.getElementById('user-id');
const API_HOST = 'https://billing.b5test.eu'; // Replace with your actual API host if needed (test data)
const API_TOKEN = '2353a0d2d3b94c94b370cba964976816'; // Replace with your actual API token if needed (test data)

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userId = userIdInput.value;
  const partnerAccountUid = userId;

  try {
    const response = await fetch(`<span class="math-inline">\{API\_HOST\}/api/v1/partners/accounts/</span>{partnerAccountUid}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      const activationToken = data.activation_token;
      window.location.href = `https://start.b5test.com/partnership/redeem?t=family&c=${activationToken}`;
    } else {
      const response = await fetch(`${API_HOST}/api/v1/partners
