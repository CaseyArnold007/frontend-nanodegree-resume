
var bio = {
"name" : "Casey Arnold",
 "role" : "Web Developer",
 "contacts" : {
 "mobile" : "318-415-9581",
 "email" : "caseyarnold567@gmail.com",
 "github" : "CaseyArnold007",
 "twitter" : "caseyarnold567",
 "location" : "Shreveport, Louisiana"
 },
"welcomeMessage" : "Life is a Journey, not a Guided Tour",
"skills" : ["Awesome Dad", "Retired Navy Chief", "Electronics Guru", "3D Printing Ace"],
 "bioPic" : "./images/Family.jpg"
}

//Work History

var work = {
  "jobs": [
    
    
    {
      "employer": "AT&T",
      "title": "Technician II Switch- Wireless",
      "location": "Shreveport, LA",
      "dates": "April 2012-Current",
      "description": "Responsible for the maintenance, engineering, and development of the 2G/3G/LTE AT&T Cellular Network for North Louisiana."
    },
    {
      "employer": "AT&T/BellSouth",
      "title": "Central Office Supervisor- Landline Operations",
      "location": "Shreveport, LA",
      "dates": "March 2000-April 2012",
      "description": "Central Office Supervisor responsible for 35 Central Offices and 34 Electronic Technicians."
    },
    {
      "employer": "US Navy Reserve",
      "title": "Chief Electronics Technician",
      "location": ["Dam Neck, VA"],
      "dates": "July 2000 - August 2014",
      "description": "Navy Instructor- Center for Naval Leadership / Center for Personal and Professional Development",
    },
    {
      "employer": "US Navy",
      "title": "Electronics Technician",
      "location": ["Washington, DC"],
      "dates": "December 1996 - October 1999",
      "description": "Presidential SATCOM Technician- White House Communications Agency",
    },
    {
      "employer": "US Navy",
      "title": "Electronics Technician",
      "location": ["San Diego, CA,"],
      "dates": "January 1990 - December 1996",
      "description": "Communications Supervisor- USS Harry W. Hill (DD-986)",
    },
  ]
};

//Projects

var projects = {
      "projects": [
    {
      "title": "3D Printer Project",
      "date": "2012-Current",
      "description": "Desigining various items in Cheetah3D, and constructing the finished product with a Printrbot Plus 3D Printer.",
      "image": "./images/Printer.jpg",
    },
    ]
};

	
//Education

var education = {
    "schools": [

{
  "name": "Naval War College - Senior Enlisted Academy",
  "dates": "2013",
  "location": "Newport, RI",
  "major": "Senior Enlisted Leadership Program",
},
    {
  "name": "Excelsior College",
	"dates": "1996-1999",
	"location": "Albany, NY",
  "major": "Applied Sciences",
}

  ]
  };

//Online Course

  var onLineCourse = {
    "school": [

    {
  "title": "Front End Web Developer",
  "school": "Udacity",
  "dates": "2014",
  "url": "https://www.udacity.com/course/nd001",
}
  ]
  };

//Name & Role

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

//Contact 

var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);
var formattedSkills = HTMLskills.replace("%data%", bio["skills"]);




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart);



var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);





function displayJobs () {

//Work History

for (job in work.jobs){

  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  
  var formattedTitle = HTMLworkTitle .replace("%data%", work.jobs[job].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  
  $(".work-entry:last").append(formattedEmployerTitle);
  
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  
  $(".work-entry:last").append(formattedDates);
  
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  
  $(".work-entry:last").append(formattedWorkLocation);
  
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  
  $(".work-entry:last").append(formattedWorkDescription);
}
};

//Projects

function displayProjects (){

for (project in projects.projects){

$("#projects").append(HTMLprojectStart);

  
  var formattedProjTitle = HTMLprojectTitle .replace("%data%", projects.projects[project].title);

  var formattedProjDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);

  var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
  
  $(".project-entry:last").append(formattedProjTitle);

  $(".project-entry:last").append(formattedProjDate);
  
  $(".project-entry:last").append(formattedProjDescription);

  $(".project-entry:last").append(formattedImage);

}
};

//Education

function displayEducation (){

for (school in education.schools){

$("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName .replace("%data%", education.schools[school].name);

  var formattedSchoolDates = HTMLschoolDates .replace("%data%", education.schools[school].dates);

  var formattedSchoolLocation = HTMLschoolLocation .replace("%data%", education.schools[school].location);

  var formattedSchoolMajor = HTMLschoolMajor .replace("%data%", education.schools[school].major);

  
  $(".education-entry:last").append(formattedSchoolName);
  $(".education-entry:last").append(formattedSchoolDates);
  $(".education-entry:last").append(formattedSchoolLocation);
  $(".education-entry:last").append(formattedSchoolMajor);

    }
};

//On Line Education

function displayOnlineSchool (){

for (OLschools in onLineCourse.school){

$(".education-entry:last").append(HTMLonlineClasses);
$(".education-entry:last").append(formattedOLSchTitle);

  var formattedOLSchTitle = HTMLschoolName .replace("%data%", onLineCourse.school[OLschools].title);

  var formattedOLSchool = HTMLschoolDates .replace("%data%", onLineCourse.school[OLschools].school);

  var formattedOLSchDates = HTMLschoolLocation .replace("%data%", onLineCourse.school[OLschools].dates);

  var formattedOLSchUrl = HTMLschoolMajor .replace("%data%", onLineCourse.school[OLschools].url);

  
  
  $(".education-entry:last").append(formattedOLSchool);
  $(".education-entry:last").append(formattedOLSchDates);
  $(".education-entry:last").append(formattedOLSchUrl);
  
    }
};

$("#mapDiv").append(googleMap);
$('#main').append(internationalizeButton);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);


displayJobs();
displayProjects();
displayEducation();
displayOnlineSchool();













