// 1. Your photos array (keep what you already have)
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

// 2. DOM elements
const imgEl = document.getElementById("photo-img");
const titleEl = document.getElementById("photo-title");
const descEl = document.getElementById("photo-description");
const locationEl = document.getElementById("photo-location");
const yearEl = document.getElementById("photo-year");
const shuffleBtn = document.getElementById("shuffle-btn");
const yearSpan = document.getElementById("year-span");
const progressEl = document.getElementById("photo-progress-text");
const celebrationEl = document.getElementById("celebration");

// 3. State
let currentIndex = -1;          // index into photos[]
let order = [];                 // shuffled order of indices (0..n-1)
let orderPos = -1;              // position within 'order'
let allSeenOnce = false;        // true after we've gone through entire order once

// Footer year
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Shuffle helper (Fisher–Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialize the non-repeating order
function initOrder() {
    order = Array.from({ length: photos.length }, (_, i) => i);
    shuffleArray(order);
    orderPos = 0;
    allSeenOnce = false;
}

// Update progress text & celebration banner
function updateProgress() {
    if (!progressEl) return;

    if (!allSeenOnce) {
        // e.g., "7 / 58"
        progressEl.textContent = `${orderPos + 1} / ${photos.length}`;
    } else {
        // In pure random mode, you can keep showing the last count or change text
        progressEl.textContent = `${photos.length} / ${photos.length}`;
    }

    if (celebrationEl) {
        if (!allSeenOnce && orderPos === photos.length - 1) {
            // Just reached the last unique photo
            celebrationEl.classList.remove("hidden");
        } else if (allSeenOnce) {
            // Celebration stays visible in random mode (or hide it if you prefer)
            celebrationEl.classList.remove("hidden");
        } else {
            celebrationEl.classList.add("hidden");
        }
    }
}

// Render a photo by direct index into photos[]
function showPhotoByIndex(index) {
    const photo = photos[index];
    if (!photo) return;

    imgEl.src = photo.src;
    imgEl.alt = photo.title || "Photo from portfolio";

    titleEl.textContent = photo.title || "Untitled";
    descEl.textContent = photo.description || "";
    locationEl.textContent = photo.location || "";
    yearEl.textContent = photo.year || "";

    currentIndex = index;
    updateProgress();
}

// Main "next photo" logic
function showNextPhoto() {
    if (!photos.length) return;

    // If we have not gone through all photos once, follow the shuffled order
    if (!allSeenOnce) {
        // Safety: if order is empty for some reason, re-init
        if (!order.length || orderPos < 0 || orderPos >= order.length) {
            initOrder();
        }

        const idx = order[orderPos];
        showPhotoByIndex(idx);

        // If we're at the last element in the order, flag that we've seen all
        if (orderPos === order.length - 1) {
            allSeenOnce = true;
        } else {
            orderPos += 1;
        }
    } else {
        // Pure random mode (allow duplicates)
        let idx = Math.floor(Math.random() * photos.length);

        // Optional: avoid repeating the exact same photo twice in a row
        if (photos.length > 1 && idx === currentIndex) {
            idx = (idx + 1) % photos.length;
        }

        showPhotoByIndex(idx);
    }
}

// Wire up events
if (shuffleBtn) {
    shuffleBtn.addEventListener("click", showNextPhoto);
}
if (imgEl) {
    imgEl.addEventListener("click", showNextPhoto);
}

// Initial load: start with a shuffled order and show first random photo
if (photos.length) {
    initOrder();
    const firstIdx = order[orderPos];
    showPhotoByIndex(firstIdx);

    // Advance position for the next click
    if (orderPos < order.length - 1) {
        orderPos += 1;
    } else {
        allSeenOnce = true;
    }
}