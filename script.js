// 1. Your photo data
//    Update this array with all ~50 photos.
//    Each object should point to an image in the `photos/` folder.
const photos = [
    {
        src: "photos/photo1.JPG",
        title: "asdf",
        description: "Soft light spilling across a quiet street just after sunrise.",
        location: "Somewhere, Earth",
        year: "2024"
    },
    {
        src: "photos/photo2.JPG",
        title: "Neon night",
        description: "Rainy streets, neon reflections, and a single passerby.",
        location: "Downtown",
        year: "2023"
    },
    {
        src: "photos/photo3.JPG",
        title: "Quiet horizon",
        description: "Minimalist seascape with a single boat barely visible.",
        location: "Coastline",
        year: "2022"
    }
    // 👉 Add the rest of your photos here
];

const imgEl = document.getElementById("photo-img");
const titleEl = document.getElementById("photo-title");
const descEl = document.getElementById("photo-description");
const locationEl = document.getElementById("photo-location");
const yearEl = document.getElementById("photo-year");
const shuffleBtn = document.getElementById("shuffle-btn");
const yearSpan = document.getElementById("year-span");

let currentIndex = -1;

// Set footer year
yearSpan.textContent = new Date().getFullYear();

// 2. Pick a random index that's not the same as currentIndex
function getRandomIndex() {
    if (photos.length <= 1) return 0;
    let idx;
    do {
        idx = Math.floor(Math.random() * photos.length);
    } while (idx === currentIndex);
    return idx;
}

// 3. Render a photo to the page
function showPhoto(index) {
    const photo = photos[index];
    if (!photo) return;

    imgEl.src = photo.src;
    imgEl.alt = photo.title || "Photo from portfolio";

    titleEl.textContent = photo.title || "Untitled";
    descEl.textContent =
        photo.description || "No description added yet, but the vibes are immaculate.";

    locationEl.textContent = photo.location || "";
    yearEl.textContent = photo.year || "";

    currentIndex = index;
}

// 4. Shuffle handler
function showRandomPhoto() {
    if (!photos.length) return;
    const idx = getRandomIndex();
    showPhoto(idx);
}

// Wire up events
shuffleBtn.addEventListener("click", showRandomPhoto);

// Optional: clicking the photo also shuffles
imgEl.addEventListener("click", showRandomPhoto);

// Initial load
showRandomPhoto();
