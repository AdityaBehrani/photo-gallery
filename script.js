// === 1. Photos array ===
// Keep this as-is but with your own titles/descriptions if you want.
// Just make sure the filenames match exactly.
const photos = [
    { src: "photos/photo1.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo2.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo3.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo4.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo5.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo6.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo7.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo8.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo9.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo10.JPG", title: "", description: "", location: "", year: "" },

    { src: "photos/photo11.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo12.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo13.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo14.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo15.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo16.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo17.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo18.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo19.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo20.JPG", title: "", description: "", location: "", year: "" },

    { src: "photos/photo21.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo22.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo23.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo24.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo25.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo26.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo27.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo28.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo29.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo30.JPG", title: "", description: "", location: "", year: "" },

    { src: "photos/photo31.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo32.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo33.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo34.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo35.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo36.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo37.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo38.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo39.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo40.JPG", title: "", description: "", location: "", year: "" },

    { src: "photos/photo41.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo42.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo43.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo44.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo45.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo46.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo47.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo48.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo49.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo50.JPG", title: "", description: "", location: "", year: "" },

    { src: "photos/photo51.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo52.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo53.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo54.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo55.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo56.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo57.JPG", title: "", description: "", location: "", year: "" },
    { src: "photos/photo58.JPG", title: "", description: "", location: "", year: "" }
];

// === 2. DOM elements ===
const imgEl = document.getElementById("photo-img");
const titleEl = document.getElementById("photo-title");
const descEl = document.getElementById("photo-description");
const locationEl = document.getElementById("photo-location");
const yearEl = document.getElementById("photo-year");
const shuffleBtn = document.getElementById("shuffle-btn");
const yearSpan = document.getElementById("year-span");
const counterEl = document.getElementById("photo-counter-text");
const celebrationEl = document.getElementById("celebration");

// === 3. State ===
let currentIndex = -1;            // current index in photos[]
let order = [];            // shuffled order of indices
let orderIndex = 0;             // 0..photos.length-1, pointer into 'order'
let allSeenOnce = false;         // have we gone through all photos once?
let seenCount = 0;             // 0..photos.length

// Footer year
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// === Helpers ===
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initOrder() {
    order = Array.from({ length: photos.length }, (_, i) => i);
    shuffleArray(order);
    orderIndex = 0;
    allSeenOnce = false;
    seenCount = 0;
}

function updateCounter() {
    if (!counterEl) return;

    if (!allSeenOnce) {
        // show how many unique photos you've seen so far
        counterEl.textContent = `${seenCount} / ${photos.length}`;
    } else {
        // cycle complete; keep it at full
        counterEl.textContent = `${photos.length} / ${photos.length}`;
    }
}

function updateCelebration() {
    if (!celebrationEl) return;

    if (allSeenOnce) {
        celebrationEl.classList.remove("hidden");
    } else {
        celebrationEl.classList.add("hidden");
    }
}

function updateUI() {
    updateCounter();
    updateCelebration();
}

function showPhotoByIndex(index) {
    const photo = photos[index];
    if (!photo) return;

    imgEl.src = photo.src;
    imgEl.alt = photo.title || "Photo from portfolio";

    titleEl.textContent = photo.title || "";
    descEl.textContent = photo.description || "";
    locationEl.textContent = photo.location || "";
    yearEl.textContent = photo.year || "";

    currentIndex = index;
    updateUI();
}

function showNextPhoto() {
    if (!photos.length) return;

    // First pass: follow shuffled order without repeats
    if (!allSeenOnce) {
        const idx = order[orderIndex];
        showPhotoByIndex(idx);

        // Update seenCount: index is 0-based, count is 1-based
        seenCount = orderIndex + 1;

        if (orderIndex === photos.length - 1) {
            // Just showed the last unique photo
            allSeenOnce = true;
        } else {
            orderIndex += 1;
        }
    } else {
        // After the first pass, go fully random
        let idx = Math.floor(Math.random() * photos.length);

        // optional: avoid immediate repeats
        if (photos.length > 1 && idx === currentIndex) {
            idx = (idx + 1) % photos.length;
        }

        showPhotoByIndex(idx);
        seenCount = photos.length; // keep counter at max
    }
}

// === Event wiring ===
if (shuffleBtn) {
    shuffleBtn.addEventListener("click", showNextPhoto);
}
if (imgEl) {
    imgEl.addEventListener("click", showNextPhoto);
}

// === Initial load ===
if (photos.length) {
    initOrder();

    // Show the first photo in the shuffled order
    const firstIdx = order[orderIndex];
    showPhotoByIndex(firstIdx);
    seenCount = 1;

    if (orderIndex === photos.length - 1) {
        allSeenOnce = true;
    } else {
        orderIndex += 1;
    }

    updateUI();
}
