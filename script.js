// === 1. Photos array ===
// Keep this as-is but with your own titles/descriptions if you want.
// Just make sure the filenames match exactly.
const photos = [
    { src: "photos/photo1.JPG", title: "Kiyomizu-Dera Temple", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo2.JPG", title: "Nijo Castle", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo3.JPG", title: "Mt. Fuji", description: "", location: "Fuji-Kawaguchiko, Japan", year: "2025" },
    { src: "photos/photo4.JPG", title: "Mac and Jeezy", description: "", location: "Haymarket, USA", year: "2021" },
    { src: "photos/photo5.JPG", title: "Frozen Berries", description: "", location: "Haymarket, USA", year: "2020" },
    { src: "photos/photo6.JPG", title: "Ice Queen", description: "", location: "Haymarket, USA", year: "2020" },
    { src: "photos/photo7.JPG", title: "Split", description: "", location: "Haymarket, USA", year: "2020" },
    { src: "photos/photo8.JPG", title: "Confusion", description: "", location: "Haymarket, USA", year: "2020" },
    { src: "photos/photo9.JPG", title: "No Time", description: "", location: "Haymarket, USA", year: "2020" },
    { src: "photos/photo10.JPG", title: "In Time", description: "", location: "Haymarket, USA", year: "2020" },

    { src: "photos/photo11.JPG", title: "Purdue", description: "", location: "West Lafayette, USA", year: "2022" },
    { src: "photos/photo12.JPG", title: "Simon", description: "", location: "West Lafayette, USA", year: "2022" },
    { src: "photos/photo13.JPG", title: "Simon Closeup", description: "", location: "West Lafayette, USA", year: "2022" },
    { src: "photos/photo14.JPG", title: "40k Viewed on Google Maps", description: "", location: "Lafayette, USA", year: "2022" },
    { src: "photos/photo15.JPG", title: "Field of Views", description: "", location: "Lafayette, USA", year: "2022" },
    { src: "photos/photo16.JPG", title: "Solo Leafing", description: "", location: "West Lafayette, USA", year: "2022" },
    { src: "photos/photo17.JPG", title: "Harbor", description: "", location: "National Harbor, USA", year: "2022" },
    { src: "photos/photo18.JPG", title: "2 Suns", description: "", location: "National Harbor, USA", year: "2022" },
    { src: "photos/photo19.JPG", title: "Play (above) ground", description: "", location: "Chicago, USA", year: "2023" },
    { src: "photos/photo20.JPG", title: "Embers", description: "Did you really think I was going to name it anything else?", location: "Haymarket, USA", year: "2023" },

    { src: "photos/photo21.JPG", title: "The Hills", description: "", location: "Los Angeles, USA", year: "2024" },
    { src: "photos/photo22.JPG", title: "Shadows", description: "", location: "Los Angeles, USA", year: "2024" },
    { src: "photos/photo23.JPG", title: "Dume 1", description: "", location: "Malibu, USA", year: "2024" },
    { src: "photos/photo24.JPG", title: "Life goes on", description: "", location: "Osaka, Japan", year: "2025" },
    { src: "photos/photo25.JPG", title: "Itadakimasu!", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo26.JPG", title: "Reflection", description: "", location: "Osaka, Japan", year: "2025" },
    { src: "photos/photo27.JPG", title: "Smoking Monkeys", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo28.JPG", title: "Isolation", description: "", location: "West Lafayette, USA", year: "2022" },
    { src: "photos/photo29.JPG", title: "1 Fish", description: "", location: "Osaka, Japan", year: "2025" },
    { src: "photos/photo30.JPG", title: "Where it leads", description: "", location: "Kyoto, Japan", year: "2025" },

    { src: "photos/photo31.JPG", title: "Over the Horizon", description: "", location: "Osaka, Japan", year: "2025" },
    { src: "photos/photo32.JPG", title: "Sanjusangen-do Shrine", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo33.JPG", title: "In Stone", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo34.JPG", title: "Bamboo Prayers", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo35.JPG", title: "Kinkakujicho Temple", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo36.JPG", title: "Bonsai", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo37.JPG", title: "Shitennoji Temple", description: "", location: "Osaka, Japan", year: "2025" },
    { src: "photos/photo38.JPG", title: "Monkeys Smoking", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo39.JPG", title: "2 Fish", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo40.JPG", title: "Serenity", description: "", location: "Kyoto, Japan", year: "2025" },

    { src: "photos/photo41.JPG", title: "Nijo Castle", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo42.JPG", title: "Capitol Reflecting Pool", description: "", location: "Washington D.C., USA", year: "2024" },
    { src: "photos/photo43.JPG", title: "Fuji-Kawaguchiko", description: "", location: "Fuji-Kawaguchiko, Japan", year: "2025" },
    { src: "photos/photo44.JPG", title: "Matcha!!!", description: "", location: "Kyoto, Japan", year: "2025" },
    { src: "photos/photo45.JPG", title: "Tokyo Skyline", description: "", location: "Tokyo, Japan", year: "2025" },
    { src: "photos/photo46.JPG", title: "Reflection 2", description: "", location: "Tokyo, Japan", year: "2025" },
    { src: "photos/photo47.JPG", title: "Rainbow", description: "", location: "Tokyo, Japan", year: "2025" },
    { src: "photos/photo48.JPG", title: "In Plain Sight", description: "", location: "Washington D.C., USA", year: "2024" },
    { src: "photos/photo49.JPG", title: "Kokyo Gaien National Garden", description: "", location: "Tokyo, Japan", year: "2025" },
    { src: "photos/photo50.JPG", title: "3 Fish", description: "", location: "Tokyo, Japan", year: "2025" },

    { src: "photos/photo51.JPG", title: "Ripples", description: "", location: "Fuji-Kawaguchiko, Japan", year: "2025" },
    { src: "photos/photo52.JPG", title: "Solitude", description: "", location: "Los Angeles, USA", year: "2024" },
    { src: "photos/photo53.JPG", title: "Meiji Jingu Temple", description: "", location: "Tokyo, Japan", year: "2025" },
    { src: "photos/photo54.JPG", title: "Dume 2", description: "", location: "Malibu, USA", year: "2024" },
    { src: "photos/photo55.JPG", title: "Lake Kawaguchiko", description: "", location: "Fuji-Kawaguchiko, Japan", year: "2025" },
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
let preloadedImage = null;

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

function preloadNextPhotoIndex(nextIndex) {
    if (nextIndex < 0 || nextIndex >= photos.length) return;
    console.log("getting next image")

    const nextPhoto = photos[nextIndex];
    preloadedImage = new Image();
    preloadedImage.src = nextPhoto.src;
}

function showNextPhoto() {
    if (!photos.length) return;

    // First pass: follow shuffled order without repeats
    if (!allSeenOnce) {
        const idx = order[orderIndex];
        showPhotoByIndex(idx);

        seenCount += 1;

        // Preload upcoming one in the sequence (if any)
        const nextPos = orderIndex + 1;
        if (nextPos < order.length) {
            preloadNextPhotoIndex(order[nextPos]);
        }

        if (orderIndex === photos.length - 1) {
            allSeenOnce = true;
        } else {
            orderIndex += 1;
        }
    } else {
        // After first pass: fully random
        let idx = Math.floor(Math.random() * photos.length);
        if (photos.length > 1 && idx === currentIndex) {
            idx = (idx + 1) % photos.length;
        }

        showPhotoByIndex(idx);

        // Optional: preload a fresh random next one (not equal to idx if >1)
        let nextIdx = Math.floor(Math.random() * photos.length);
        if (photos.length > 1 && nextIdx === idx) {
            nextIdx = (nextIdx + 1) % photos.length;
        }
        preloadNextPhotoIndex(nextIdx);

        seenCount = photos.length;
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



/**
 * Descriptions for all the photos
 * bottom banner gets fucked up when the photos resize
 * clean up any code
 */