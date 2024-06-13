// This is the javascript file for the event registration portal

// U94741303

// Implement form
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const eventDate = document.getElementById("eventDate").value;
    const mealPreferences = [];
    const mealPreferenceCheckboxes = document.getElementsByName("mealPreference");
    // Meal preference checkbox
    for (let i = 0; i < mealPreferenceCheckboxes.length; i++) {
        if (mealPreferenceCheckboxes[i].checked) {
            mealPreferences.push(mealPreferenceCheckboxes[i].value);
        }
    }
    // Validate that all fields are filled out
    if (!name || !email || !eventDate || !mealPreferences.length) {
        alert("Please fill out all fields.");
        return;
    }
    // Display registration info on submission
    const registrationDetails = document.getElementById("registrationDetails");
    registrationDetails.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Event Date: ${eventDate}</p>
        <p>Meal Preference(s): ${mealPreferences.join(', ')}</p>
    `;
});