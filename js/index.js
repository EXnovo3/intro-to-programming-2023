const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `\xA9 Oxana V ${thisYear}`;
copyright.style.fontSize = "12px";
copyright.style.textAlign = "right";
footer.appendChild(copyright);

const skills = ["HTML","CSS","JavaScript","Git","GitHub"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit',function(e) {
e.preventDefault();
let nm = e.target.elements.usersName.value;
let email = e.target.elements.usersEmail.value;
let text = e.target.elements.usersMessage.value;
console.log(nm,email,text);
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `<a href="mailto:${email}" target="_blank">${nm}</a> wrote:<span>${text}
</span>`;
const removeButton = document.createElement('button');
removeButton.innerText = 'Remove';
removeButton.type = 'button';
removeButton.addEventListener('click',function() {
let entry = removeButton.parentNode;
entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

const editButton = document.createElement('button');
editButton.innerText = 'Edit';
editButton.type = 'button';
editButton.addEventListener('click', function() {
    newMessage.contentEditable = 'true';
  
});
newMessage.appendChild(editButton);

this.reset();
})

let githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/EXnovo3/repos');
githubRequest.send();
githubRequest.onload = function() {

let repositories = JSON.parse(this.response); 
   console.log(repositories);
   projectSection = document.getElementById('projects');
projectList = projectSection.querySelector('ul');
for (i=0; i < repositories.length; i++) {
    let project = document.createElement('li');
    let projectLink = document.createElement('a');
    projectLink.href = repositories[i].html_url;
    projectLink.innerText = repositories[i].name;
    projectLink.target = "_blank";
    
    project.appendChild(projectLink);
    projectList.appendChild(project);
   }

};








