// Function to save application data to local storage
document.getElementById("save").addEventListener("click", function() {
    var formData = {
        name: document.getElementById("name").value,
        moonOfOrigin: document.getElementById("moon").value,
        lastPosition: document.getElementById("position").value,
        skills: document.getElementById("skills").value,
        criminalNegligence: document.getElementById("criminal").value
    };
    localStorage.setItem("jobApplication", JSON.stringify(formData));
    alert("Application saved successfully!");
});

// Function to delete saved application data from local storage
document.getElementById("delete").addEventListener("click", function() {
    localStorage.removeItem("jobApplication");
    alert("Application data deleted successfully!");
});

// Function to retrieve saved application data from local storage
document.getElementById("retrieve").addEventListener("click", function() {
    var savedData = localStorage.getItem("jobApplication");
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById("name").value = formData.name;
        document.getElementById("moon").value = formData.moonOfOrigin;
        document.getElementById("position").value = formData.lastPosition;
        document.getElementById("skills").value = formData.skills;
        document.getElementById("criminal").value = formData.criminalNegligence;
        alert("Saved application data retrieved successfully!");
    } else {
        alert("No saved application data found.");
    }
});

// Function to send application
document.getElementById("send").addEventListener("click", function() {
    var formData = JSON.parse(localStorage.getItem("jobApplication"));
    if (formData && formData.name && formData.moonOfOrigin && formData.lastPosition && formData.skills && formData.criminalNegligence) {
        // Send application logic here (you can replace this with your own logic, such as sending a request to a server)
        alert("Thank you for working with us!");
        localStorage.removeItem("jobApplication"); // Clear saved data
    } else {
        alert("Please complete the form.");
    }
});
