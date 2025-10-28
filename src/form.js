// Form Old
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     // // e.preventDefault();
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const message = document.getElementById('message');

//     const formData = {
//       name: name.value,
//       email: email.value,
//       message: message.value
//     }

//     fetch('https://formspree.io/f/xwprdnnb', {
//         method: 'POST', // Or 'GET', 'PUT', etc., depending on your endpoint
//         body: formData // For FormData, body is directly the FormData object
//     })
//     .then(response => {
//         if (response.ok == false) {
//             alert('Something went wrong!');
//         }
//         else {
//           alert('Thank you! Your message has been sent.');
//           form.reset();
//         }
//         return response.json(); // Or response.text() if your endpoint returns text
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle errors during the fetch operation
//         alert('Something went wrong!');
//     });
//   });

const form = document.querySelector('.contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("Thanks! Your message has been sent.");
      form.reset();
    } else {
      alert("Oops! There was a problem. Please try again.");
    }
  });