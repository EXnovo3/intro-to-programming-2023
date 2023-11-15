const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Oxana V ${thisYear}`;
copyright.style.fontSize = "12px";
copyright.style.textAlign = "center";
footer.appendChild(copyright);

const skills = ["HTML","CSS","JavaScript","Git","GitHub"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}




