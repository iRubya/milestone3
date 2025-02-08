// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement)?.value || 'N/A';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || 'N/A';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || 'N/A';
    const education = (document.getElementById('education') as HTMLInputElement)?.value || 'N/A';
    const experience = (document.getElementById('experience') as HTMLInputElement)?.value || 'N/A';
    const skills = (document.getElementById('skills') as HTMLInputElement)?.value || 'N/A';

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;
    console.log({ name, email, phone, education, experience, skills });
    


    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        alert('Error: Resume display area is not found. Please check the HTML structure.');
        console.error('The resume display element is missing.');
    }
});
