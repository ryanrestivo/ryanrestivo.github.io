function Job(title,place,duration) {
  this.title = title;
  this.place = place;
  this.duration = duration;
}


//var job0 = new Job("Project Manager, Mobile Apps","Newsday","January 2019 - Present");
//var job1 = new Job("Editorial Development Coordinator","Newsday","May 2016 - December 2018");
//var job2 = new Job("Content Coordinator","MLB Advanced Media","June 2009 - April 2016");
//var job3 = new Job("Quality Assurance Associate","ESPN Digital Media","September 2008 - June 2009");

// array of jobs
jobs = [new Job("Project Manager, Mobile Apps","Newsday","January 2019 - Present"), new Job("Editorial Development Coordinator","Newsday","May 2016 - December 2018"), new Job("Content Coordinator","MLB Advanced Media","June 2009 - April 2016"),new Job("Quality Assurance Associate","ESPN Digital Media","September 2008 - June 2009")];

for (let i = 0; i<jobs.length; i++) {
  document.querySelector("#position" + (i + 1)).innerHTML = jobs[i].title;
  document.querySelector(".place" + (i + 1)).innerHTML = jobs[i].place;
}

