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

// ============================================================================
// RANDOM PHOTO GALLERY
// ============================================================================

// === DOM Elements ===
const elements = {
    img: document.getElementById("photo-img"),
    title: document.getElementById("photo-title"),
    description: document.getElementById("photo-description"),
    location: document.getElementById("photo-location"),
    year: document.getElementById("photo-year"),
    shuffleBtn: document.getElementById("shuffle-btn"),
    counter: document.getElementById("photo-counter-text"),
    celebration: document.getElementById("celebration"),
    yearSpan: document.getElementById("year-span")
};

// === State Management ===
const state = {
    currentIndex: -1,
    shuffledOrder: [],
    orderPosition: 0,
    completedFirstCycle: false,
    uniquePhotosSeen: 0
};

// === Initialization ===
function init() {
    setFooterYear();
    createShuffledOrder();
    setupEventListeners();
    showFirstPhoto();
}

function setFooterYear() {
    if (elements.yearSpan) {
        elements.yearSpan.textContent = new Date().getFullYear();
    }
}

function createShuffledOrder() {
    state.shuffledOrder = Array.from({ length: photos.length }, (_, i) => i);
    shuffleArray(state.shuffledOrder);
    state.orderPosition = 0;
    state.completedFirstCycle = false;
    state.uniquePhotosSeen = 0;
}

function setupEventListeners() {
    if (elements.shuffleBtn) {
        elements.shuffleBtn.addEventListener("click", showNextPhoto);
    }
    if (elements.img) {
        elements.img.addEventListener("click", showNextPhoto);
    }
}

// === Utility Functions ===
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomIndex(exclude = -1) {
    if (photos.length === 1) return 0;

    let index;
    do {
        index = Math.floor(Math.random() * photos.length);
    } while (index === exclude);

    return index;
}

// === Photo Display ===
function displayPhoto(index) {
    const photo = photos[index];
    if (!photo) return;

    elements.img.src = photo.src;
    elements.img.alt = photo.title || "Photo from portfolio";
    elements.title.textContent = photo.title || "";
    elements.description.textContent = photo.description || "";
    elements.location.textContent = photo.location || "";
    elements.year.textContent = photo.year || "";

    state.currentIndex = index;
}

function preloadImage(index) {
    if (index < 0 || index >= photos.length) return;

    const img = new Image();
    img.src = photos[index].src;
}

function showNextPhoto() {
    if (!photos.length) return;

    if (!state.completedFirstCycle) {
        showNextInSequence();
    } else {
        showRandomPhoto();
    }

    updateUI();
}

function showNextInSequence() {
    const photoIndex = state.shuffledOrder[state.orderPosition];
    displayPhoto(photoIndex);
    state.uniquePhotosSeen++;

    // Preload next photo in sequence
    const nextPosition = state.orderPosition + 1;
    if (nextPosition < state.shuffledOrder.length) {
        preloadImage(state.shuffledOrder[nextPosition]);
    }

    // Check if we've completed the first cycle
    if (state.orderPosition === photos.length - 1) {
        state.completedFirstCycle = true;
    } else {
        state.orderPosition++;
    }
}

function showRandomPhoto() {
    const photoIndex = getRandomIndex(state.currentIndex);
    displayPhoto(photoIndex);

    // Preload another random photo
    preloadImage(getRandomIndex(photoIndex));
}

function showFirstPhoto() {
    if (!photos.length) return;

    const firstIndex = state.shuffledOrder[0];
    displayPhoto(firstIndex);
    state.uniquePhotosSeen = 1;

    if (photos.length === 1) {
        state.completedFirstCycle = true;
    } else {
        state.orderPosition = 1;
    }

    updateUI();
}

// === UI Updates ===
function updateUI() {
    updateCounter();
    updateCelebration();
}

function updateCounter() {
    if (!elements.counter) return;

    const count = state.completedFirstCycle ? photos.length : state.uniquePhotosSeen;
    elements.counter.textContent = `${count} / ${photos.length}`;
}

function updateCelebration() {
    if (!elements.celebration) return;

    if (state.completedFirstCycle) {
        elements.celebration.classList.remove("hidden");
    } else {
        elements.celebration.classList.add("hidden");
    }
}

// === Start the Gallery ===
if (photos.length) {
    init();
}
/**
 * Descriptions for all the photos
 * bottom banner gets fucked up when the photos resize
 * clean up any code
 */