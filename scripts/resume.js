function Job(title,place,duration,skills) {
  this.title = title;
  this.place = place;
  this.duration = duration;
  this.skills = skills;
}

// array of jobs
jobs = [new Job("Project Manager, Mobile Apps","Newsday","January 2019 - Present",["Set agendas and run daily calls with developers and core stakeholders to advance priorities","Work with senior leadership team to set future priorities for features","Define feature requirements with stakeholders and third party vendors","Project lead of priorities to launch redesigned Newsday iOS/Android app","Work closely with Quality Assurance team to test and prioritize issues in iOS/Android apps","Coordinate between departments to evaluate the project scope of the Newsday iOS/Android app redesign"]), new Job("Editorial Development Coordinator","Newsday","May 2016 - December 2018",["Led project to launch free/metered tier of users into the Newsday iOS/Android app","Coordinated between app development and advertising team to incorporate a major corporate sponsorship into the Newsday iOS/Android app","Developed and deployed a Slack bot user to our team written in Python","Wrote a service that moves National Weather Service measurements into a database and updates Newsday's Weather Totals map","Created, developed and implemented weekly e-mail metrics reports using an Adobe Analytics API for all Newsday reporters and their editors.","Automated metrics reports for newsroom users with Adobe Analytics Report Builder","Wrote custom scripts to break down Apple News and Facebook metrics for newsroom","Worked in Excel and Google Sheets to streamline reports for Push Alerts and Newsletter metrics","Work closely with developers to improve desktop and mobile web experience as well as CMS","Managed project to integrate push alerts into our CMS for multiple apps via API call","Train new editorial staff in CMS best practices as well as new features"]), new Job("Content Coordinator","MLB Advanced Media","June 2009 - April 2016",["Maintained and prioritized requests from all 30 MLB clubs as well as YES Network, SNY and MLB Network","Produced digital social media content for use on MLB and team social media platforms","Trained, managed and supervised Production Assistants","Prepare content and coordinate media delivery for MLB & all partner sites","Oversee all video transcoding processes and perform quality control on all metadata","Produced game recap voice over packages for MLB.com and partner sites","Coordinated sponsorship content to on-demand clips on MLB.com"]
),new Job("Quality Assurance Associate","ESPN Digital Media","September 2008 - June 2009",["Regression tested releases of Fantasy Game products and updated test plans","Coordinated with Customer Care representatives and software engineers to resolve customer issues"])];

for (let i = 0; i<jobs.length; i++) {
  document.querySelector("#position" + (i + 1)).innerHTML = jobs[i].title;
  document.querySelector(".place" + (i + 1)).innerHTML = jobs[i].place;
  document.querySelector(".duration" + (i + 1)).innerHTML = jobs[i].duration;
  for (let e = 0; e<jobs[i].skills.length; e++) {
    document.querySelector("#position" + (i + 1) + "skill" + (e + 1)).innerHTML = jobs[i].skills[e];
  }
}

document.querySelector("#position2skill4").innerHTML = document.querySelector("#position2skill4").innerText.replace("Weather Totals", "<a class='externalLink' href='https://projects.newsday.com/news/weather-totals/'>Weather Totals</a>")

// document.querySelector("#position2").innerHTML = job1.title;
