
// function stringHash(str) {
//   let hash = 0;
//   if (str.length === 0) {
//     return hash;
//   }
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i);
//     hash = ((hash << 5) - hash) + char; 
//     hash |= 0; 
//   }
//   return hash;
// }

// // Comment out below when testing for changing PW
// var hasPassword = localStorage.getItem("hasEnteredPassword");
//  console.log(hasPassword);
//       if (hasPassword == null || hasPassword == false) {
//         let passwordPrompt = prompt("Please enter passord here:");
//         if (stringHash(passwordPrompt) == -958137739) {
//           localStorage.setItem("hasEnteredPassword", true);
//         }
//         else {
//           alert("Incorrect password");
//           window.location.replace("work.html");
//          }
//       }
//       else if (hasPassword === null) {
//         window.location.replace("work.html");
//       }

function stringHash(str) {
  let hash = 0;
  if (!str) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return hash;
}

// Hashed password check
const CORRECT_HASH = -958137739; // your hashed password
const ACCESS_KEY = "hasEnteredPassword";

// Check if already unlocked
const hasPassword = localStorage.getItem(ACCESS_KEY);

if (hasPassword === "true") {
  // access granted previously, show page
  document.body.style.display = "block";
} else {
  document.body.style.display = "none"; // hide everything by default

  const passwordPrompt = prompt("Please enter password to view this page:");

  if (passwordPrompt === null) {
    // User canceled → show message + Back button
    document.body.style.display = "block";
    document.body.innerHTML = `
      <div style="text-align:center; margin-top:40vh; font-family:sans-serif;">
        <h2>Access canceled.</h2>
        <button 
          onclick="window.location.href='work.html'" 
          style="margin-top:20px; padding:10px 20px; border:none; border-radius:6px; background:#ffefe4; font-weight:600;
  color:#33302e; cursor:pointer;">
          ← Back
        </button>
      </div>
    `;
  } else if (stringHash(passwordPrompt) === CORRECT_HASH) {
    // correct password
    localStorage.setItem(ACCESS_KEY, "true");
    document.body.style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
    window.location.replace("work.html"); // redirect to safe page
  }
}
