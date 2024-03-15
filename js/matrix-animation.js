let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight + 200;
let str = "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: :";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];
let isNameVisible = false;
const baseFontSize = 50; // Adjust this value based on your design preferences

function calculateResponsiveFontSize() {
    // You can adjust these values based on your design preferences
    const baseFontSize = 50;
    const fontScaleFactor = Math.min(width / 800, height / 600); // Adjust as needed

    return baseFontSize * fontScaleFactor;
}

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}


const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height);

    if (!isNameVisible) {
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `${font}px system-ui`;

        for (let i = 0; i < arr.length; i++) {
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(txt, i * font, arr[i] * font);

            if (arr[i] * font > height && Math.random() > 0.975) {
                arr[i] = 0;
            }
            arr[i]++;
        }
    } else {
        
        // Show the navbar when the name appears
        //document.getElementById("navbar").style.display = "block";

        ctx.fillStyle = "#FFFFFF";
        ctx.font = `${calculateResponsiveFontSize()}px system-ui`;  // Use responsive font size
        ctx.textAlign = "center";
        ctx.fillText("Unraveling the Code of Creativity", width / 2, height / 2);
        
        // Set a smaller font size for the name
        ctx.font = `${calculateResponsiveFontSize() * 0.8}px system-ui`;  // Use a smaller font size, e.g., 80% of the calculated size
        ctx.fillText("Manjeet Panwar", width / 2, height / 2 + 200);
    }
};

setInterval(draw, 20);

// Toggle between matrix animation and name based on scroll position
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollPosition) {
        // Scrolling down
        isNameVisible = true;
        document.getElementById("navbar").style.display = "block"; // Show the navbar
    } else {
        // Scrolling up
        isNameVisible = false;
        document.getElementById("navbar").style.display = "none"; // Hide the navbar
    }

    lastScrollPosition = scrollPosition;
});


window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    location.reload();
});

