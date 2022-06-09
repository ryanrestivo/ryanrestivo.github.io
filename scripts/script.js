import Education from "./education.js";
import Job from "./resume.js";
import Link from "./link.js";

const director = new Job("Director, Product & Emerging Technology","Newsday","October 2021 - Present",["Led a cross functional team to improve SEO best practices","Streamline metrics reporting dashboards by automating data to write to Google Sheets"]);
const pmJob = new Job("Project Manager, Mobile Apps","Newsday","January 2019 - September 2021",["Led project to launch redesigned Newsday App, which launched in 2019","Clearly communicated status for features on the roadmap with senior leadership, stakeholders and third party developers","Measure adoption and usage data for product launches and report results to internal stakeholders","Research customer needs and user experience using user testing"]);
const edcJob = new Job("Editorial Development Coordinator","Newsday","May 2016 - December 2018",["Coordinated between app development and advertising team to incorporate a major corporate sponsorship into the Newsday iOS and Android apps","Developed and deployed a Slack bot user to our team written in Python","Created, developed and implemented weekly email metrics reports using an Adobe Analytics API for all Newsday reporters and their editors","Managed project to integrate push alerts into our CMS","Train new editorial staff in CMS best practices as well as new features"]);
const mlbJob = new Job("Content Coordinator","MLB Advanced Media","June 2009 - April 2016",["Maintained and prioritized requests from all 30 MLB clubs and partners","Produced digital social media content for use on MLB and team social media platforms","Trained, managed and supervised Production Assistants","Oversee all video transcoding processes and perform quality control on all metadata"]);
const espnJob = new Job("Quality Assurance Associate","ESPN Digital Media","September 2008 - June 2009",["Regression tested releases of Fantasy Game products and updated test plans","Coordinated with Customer Care representatives and software engineers to resolve customer issues"]);

const skillList = "Python, Github, Bash, SQL, HTML, CSS, JIRA, Adobe Analytics, Microsoft Office, Google Drive, JavaScript, Content Management Software, Project Management, Product Management";
console.log(skillList);

const educationBackground = new Education(
  "Marist College",
  2008,
  "Bachelor of Arts",
  "Communications"
);

const jobTitle = `
<h3 class="job_name">${director.title},${director.place}</h3>
<h4>${director.duration}</h4>
`;

// todo - use this function to loop over the skills in each job to make them a list
// ! break them out as a new const

//function resumeSkills(){
//  for(var i = 0; i < arguments.length; i++){
//    let item = `<li>${arguments[i]}</li>`;
//    return item;
//  }
//};
//console.log(resumeSkills(director.skills));

director.skills.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});
console.log(director.skills);
//director.skills

const jobSkills = `<ul>
<li>${director.skills.join('</li><li>')}</li>
</ul>`;


const main = document.querySelector('.maincontent');

const newJob = document.createElement("p");
newJob.classList.add("job-description");
newJob.setAttribute("id","1");
newJob.innerHTML = jobTitle;
const newSkills = document.createElement('ul');
newSkills.classList.add("job-skills");
newSkills.innerHTML = jobSkills;

main.append(newJob);
main.append(newSkills);

const educationContent = `
<h4>${educationBackground.school} (${educationBackground.graduation})</h4>
<p>
${educationBackground.degree},
${educationBackground.major}
</p>
`;

console.log(educationContent);


// add education 
const maristRecords = document.createElement("education");
maristRecords.classList.add("education-background");
maristRecords.setAttribute("id","education");
maristRecords.innerHTML = educationContent;
main.append(maristRecords);

// todo - make a links.js file and populate with links 
// ! more other thigns TBD