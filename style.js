// Function to handle navigation color change
function changeColor(sectionId) {
    const sections = ["home", "plan", "program", "blog", "contact"];
    sections.forEach(function(id) {
        document.getElementById(id).style.color = id === sectionId ? "rgb(24, 234, 13)" : "white";
    });
}

// Navigation functions
function HOME() {
    changeColor("home");
}

function PROGRAM() {
    changeColor("program");
}

function PLAN() {
    changeColor("plan");
}

function BLOG() {
    changeColor("blog");
}

function CONTACTUS() {
    changeColor("contact");
}

// Form submission function
function submit() {
    let Name = document.getElementById("Name");
    let Number = document.getElementById("Number");

    if (Name.value === "") {
        alert("Please Enter Your Name");
    } else if (Number.value === "") {
        alert("Please Enter Number");
    } else {
        alert("Thanks For Join: " + Name.value);
    }
}

// Logo click event
document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo');
    logo.addEventListener('click', function() {
        logo.classList.toggle('clicked');
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const crdElements = document.querySelectorAll('.ourprogram .crd');
    crdElements.forEach((crd) => {
        if (isInViewport(crd)) {
            crd.classList.add('slide-in');
        } else {
            crd.classList.remove('slide-in');
        }
    });

    const plansSection = document.querySelector('.plan');
    const blogSection = document.querySelector('.blog');

    handleSectionAnimation(plansSection, '.plan .card');
    handleSectionAnimation(blogSection, '.blog .Blogcard');

    // Detect elements entering from the bottom
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomElements = document.querySelectorAll('.animate-on-scroll-bottom');

    bottomElements.forEach(function(element) {
        if (scrollPosition > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();
