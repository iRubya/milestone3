// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || 'N/A';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || 'N/A';
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || 'N/A';
    var education = ((_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value) || 'N/A';
    var experience = ((_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value) || 'N/A';
    var skills = ((_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value) || 'N/A';
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    console.log({ name: name, email: email, phone: phone, education: education, experience: experience, skills: skills });
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        alert('Error: Resume display area is not found. Please check the HTML structure.');
        console.error('The resume display element is missing.');
    }
});
