const aboutMeString = "Hi I'm Jadrian, nice to meet you! I'm a software developer who tries to bring teamwork \
and flexibility to every team I'm a part of. I can't always chose the technology I work \
with, but having moderate experience with many different technologies helps me to \
assimilate to new teams. I value fostering strong team environments where every \
member of the feels comfortable as all perspectives are valuable. I love \
leveraging tools (such as automated testing) to the team's advantage to create robust \
software solutions.";

const aboutMeDetailed = "While I have worked with many different programming languages and technologies in the \
past, I am strongest with: JS, Python, Java, HTML, CSS, and SQL. I have experience with \
each of the major 3 flavors of operating systems (Mac, Linux, Windows) as well as experience \
developing both backend API's and front end pages/components. I'm no security expert, but I \
am confident in my ability to avoid the most common security pitfalls (as described in by OWASP) \
e.g. Cross-Site scripting (CSS) attacks or Cross-site request forgery attacks (XSRF).";

const aboutMe = () => {
    return aboutMeString;
};
const aboutMeDetails = () => {
    return aboutMeDetailed;
};

module.exports = {
    aboutMe: aboutMe,
    aboutMeDetails: aboutMeDetails
};
