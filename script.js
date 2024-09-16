document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});

// Programs data
const programs = [
  { name: "Computer Science", universities: ["University A", "University B"] },
  { name: "Data Analytics", universities: ["University C", "University D"] },
  { name: "Business Administration", universities: ["University E", "University F"] },
  { name: "Artificial Intelligence", universities: ["University G", "University H"] }
];

// Function to display programs dynamically
function displayPrograms() {
  const programList = document.querySelector("#programs ul"); // Select the existing <ul> inside #programs
  
  programs.forEach(program => {
    let programHTML = `
      <li>
        <h3>${program.name}</h3>
        <p>Available at: ${program.universities.join(', ')}</p>
      </li>`;
    programList.innerHTML += programHTML;  // Add the new program to the list
  });
}

// Call the function after the page loads
window.onload = displayPrograms;
