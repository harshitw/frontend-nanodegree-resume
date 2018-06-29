var bio = {
	"name": "Harshit Awasthi",
	"role": "Artificial Intelligence and Deep Learning",
	"contacts": {
		"email": "harshit.awasthi33@gmail.com",
		"github": "harshitw",
		"twitter": "@_harshitawasthi",
		"location": "Kanpur, UP, India"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently studying Electrical engineering at IIT Kampur, India. I love solving problems using Artificial "+
			  "Intelligence and Deep Learning. Thanks for stopping by!",
	"skills": ["Python", "Tensorflow", "Keras", "Artificial Intelligence", "Deep Learning"]
};

var work = {
	"jobs": [
		{
			"employer": "Medikoe",
			"title": "Winter Internship",
			"location": "Bangalore, India",
			"datesWorked": "December 2017",
			"description": "During my one month winter vacation, I joined this healthcare startup based in Bangalore since I was curious to get a hands on exposure "+
				"while working in a Startup Community. My work involved discovering AI use cases relating to healthcare and exploiting Machine Learning "+
				"and quickly becoming familiar with business needs. I "+
				"collaborated closely and came up with few ideas related to Computer Vision and also implemented a few using Tensorflow and OpenCV."
		},
		{
			"employer": "Canada based AI startup",
			"title": "Free Lancing",
			"location": "Kanpur, India",
			"datesWorked": "May 2018 - present",
			"description": "My primary responsibilities involve all aspects of developing and building AI related " +
				"applications in a variety of business use cases using python with deep learning frameworks like Tensorflow " +
				"and Keras. This work includes, but is not limited to, dataset design, application architecture design, high level and " +
				"low level frameworks as well as formulation of strategies to come with solutions. I am also very involved " +
			"in encouraging communication and collaboration with the team. "
		}
	]
};

var education = {
	"schools": [
		{ "name": "Indian Institute of Technology Kanpur",
			"datesAttended": "2015 - present",
			"location": "Kanpur, UP, India",
			"degree": "Bachelor of Technology",
			"major": "Electrical Engineering",
			"minor": "ART",
			"url": "www.iitk.ac.in"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Artificial Intelligence Nanodegree",
			"completed": "August 2018",
			"url": "https://in.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898"
		},
		{ "school": "Udacity",
			"title": "Deep Learning Nanodegree",
			"completed": "April 2018",
			"url": "https://in.udacity.com/course/deep-learning-nanodegree--nd101"
		},
    { "school": "Udacity",
			"title": "Artificial Intelligence for robotics",
			"completed": "July 2018",
			"url": "https://in.udacity.com/course/artificial-intelligence-for-robotics--cs373"
		},
		{ "school": "Udacity",
			"title": "Scalable Microservises with Kubernetes",
			"completed": "July 2018",
			"url": "https://in.udacity.com/course/scalable-microservices-with-kubernetes--ud615"
		},	
		{ "school": "Udacity",
			"title": "High Performance Computing",
			"completed": "August 2014",
			"url": "https://in.udacity.com/course/high-performance-computing--ud281"
		},
    { "school": "Udacity",
			"title": "Android Development For Beginners",
			"completed": "Lune 2016",
			"url": "https://classroom.udacity.com/courses/ud837"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "AIND",
			"datesWorked": "May 2018 - August 2018",
			"description": "4 major projects along with some minor projects as part of Udacity's Artificial Intelligence Nanodegree. "
			"images": ["images/frogger.jpg"],
			"url": "https://github.com/harshitw?tab=repositories"
		},
		{
			"title": "DLND",
			"datesWorked": "December 2017 - April 2018",
			"description": "5 major projects with various mini projects as part of Udacity's Deep Learning Nanodegree. "
			"images": ["images/portfolio.jpg"],
			"url": "https://github.com/harshitw?tab=repositories"
		},
		{
			"title": "Computer Vision",
			"datesWorked": "July 2017 - November 2017",
			"description": "5 major projects with some projects related to image processing all based on Practical Python and OpenCV book. "
			"images": ["images/web.jpg"],
			"url": "https://github.com/harshitw?tab=repositories"
		}
    {
			"title": "NLP",
			"datesWorked": "May 2018 - July 2018",
			"description": "Created an online web application as a part of startup using Tensorflow and Tensorflow Serving with Javascript based Frontend and a Flask application to handle requests. ",
			"images": ["images/web.jpg"],
			"url": "https://github.com/harshitw?tab=repositories"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'C',
				color: 'rgba(255, 0, 0, .5)',
				data: [[2017, 4], [2016, 12]]
			},
			{
				name: 'Python',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 5], [2002, 3], [2008, 4], [2005, 2]]
			},
			{
				name: 'Machine Learning',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 2]]
			},
			{
				name: 'Deep Learning',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2016, 12], [2014, 12], [2013, 12], [2012, 12], [2011, 4]]
			},
			{
				name: 'Android Studio',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8], [2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
			},
			{
				name: 'Artificial Intelligence',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2014, 1], [2013, 1], [2012, 1], [2011, 1]]
			},
			{
				name: 'OpenCV',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2016, 12], [2013, 2]]
			},
			{
				name: 'Keras/Tensorflow',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2010, 2], [2006, 4]]
			},
			{
				name: 'Matlab',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2004, 12], [2003, 6]]
			},
			{
				name: 'Computer Vision',
				color: 'rgba(0, 102, 0, .5)',
				data: [[1997, 8], [2004, 2], [2008, 4]]
			},
			{
				name: 'Tensorflow',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2013, 2.5]]
			},
			{
				name: 'OpenAI Gym',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2011, 3], [2013, 1], [2012, 1], [2014, 1]]
			}]
	});
});


$("#mapDiv").append(googleMap);
