
// 
function Job(title,place,duration,skills) {
    this.title = title;
    this.place = place;
    this.duration = duration;
    this.skills = skills;
  }
  
  // array of jobs
  
  // re-work Work with senior leadership team to set future priorities for features
  // into Present to Senior Leadership team results, KPI's and set priorities for features
  // rework my topline skills to match this https://blog.aha.io/5-skills-product-managers-should-put-on-their-resume/
  
  
  
  // create JSON for jobs
  jobFeed = JSON.parse(JSON.stringify(jobs))
  
  for (let i = 0; i<jobs.length; i++) {
    document.querySelector("#position" + (i + 1)).innerHTML = jobs[i].title;
    document.querySelector(".place" + (i + 1)).innerHTML = jobs[i].place;
    document.querySelector(".duration" + (i + 1)).innerHTML = jobs[i].duration;
    for (let e = 0; e<jobs[i].skills.length; e++) {
      document.querySelector("#position" + (i + 1) + "skill" + (e + 1)).innerHTML = jobs[i].skills[e];
    }
  }
  
  // Special Cases
  // goal is to add a collapsible to these which shows images, and HTML of what happened
  // first find the ones that work for this
  
  // build external links into the resume
  document.querySelector("#position1skill1").innerHTML = document.querySelector("#position1skill1").innerText.replace("launch redesigned Newsday App", "<a class='externalLink' href='https://www.newsday.com/long-island/newsday-app-1.37263730'>launch redesigned Newsday App</a>")
  document.querySelector("#position1skill2").innerHTML = document.querySelector("#position1skill2").innerText.replace("Apple", "<a class='externalLink' href='https://apps.apple.com/us/app/newsday/id358571317'>Apple</a>")
  // document.querySelector("#position1skill2").innerHTML = document.querySelector("#position1skill2").innerText.replace("Google Play", "<a class='externalLink' href='https://play.google.com/store/apps/details?id=com.pagesuite.newsday&hl=en_US'>Google Play</a>")
  // Weather Skill
  document.querySelector("#position2skill2").innerHTML = document.querySelector("#position2skill2").innerText.replace("major corporate sponsorship", "<a class='externalLink' href='https://mediakit.newsday.com/portfolio-smart-home/'>major corporate sponsorship</a>")
  
  document.querySelector("#position2skill4").innerHTML = document.querySelector("#position2skill4").innerText.replace("Newsday's Weather Totals map", "<a class='externalLink' href='https://projects.newsday.com/news/weather-totals/'>Newsday's Weather Totals map</a>")
  document.querySelector(".position2skill4").innerHTML = "<h3>Project Summary</h3><p><li class='contain'>Created a script that checks the current National Weather Service dataset to see if there are snow totals</li><li class='contain'>Created a service in Python that scrapes the NWS page and formats data for a Carto Map</li><li class='contain'>Cleaned and sent NWS data to a map database without the need for any data cleaning by an end user</li><li class='contain'>Built a Slack real time messaging API command to activate a Slackbot's function to send data</li></p>"
  
  // Weekly Metrics Report
  document.querySelector(".position2skill5").innerHTML = "<h3>Project Summary</h3><p><li class='contain'>Created a weekly metrics report for over 100 reporters</li><li class='contain'>Wrote a Python script using an Adobe Analytics API</li><li class='contain'>Created a SQL table to control for all reporters and editors that the Python script could talk to for information (segments,e-mail addresses, etc.)</li><li class='contain'>Used Python's built-in e-mail functions to send reports across the Newsroom</li><li class='contain'>Used CrowdTangle's API to see if stories were shared on social media</li><li class='contain'>Led the develpoment of the report, onboarding of reporters to the new information that was shared between reporters and editors</li></p>"
  
  
  // collapser
  var coll = document.getElementsByClassName("collapsible");
  var a;
  
  for (a = 0; a < coll.length; a++) {
    coll[a].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  
  // Click tracking event for GA for opens
  // content
  
  var el = document.querySelector("#expander1");
  el.addEventListener("click", function() {
    console.log("NWS expander was clicked!");
    ga("send", "event", "Element Clicks", "Click", "NWS"); // trying instead of "H4"
  }, false);
  
  var el = document.querySelector("#expander2");
  el.addEventListener("click", function() {
    console.log("Metrics Report was clicked!");
    ga("send", "event", "Element Clicks", "Click", "Metrics"); // trying instead of "H4"
  }, false);
  
  // Icon Clicks
  var el = document.querySelector("body > p.links > a:nth-child(1) > i");
  el.addEventListener("click", function() {
    console.log(document.querySelector("body > p.links > a:nth-child(1) > i").classList.value.split("-")[1] + " was clicked!")
    ga("send", "event", "Element Clicks", "Click", document.querySelector("body > p.links > a:nth-child(1) > i").classList.value.split("-")[1].text); // trying instead of "H4"
  }, false);
  
  var el = document.querySelector("body > p.links > a:nth-child(2) > i");
  el.addEventListener("click", function() {
    console.log(document.querySelector("body > p.links > a:nth-child(2) > i").classList.value.split("-")[1] + " was clicked!")
    ga("send", "event", "Element Clicks", "Click", document.querySelector("body > p.links > a:nth-child(2) > i").classList.value.split("-")[1].text); // trying instead of "H4"
  }, false);
  
  var el = document.querySelector("body > p.links > a:nth-child(3) > i");
  el.addEventListener("click", function() {
    console.log(document.querySelector("body > p.links > a:nth-child(3) > i").classList.value.split("-")[1] + " was clicked!")
    ga("send", "event", "Element Clicks", "Click", document.querySelector("body > p.links > a:nth-child(3) > i").classList.value.split("-")[1].text); // trying instead of "H4"
  }, false);
  
  // document.querySelector("#position2").innerHTML = job1.title;
  
  // analytics for external links
  var captureOutboundLink = function(url) {
     ga('send', 'event', 'outbound', 'click', url, {
       'transport': 'beacon',
       'hitCallback': function(){document.location = url;}
     });
  }
  