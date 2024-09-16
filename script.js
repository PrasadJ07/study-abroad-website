document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    // You can add more dynamic features here
});
const programs = [
  { name: "Computer Science", universities: ["University A", "University B"] },
  { name: "Data Analytics", universities: ["University C", "University D"] },
  { name: "Business Administration", universities: ["University E", "University F"] },
  { name: "Artificial Intelligence", universities: ["University G", "University H"] }
];

// Function to display the programs
function displayPrograms() {
  const programSection = document.getElementById('programs');
  programs.forEach(program => {
    let programHTML = `<li><h3>${program.name}</h3><p>Available at: ${program.universities.join(', ')}</p></li>`;
    programSection.innerHTML += programHTML;
  });
}
