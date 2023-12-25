function toggleForm() {
  var form = document.getElementById("contactForm");
  form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
  document.getElementById("messageContainer").innerHTML = "";
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone-number").value;

  if (name === "" || email === "" || phoneNumber === "") {
      alert("Please fill in all fields.");
      return;
  }

  var submissionMessage =
      "Submitted Information:\n\nName: " + name + "\nEmail: " + email + "\nPhone Number: " + phoneNumber;
  alert(submissionMessage);

  var thankYouMessage = "Your form completely submitted, " + name + ", I will be calling you!";
  document.getElementById("messageContainer").innerHTML = thankYouMessage;

  var form = document.getElementById("contactForm");
  form.style.display = "none";
  document.getElementById("contactForm").reset();
}

function openCourse(course) {
  var buttonToUrlMap = {
      "artificial intelligence": "https://www.coursera.org/courses?query=artificial%20intelligence",
      "web development": "https://www.mygreatlearning.com/web-development/free-courses",
      "programming": "https://learnprogramming.online/",
      "cyber security": "https://www.coursera.org/courses?query=cybersecurity",
  };

  var lowerCaseCourse = course.toLowerCase();

  if (buttonToUrlMap.hasOwnProperty(lowerCaseCourse)) {
      window.open(buttonToUrlMap[lowerCaseCourse], '_blank', 'width=900,height=600');
  } else {
      console.error("Unknown button clicked:", course);
  }
}