
//using document.write to print out the image
document.write('<img id="myPic" src="FB_IMG_1694576173175.jpg" alt="Picture should be here" width="300" height="300">');

// using document.write to print out the headings
document.write("<h1> About Vishal</h1>")

document.write("<h2>Welcome to vishal's page</h2>")

//using document.write to print out a paragragh about myself
document.write('<p>Detail-oriented cybersecurity professional dedicated to protecting organizations and the people they serve. Knowledgeable about NIST frameworks and able to implement security controls to ensure compliance with international regulations related to data protection. Expertise with identifying threats, risks, and vulnerabilities; security hardening; threat modeling; and incident escalation and response. Proficient in the use of Linux command line, SQL, and Python. Strong communication and problem-solving skills.</p>')


//Using a for loop to create the list of things I like
const footballers = ["Messi", "Ronaldinho", "Beckham", "Zlatan"];
let names = "<ol>";
for (let i = 0; i < footballers.length; i++) {
    names += "<li>" + footballers[i] + "</li>";
 }
names +="</ol>"
document.write(names)

//Tossing some math
// Math.round() - Rounds a number to the nearest integer
let roundedNumber = Math.round(4.7);
document.write("Rounded Number:", roundedNumber); // Output: 5