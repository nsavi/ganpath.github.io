document.getElementById('book-now-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;

    // Create a URL with query parameters to pass the data to the payment page
    const paymentURL = `payment.html?name=${name}&email=${email}&phone=${phone}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}&roomtype=${roomType}`;

    // Redirect to the payment page
    window.location.href = paymentURL;
});
// Handle form submission in the "payment.html" page
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Process payment logic (if needed)

    // Retrieve the booking details from the URL
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('name') && urlParams.has('email') && urlParams.has('phone') && urlParams.has('checkin') && urlParams.has('checkout') && urlParams.has('guests') && urlParams.has('roomtype')) {
        const name = urlParams.get('name');
        const email = urlParams.get('email');
        const phone = urlParams.get('phone');
        const checkIn = urlParams.get('checkin');
        const checkOut = urlParams.get('checkout');
        const guests = urlParams.get('guests');
        const roomType = urlParams.get('roomtype');

        // Create a URL with query parameters to pass the data to the receipt page
        const receiptURL = `receipt.html?name=${name}&email=${email}&phone=${phone}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}&roomtype=${roomType}`;

        // Redirect to the receipt page
        window.location.href = receiptURL;
    }
});
