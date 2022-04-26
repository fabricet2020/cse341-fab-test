// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('http://localhost:8080/controllers');
  displayAllData(data);
};

function displayAllData(data) {
  displayProfessionalName(data.professionalName);
  displayImage(data.base64Image);
  displayPrimaryDescription(data);
  displayWorkDescription(data);
  displayLinkTitleText(data);
  displayLinkedInLink(data);
  displayGitHubLink(data);
  displayGlitchLink(data);
  displayContactText(data); 
  displayCourseOne(data); 
  displayCourseTwo(data); 
  displayCourseThree(data);  
}

function displayProfessionalName(n) {
  let professionalName = document.getElementById('professionalName');
  professionalName.innerHTML = n;
}

function displayImage(img) {
  let image = document.getElementById('professionalImage');
  image.src = `data:image/png;base64, ${img}`;
}
function displayPrimaryDescription(data) {
  let nameLink = document.getElementById('nameLink');
  nameLink.innerHTML = data.nameLink.firstName;
  nameLink.href = data.nameLink.url;
  let primaryDescription = document.getElementById('primaryDescription');
  primaryDescription.innerHTML = data.primaryDescription;
}

function displayWorkDescription(data) {
  let workDescription1 = document.getElementById('workDescription1');
  workDescription1.innerHTML = data.workDescription1;
  let workDescription2 = document.getElementById('workDescription2');
  workDescription2.innerHTML = data.workDescription2;
}

function displayLinkTitleText(data) {
  let linkTitle = document.getElementById('linkTitleText');
  linkTitle.innerHTML = data.linkTitleText;
}

function displayLinkedInLink(data) {
  let linkedInLink = document.getElementById('linkedInLink');
  linkedInLink.innerHTML = data.linkedInLink.text;
  linkedInLink.href = data.linkedInLink.link;
}

function displayGitHubLink(data) {
  let githubLink = document.getElementById('githubLink');
  githubLink.innerHTML = data.githubLink.text;
  githubLink.href = data.githubLink.link;
}

function displayGlitchLink(data) {
  let glitchLink = document.getElementById('glitchLink');
  glitchLink.innerHTML = data.glitchLink.text;
  glitchLink.href = data.glitchLink.link;
}


function displayContactText(data) {
  let contactText = document.getElementById('contactText');
  contactText.innerHTML = data.contactText;
}

function displayCourseOne(data){
  let courseOne = document.getElementById('courseOne');
  courseOne.innerHTML = data.courseOne;
}

function displayCourseTwo(data){
  let courseTwo = document.getElementById('courseTwo');
  courseTwo.innerHTML = data.courseTwo;
}

function displayCourseThree(data){
  let courseThree = document.getElementById('courseThree');
  courseThree.innerHTML = data.courseThree;
}
getData();
