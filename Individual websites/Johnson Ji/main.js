const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const em2px = px => px * 16;


class c {
    constructor(type, a, b, c) {
        this.type = type;
        if (type == "rgb") {
            this.r = a;
            this.g = b;
            this.b = c;
        }
        else if (type == "hsl") {
            this.h = a;
            this.s = b;
            this.l = c;
        }
    }
    toStr() {
        if (this.type == "rgb") {
            return `rgb(${this.r}, ${this.g}, ${this.b})`
        }
        if (this.type == "hsl") {
            return `hsla(${this.h}, ${this.s}%, ${this.l}%, 0.20)`
        }
    }
}

class GradientBurst {
    constructor(x, y, z, r, colour) {
        this.xOffset = x;
        this.yOffset = y;
        this.zOffset = z;
        this.r = r;
        this.c = colour;   
    }

    update() {
    }
}

const gradientBackground = document.getElementsByClassName("gradients")[0].getElementsByTagName("li");
let mousePos = {x: undefined, y:undefined}

let height = window.innerHeight;
let width = window.innerWidth;
let backgroundPos = {x:0, y:0};

let gradients = [];
let radius = clamp(200, width * 0.9, 2000);


// for (i = 0; i < gradientBackground.length; i++) {
//     gradients.push(new GradientBurst(
//         (Math.random() - 0.5) * 800, 
//         (Math.random() - 0.5) * 500,
//         0,
//         clamp(1000, width * 1.7, 2000),
//         new c("hsl", Math.random() * 360, 100, 75)));
//     console.log("bruh")
// }

// for (i = 0; i < gradientBackground.length; i++) {
//     gradients.push(new GradientBurst(
//         (Math.random() - 0.5) * 1200, 
//         (Math.random() - 0.5) * 600,
//         0,
//         clamp(100, width * 0.7, 2000),
//         new c("hsl", Math.random() * 360, 100, 75)));
//     console.log("bruh")
// }


gradients.push(new GradientBurst(-500, 30, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));
gradients.push(new GradientBurst(200, 150, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));
gradients.push(new GradientBurst(150, -100, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));
gradients.push(new GradientBurst(550, -150, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));
gradients.push(new GradientBurst(20, 280, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));
gradients.push(new GradientBurst(-500, -250, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));
gradients.push(new GradientBurst(470, 300, 70, radius/3, new c("hsl", Math.random() * 360, 100, 60)));


gradients.push(new GradientBurst(80, -0, 25, radius/2, new c("hsl", Math.random() * 360, 100, 75)));
gradients.push(new GradientBurst(-200, 0, 25, radius/2, new c("hsl", Math.random() * 360, 100, 75)));
gradients.push(new GradientBurst(350, -30, 25, radius/2, new c("hsl", Math.random() * 360, 100, 75)));
gradients.push(new GradientBurst(550, 200, 25, radius/2, new c("hsl", Math.random() * 360, 100, 75)));
gradients.push(new GradientBurst(50, -250, 25, radius/2, new c("hsl", Math.random() * 360, 100, 75)));
gradients.push(new GradientBurst(-260, -150, 25, radius/2, new c("hsl", Math.random() * 360, 100, 75)));

gradients.push(new GradientBurst(0, -0, 5, radius, new c("hsl", Math.random() * 360, 100, 80)));
gradients.push(new GradientBurst(-450, 220, 5, radius, new c("hsl", Math.random() * 360, 100, 80)));
gradients.push(new GradientBurst(500, -260, 5, radius, new c("hsl", Math.random() * 360, 100, 80)));
gradients.push(new GradientBurst(-420, -250, 5, radius, new c("hsl", Math.random() * 360, 100, 80)));
gradients.push(new GradientBurst(350, 250, 5, radius, new c("hsl", Math.random() * 360, 100, 80)));



for (i = 0; i < gradientBackground.length; i++) {
    element = gradientBackground[i];

    element.style.left = `${(0 - width/2)/5 - gradients[i].r/2 + gradients[i].xOffset + width/2}px`;
    element.style.top = `${(0 - height/2)/5 - gradients[i].r/2 + gradients[i].yOffset + height/2}px`;
    element.style.width = `${gradients[i].r}px`;
    element.style.height = `${gradients[i].r}px`;
    element.style.background = `radial-gradient(circle at 50% 50%, ${gradients[i].c.toStr()} ${gradients[i].r/10}px , transparent ${gradients[i].r/2}px)`
}

setInterval(mainLoop, 20);

function mainLoop() {

    for (i = 0; i < gradientBackground.length; i++) {

        gradients[i].c.h = (gradients[i].c.h + 1) % 360

        element = gradientBackground[i];
        element.style.width = `${gradients[i].r}px`;
        element.style.height = `${gradients[i].r}px`;
        element.style.background = `radial-gradient(circle at 50% 50%, ${gradients[i].c.toStr()} ${gradients[i].r/10}px , transparent ${gradients[i].r/2}px)`

        element.style.left = `${(mousePos.x - width/2)/(gradients[i].zOffset/2) - gradients[i].r/2 + gradients[i].xOffset + width/2}px`;
        element.style.top = `${(mousePos.y - height/2)/(gradients[i].zOffset/4) - gradients[i].r/2 + gradients[i].yOffset + height/2}px`;

    }
}

window.addEventListener("mousemove", function(event) {
    mousePos = {x: event.clientX, y : event.clientY} 
});


