// -----------[ FUNCTION TO CHANGE THE VIDEO IN THE FIRST SECTION ] --------------

const videoList = ["png/video-1.mp4", "png/video-2.mp4", "png/video-3.mp4"]; // Array of video file names
const headingList = ["REVUELTO & MAX VERSTAPPEN", "HURACAN CONQUERS TERRIAN", "THE FUTURE OF LAMBORGHINI"]; // Array of headings for each video
const sublineList = ["POWER MEETS PERFECTION", "SPEED BEYOND LIMITS", "DESIGN IN THE MOTION"]; // Array of sublines for each video
let currentIndex = 0; // Variable to keep track of the current video index

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById("section-1-video"); // Get the video element by its ID
    const heading = document.getElementById("video-heading"); // Get the heading element by its ID
    const subline = document.getElementById("video-subline"); // Get the subline element by its ID
    // Function to create typewriter effect
    function typeWriter(element, text, speed = 50) {
        element.textContent = ''; // Clear existing text
        element.style.opacity = '1'; // Ensure element is visible
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }
    // Function to create fade-in effect
    function fadeIn(element, text, duration = 1000) {
        element.textContent = text; // Set the text
        element.style.opacity = '0'; // Start with transparent
        element.style.transition = `opacity ${duration}ms ease-in-out`; // Set transition

        // Force a reflow to ensure the opacity change is registered
        element.offsetHeight;

        // Fade in
        element.style.opacity = '1';
    }

    function nextVideo() {  // Function to change the video to the next one in the list
        currentIndex++; // increment the index to point to the next video

        if (currentIndex >= videoList.length) { // if we reach the end of the list, loop back to the start
            currentIndex = 0;
        }

        video.src = videoList[currentIndex]; // Set the source of the video to the next video in the list

        // Apply typewriter effect to heading
        typeWriter(heading, headingList[currentIndex], 80);

        // Apply fade-in effect to subline with a slight delay
        setTimeout(() => {
            fadeIn(subline, sublineList[currentIndex], 1200);
        }, 500); // 500ms delay after heading starts typing

        video.load(); // Load the new video source
        video.play(); // Play the new video
    }
    // Initialize first heading and subline with effects
    typeWriter(heading, headingList[currentIndex], 80);
    setTimeout(() => {
        fadeIn(subline, sublineList[currentIndex], 1200);
    }, 500);

    video.addEventListener("ended", nextVideo); // Add event listener for when video ends
    window.nextVideo = nextVideo; // Make function available globally for button onclick
});

AOS.init();



const collage = document.getElementById('collage');
let sliding = false;

const labels = ["Hurracan", "Temerario", "Urus", "Revuelto"];

function slide(direction) {
    if (sliding) return;
    sliding = true;

    const boxWidth = collage.children[0].offsetWidth + 10; // image + margin
    const moveX = direction === 'right' ? -boxWidth : boxWidth;

    collage.style.transition = 'transform 0.6s ease-in-out';
    collage.style.transform = `translateX(${moveX}px)`;

    setTimeout(() => {
        collage.style.transition = 'none';
        collage.style.transform = 'translateX(0)';
        if (direction === 'right') {
            collage.appendChild(collage.firstElementChild);
        } else {
            collage.insertBefore(collage.lastElementChild, collage.firstElementChild);
        }
        updateFocus();
        sliding = false;
    }, 600);
}

function updateFocus() {
    const boxes = document.querySelectorAll('.image-box');
    boxes.forEach(box => box.classList.remove('focused'));
    boxes[3].classList.add('focused');
}

updateFocus();


const modelData = {
    temerario: {
        name: "TEMERARIO",
        image: "png/Temerario.png",
        power: "Power: 920 CV",
        speed: "Top Speed: 343 KM/H",
        acceleration: "0-100 KM/H in 2.7s"
    },
    revuelto: {
        name: "REVUELTO",
        image: "png/Revuelto.png",
        power: "Power: 1015 CV",
        speed: "Top Speed: 350 KM/H",
        acceleration: "0-100 KM/H in 2.5s"
    },
    uruss: {
        name: "URUS S",
        image: "png/Urus S.png",
        power: "Power: 657 CV",
        speed: "Top Speed: 305 KM/H",
        acceleration: "0-100 KM/H in 3.3s"
    },
    urusse: {
        name: "URUS SE",
        image: "png/Urus Se.png",
        power: "Power: 657 CV",
        speed: "Top Speed: 305 KM/H",
        acceleration: "0-100 KM/H in 3.3s"
    },
    urusperformente: {
        name: "URUS PERFORMANTE",
        image: "png/Urus Performante.png",
        power: "Power: 657 CV",
        speed: "Top Speed: 305 KM/H",
        acceleration: "0-100 KM/H in 3.3s"
    },
    huracansto: {
        name: "HURACÁN STO",
        image: "png/Huracan STO.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    huracantecnica: {
        name: "HURACÁN TECNICA",
        image: "png/Huracan Tecnica.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    huracansterrato: {
        name: "HURACÁN STERRATO",
        image: "png/Huracan Sterrato.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    huracanevo: {
        name: "HURACÁN EVO SPYDER",
        image: "png/Huracan EVO Spyder.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    countach: {
        name: "COUNTACH LPI 804",
        image: "png/Countach.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    sianfkp: {
        name: "SIAN FKP 37",
        image: "png/Sian FKP.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    sianroadster: {
        name: "SIAN ROADSTER",
        image: "png/Sian Roadster.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    terzo: {
        name: "TERZO MILLENNIO",
        image: "png/Terzo Millanio.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    asterion: {
        name: "ASTERION",
        image: "png/Asterion.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    },
    estoque: {
        name: "ESTOQUE ",
        image: "png/Estoque.png",
        power: "Power: 640 CV",
        speed: "Top Speed: 325 KM/H",
        acceleration: "0-100 KM/H in 2.9s"
    }
};

const dropdown = document.getElementById('dropdown');
const modelList = document.getElementById('model-list');

modelList.querySelectorAll('li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const model = modelData[item.dataset.model];
        document.getElementById('model-image').src = model.image;
        document.getElementById('model-name').innerText = model.name;
        document.getElementById('model-power').innerText = model.power;
        document.getElementById('model-speed').innerText = model.speed;
        document.getElementById('model-acceleration').innerText = model.acceleration;

        dropdown.classList.add('hovering-model');
    });

    item.addEventListener('mouseleave', () => {
        // Use timeout to allow hover transition to model preview
        setTimeout(() => {
            if (!dropdown.matches(':hover')) {
                dropdown.classList.remove('hovering-model');
            }
        }, 100);
    });
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('hovering-model');
});

const images = [
    {
        src: "png/select-temerario.webp",
        title: "CREATE YOUR TEMERARIO",
        text: "Combined energy consumption: 26,8 kWh/100 Km plus 11,2 l/100km; Combined CO2 emissions: 272 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 14 l/100km."
    },
    {
        src: "png/select-revuelto.webp",
        title: "CREATE YOUR REVUELTO",
        text: "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km"
    },
    {
        src: "png/select-urus.webp",
        title: "CREATE YOUR URUS",
        text: "Urus Performante, Urus S, Urus SE: Combined energy consumption: 39,5 kWh/100 Km plus 14,1-5,71 l/100km; Combined CO2 emissions: 320-140 g/km; Combined CO2 efficiency class: E-G; Combined fuel consumption with discharged battery: 12,9 l/100km; CO2 class with discharged battery: G"
    }
];

let current = 0;

function showImage(index) {
    current = index;
    document.getElementById("image").src = images[current].src;
    document.getElementById("imageTitle").textContent = images[current].title;
    document.getElementById("imageText").textContent = images[current].text;

    // Remove active class from all buttons
    for (let i = 0; i < images.length; i++) {
        document.getElementById("btn" + i).classList.remove("active");
    }
    // Add active class to the current button
    document.getElementById("btn" + current).classList.add("active");
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

// Load the first image initially
window.onload = () => showImage(0);