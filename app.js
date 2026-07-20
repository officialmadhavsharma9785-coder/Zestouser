import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// =========================
// ZESTO APP.JS
// =========================

// Search Function
const searchInput = document.querySelector(".search input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".restaurant-card");

        cards.forEach(card => {
            let name = card.querySelector("h3").innerText.toLowerCase();

            if (name.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Banner Auto Slider
const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let bannerIndex = 0;

const bannerImage = document.querySelector(".banner img");

if (bannerImage) {
    setInterval(() => {
        bannerIndex++;

        if (bannerIndex >= banners.length) {
            bannerIndex = 0;
        }

        bannerImage.src = banners[bannerIndex];

    }, 3000);
}

// Category Click Animation
document.querySelectorAll(".category").forEach(item => {

    item.addEventListener("click", () => {

        document.querySelectorAll(".category").forEach(c => {
            c.classList.remove("active");
        });

        item.classList.add("active");

    });

});

// Restaurant Click
document.querySelectorAll(".restaurant-card").forEach(card => {

    card.addEventListener("click", () => {

        alert("Restaurant Page Coming Soon");

    });

});

// Bottom Navigation
document.querySelectorAll(".bottom-nav a").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".bottom-nav a").forEach(b => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

    });

});

console.log("Zesto Loaded Successfully");

// Firebase Test
async function loadRestaurants() {
    const querySnapshot = await getDocs(collection(db, "restaurants"));

    querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
    });
}

loadRestaurants();
