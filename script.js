function togglePhoto() {
    var imgElement = document.getElementById("toggle-image");
    var photoElement = document.getElementById("photo-img");
    if (imgElement.src.includes("giphy.webp")) {
        imgElement.src = "photo-5487.jpg";
        createSunflowers();
    } else {
        imgElement.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDljc2I5NXg5MXR1NHp6dXo3bG1qZjYxbHZtOXIzdmsycHk1bGlyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kFNSHrbD41oqIEQIjO/giphy.webp";
        removeSunflowers();
    }
}

function createSunflowers() {
    for (let i = 0; i < 10; i++) {
        let sunflower = document.createElement("div");
        sunflower.className = "sunflower";
        sunflower.style.left = Math.random() * 100 + "vw";
        sunflower.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(sunflower);
    }
}

function removeSunflowers() {
    let sunflowers = document.querySelectorAll(".sunflower");
    sunflowers.forEach(sunflower => sunflower.remove());
}
