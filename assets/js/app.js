let dropdownButton = document.querySelector("header .pc_navbar  .first_line .right .dropdown button");
let dropdownContent = document.querySelector("header .pc_navbar  .first_line .right .dropdown .content");
let navbarOpenButton = document.querySelector(".open_button");
let navbarCrossButton = document.querySelector(".crossbutton");
let openMenu = document.querySelector(".mobile_navbar_temp");
let main_ = document.querySelector("body .main")
let isDropdownVisible = false;


const container = document.querySelector('.horizontal-scroll');
const items = document.querySelectorAll('.horizontal-scroll .items');
const dotsContainer = document.querySelector('.scroll-dots');

let isDown = false;
let startX;
let scrollLeft;




dropdownButton.addEventListener('click', () => {
    if (!isDropdownVisible) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
    isDropdownVisible = !isDropdownVisible;

    
});
// Hide dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.dropdown')) {
        dropdownContent.style.display = "none";
        isDropdownVisible = false;
    }
});





// Function to check if the clicked element is inside the menu
function isClickedInsideMenu(element) {
    return openMenu.contains(element) || navbarOpenButton.contains(element);
}


// Event listener for opening the menu
navbarOpenButton.addEventListener("click", () => {
    console.log("Hello");
    openMenu.style.display = "flex";
    openMenu.style.transition = ".5s"
    openMenu.style.animation = "harry1 .4s forwards ease-in-out";
    main_.disabled = false;
    document.body.classList.add('no-scroll');
});

// Event listener for closing the menu when clicking anywhere else on the document
document.addEventListener("click", (event) => {
    if (!isClickedInsideMenu(event.target)) {
        openMenu.style.display = "none";
        main_.disabled = false;
        document.body.classList.remove('no-scroll');
    }
});

// Event listener for closing the menu when clicking the cross button
navbarCrossButton.addEventListener("click", () => {
    console.log("Hello");
    openMenu.style.display = "none";
    main_.disabled = false;
    document.body.classList.remove('no-scroll');
});





container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // You can adjust the speed by changing this multiplier
    container.scrollLeft = scrollLeft - walk;
});





container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // You can adjust the speed by changing this multiplier
    container.scrollLeft = scrollLeft - walk;
});

// Add dots dynamically

const dotCount = 3; // Change the number of dots here

for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        const scrollPosition = i * (container.scrollWidth / dotCount);
        container.scrollLeft = scrollPosition;
        updateDots();
    });
    dotsContainer.appendChild(dot);
}

function updateDots() {
    const dotIndex = Math.floor(container.scrollLeft / (container.scrollWidth / items.length));
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === dotIndex) {
            dot.classList.add('active1');
        } else {
            dot.classList.remove('active1');
        }
    });
}